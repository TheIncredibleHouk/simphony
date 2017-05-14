using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace SimPhony
{
    public class ChartData
    {
        public List<Arrow> TapData { get; private set; }
        public List<Arrow> FreezeData { get; private set; }
        public ChartInfo ChartInfo { get; set; }
        public List<SpeedChange> SpeedChanges { get; set; }

        public ChartData()
        {
            ChartInfo = new ChartInfo();
            TapData = new List<Arrow>();
            FreezeData = new List<Arrow>();
            SpeedChanges = new List<SpeedChange>();
        }

        public string GenerateStats()
        {
            Dictionary<string, int> stats = new Dictionary<string, int>();
            stats["taps"] = (from t in TapData where t != Arrow.None && t != Arrow.All select t).Count();
            stats["length"] = TapData.Count;
            stats["jumps"] = (from t in TapData where t.IsJump() select t).Count();
            List<NoteColor> colors = new List<NoteColor>(){NoteColor.Red,
                NoteColor.Yellow,
                NoteColor.Blue,
                NoteColor.Yellow};
            int colorIndex = 0;
            NoteColor currentColor = colors[0];

            int streamCount = 0, longestStream = 0, totalStream = 0, currentStream = 0;
            int jumpStreams = 0, streamsWithJumps = 0;
            int skip = 0;
            int gallopCount = 0;
            bool hasJump = false;
            SpeedMode mode;
            
            SpeedChange nextChange = null;
            int changeIndex = 0;
            int currentBPM = SpeedChanges[changeIndex++].BPM;
            double measureNumber = 4;

            if (SpeedChanges.Count > changeIndex)
            {
                nextChange = SpeedChanges[changeIndex++];
            }
            
            if (currentBPM <= 100)
            {
                mode = SpeedMode.Slow;
            }
            else if (currentBPM > 100 && currentBPM < 230)
            {
                mode = SpeedMode.Normal;
            }
            else
            {
                mode = SpeedMode.Fast;
            }

            foreach (Arrow a in TapData)
            {
                if (a == Arrow.All)
                {
                    skip = 3;
                    continue;
                }

                switch (mode)
                {
                    case SpeedMode.Normal:
                        if (skip > 0)
                        {
                            skip--;
                            if (a > Arrow.None)
                            {
                                currentStream++;
                            }
                            else
                            {
                                if (currentStream >= 3)
                                {
                                    streamCount++;
                                    totalStream += currentStream;
                                    if (currentStream > longestStream)
                                    {
                                        longestStream = currentStream;
                                    }
                                }
                                else if(currentStream == 2)
                                {
                                    gallopCount++;
                                }

                                currentStream = 0;
                            }
                        }
                        else
                        {
                            if (currentColor == NoteColor.Yellow)
                            {
                                if (a > Arrow.None && currentStream > 1)
                                {
                                    currentStream--;

                                    if (currentStream > 3)
                                    {
                                        streamCount++;
                                        totalStream += currentStream;
                                        if (currentStream > longestStream)
                                        {
                                            longestStream = currentStream;
                                        }
                                    }

                                    hasJump = false;
                                    currentStream = 0;
                                }
                            }
                            else if (currentColor != NoteColor.Yellow)
                            {
                                if (currentStream == 0)
                                {
                                    if (a > Arrow.None)
                                    {
                                        currentStream++;
                                    }
                                }
                                else
                                {
                                    if (a > Arrow.None)
                                    {
                                        currentStream++;
                                        if (currentStream > 2)
                                        {
                                            if (a.IsJump())
                                            {
                                                jumpStreams++;
                                                if (!hasJump)
                                                {
                                                    streamsWithJumps++;
                                                }
                                                hasJump = true;
                                            }
                                        }
                                    }
                                    else
                                    {
                                        if (currentStream >= 3)
                                        {
                                            streamCount++;
                                            totalStream += currentStream;
                                            if (currentStream > longestStream)
                                            {
                                                longestStream = currentStream;
                                            }
                                        }

                                        hasJump = false;
                                        currentStream = 0;
                                    }
                                }
                            }
                        }

                        break;

                    case SpeedMode.Slow:
                        if (currentStream == 0)
                        {
                            if (a > Arrow.None)
                            {
                                currentStream++;
                            }
                        }
                        else
                        {
                            if (a > Arrow.None)
                            {
                                currentStream++;
                                if (a.IsJump())
                                {
                                    jumpStreams++;
                                }
                            }
                            else
                            {
                                if (currentStream >= 3)
                                {
                                    streamCount++;
                                    totalStream += currentStream;
                                    if (currentStream > longestStream)
                                    {
                                        longestStream = currentStream;
                                    }
                                }

                                hasJump = false;
                                currentStream = 0;
                            }
                        }
                        break;

                    case SpeedMode.Fast:
                        if (currentColor != NoteColor.Red)
                        {
                            if (a > Arrow.None && currentStream > 1)
                            {
                                currentStream--;

                                if (currentStream > 3)
                                {
                                    streamCount++;
                                    totalStream += currentStream;
                                    if (currentStream > longestStream)
                                    {
                                        longestStream = currentStream;
                                    }
                                }

                                hasJump = false;
                                currentStream = 0;
                            }
                        }
                        else if (currentColor == NoteColor.Red)
                        {
                            if (currentStream == 0)
                            {
                                if (a > Arrow.None)
                                {
                                    currentStream++;
                                    if (a.IsJump())
                                    {
                                        jumpStreams++;
                                    }
                                }
                            }
                            else
                            {
                                if (a > Arrow.None)
                                {
                                    currentStream++;
                                }
                                else
                                {
                                    if (currentStream >= 3)
                                    {
                                        streamCount++;
                                        totalStream += currentStream;
                                        if (currentStream > longestStream)
                                        {
                                            longestStream = currentStream;
                                        }
                                    }

                                    currentStream = 0;
                                }
                            }
                        }

                        break;
                }
                
                measureNumber += .25;
                if (nextChange != null)
                {
                    if (measureNumber >= nextChange.Measure)
                    {
                        currentBPM = nextChange.BPM;

                        if (currentBPM <= 100)
                        {
                            mode = SpeedMode.Slow;
                        }
                        else if (currentBPM > 100 && currentBPM < 230)
                        {
                            mode = SpeedMode.Normal;
                        }
                        else
                        {
                            mode = SpeedMode.Fast;

                        }
                        if (SpeedChanges.Count > changeIndex)
                        {
                            nextChange = SpeedChanges[changeIndex++];
                        }
                    }
                }

                colorIndex = colorIndex == 3 ? 0 : colorIndex + 1;
                currentColor = colors[colorIndex];
            }

            if (currentStream >= 3)
            {
                totalStream += currentStream;
                if (currentStream > longestStream)
                {
                    longestStream = currentStream;
                }
            }

            int twelfthCount = 0;
            foreach (Arrow a in TapData)
            {
                if (skip > 0)
                {
                    skip--;
                    if (a > Arrow.None)
                    {
                        twelfthCount++;
                    }
                }

                if (a == Arrow.All)
                {
                    skip = 3;
                }
            }

            int trillCount = 0, longestTrill = 0, totalTrill = 0, currentTrill = 0;

            changeIndex = 0;
            currentBPM = SpeedChanges[changeIndex++].BPM;
            measureNumber = 4;

            if (SpeedChanges.Count > changeIndex)
            {
                nextChange = SpeedChanges[changeIndex++];
            }

            if (currentBPM <= 100)
            {
                mode = SpeedMode.Slow;
            }
            else if (currentBPM > 100 && currentBPM < 230)
            {
                mode = SpeedMode.Normal;
            }
            else
            {
                mode = SpeedMode.Fast;
            }

            foreach (Arrow a in TapData)
            {
                if (skip > 0)
                {
                    skip--;
                }
                else
                {
                    if (a == Arrow.All)
                    {
                        skip = 3;
                        if (currentTrill >= 3)
                        {
                            trillCount++;
                            totalTrill += currentTrill;
                            if (currentTrill > longestTrill)
                            {
                                longestTrill = currentTrill;
                            }
                        }
                        else if (currentTrill == 2)
                        {
                            gallopCount++;
                        }

                        currentTrill = 0;
                        break;
                    }

                    switch (mode)
                    {
                        case SpeedMode.Normal:
                            if (currentTrill == 0)
                            {
                                if (a > Arrow.None)
                                {
                                    currentTrill++;
                                }
                            }
                            else
                            {
                                if (a > Arrow.None)
                                {
                                    currentTrill++;
                                }
                                else
                                {
                                    if (currentTrill >= 3)
                                    {
                                        trillCount++;
                                        totalTrill += currentTrill;
                                        if (currentTrill > longestTrill)
                                        {
                                            longestTrill = currentTrill;
                                        }
                                    }
                                    else if (currentTrill == 2)
                                    {
                                        gallopCount++;
                                    }

                                    currentTrill = 0;
                                }
                            }
                            break;

                        case SpeedMode.Fast:
                            if (currentTrill == 0)
                            {
                                if (a > Arrow.None)
                                {
                                    currentTrill++;
                                    skip = 1;
                                }
                            }
                            else
                            {
                                if (a > Arrow.None)
                                {
                                    currentTrill++;
                                    skip = 1;
                                }
                                else
                                {
                                    if (currentTrill >= 3)
                                    {
                                        trillCount++;
                                        totalTrill += currentTrill;
                                        if (currentTrill > longestTrill)
                                        {
                                            longestTrill = currentTrill;
                                        }
                                    }
                                    else if (currentTrill == 2)
                                    {
                                        gallopCount++;
                                    }

                                    currentTrill = 0;
                                }
                            }
                            break;
                    }
                }

                measureNumber += .25;
                if (nextChange != null)
                {
                    if (measureNumber >= nextChange.Measure)
                    {
                        currentBPM = nextChange.BPM;

                        if (currentBPM <= 100)
                        {
                            mode = SpeedMode.Slow;
                        }
                        else if (currentBPM > 100 && currentBPM < 230)
                        {
                            mode = SpeedMode.Normal;
                        }
                        else
                        {
                            mode = SpeedMode.Fast;

                        }
                        if (SpeedChanges.Count > changeIndex)
                        {
                            nextChange = SpeedChanges[changeIndex++];
                        }
                    }
                }

                colorIndex = colorIndex == 3 ? 0 : colorIndex + 1;
                currentColor = colors[colorIndex];
            }

            if (currentTrill >= 3)
            {
                totalTrill += currentTrill;
                if (currentTrill > longestTrill)
                {
                    longestTrill = currentTrill;
                }
            }
            else if (currentTrill == 2)
            {
                gallopCount++;
            }

            if (streamCount > 0)
            {
                stats["stream_avg"] = (int)(totalStream / streamCount);
            }
            else
            {
                stats["stream_avg"] = 0;
            }
            int freezes = 0, freezeDepth = 0;
            for (int i = 0; i < TapData.Count; i++)
            {
                if ((TapData[i] & FreezeData[i]) > 0)
                {
                    freezes++;
                }

                if (FreezeData[i] > Arrow.None)
                {
                    freezeDepth++;
                }
            }

            stats["stream_long"] = longestStream;
            stats["stream_total"] = totalStream;
            stats["jump_streams"] = jumpStreams;
            stats["stream_jumps"] = streamsWithJumps;
            stats["freezes"] = freezes;
            stats["freeze_depth"] = freezeDepth;
            if (trillCount > 0)
            {
                stats["trill_avg"] = (int)(totalTrill / trillCount);
            }
            else
            {
                stats["trill_avg"] = 0;
            }

            stats["trill_long"] = longestTrill;
            stats["trill_total"] = totalTrill;
            stats["twelth_note"] = twelfthCount;
            stats["gallops"] = gallopCount;

            StringBuilder sb = new StringBuilder();
            foreach (string k in stats.Keys)
            {
                sb.Append(k + ":" + stats[k] + ",");
            }

            return sb.ToString();
        }
    }
}


public enum SpeedMode
{
    Slow,
    Normal,
    Fast
}

public enum NoteColor
{
    Red,
    Blue,
    Yellow,
    Green
}