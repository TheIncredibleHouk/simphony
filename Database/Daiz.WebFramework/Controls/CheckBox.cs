using System;
using System.Reflection;
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
    public class CheckBox : System.Web.UI.WebControls.CheckBox, IBindable
    {

        protected override void Render( HtmlTextWriter writer )
        {
            
            foreach ( var a in this.Attributes.Keys )
            {
                this.InputAttributes.Add( a.ToString( ), Attributes[ a.ToString( ) ] );
            }
            base.Render( writer );
        }

        public string BindProperty { get; set; }

        public void BindFromObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   object v = info.GetValue(obj,null);
			   if(v != null) {
				   this.Checked = (bool)v;
			   }
		   }
        }

        public string BindTranslator { get; set; }

	   public void BindToObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   info.SetValue(obj,Convert.ChangeType(this.Checked,info.PropertyType),null);
		   }
	   }
    }
}
