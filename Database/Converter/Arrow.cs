using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace Converter
{
    [Flags]
    public enum Arrow
    {
        None = 0x00,
        P1L = 0x10,
        P1D = 0x20,
        P1U = 0x40,
        P1R = 0x80,
        P2L = 0x01,
        P2D = 0x02,
        P2U = 0x04,
        P2R = 0x08,
        All = 0xFF
    }

    
    public static class ArrowExt
    {
        private static Arrow[] Arrows = new Arrow[8] { Arrow.P1L, Arrow.P1D, Arrow.P1U, Arrow.P1R,
                                                       Arrow.P2L, Arrow.P2D, Arrow.P1U, Arrow.P2R };

        public static Arrow ToArrow(this XElement e)
        {
            return e.Value.ToArrow();
        }

        public static Arrow ToArrow(this string s){
            Arrow a = Arrow.None;
            for (int i = 0; i < s.Length; i++)
            {
                a |= (s[i] == '1' || s[i] == '2') ? Arrows[i] : 0;
            }

            return a;
        }

        public static Arrow ToFreeze(this string s, Arrow held, out Arrow newArrow)
        {
            Arrow returnArrow = held;
            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == '2')
                {
                    held |= Arrows[i];
                    returnArrow |= held;
                }
                else if (s[i] == '3')
                {
                    held |= Arrows[i];
                    returnArrow |= held;
                    held ^= Arrows[i];
                }
            }

            newArrow = held;
            return returnArrow;
        }
    }
}
