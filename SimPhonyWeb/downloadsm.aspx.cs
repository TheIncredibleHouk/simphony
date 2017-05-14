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
public partial class downloadsm : UnsecurePage
{
    public override void InitPage()
    {
        string id = Request.Params["id"];
        if (id != null)
        {
            if (id.IsInt())
            {
                Edit e = new Edit();
                if (e.Load(id.ToInt()))
                {
                    if (e.Public)
                    {
                        ReturnFile(e);
                        return;
                    }
                    else
                    {
                        if (e.UserID == CurrentUser.UserID)
                        {
                            ReturnFile(e);
                            return;
                        }
                    }
                }
            }
        }

        message.Text = "Invalid file request.";
    }

    private void ReturnFile(Edit e)
    {
        Response.Clear();
        Response.ContentType = "text/plain";
        Response.AddHeader("Content-Disposition", string.Format("attachment;filename={0}.sm", Song.GetSong(e.SongID).Title));
        byte[] data = File.ReadAllBytes(Server.MapPath(string.Format("/sims/{0}.sm", e.ID)));
        Response.OutputStream.Write(data, 0, data.Length);
        Response.Flush();
        Response.Close();
    }
}