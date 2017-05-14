using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Daiz.DataBase;

/// <summary>
/// Summary description for SecureService
/// </summary>

namespace Daiz.WebFramework
{
    public abstract class SecureService : WebService
    {

        public User CurrentUser { get; private set; }

        public SecureService()
        {
            DbManager.ConnectionString = "Data Source=simphony.db.9376686.hostedresource.com; Initial Catalog=simphony; User ID=simphony; Password='Margaret121';";
            HttpCookie cookie = this.Context.Request.Cookies["login"];
            if (cookie != null)
            {
                User u = new User();
                if (u.Authenticate(cookie.Value))
                {
                    CurrentUser = u;
                }
            }
        }
    }
}