using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SimPhony
{
    public class SimFileData
    {
        public string SongTitle { get; set; }
        public int FirstMeasure { get; set; }
        public List<ChartData> Charts { get; set; }
        public List<SpeedChange> SpeedChanges { get; set; }

        public SimFileData()
        {
            Charts = new List<ChartData>();
            SpeedChanges = new List<SpeedChange>();
        }
    }
}
