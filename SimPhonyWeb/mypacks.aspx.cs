using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.WebFramework;
using SimPhony;
using Daiz.DataBase;
public partial class mypacks : SecurePage
{

    public override void InitPage()
    {
        using (DbManager mgr = new DbManager())
        {
            foreach (Library i in mgr.Query<Library>("SELECT * FROM library WHERE userid = '" + CurrentUser.UserID + "'"))
            {
                packlist.Items.Add(new ListItem(i.Name, i.ID.ToString()));
            }
        }
    }

    public void Edit(object o, EventArgs e)
    {
        Response.Redirect(string.Format("/update.aspx?id={0}", selected_id.Value));
    }
}