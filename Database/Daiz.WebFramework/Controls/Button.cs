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
    public class Button : System.Web.UI.WebControls.Button
    {
        public ButtonType ButtonType { get; set; }

        public Button()
        {
            ButtonType = ButtonType.Submit;
        }

        protected override void Render(HtmlTextWriter writer)
        {
            writer.AddAttribute("type", ButtonType.ToString().ToLower());
            base.Render(writer);
        }
    }

    public enum ButtonType
    {
        Button,
        Submit,
        Reset
    }
}
