using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

using Daiz.DataBase;

namespace Daiz.WebFramework
{
    /// <summary>
    /// Summary description for SecurePage
    /// </summary>
    public abstract class SecurePage : GeneralPage
    {
        public abstract void InitPage();

        public override void PreInitPage()
        {
            if (CurrentUser == null || !CurrentUser.Authenticated)
            {
                Response.Redirect("default.aspx");
                return;
            }

            try
            {
                InitPage();
            }
            catch(Exception e)
            {
                Error(e.Message);
            }
        }
    }
}