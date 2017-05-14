using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.DotNet;
using Daiz.WebFramework;
using SimPhony;
public partial class downloaddat : UnsecurePage
{
    public override void InitPage()
    {
        string id = Request.Params["id"];
        string region = Request.Params["region"].ToUpper();
        if (id != null)
        {
            if (id.IsInt())
            {
                Edit e = new Edit();
                if(e.Load(id.ToInt()))
                {
                    if (e.Public)
                    {
                        ReturnFile(e, region);
                        return;
                    }
                    else
                    {
                        if (e.UserID == CurrentUser.UserID)
                        {
                            ReturnFile(e, region);
                            return;
                        }
                    }
                }
            }
        }

        message.Text = "Invalid file request.";
    }

    private void ReturnFile(Edit e, string region)
    {
        Response.Clear();
        Response.ContentType = "application/octet-stream";
        Response.AddHeader("Content-Disposition", string.Format("attachment;filename={0}.DAT", e.Name.ToUpper()));
        byte[] data = File.ReadAllBytes(Server.MapPath(string.Format("/dats/{0}/{1}.DAT", region, e.ID)));
        Response.OutputStream.Write(data, 0, data.Length);
        Response.Flush();
        Response.Close();
        e.Downloads++;
        e.Save();
    }
}