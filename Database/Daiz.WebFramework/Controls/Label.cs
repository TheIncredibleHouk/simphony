using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Daiz.DotNet;

namespace Daiz.WebFramework.Controls
{
    public class Label : System.Web.UI.WebControls.Label, IBindable
    {
        public int DecimalPrecision { get; set; }
        public TextFormat TextFormat { get; set; }

        public Label()
        {
            TextFormat = WebFramework.Controls.TextFormat.None;
        }

        protected override void Render(System.Web.UI.HtmlTextWriter writer)
        {
            switch (TextFormat)
            {
                case WebFramework.Controls.TextFormat.BusinessTaxID:
                    Text = Text.FormatAsTaxID();
                    break;

                case WebFramework.Controls.TextFormat.Currency:
                    Text = Text.FormatAsCurrency();
                    break;

                case WebFramework.Controls.TextFormat.Date:
                    Text = Text.FormatAsDate();
                    break;

                case WebFramework.Controls.TextFormat.PhoneNumber:
                    Text = Text.FormatAsPhone();
                    break;

                case WebFramework.Controls.TextFormat.SocialTaxID:
                    Text = Text.FormatAsSocial();
                    break;

                case WebFramework.Controls.TextFormat.YesNo:
                    Text = Text.ToBool() ? "Yes" : "No";
                    break;
            }

            Text = Text.Replace("\n", "<br />");
            base.Render(writer);
        }

        public string BindProperty { get; set; }

	   public void BindFromObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   if(!string.IsNullOrEmpty(BindTranslator)) {
				   MethodInfo mInfo = Page.GetType().GetMethod(BindTranslator);
				   if(mInfo != null) {
					   this.Text = (string)mInfo.Invoke(obj,null);
				   }
			   }
			   else {
				   object v = info.GetValue(obj,null);
				   if(v != null) {
					   this.Text = v.ToString().Trim();
				   }
			   }
		   }
	   }

        public string BindTranslator { get; set; }

	   public void BindToObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   info.SetValue(obj,Convert.ChangeType(this.Text,info.PropertyType),null);
		   }
	   }
    }
}
