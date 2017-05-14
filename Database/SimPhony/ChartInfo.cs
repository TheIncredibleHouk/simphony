using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SimPhony
{
    public class ChartInfo
    {
        public Style Style { get; set; }
        public SimDifficulty Difficulty { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string ID { get; set; }
        public List<string> Errors { get; set; }

        public ChartInfo()
        {
            ID = Guid.NewGuid().ToString();
            Errors = new List<string>();
        }
    }
}
