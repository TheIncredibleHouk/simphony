using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.WebFramework.Controls
{
    public class ValidationSummary : System.Web.UI.WebControls.Panel
    {
        private const string DEFAULT_SUMMARY_TEXT = "The following errors must be fixed to continue. Click in an error to go directly to the input field:";
        public string Group { get; set; }
        protected override void Render(System.Web.UI.HtmlTextWriter writer)
        {
            if (!IsLiteralContent())
            {
                Controls.Add(new Label() { Text = DEFAULT_SUMMARY_TEXT });
            }

            CssClass = CssClass + " validatorsummary";
            if (!String.IsNullOrEmpty(Group))
            {
                Attributes["group"] = Group;
            }
            base.Render(writer);
        }
    }
}
