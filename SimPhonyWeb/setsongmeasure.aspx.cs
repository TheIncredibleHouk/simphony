using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using SimPhony;
using Daiz.WebFramework;

public partial class setsongmeasure : SecurePage
{
    public override void InitPage()
    {
        if(CurrentUser != null && 
            (CurrentUser.UserID.ToLower() == "daiz")){
            return;
        }

        Response.Redirect("/default.aspx");
    }
}