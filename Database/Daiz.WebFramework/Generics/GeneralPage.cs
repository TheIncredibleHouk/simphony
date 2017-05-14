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
    public abstract class GeneralPage : Page
    {
        public User CurrentUser { get; private set; }

        public GeneralPage()
        {
            DbManager.ConnectionString = "Data Source=simphony.db.9376686.hostedresource.com; Initial Catalog=simphony; User ID=simphony; Password='Margaret121';";
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            HttpCookie cookie = Request.Cookies["login"];
            if (cookie != null)
            {
                User u = new User();
                if (u.Authenticate(cookie.Value))
                {
                    CurrentUser = u;
                    Response.SetCookie(new HttpCookie("login", SecureToken.CreateToken(u.UserID)) { Expires = new DateTime(2100, 1, 1) });
                }
            }

            PreInitPage();
        }

        public abstract void PreInitPage();

        public void Error(string message)
        {
            Response.Redirect("/error.aspx?message=" + message);
        }
    }
}