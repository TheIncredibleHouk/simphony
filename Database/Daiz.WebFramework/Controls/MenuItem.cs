using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Daiz.WebFramework.Controls
{
    [ParseChildren(false)]
    [PersistChildren(true)]
    public class MenuItem : Daiz.WebFramework.Controls.MenuEntry
    {
        /// <summary>
        /// Represents the url of what the item should lead, acting as a link.
        /// </summary>
        public string Href { get; set; }

        public string CssClass { get; set; }

        public string Text { get; set; }

        public MenuItem()
        {
            Href = "";
            CssClass = "";
            Text = "";
        }

        public MenuItem(string text, string href)
        {
            Href =href;
            CssClass = "";
            Text =text;
        }

        protected override void Render(System.Web.UI.HtmlTextWriter writer)
        {
            writer.WriteLine(string.Format("<li class='{0}' {1}>", CssClass, Href.Length > 0 ? "href=\"" + Href.Replace("\"", "\\\"") + "\"" : ""));
            writer.WriteLine(Text);
            writer.WriteLine("</li>");
        }
    }
}
