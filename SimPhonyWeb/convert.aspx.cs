using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.WebFramework;

public partial class convert : SecurePage
{
    public override void InitPage()
    {
        convertid.Value = Session["editid"].ToString();
    }
}