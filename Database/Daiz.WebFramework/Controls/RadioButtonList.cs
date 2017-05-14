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
using System.Reflection;
using System;

namespace Daiz.WebFramework.Controls
{
    public class RadioButtonList : System.Web.UI.WebControls.RadioButtonList, IBindable
    {
        public RadioButtonList()
        {
		    RepeatLayout = System.Web.UI.WebControls.RepeatLayout.Flow;
		    DataTextField = "Value";
		    DataValueField = "Key";
        }

	   public string BindProperty { get; set; }

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
