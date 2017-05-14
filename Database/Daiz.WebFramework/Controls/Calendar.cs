using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Daiz.DotNet;

namespace Daiz.WebFramework.Controls
{
	public class Calendar:System.Web.UI.WebControls.TextBox,IBindable
    {
		public string BindProperty { get; set; }
		public int Size { get; set; }
		public bool DefaultToCurrentDate { get; set; }

        public DateTime SelectedDate
        {
            get
            {
                if (Text.IsDateTime())
                {
                    return Text.ToDateTime();
                }

                return Conventions.NullDate;
            }
            set
            {
                Text = value.ToStandardString();
            }
        }

        public Calendar()
        {
            MaxLength = 10;
            Size = 10;
        }

	   protected override void OnInit(EventArgs e) {
		   base.OnInit(e);
		   SelectedDate = DefaultToCurrentDate?DateTime.Now:Conventions.NullDate;
	   }

        protected override void Render(System.Web.UI.HtmlTextWriter writer)
        {
		   if(Size > 0) {
			   Attributes["size"] = Size.ToString();
		   }
            CssClass += " calendar";
            base.Render(writer);
        }

        public void BindFromObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   object v = info.GetValue(obj,null);
			   if(v != null) {
				   this.SelectedDate = (DateTime)v;
			   }
		   }
        }

        public string BindTranslator { get; set; }

	   public void BindToObject(object obj) {
		   PropertyInfo info=obj.GetType().GetProperty(BindProperty);
		   if(info!=null) {
			   info.SetValue(obj,Convert.ChangeType(this.SelectedDate,info.PropertyType),null);
		   }
	   }
	}
}
