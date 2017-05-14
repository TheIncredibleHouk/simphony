using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Daiz.WebFramework;

public partial class myedits : SecurePage
{
    public override void InitPage()
    {
        
    }

    public void Edit(object o, EventArgs e)
    {
        Response.Redirect(string.Format("/update.aspx?id={0}", selected_id.Value));
    }
}