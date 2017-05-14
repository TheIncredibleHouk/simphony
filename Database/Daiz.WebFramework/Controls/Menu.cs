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
    [PersistChildren(true)]
    [ParseChildren(true)]
    public class Menu : MenuEntry
    {
        internal bool IsRoot { get; set; }

        [PersistenceMode(PersistenceMode.InnerProperty)]
        public List<MenuEntry> Items { get; private set; }

        public string CssClass { get;set; }
        public string SubMenuClass { get; set; }
        public int Width { get; set; }
        public string Text { get; set; }

        public Menu()
        {
            IsRoot = true;
            Items = new List<MenuEntry>();
            CssClass = "";
            Text = "";
            Width = -1;
        }

        public Menu(string text)
            : base()
        {
            IsRoot = true;
            Items = new List<MenuEntry>();
            CssClass = "";
            Text = text;
            Width = -1;
        }

        protected override void Render(HtmlTextWriter writer)
        {
            if (IsRoot)
            {
                CssClass = "menu " + CssClass;
            }
            else
            {
                writer.WriteLine("<li>{0}", Text);
            }
            writer.WriteLine(string.Format("<menu class='{0}' {1}>", CssClass, !string.IsNullOrEmpty(SubMenuClass) ? "submenuclass='" + SubMenuClass + "'" : ""));

            foreach (MenuEntry i in Items)
            {
                if (i is Menu)
                {
                    ((Menu)i).IsRoot = false;
                }

                i.RenderControl(writer);
            }

            writer.WriteLine("</menu>");

            if (!IsRoot)
            {
                writer.WriteLine("</li>");
            }
        }
    }
}
