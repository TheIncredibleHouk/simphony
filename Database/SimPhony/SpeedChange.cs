using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SimPhony
{
    public class SpeedChange
    {
        public int BPM { get; set; }
        public double Measure { get; set; }

        public SpeedChange(int b, double m)
        {
            BPM = b;
            Measure = m;
        }
    }
}
