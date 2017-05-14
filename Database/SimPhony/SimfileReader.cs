using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Daiz.DotNet;

namespace SimPhony
{
    public class SimfileReader
    {
        public SimFileData GetAllCharts(List<string> smLines)
        {
            int smLine = 0;
            SimFileData chartData = new SimFileData();
            string cLine;
            while (smLine < smLines.Count)
            {
                cLine = smLines[smLine];
                if (cLine.Contains("#TITLE:"))
                {
                    chartData.SongTitle = cLine.Substring(7).Trim().Trim(';');
                }
                else if (cLine.Contains("#BPMS:"))
                {
                    cLine = cLine.Substring(6).Trim().Trim(';');
                    Dictionary<string, string> table = cLine.SplitToDictionary(',', '=');
                    foreach(string k in table.Keys)
                    {
                        chartData.SpeedChanges.Add(new SpeedChange((int) table[k].ToDouble(), k.ToDouble()));
                    }
                }
                else if (cLine.Contains("#TITLETRANSLIT:"))
                {
                    if (cLine.Substring(15).Trim().Trim(';').Length > 0)
                    {
                        chartData.SongTitle = cLine.Substring(15).Trim().Trim(';');
                    }
                }
                else if (cLine.Contains("#NOTES"))
                {
                    cLine = smLines[++smLine].Trim();
                    if (cLine == "dance-single:")
                    {
                        smLine++;
                        smLine++;
                        cLine = smLines[smLine].Trim();
                        if (cLine == "Hard:" || cLine == "Challenge:")
                        {
                            // get the first measure
                            int mLine = smLine + 6;
                            int measure = 1;
                            while (true)
                            {
                                if (smLines[mLine].Contains(","))
                                {
                                    measure++;
                                }
                                else if (smLines[mLine].Trim().Trim('0').Length > 0)
                                {
                                    break;
                                }
                                mLine++;
                            }

                            chartData.FirstMeasure = measure;
                            break;
                        }
                    }
                }

                smLine++;
            }

            smLine = 0;
            chartData.SongTitle = chartData.SongTitle.Replace(" (", "&&").Replace("(", " (").Replace("&&", " (");
            ChartData nextEdit = new ChartData();
            while (true)
            {
                nextEdit = GetNextEdit(smLines, smLine, out smLine);
                if (nextEdit != null)
                {
                    chartData.Charts.Add(nextEdit);
                    nextEdit.SpeedChanges = chartData.SpeedChanges;
                }
                else if(smLine >= smLines.Count - 1)
                {
                    break;
                }
            }
            
            return chartData;
        }

