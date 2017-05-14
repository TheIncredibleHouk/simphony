using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Linq;

using DaizBase;

namespace Converter
{
    public class MiniChartInfo
    {
        public int ID { get; set; }

        public int Rating { get; private set; }

        public string Difficulty { get; private set; }

        public string Style { get; private set; }

        public string Description { get; private set; }

        public MiniChartInfo(ChartInfo info)
        {
            ID = info.ID;
            Rating = info.Rating;
            Difficulty = info.Difficulty;
            Style = info.Style;
            Description = info.Description;
        }
    }

    [DbTable("chart")]
    public class ChartInfo : DbObject
    {
        [DbColumn("id", true)]
        public int ID { get; set; }

        [DbColumn("arrowdata")]
        private string _ArrowData { get; set; }

        
        public List<Arrow> ArrowData { get; private set; }
        public List<Arrow> FreezeData { get; private set; }

        [DbColumn("rating")]
        public int Rating { get; private set; }

        [DbColumn("difficulty")]
        public string Difficulty { get; private set; }

        [DbColumn("style")]
        public string Style { get; private set; }

        [DbColumn("description")]
        public string Description { get; private set; }

        [DbColumn("locked")]
        public bool Locked { get;  set; }

        [DbColumn("editid")]
        public int EditID { get; set; }

        public bool Load(int id)
        {
            return KeyLoad(id);
        }

        public ChartInfo()
        {
            ArrowData = new List<Arrow>();
            FreezeData = new List<Arrow>();
            Locked = true;
        }


        public bool New(int )
        {
        }

        public int LoadFromData(string[] data, int pointer)
        {
            string s = "";
            Style = data[pointer++].Replace("dance-", "").TrimEnd(':');
            Style = Style[0].ToString().ToUpper() + Style.Substring(1);
            Description = data[pointer++].TrimEnd(':');
            Difficulty = data[pointer++].TrimEnd(':');
            Difficulty = Difficulty[0].ToString().ToUpper() + Difficulty.Substring(1);
            Rating = Convert.ToInt32(data[pointer++].TrimEnd(':'));

            pointer++;

            List<string> measure = new List<string>();
            List<string> allData = new List<string>();
            while (s != ";")
            {
                measure.Clear();
                s  = data[pointer++];
                while(s != "," && s != ";")
                {
                    measure.Add(s);
                    allData.Add(s);
                    s  = data[pointer++];
                }

                switch (measure.Count)
                {
                    case 4:
                        for (int i = 0; i < 4; i++)
                        {
                            ArrowData.Add(measure[i].ToArrow());
                            for (int j = 0; j < 3; j++)
                            {
                                ArrowData.Add(Arrow.None);
                            }
                        }
                        break;

                    case 8:
                        for (int i = 0; i < 8; i++)
                        {
                            ArrowData.Add(measure[i].ToArrow());
                            ArrowData.Add(Arrow.None);
                        }
                        break;

                    case 12:
                        for (int i = 0; i < 4; i++)
                        {
                            ArrowData.Add(Arrow.All);
                            ArrowData.Add(measure[i * 3].ToArrow());
                            ArrowData.Add(measure[i * 3 + 1].ToArrow());
                            ArrowData.Add(measure[i * 3 + 2].ToArrow());
                        }
                        break;

                    case 16:
                        for (int i = 0; i < 16; i++)
                        {
                            ArrowData.Add(measure[i].ToArrow());
                        }
                        break;

                }
            }

            Arrow freezesOn = Arrow.None;
            foreach (var a in allData)
            {
                FreezeData.Add(a.ToFreeze(freezesOn, out freezesOn));
            }

            return pointer;
        }

        public void LoadFromXML(XDocument doc)
        {
            foreach (var a in doc.Root.Attributes())
            {
                switch (a.Name.LocalName)
                {
                    case "rating":
                        Rating = Convert.ToInt32(a.Value);
                        break;

                    case "description":
                        Description = a.Value;
                        break;

                    case "style":
                        Style = a.Value;
                        break;

                    case "difficulty":
                        Difficulty = a.Value;
                        break;
                }
            }

            foreach (var e in doc.Root.Elements())
            {
                if (e.Name.LocalName == "stepdata")
                {
                    foreach (var x in e.Elements())
                    {
                        ArrowData.Add(e.ToArrow());
                    }
                }
                else if (e.Name.LocalName == "freezedata")
                {
                    foreach (var x in e.Elements())
                    {
                        FreezeData.Add(e.ToArrow());
                    }
                }
            }
        }
    }
}
