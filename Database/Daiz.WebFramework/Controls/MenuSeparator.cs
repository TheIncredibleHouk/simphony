using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.WebFramework.Controls
{
    public class MenuSeparator : Daiz.WebFramework.Controls.MenuEntry
    {
        public string CssClass { get; set; }
        public MenuSeparator()
        {
            CssClass = "";
        }

        protected override void Render(System.Web.UI.HtmlTextWriter writer)
        {
            writer.WriteLine(string.Format("<li class='separator {0}'></li>", CssClass));
        }
    }
}
