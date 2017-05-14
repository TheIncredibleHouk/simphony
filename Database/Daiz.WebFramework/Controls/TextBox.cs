using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Daiz.DotNet;

namespace Daiz.WebFramework.Controls
{
    public class TextBox: System.Web.UI.WebControls.TextBox, IBindable
    {
	   public TextFormat TextFormat { get; set; }
	   public int Size { get; set; }
	   public string WaterMarkText { get; set; }
	   public string EnterKeyActivates { get; set; }

	   public string NormalizedText
	   {
		  get
		  {
			 string s= base.Text;
			 switch (TextFormat)
			 {
				case WebFramework.Controls.TextFormat.BusinessTaxID:
				case WebFramework.Controls.TextFormat.SocialTaxID:
				    return s.Replace(" ", "").Replace("-", "");

				case WebFramework.Controls.TextFormat.Currency:
				    return s.Replace(" ", "").Replace("$", "").Replace(",", "");

				case WebFramework.Controls.TextFormat.PhoneNumber:
				    return s.Replace(" ", "").Replace("(", "").Replace(")", "").Replace("-", "");
				   
				case WebFramework.Controls.TextFormat.Date:
				    if (s.IsDateTime())
				    {
					   return s.ToDateTime().ToShortDateString();
				    }
				    break;
			 }

			 return s;
		  }
		  set
		  {
			 string s = value;
			 switch (TextFormat)
			 {
				case WebFramework.Controls.TextFormat.BusinessTaxID:
				    s =  s.FormatAsSocial();
				    break;

				case WebFramework.Controls.TextFormat.SocialTaxID:
				    s = s.FormatAsTaxID();
				    break;

				case WebFramework.Controls.TextFormat.Currency:
				    s = s.FormatAsCurrency();
				    break;

				case WebFramework.Controls.TextFormat.PhoneNumber:
				    s = s.FormatAsPhone();
				    break;
			 }

			 Text = s;
		  }
	   }
	   public TextBox()
	   {
		  TextFormat = WebFramework.Controls.TextFormat.None;
	   }

	   protected override void OnPreRender(EventArgs e)
	   {
		  if (MaxLength > 0)
		  {
			 Attributes["maxlength"] = MaxLength.ToString();
		  }

		  if (Size > 0)
		  {
			 Attributes["size"] = Size.ToString();
		  }

		  if (!string.IsNullOrEmpty(WaterMarkText))
		  {
			 CssClass += " watermark";
			 Attributes["watermarkvalue"] = WaterMarkText;
		  }

		  if (!string.IsNullOrEmpty(EnterKeyActivates))
		  {
			 Attributes["enteractivates"] = EnterKeyActivates;
		  }

		  base.OnPreRender(e);
	   }


	   protected override void Render(System.Web.UI.HtmlTextWriter writer)
	   {
		  base.Render(writer);
	   }

	   public void BindFromObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   object v = info.GetValue(obj,null);
			   if(v != null) {
				   this.NormalizedText = v.ToString().Trim();
			   }
		   }
	   }

	   public void BindToObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   info.SetValue(obj,Convert.ChangeType(this.NormalizedText,info.PropertyType),null);
		   }
	   }

	   public string BindProperty { get; set; }
	   public string BindTranslator { get; set; }
    }
}
