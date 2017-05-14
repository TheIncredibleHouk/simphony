using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Converter
{
    public class SimfileReader
    {
        public static List<ChartInfo> LoadCharts(byte[] data)
        {
            string[] strings = UTF8Encoding.UTF8.GetString(data).Split('\n');
            List<ChartInfo> charts = new List<ChartInfo>();
            for (int i = 0; i < strings.Length; i++)
            {
                if (strings[i++].Contains("#NOTES"))
                {
                    ChartInfo chart = new ChartInfo();
                    i = chart.LoadFromData(strings, i);
                    charts.Add(chart);
                }
            }

            return charts;
        }
    }
}
