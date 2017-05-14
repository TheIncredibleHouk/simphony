using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.DotNet;
using Daiz.WebFramework;
using SimPhony;
using Daiz.DataBase;
public partial class savepack : SecurePage
{
    public override void InitPage()
    {
        using(DbManager mgr = new DbManager())
        {
            foreach (Library l in mgr.Query<Library>("SELECT * FROM library WHERE userid = '" + CurrentUser.UserID + "'"))
            {
                existing.Items.Add(new ListItem(l.Name, l.ID.ToString()));
            }
        }

        
        HttpCookie c = Request.Cookies["edits"];
        
        if (c != null)
        {
            List<string> list = c.Value.Split(',').ToList();
            if (list.Count == 0)
            {
                warning.Text += "Your current library is empty.";
                saveButton.Visible = false;
            }

            foreach (string s in list.ToList())
            {
                EditInfo e = new EditInfo();
                if (!e.Load(s.ToInt(), CurrentUser))
                {
                    list.Remove(s);
                    warning.Text += "Invalid edit id " + s + "<br />";
                    warning.Visible = true;
                    list.Remove(s);
                }

                if (!e.Public)
                {
                    list.Remove(s);
                    warning.Text += e.Name + " is not public, cannot add to pack. <br />";
                    warning.Visible = true;
                    list.Remove(s);
                }

                if (e.UserID != CurrentUser.UserID)
                {
                    warning.Visible = true;
                    warning.Text += e.Name + " is not your edit, cannot add to pack. <br />";
                    list.Remove(s);
                }
            }

            c.Value = list.ToDelimitedString(",");
            Context.Response.Cookies.Add(c);
        }
    }

    public void SavePack(object o, EventArgs e)
    {
        Library l = new Library();
        if (existing.SelectedValue.Length > 0)
        {
            l.Load(existing.SelectedValue.ToInt());
        }
        else
        {
            l.New(CurrentUser);
            l.Name = packname.Text;
        }
    
        HttpCookie c = Request.Cookies["edits"];
        if (c == null)
        {
            return;
        }
        l.EditList.Clear();
        foreach (string s in c.Value.Split(','))
        {
            if (s.IsInt())
            {
                l.EditList.Add(s.ToInt());
            }
        }

        if (l.Save())
        {
            c.Value = "";
            Response.Cookies.Add(c);
            Response.Redirect("/mypacks.aspx");
        }
    }
}