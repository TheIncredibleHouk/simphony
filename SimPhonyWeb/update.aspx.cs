using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SimPhony;
using Daiz.DotNet;

using Daiz.WebFramework;
public partial class update : SecurePage
{
    Edit edit = new Edit();
    public override void InitPage()
    {
        string id = Request.Params["id"];
        if (id.IsInt())
        {
            if (edit.Load(id.ToInt()))
            {
                if (!Page.IsPostBack)
                {
                    if (edit.UserID == CurrentUser.UserID)
                    {
                        CmbRating.SelectedValue = edit.Rating.ToString();
                        CmbEditDifficulty.SelectedValue = edit.Difficulty;
                        CmbComment1.SelectedValue = edit.Comment1.ToString();
                        CmbComment2.SelectedValue = edit.Comment2.ToString();
                        TxtName.Text = edit.Name;
                        ChkPublic.Checked = edit.Public;
                        TxtNotes.Text = edit.Description;
                        video.Text = edit.Video;
                        HdnMode.Value = "0";
                        Page.Title = "Editing \"" + edit.Name + "\" - " + Song.GetSong(edit.SongID).Title;
                    }
                }
            }
        }
    }

    public void UploadSim(object o, EventArgs e)
    {
        if (!FupSMFile.HasFile || CurrentUser == null)
        {
            Response.Redirect("default.aspx");
        }

        string fileData = UTF8Encoding.UTF8.GetString(FupSMFile.FileBytes);
        List<string> fileLines = fileData.Split('\n').ToList();
        SimfileReader sr = new SimfileReader();
        SimFileData simData = sr.GetAllCharts(fileLines);
        Session["currentSim"] = simData;
        Session["updateSimFile"] = fileData;
        HdnMode.Value = "1";
    }

    public void SaveEdit(object o, EventArgs e)
    {
        SimFileData data = null;
        ChartData selectedData = null;
        if (Session["currentSim"] != null)
        {
            data = (SimFileData)Session["currentSim"];
            foreach (ChartData cd in data.Charts)
            {
                if (cd.ChartInfo.ID == HdnChart.Value)
                {
                    selectedData = cd;
                }
            }
        }

        bool requiresUpdate = false;
        if (edit.Comment1 != CmbComment1.SelectedIndex)
        {
            edit.Comment1 = CmbComment1.SelectedIndex;
            requiresUpdate = true;
        }
        if (edit.Comment2 != CmbComment2.SelectedIndex)
        {
            edit.Comment2 = CmbComment2.SelectedIndex;
            requiresUpdate = true;
        }
        if (edit.Difficulty != CmbEditDifficulty.SelectedValue)
        {
            edit.Difficulty = CmbEditDifficulty.SelectedValue;
            requiresUpdate = true;
        }
        if (edit.Rating != CmbRating.SelectedValue.ToInt())
        {
            edit.Rating = CmbRating.SelectedValue.ToInt();
            requiresUpdate = true;
        }

        if (edit.Name != TxtName.Text)
        {
            edit.Name = TxtName.Text;
        }
        edit.Description = TxtNotes.Text;
        edit.Public = ChkPublic.Checked;
        edit.Video = video.Text;
        if (selectedData != null)
        {
            requiresUpdate = true;
            edit.Style = selectedData.ChartInfo.Style.ToString();
            edit.SongID = HdnSongId.Value;

            Song s = Song.GetSong(edit.SongID);
            if(!s.Confirmed)
            {
                edit.FirstMeasure = s.FirstMeasure = first.Text.ToInt();
            }
            
            int offset = s.FirstMeasure - data.FirstMeasure;
            if (offset > 0)
            {
                while (offset != 0)
                {
                    for (int i = 0; i < 16; i++)
                    {
                        selectedData.TapData.Insert(0, Arrow.None);
                        selectedData.FreezeData.Insert(0, Arrow.None);
                    }

                    offset--;
                }
            }

            if (offset < 0)
            {
                while (offset != 0)
                {
                    selectedData.TapData.RemoveRange(0, 16);
                    selectedData.FreezeData.RemoveRange(0, 16);
                    offset++;
                }
            }

            selectedData.TapData.RemoveRange(0, 16);
            selectedData.FreezeData.RemoveRange(0, 16);

            edit.Steps = Converter.ConvertTapsToXml("STEP", selectedData.TapData).ToString() + Converter.ConvertTapsToXml("FREEZ_ARROW", selectedData.FreezeData).ToString();
            File.WriteAllText(Server.MapPath(string.Format("/sims/{0}.sm", edit.ID)), (string)Session["updateSimFile"]);
            edit.Stats = selectedData.GenerateStats();
        }

        edit.Save();
        Session.Remove("currentSim");
        Session.Remove("updateSimFile");
        if (requiresUpdate)
        {
            Session["editid"] = edit.ID;
            Response.Redirect("convert.aspx");
        }
        else
        {
            Response.Redirect("myedits.aspx");
        }
    }
}