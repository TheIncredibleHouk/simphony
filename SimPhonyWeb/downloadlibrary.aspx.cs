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

using Ionic.Zip;
public partial class downloadlibrary : UnsecurePage
{
    public override void InitPage()
    {
        string id = Request.Params["id"];
        string type = Request.Params["type"];

        string[] s = type.Split('|');
        string region = s[0];
        string format = s[1];
        if (string.IsNullOrEmpty(id))
        {
            HttpCookie c = Request.Cookies["edits"];
            if (c != null)
            {
                ZipFile zFile = new ZipFile();
                foreach (string i in c.Value.Split(','))
                {
                    if (i.IsInt())
                    {
                        EditInfo e = new EditInfo();
                        if (e.Load(i.ToInt(), CurrentUser))
                        {
                            if (!e.Public)
                            {
                                if (CurrentUser != null)
                                {
                                    if (CurrentUser.UserID != e.UserID)
                                    {
                                        continue;
                                    }
                                }
                            }

                            e.Downloads++;
                            e.Save();
                            switch (format)
                            {
                                case "DAT":
                                    zFile.AddEntry(e.Name + ".DAT", File.ReadAllBytes(Server.MapPath("/dats/" + region + "/" + e.ID + ".DAT")));
                                    break;

                                case "ZIP":
                                    zFile.AddEntry(e.Name + ".DAT", File.ReadAllBytes(Server.MapPath("/dats/" + region + "/" + e.ID + ".DAT")));
                                    break;

                                case "SM":
                                    zFile.AddEntry(e.SongTitle + ".sm", File.ReadAllBytes(Server.MapPath("/sims/"+ e.ID + ".sm")));
                                    break;
                            }
                        }
                    }
                }

                string fileName = "/temp/" + DateTime.Now.Ticks + ".zip";
                zFile.Save(Server.MapPath(fileName));
                if (format != "DAT")
                {
                    ReturnFile(fileName, region);
                }
                else
                {
                    ReturnFile(WebConverter.ConvertLibrary(Server.MapPath(fileName), region == "U" ? 1 : 2), region);
                }
                return;
            }
        }
        else
        {
            Library l = new Library();
            l.Load(id.ToInt());
            ZipFile zFile = new ZipFile();
            foreach (int i in l.EditList)
            {
                EditInfo e = new EditInfo();
                if (e.Load(i, CurrentUser))
                {
                    if (!e.Public)
                    {
                        if (CurrentUser != null)
                        {
                            if (CurrentUser.UserID != e.UserID)
                            {
                                continue;
                            }
                        }
                    }

                    switch (format)
                    {
                        case "DAT":
                            zFile.AddEntry(e.Name + ".DAT", File.ReadAllBytes(Server.MapPath("/dats/" + region + "/" + e.ID + ".DAT")));
                            break;

                        case "ZIP":
                            zFile.AddEntry(e.Name + ".DAT", File.ReadAllBytes(Server.MapPath("/dats/" + region + "/" + e.ID + ".DAT")));
                            break;

                        case "SM":
                            zFile.AddEntry(e.SongTitle + ".sm", File.ReadAllBytes(Server.MapPath("/sims/" + e.ID + ".sm")));
                            break;
                    }
                }
            }

            string fileName = "/temp/" + DateTime.Now.Ticks + ".zip";
            zFile.Save(Server.MapPath(fileName));
            if (format != "DAT")
            {
                ReturnFile(fileName, region);
            }
            else
            {
                ReturnFile(WebConverter.ConvertLibrary(Server.MapPath(fileName), region == "U" ? 1 : 2), region);
            }
        }

        message.Text = "Invalid file request.";
    }

    private void ReturnFile(string file, string region)
    {
        Response.Clear();
        Response.ContentType = "application/octet-stream";
        Response.AddHeader("Content-Disposition", string.Format("attachment;filename=Library.zip", region));
        byte[] data = File.ReadAllBytes(Server.MapPath(file));
        Response.OutputStream.Write(data, 0, data.Length);
        Response.Flush();
        Response.Close();
    }

    private void ReturnFile(byte[] data, string region)
    {
        Response.Clear();
        Response.ContentType = "application/octet-stream";
        Response.AddHeader("Content-Disposition", string.Format("attachment;filename=DDR_EDIT_{0}.DAT", region));
        Response.OutputStream.Write(data, 0, data.Length);
        Response.Flush();
        Response.Close();
    }
}