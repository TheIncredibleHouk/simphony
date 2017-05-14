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
    public class Section : System.Web.UI.WebControls.Panel
    {
        public const string OUTER_CSS_CLASS = "group";
        public const string INNER_CSS_CLASS = "innercontent";
        public string HeaderText { get; set; }
        protected override void Render(HtmlTextWriter writer)
        {
            CssClass += " " + OUTER_CSS_CLASS;
            base.Render(writer);
        }

        public override void RenderBeginTag(HtmlTextWriter writer)
        {
            base.RenderBeginTag(writer);
            if (!string.IsNullOrEmpty(HeaderText))
            {
                writer.Write(string.Format("<h1>{0}</h2>", HeaderText));
                writer.Write("<div class='" + INNER_CSS_CLASS + "'>");
            }
        }

        public override void RenderEndTag(HtmlTextWriter writer)
        {

            if (!string.IsNullOrEmpty(HeaderText))
            {
                writer.Write("</div>");
            }
            base.RenderEndTag(writer);

        }
    }
}
