using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

using Daiz.DataBase;

namespace Daiz.WebFramework
{
    /// <summary>
    /// Summary description for UnsecurePage
    /// </summary>
    public abstract class UnsecurePage : GeneralPage
    {
        public override void PreInitPage()
        {
            try
            {
                InitPage();
            }
            catch(Exception e)
            {
                Error(e.Message);
            }
        }

        public abstract void InitPage();
    }
}