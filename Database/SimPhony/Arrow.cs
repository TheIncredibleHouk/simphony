using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace SimPhony
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
        private static Arrow[] KonamiArrows = new Arrow[8] { Arrow.P1L, Arrow.P1D, Arrow.P1U, Arrow.P1R,
                                                       Arrow.P2L, Arrow.P2D, Arrow.P2U, Arrow.P2R };

        private static Arrow[] StepmaniaArrows = new Arrow[8] { Arrow.P1R, Arrow.P1U, Arrow.P1D, Arrow.P1L,
                                                                Arrow.P2R, Arrow.P2U, Arrow.P2D, Arrow.P2L };

        public static Arrow ToArrow(this XElement e)
        {
            string s = e.Attribute("P1").Value + e.Attribute("P2").Value;
            Arrow a = Arrow.None;
            for (int i = 0; i < s.Length; i++)
            {
                a |= s[i] == '1' ? StepmaniaArrows[i] : 0;
            }

            return a;
        }

        public static Arrow ToArrow(this string s){
            Arrow a = Arrow.None;
            for (int i = 0; i < s.Length; i++)
            {
                a |= (s[i] == '1' || s[i] == '2') ? KonamiArrows[i] : 0;
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
                    held |= KonamiArrows[i];
                    returnArrow |= held;
                }
                else if (s[i] == '3')
                {
                    held |= KonamiArrows[i];
                    returnArrow |= held;
                    held ^= KonamiArrows[i];
                }
            }

            newArrow = held;
            return returnArrow;
        }

        public static bool IsJump(this Arrow a)
        {
            int b = (int)a;
            int taps = 0;
            for (int i = 0; i < 8; i++)
            {
                taps += b & 0x01;
                b = b >> 1;
            }

            return taps == 2;
        }
    }
}
