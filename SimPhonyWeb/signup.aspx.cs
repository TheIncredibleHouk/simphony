using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;

using SimPhony;
using Daiz.DotNet;
using Daiz.WebFramework;

public partial class signup : UnsecurePage
{
    public override void InitPage()
    {
        
    }

    public void SignUp(object o, EventArgs e)
    {
        User u = new User();
        if (string.IsNullOrEmpty(TxtUserName.Text) ||
            string.IsNullOrEmpty(TxtPass.Text) ||
            string.IsNullOrEmpty(TxtEmail.Text) ||
            string.IsNullOrEmpty(TxtPass2.Text))
        {
            Error("");
        }

        if (TxtPass.Text != TxtPass2.Text)
        {
            Error("");
        }

        if (u.New(TxtUserName.Text, TxtPass.Text))
        {
            u.Email = TxtEmail.Text;
            u.KeyCode = DateTime.Now.Ticks.ToString().Base64Encode();
            if (u.Save())
            {
                Response.Redirect("su_success.aspx");
            }
        }
    }
}