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

public partial class newedit : SecurePage
{
    public int EditId;
    public override void InitPage()
    {
        HdnMode.Value = "0";
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
        Session["simFile"] = fileData;
        HdnMode.Value = "1";
    }

    public void SaveEdit(object o, EventArgs e)
    {
        if (Session["currentSim"] == null) return;
        SimFileData data = (SimFileData)Session["currentSim"];
        ChartData selectedData = null;
        foreach (ChartData cd in data.Charts)
        {
            if(cd.ChartInfo.ID == HdnChart.Value)
            {
                selectedData = cd;
            }
        }

        Edit edit = new Edit();
        edit.New(CurrentUser);
        edit.Comment1 = CmbComment1.SelectedIndex;
        edit.Comment2 = CmbComment2.SelectedIndex;
        edit.Difficulty = CmbEditDifficulty.SelectedValue;
        edit.Name = TxtName.Text;
        edit.Description = TxtNotes.Text;
        edit.Rating = Convert.ToInt32(CmbRating.SelectedValue);
        edit.Style = selectedData.ChartInfo.Style.ToString();
        edit.SongID = HdnSongId.Value;
        edit.Public = ChkPublic.Checked;
        edit.Video = video.Text;

        Song s = Song.GetSong(edit.SongID);
        if (!s.Confirmed)
        {
            s.FirstMeasure = first.Text.ToInt();
        }

        int offset = s.FirstMeasure - data.FirstMeasure;
        if (offset > 0)
        {
            while (offset != 0)
            {
                for (int i = 0; i < 16; i++)
                {
                    selectedData.TapData.Add(Arrow.None);
                    selectedData.FreezeData.Add(Arrow.None);
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

        edit.Steps= Converter.ConvertTapsToXml("STEP", selectedData.TapData).ToString() + Converter.ConvertTapsToXml("FREEZ_ARROW", selectedData.FreezeData).ToString();
        edit.Stats = selectedData.GenerateStats();
        edit.Save();
        File.WriteAllText(Server.MapPath(string.Format("/sims/{0}.sm", edit.ID)), (string)Session["simFile"]);
        Session.Remove("currentSim");
        Session.Remove("simFile");
        Session["editid"] = edit.ID;
        Response.Redirect("convert.aspx");
    }
}