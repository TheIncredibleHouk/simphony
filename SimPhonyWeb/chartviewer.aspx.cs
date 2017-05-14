using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Daiz.WebFramework;
using Daiz.DotNet;
using SimPhony;

public partial class chartviewer : UnsecurePage
{
    string imgTemplate = "<img src='/images/notes/{0}_{1}.png' style='top: {2}px; left: {3}px' />";
    string measureTemplate = "<span style='top: {0}px; left: 20px'>{1}</span>";
    string freezeTemplate = "<div class='freeze' style='top: {0}px; height: {1}px; left: {2}px;'><div class='freeze_end'></div></div>";


    public string SpeedMod { get; set; }
    public int chartHeight { get; set; }
    public int chartWidth { get; set; }
    public double freezeEndPos { get; set; }

    public override void InitPage()
    {
        StringBuilder sb = new StringBuilder();

        string id = Request.Params["id"];
        if (id.IsInt())
        {
            Edit e = new Edit();
            if (e.Load(id.ToInt()))
            {
                if (!e.Public)
                {
                    if (CurrentUser == null)
                    {
                        return;
                    }

                    if (CurrentUser.UserID != e.UserID)
                    {
                        return;
                    }
                }

                int twelfthMode = 0;
                NoteColor currentColor = NoteColor.Red;
                List<NoteColor> colorCycle = new List<NoteColor>() { NoteColor.Red, NoteColor.Yellow, NoteColor.Blue, NoteColor.Yellow };
                int currentMeasure = 0;
                double yPos = 16;
                user.Text = e.UserID;
                song.Text = Song.GetSong(e.SongID).Title;
                name.Text = e.Name;
                rating.Text = e.Rating.ToString();
                style.Text = e.Style;
                e.GenerateSteps();

                Page.Title = "\"" + e.Name + "\"" + " - " + Song.GetSong(e.SongID).Title;

                Arrow a;
                double multiplier = speed.SelectedValue.ToDouble();
                SpeedMod = multiplier.ToString();
                double sixteenthNoteSpacing = (8 * multiplier);
                double twelfthNoteSpacing = (10.66 * multiplier);
                double measureHeight = sixteenthNoteSpacing * 16;
                chartHeight = (int)(measureHeight * (e.Taps.Count / 16));
                freezeEndPos = 3 * sixteenthNoteSpacing;
                switch (e.Style)
                {
                    case "Single":
                        chartWidth = 136;
                        break;

                    case "Double":
                        chartWidth = 264;
                        break;

                    case "Couple":
                        chartWidth = 364;
                        break;
                }


                Dictionary<Arrow, double> freezeLength = new Dictionary<Arrow, double>();
                freezeLength[Arrow.P1L] = 0;
                freezeLength[Arrow.P1D] = 0;
                freezeLength[Arrow.P1U] = 0;
                freezeLength[Arrow.P1R] = 0;
                freezeLength[Arrow.P2L] = 0;
                freezeLength[Arrow.P2D] = 0;
                freezeLength[Arrow.P2U] = 0;
                freezeLength[Arrow.P2R] = 0;
                double top = 0;
                if (noteskin.SelectedValue == "")
                {
                    for (int i = 0; i < e.Freezes.Count; i++)
                    {
                        a = e.Freezes[i];

                        if (twelfthMode > 0)
                        {
                        }

                        yPos = (((int)i / 4) * (sixteenthNoteSpacing * 4) + ((i % 4) * sixteenthNoteSpacing) + 16) + 2;

                        if (a.HasFlag(Arrow.P1L))
                        {
                            freezeLength[Arrow.P1L]++;
                        }
                        else
                        {
                            if (freezeLength[Arrow.P1L] > 0)
                            {
                                top = yPos - (freezeLength[Arrow.P1L] * sixteenthNoteSpacing);
                                sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 36);
                            }

                            freezeLength[Arrow.P1L] = 0;
                        }

                        if (a.HasFlag(Arrow.P1D))
                        {
                            freezeLength[Arrow.P1D]++;
                        }
                        else
                        {
                            if (freezeLength[Arrow.P1D] > 0)
                            {
                                top = yPos - (freezeLength[Arrow.P1D] * sixteenthNoteSpacing);
                                sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 68);
                            }

                            freezeLength[Arrow.P1D] = 0;
                        }

                        if (a.HasFlag(Arrow.P1U))
                        {
                            freezeLength[Arrow.P1U]++;
                        }
                        else
                        {
                            if (freezeLength[Arrow.P1U] > 0)
                            {
                                top = yPos - (freezeLength[Arrow.P1U] * sixteenthNoteSpacing);
                                sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 100);
                            }

                            freezeLength[Arrow.P1U] = 0;
                        }

                        if (a.HasFlag(Arrow.P1R))
                        {
                            freezeLength[Arrow.P1R]++;
                        }
                        else
                        {
                            if (freezeLength[Arrow.P1R] > 0)
                            {
                                top = yPos - (freezeLength[Arrow.P1R] * sixteenthNoteSpacing);
                                sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 132);
                            }

                            freezeLength[Arrow.P1R] = 0;
                        }


                        if (e.Style == "Double")
                        {
                            if (a.HasFlag(Arrow.P2L))
                            {
                                freezeLength[Arrow.P2L]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2L] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2L] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 164);
                                }

                                freezeLength[Arrow.P2L] = 0;
                            }

                            if (a.HasFlag(Arrow.P2D))
                            {
                                freezeLength[Arrow.P2D]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2D] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2D] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 196);
                                }

                                freezeLength[Arrow.P2D] = 0;
                            }

                            if (a.HasFlag(Arrow.P2U))
                            {
                                freezeLength[Arrow.P2U]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2U] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2U] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 228);
                                }

                                freezeLength[Arrow.P2U] = 0;
                            }

                            if (a.HasFlag(Arrow.P2R))
                            {
                                freezeLength[Arrow.P2R]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2R] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2R] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 260);
                                }

                                freezeLength[Arrow.P2R] = 0;
                            }
                        }

                        else if (e.Style == "Couple")
                        {

                            if (a.HasFlag(Arrow.P2L))
                            {
                                freezeLength[Arrow.P2L]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2L] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2L] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 164 + 100);
                                }

                                freezeLength[Arrow.P2L] = 0;
                            }

                            if (a.HasFlag(Arrow.P2D))
                            {
                                freezeLength[Arrow.P2D]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2D] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2D] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 196 + 100);
                                }

                                freezeLength[Arrow.P2D] = 0;
                            }

                            if (a.HasFlag(Arrow.P2U))
                            {
                                freezeLength[Arrow.P2U]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2U] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2U] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 228 + 100);
                                }

                                freezeLength[Arrow.P2U] = 0;
                            }

                            if (a.HasFlag(Arrow.P2R))
                            {
                                freezeLength[Arrow.P2R]++;
                            }
                            else
                            {
                                if (freezeLength[Arrow.P2R] > 0)
                                {
                                    top = yPos - (freezeLength[Arrow.P2R] * sixteenthNoteSpacing);
                                    sb.AppendFormat(freezeTemplate, top + 16, (yPos - (sixteenthNoteSpacing * 3) - (top - (sixteenthNoteSpacing * 2))), 260 + 100);
                                }

                                freezeLength[Arrow.P2R] = 0;
                            }
                        }
                    }
                }

                Arrow f = Arrow.None;
                for (int i = 0; i < e.Taps.Count; i++)
                {
                    a = e.Taps[i];
                    f = e.Freezes[i];
                    
                    currentColor = colorCycle[i % 4];

                    yPos = (((int)i / 4) * (sixteenthNoteSpacing * 4) + ((i % 4) * sixteenthNoteSpacing) + 16) + 1;
                    if (i % 16 == 0)
                    {
                        sb.AppendFormat(measureTemplate, (currentMeasure * measureHeight) + 24, (currentMeasure + 1));
                        currentMeasure++;
                    }

                    if (a == Arrow.All)
                    {
                        twelfthMode = 3;
                        continue;
                    }

                    if (twelfthMode > 0)
                    {
                        if (twelfthMode == 3)
                        {
                            currentColor = NoteColor.Red;
                        }
                        else
                        {
                            currentColor = NoteColor.Green;
                        }

                        yPos = (((int)i / 4) * (sixteenthNoteSpacing * 4) + (((3 - twelfthMode) % 3) * twelfthNoteSpacing) + 16) + 1;
                        twelfthMode--;
                    }

                    if (a.HasFlag(Arrow.P1L))
                    {
                        if (noteskin.SelectedValue == "C")
                        {
                            currentColor = f.HasFlag(Arrow.P1L) ? NoteColor.Blue : NoteColor.Red;
                        }
                            
                        sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "left", yPos, 36);
                    }

                    if (a.HasFlag(Arrow.P1D))
                    {

                        if (noteskin.SelectedValue == "C")
                        {
                            currentColor = f.HasFlag(Arrow.P1D) ? NoteColor.Blue : NoteColor.Red;
                        }

                        sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "down", yPos, 68);
                    }

                    if (a.HasFlag(Arrow.P1U))
                    {

                        if (noteskin.SelectedValue == "C")
                        {
                            currentColor = f.HasFlag(Arrow.P1U) ? NoteColor.Blue : NoteColor.Red;
                        }

                        sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "up", yPos, 100);
                    }

                    if (a.HasFlag(Arrow.P1R))
                    {

                        if (noteskin.SelectedValue == "C")
                        {
                            currentColor = f.HasFlag(Arrow.P1R) ? NoteColor.Blue : NoteColor.Red;
                        }

                        sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "right", yPos, 132);
                    }

                    if (e.Style == "Double")
                    {
                        if (a.HasFlag(Arrow.P2L))
                        {
                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "left", yPos, 164);
                        }

                        if (a.HasFlag(Arrow.P2D))
                        {
                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "down", yPos, 196);
                        }

                        if (a.HasFlag(Arrow.P2U))
                        {
                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "up", yPos, 228);
                        }

                        if (a.HasFlag(Arrow.P2R))
                        {
                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "right", yPos, 260);
                        }
                    }

                    else if (e.Style == "Couple")
                    {
                        if (a.HasFlag(Arrow.P2L))
                        {

                            if (noteskin.SelectedValue == "C")
                            {
                                currentColor = f.HasFlag(Arrow.P2L) ? NoteColor.Blue : NoteColor.Red;
                            }

                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "left", yPos, 164 + 100);
                        }

                        if (a.HasFlag(Arrow.P2D))
                        {

                            if (noteskin.SelectedValue == "C")
                            {
                                currentColor = f.HasFlag(Arrow.P2D) ? NoteColor.Blue : NoteColor.Red;
                            }

                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "down", yPos, 196 + 100);
                        }

                        if (a.HasFlag(Arrow.P2U))
                        {

                            if (noteskin.SelectedValue == "C")
                            {
                                currentColor = f.HasFlag(Arrow.P2U) ? NoteColor.Blue : NoteColor.Red;
                            }

                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "up", yPos, 228 + 100);
                        }

                        if (a.HasFlag(Arrow.P2R))
                        {

                            if (noteskin.SelectedValue == "C")
                            {
                                currentColor = f.HasFlag(Arrow.P2R) ? NoteColor.Blue : NoteColor.Red;
                            }

                            sb.AppendFormat(imgTemplate, currentColor.ToString().ToLower(), "right", yPos, 260 + 100);
                        }
                    }
                }
            }
        }

        chart_tags.Text = sb.ToString();
    }

    public void Reload(object o, EventArgs e)
    {
    }
}