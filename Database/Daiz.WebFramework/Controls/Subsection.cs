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
    public class Subsection : System.Web.UI.WebControls.Panel
    {
        public const string INNER_CSS_CLASS = "innercontent";
        public string HeaderText { get; set;}

        protected override void Render(HtmlTextWriter writer)
        {
            writer.Write(string.Format("<h1>{0}</h2>", HeaderText));
            CssClass += " " + INNER_CSS_CLASS;
            base.Render(writer);
        }
    }
}
