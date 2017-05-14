using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace Daiz.WebFramework.Controls
{
    public class DropDownList : System.Web.UI.WebControls.DropDownList, IBindable
    {
        public string BindProperty { get; set; }

        public DropDownList()
        {
            DataTextField = "Value";
            DataValueField = "Key";
        }

        public void BindFromObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   object v = info.GetValue(obj,null);
			   if(v != null) {
				   this.SelectedValue = v.ToString();
			   }
		   }
        }

        public string BindTranslator { get; set; }

	   public void BindToObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   info.SetValue(obj,Convert.ChangeType(this.SelectedValue,info.PropertyType),null);
		   }
	   }
    }
}
