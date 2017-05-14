using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace SimPhony
{
    public static class Converter
    {
        private static Arrow[] SMArrows = new Arrow[8] { Arrow.P1L, Arrow.P1D, Arrow.P1U, Arrow.P1R, Arrow.P2L, Arrow.P2D, Arrow.P2U, Arrow.P2R };
        private static Arrow[] DDRArrows = new Arrow[8] { Arrow.P1R, Arrow.P1U, Arrow.P1D, Arrow.P1L, Arrow.P2R, Arrow.P2U, Arrow.P2D, Arrow.P2L };

        public static Arrow StringToTaps(string s)
        {
            Arrow a = Arrow.None;
            for (int i = 0; i < s.Length; i++)
            {
                a |= (s[i] == '1' || s[i] == '2') ? SMArrows[i] : 0;
            }

            return a;
        }

        public static Arrow StringToFreezes(string s, Arrow held, out Arrow newArrow)
        {
            Arrow returnArrow = held;
            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == '2')
                {
                    held |= SMArrows[i];
                    returnArrow |= held;
                }
                else if (s[i] == '3')
                {
                    held |= SMArrows[i];
                    returnArrow |= held;
                    held ^= SMArrows[i];
                }
            }

            newArrow = held;
            return returnArrow;
        }

        public static XElement TapsToXmlNode(Arrow a)
        {
            XElement xe = new XElement("NODE");
            string p1 = "";
            string p2 = "";
            for (int i = 0; i < 4; i++)
            {
                p1 += (a & DDRArrows[i]) > 0 ? "1" : "0";
            }

            for (int i = 4; i < 8; i++)
            {
                p2 += (a & DDRArrows[i]) > 0 ? "1" : "0";
            }

            xe.SetAttributeValue("P1", p1);
            xe.SetAttributeValue("P2", p2);
            return xe;
        }

        public static XElement ConvertTapsToXml(string type, List<Arrow> arrows)
        {
            XElement xe = new XElement(type.ToUpper());
            foreach (var a in arrows)
            {
                xe.Add(Converter.TapsToXmlNode(a));
            }

            return xe;
        }
    }
}
