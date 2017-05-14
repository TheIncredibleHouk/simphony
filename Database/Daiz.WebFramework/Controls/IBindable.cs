using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.WebFramework.Controls
{
    public interface IBindable
    {
        string BindProperty { get; set; }
        string BindTranslator { get; set; }
        void BindFromObject(object obj);
	   void BindToObject(object obj);
    }
}
