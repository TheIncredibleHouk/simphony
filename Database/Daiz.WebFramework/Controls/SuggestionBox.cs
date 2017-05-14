using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.WebFramework.Controls
{
    public class SuggestionBox : TextBox
    {
        public string BindText { get; set; }
        public string BindValue { get; set; }
        public string Source { get; set; }
        public string DisplayClass { get; set; }
        public string FocusClass { get; set; }
        public int LengthBeforeSuggesting { get; set; }

        public SuggestionBox()
        {
            LengthBeforeSuggesting = 3;

        }

        protected override void Render(System.Web.UI.HtmlTextWriter writer)
        {
            if (!string.IsNullOrEmpty(BindText))
            {
                Attributes["bindtext"] = BindText;
            }

            if (!string.IsNullOrEmpty(BindValue))
            {
                Attributes["bindvalue"] = BindValue;
            }

            if (!string.IsNullOrEmpty(Source))
            {
                Attributes["source"] = Source;
            }

            if (!string.IsNullOrEmpty(DisplayClass))
            {
                Attributes["displayclass"] = DisplayClass;
            }

            if (!string.IsNullOrEmpty(FocusClass))
            {
                Attributes["focusclass"] = FocusClass;
            }

            CssClass += " suggestion";
            base.Render(writer);
        }
    }
}
