using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.WebFramework;
using Daiz.DataBase;
public partial class search : GeneralPage
{

    public override void PreInitPage()
    {
        if (!string.IsNullOrEmpty(Request.Params["userid"]))
        {
            userid.Text = Request.Params["userid"];
        }

        if (!string.IsNullOrEmpty(Request.Params["song"]))
        {
            song.Text = Request.Params["song"];
        }

        using (DbManager mgr = new DbManager())
        {
            foreach (User u in mgr.Query<User>("SELECT userid FROM users WHERE keycode = '' ORDER BY userid"))
            {
                userid.Items.Add(new ListItem(u.UserID, u.UserID));
            }
        }
    }
}