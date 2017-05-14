using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using SimPhony;
using Daiz.DotNet;
using Daiz.WebFramework;
public partial class edit : UnsecurePage
{
    public override void InitPage()
    {
        if (edit.intensities.Count == 0)
        {
            intensities = new List<string>(){
                                            "lime", 
"#05ff00", 
"#0aff00", 
"#0fff00", 
"#14ff00", 
"#19ff00", 
"#1fff00", 
"#24ff00", 
"#29ff00", 
"#2eff00", 
"#33ff00", 
"#38ff00", 
"#3dff00", 
"#42ff00", 
"#47ff00", 
"#4dff00", 
"#52ff00", 
"#57ff00", 
"#5cff00", 
"#61ff00", 
"#66ff00", 
"#6bff00", 
"#70ff00", 
"#75ff00", 
"#7aff00", 
"#80ff00", 
"#85ff00", 
"#8aff00", 
"#8fff00", 
"#94ff00", 
"#99ff00", 
"#9eff00", 
"#a3ff00", 
"#a8ff00", 
"#e0ff00", 
"#b3ff00", 
"#b8ff00", 
"#bdff00", 
"#c2ff00", 
"#c7ff00", 
"#ccff00", 
"#d1ff00", 
"#d6ff00", 
"#dbff00", 
"#e0ff00", 
"#e6ff00", 
"#ebff00", 
"#f0ff00", 
"#f5ff00", 
"#faff00", 
"yellow", 
"#fffa00", 
"#fff500", 
"#fff000", 
"#ffeb00", 
"#ffe600", 
"#ffe000", 
"#ffdb00", 
"#ffd600", 
"#ffd100", 
"#ffcc00", 
"#ffc700", 
"#ffc200", 
"#ffbd00", 
"#ffb800", 
"#ffb300", 
"#ffad00", 
"#ffa800", 
"#ffa300", 
"#ff9e00", 
"#ff9900", 
"#ff9400", 
"#ff8f00", 
"#ff8a00", 
"#ff8500", 
"#ff8000", 
"#ff7a00", 
"#ff7500", 
"#ff7000", 
"#ff6b00", 
"#ff6600", 
"#ff6100", 
"#ff5c00", 
"#ff5700", 
"#ff1f00", 
"#ff4d00", 
"#ff4700", 
"#ff4200", 
"#ff3d00", 
"#ff3800", 
"#ff3300", 
"#ff2e00", 
"#ff2900", 
"#ff2400", 
"#ff1f00", 
"#ff1900", 
"#ff1400", 
"#ff0f00", 
"#ff0a00", 
"#ff0500", 
"red"
            };
        }

        string id = Request.Params["id"];
        if (id.IsInt())
        {
            Edit e = new Edit();
            e.Load(id.ToInt());
            if (e.Public)
            {
                if (CurrentUser == null || e.UserID == CurrentUser.UserID)
                {
                    rating_row.Visible = false;
                }

                linkU.NavigateUrl = string.Format("/downloaddat.aspx?id={0}&region=U", e.ID);
                linkE.NavigateUrl = string.Format("/downloaddat.aspx?id={0}&region=E", e.ID);
                linkSM.NavigateUrl = string.Format("/downloadsm.aspx?id={0}", e.ID);
                UserID.Text = "<a href='/search.aspx?userid=" + e.UserID + "'>" + e.UserID + "</a>";
                SongTitle.Text = "<a href='/search.aspx?song=" + Song.GetSong(e.SongID).Title + "'>" + Song.GetSong(e.SongID).Title + "</a>";
                Name.Text = e.Name;
                Likes.Text = e.Likes.ToString();
                Style.Text = e.Style;
                Level.Text = e.Rating.ToString();
                LastUpdate.Text = e.LastUpdated.ToShortDateString();
                Description.Text = e.Description;
                difficulty.Text = e.Difficulty;
                add_edit.Attributes["onclick"] = "addEdit(" + e.ID + ")";
                rateButton.OnClientClick = "rateIt(" + e.ID + ")";
                likelink.Visible = e.CanLike(CurrentUser);
                likespan.InnerText = e.Liked(CurrentUser) ? "Dislike this edit." : "Like this edit";
                likelink.HRef = "javascript: toggleLike(" + e.ID + ")";

                if (CurrentUser != null)
                {
                    update_row.Visible = e.UserID == CurrentUser.UserID;
                }

                chart.Text = "<a target='_blank' href='/chartviewer.aspx?id=" + e.ID + "'>View chart</a>";
                if (e.Video.Length > 0)
                {
                    video.Text = "<a href='" + e.Video + "'>" + e.Video + "</a>";
                }
                else
                {
                    video.Text = "No video";
                }

                Dictionary<string, string> s = e.Stats.SplitToDictionary(',', ':');
                int intensity;
                double level;
                double a, b;
                a = s["taps"].ToDouble();
                b = 700;
                if (b > 0)
                {
                    level = (a / b) * 100;
                }
                else
                {
                    level = 0;
                }
                a = s["taps"].ToDouble();
                b = s["length"].ToDouble();
                if (b > 0)
                {
                    intensity = (int)((a / b) * 120);
                }
                else
                {
                    intensity = 0;
                }
                intensity = (int)Math.Min(intensity, 100.0);
                level = Math.Min(level, 100);
                taps.Text = string.Format("<div class='status'><div class='value' id='taps' style='width: {0}%; background-color: {1}'>&nbsp;</div></div>  Total: {2}", level, intensities[intensity], s["taps"]);


                a = s["jumps"].ToDouble();
                b = s["taps"].ToDouble();
                level = (a / 100) * 100;
                if (b > 0)
                {
                    intensity = (int)(a / b * 200);
                }
                else
                {
                    intensity = 0;
                }

                intensity = Math.Min(intensity, 100);
                level = Math.Min(level, 100);
                jumps.Text = string.Format("<div class='status'><div class='value' id='jumps' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2}", level, intensities[intensity], s["jumps"]);


                a = s["stream_total"].ToDouble();
                b = s["taps"].ToDouble();

                if (b > 0)
                {
                    level = (a / b) * 100;
                }
                else
                {
                    level = 0;
                }

                a = s["stream_avg"].ToDouble();
                b = s["stream_long"].ToDouble();
                ;
                if (b > 0)
                {
                    intensity = (int)(a / 20 * 50) + (int)(b / 50 * 50);
                }
                else
                {
                    intensity = 0;
                }

                intensity = Math.Min(intensity, 100);
                level = Math.Min(level, 100);
                streams.Text = string.Format("<div class='status'><div class='value' id='streams' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2} Average: {3} Longest: {4}", level, intensities[intensity], s["stream_total"], s["stream_avg"], s["stream_long"]);

                a = s["trill_total"].ToDouble();
                b = s["taps"].ToDouble();

                if (b > 0)
                {
                    level = (a / b) * 150;
                }
                else
                {
                    level = 0;
                }

                a = s["trill_avg"].ToDouble();
                b = 16;

                if (b > 0)
                {
                    intensity = (int)(a / b) * 200;
                }
                else
                {
                    intensity = 0;
                }

                intensity = (int)Math.Min(intensity, 100.0);
                level = Math.Min(level, 100);
                trills.Text = string.Format("<div class='status'><div class='value' id='trills' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2} Average: {3} Longest: {4}", level, intensities[intensity], s["trill_total"], s["trill_avg"], s["trill_long"]);

                a = s["freezes"].ToDouble();
                b = s["taps"].ToDouble();
                if (b > 0)
                {
                    level = (a / b) * 200;
                }
                else
                {
                    level = 0;
                }
                intensity = (int)Math.Min(level * 1.5, 100.0);
                level = Math.Min(level, 100);
                freezes.Text = string.Format("<div class='status'><div class='value' id='freezes' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2}", level, intensities[intensity], s["freezes"]);

                a = s["jump_streams"].ToDouble();
                b = s["stream_total"].ToDouble();
                if (b > 0)
                {
                    level = (a / b) * 300;
                }
                else
                {
                    level = 0;
                }

                b = s["stream_total"].ToDouble();
                a = s["stream_jumps"].ToDouble();
                if (b > 0)
                {
                    intensity = (int)((a / b) * 120);
                }
                else
                {
                    intensity = 0;
                }

                intensity = (int)Math.Min(intensity, 100.0);
                level = Math.Min(level, 100);
                stream_jump.Text = string.Format("<div class='status'><div class='value' id='stream_jump' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2}", level, intensities[intensity], s["stream_jumps"]);

                a = s["gallops"].ToDouble();
                b = s["taps"].ToDouble();
                if (b > 0)
                {
                    level = (a / b) * 400;
                }
                else
                {
                    level = 0;
                }
                intensity = (int)Math.Min(level * .9, 100.0);
                level = Math.Min(level, 100);
                gallops.Text = string.Format("<div class='status'><div class='value' id='gallops' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2}", level, intensities[intensity], s["gallops"]);

                a = s["twelth_note"].ToDouble();
                b = s["taps"].ToDouble();
                if (b > 0)
                {
                    level = (a / b) * 150;
                }
                else
                {
                    level = 0;
                }
                intensity = (int)Math.Min(level * 1.5, 100.0);
                level = Math.Min(level, 100);
                twelfths.Text = string.Format("<div class='status'><div class='value' id='twelfths' style='width: {0}%; background-color: {1}'>&nbsp;</div></div> Total: {2}", level, intensities[intensity], s["twelth_note"]);
            }
        }
    }
    private static List<string> intensities = new List<string>();


    public void Update(object o, EventArgs e)
    {
        Response.Redirect("/update.aspx?id=" + Request.Params["id"]);
    }
}