        public ChartData GetNextEdit(List<string> lines, int smLine, out int finalLine)
        {
            ChartData chartData = new ChartData();
            string currentLine;
            while (smLine < lines.Count)
            {
                currentLine = lines[smLine++];
                if (currentLine.Contains("#NOTES"))
                {
                    while (true)
                    {
                        currentLine = lines[smLine++].Trim();
                        switch (currentLine)
                        {
                            case "dance-single:":
                                chartData.ChartInfo.Style = Style.Single;
                                break;

                            case "dance-double:":
                                chartData.ChartInfo.Style = Style.Double;
                                break;

                            case "dance-couple:":
                                chartData.ChartInfo.Style = Style.Couple;
                                break;

                            default:
                                finalLine = smLine;
                                return null;
                        }

                        chartData.ChartInfo.Name = lines[smLine++].Trim().Trim(':');
                        currentLine = lines[smLine++].Trim();
                        switch(currentLine)
                        {
                            case "Beginner:":
                                chartData.ChartInfo.Difficulty = SimDifficulty.Beginner;
                                break;

                            case "Easy:":
                                chartData.ChartInfo.Difficulty = SimDifficulty.Easy;
                                break;

                            case "Medium:":
                                chartData.ChartInfo.Difficulty = SimDifficulty.Medium;
                                break;

                            case "Hard:":
                                chartData.ChartInfo.Difficulty = SimDifficulty.Hard;
                                break;

                            case "Challenge:":
                                chartData.ChartInfo.Difficulty = SimDifficulty.Challenge;
                                break;

                            case "Edit:":
                                chartData.ChartInfo.Difficulty = SimDifficulty.Edit;
                                break;

                            default:
                                finalLine = smLine;
                                return null;
                        }

                        chartData.ChartInfo.Rating = Convert.ToInt32(lines[smLine++].Trim().Trim(':'));
                        smLine++;


                        List<string> currentMeasure = new List<string>();
                        List<string> sixteenthBeats = new List<string>();
                        bool readingChart = true;
                        int measureNumber = 1;

                        while (readingChart)
                        {
                            currentMeasure.Clear();
                            while (true)
                            {
                                currentLine = lines[smLine++].Trim();
                                if (currentLine.Length > 0)
                                {
                                    if (currentLine.Contains(";"))
                                    {
                                        readingChart = false;
                                        break;
                                    }
                                    else if (!currentLine.Contains(","))
                                    {
                                        currentMeasure.Add(currentLine);
                                    }
                                    else
                                    {
                                        break;
                                    }
                                }
                            }

                            switch (currentMeasure.Count)
                            {
                                case 4:
                                    for (int j = 0; j < 4; j++)
                                    {
                                        sixteenthBeats.Add(currentMeasure[j]);
                                        for (int k = 0; k < 3; k++)
                                        {
                                            sixteenthBeats.Add("00000000");
                                        }
                                    }
                                    break;

                                case 8:
                                    for (int j = 0; j < 8; j++)
                                    {
                                        sixteenthBeats.Add(currentMeasure[j]);
                                        sixteenthBeats.Add("00000000");
                                    }
                                    break;

                                case 12:
                                    for (int j = 0; j < 4; j++)
                                    {
                                        sixteenthBeats.Add("11111111");
                                        sixteenthBeats.Add(currentMeasure[j * 3]);
                                        sixteenthBeats.Add(currentMeasure[j * 3 + 1]);
                                        sixteenthBeats.Add(currentMeasure[j * 3 + 2]);
                                    }
                                    break;
                                case 16:
                                    for (int j = 0; j < 16; j++)
                                    {
                                        sixteenthBeats.Add(currentMeasure[j]);
                                    }
                                    break;

                                case 24: // for mixed 8th and 12th note modes
                                    for (int j = 0; j < 4; j++)
                                    {
                                        ///12th notes
                                        if (currentMeasure[j * 6 + 2] != "0000" || currentMeasure[j * 6 + 4] != "0000")
                                        {
                                            sixteenthBeats.Add("11111111");
                                            sixteenthBeats.Add(currentMeasure[j * 6]);
                                            sixteenthBeats.Add(currentMeasure[j * 6 + 2]);
                                            sixteenthBeats.Add(currentMeasure[j * 6 + 4]);
                                        }
                                        else // eight notes
                                        {
                                            sixteenthBeats.Add(currentMeasure[j * 6]);
                                            sixteenthBeats.Add("00000000");
                                            sixteenthBeats.Add(currentMeasure[j * 6 + 3]);
                                            sixteenthBeats.Add("00000000");
                                        }
                                    }
                                    break;

                                case 48: // for mixed 16th and 12th note modes
                                    for (int j = 0; j < 4; j++)
                                    {
                                        ///12th notes
                                        if (currentMeasure[j * 12 + 4].Trim('0').Length > 0 || currentMeasure[j * 12 + 8].Trim('0').Length > 0)
                                        {
                                            sixteenthBeats.Add("11111111");
                                            sixteenthBeats.Add(currentMeasure[j * 12]);
                                            sixteenthBeats.Add(currentMeasure[j * 12 + 4]);
                                            sixteenthBeats.Add(currentMeasure[j * 12 + 8]);
                                        }
                                        else // eight notes
                                        {
                                            sixteenthBeats.Add(currentMeasure[j * 12]);
                                            sixteenthBeats.Add(currentMeasure[j * 12 + 3]);
                                            sixteenthBeats.Add(currentMeasure[j * 12 + 6]);
                                            sixteenthBeats.Add(currentMeasure[j * 12 + 9]);
                                        }
                                    }
                                    break;
                                default:
                                    chartData.ChartInfo.Errors.Add("Invalid notes at measure #" + measureNumber);
                                    for (int j = 0; j < 16; j++)
                                    {
                                        sixteenthBeats.Add("00000000");
                                    }
                                    break;
                            }

                            if (!readingChart) { break; }

                            measureNumber++;
                        }

                        Arrow freezesOn = Arrow.None;
                        foreach (var sb in sixteenthBeats)
                        {
                            chartData.TapData.Add(Converter.StringToTaps(sb));
                            chartData.FreezeData.Add(Converter.StringToFreezes(sb, freezesOn, out freezesOn));
                        }
                        finalLine = smLine;
                        return chartData;
                    }
                }
            }
            finalLine = smLine;
            return null;
        }
    }
}
