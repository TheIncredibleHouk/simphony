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
    public class GridView : System.Web.UI.WebControls.GridView
    {
        public GridView()
        {
            BorderWidth = 0;
            CellPadding = 0;
            AutoGenerateColumns = false;
            GridLines = System.Web.UI.WebControls.GridLines.None;
        }
    }
}
