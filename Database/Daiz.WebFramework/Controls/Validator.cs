using System;
using System.Data;
using System.Configuration;
using System.Text;
using System.IO;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Collections;
using System.Collections.Generic;

namespace Daiz.WebFramework.Controls
{
    public class Validator : System.Web.UI.WebControls.Label
    {
        public ValidatorFunction Function { get; set; }
        public string CustomFunction { get; set; }
        public string Group { get; set; }
        public int MinLength { get; set; }
        public int MaxLength { get; set; }
        public string GroupMessage { get; set; }
        public bool Required { get; set; }
        public string ControlToValidate { get; set; }

        protected override void Render(HtmlTextWriter writer)
        {
            CssClass = CssClass + " validator";
            if (MinLength > 0)
            {
                Attributes["minlength"] = MinLength.ToString();
            }

            if (MaxLength > 0 && MaxLength > MinLength)
            {
                Attributes["maxlength"] = MaxLength.ToString();
            }

            if (!string.IsNullOrEmpty(Group))
            {
                Attributes["group"] = Group;
            }

            if(!string.IsNullOrEmpty(GroupMessage))
            {
                Attributes["groupmessage"] = GroupMessage;
            }

            if (Required)
            {
                Attributes["required"] = Required.ToString();
            }

            if (CustomFunction==null)
            {
                CustomFunction = Function.ToString();
            }

            Attributes["function"] = CustomFunction;
            if (!string.IsNullOrEmpty(ControlToValidate))
            {
                Attributes["validates"] = ControlToValidate;
            }

            base.Render(writer);
        }
    }
}
