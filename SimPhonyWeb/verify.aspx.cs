using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.WebFramework;
using Daiz.DotNet;
public partial class verify : UnsecurePage
{
    public override void InitPage()
    {
        string id = Request.Params["id"];
        string code = Request.Params["vcode"];
        User u = new User();
        if (u.Load(id))
        {
            if (u.KeyCode.Length > 0)
            {
                if (u.KeyCode == code)
                {
                    u.KeyCode = "";
                    if (u.Save())
                    {
                        ok.Visible = true;
                        return;
                    }
                }
            }
        }
        notok.Visible = true;
    }
}