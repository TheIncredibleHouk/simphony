using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Daiz.DotNet
{
    public static class StringFormatters
    {
        #region stripper functions

        /// <summary>
        /// Strips all specific characters from the string.
        /// </summary>
        /// <param name="_string">The string to operate on.</param>
        /// <param name="characters">Characters to remove from the string.</param>
        /// <returns>The string without the characters.</returns>
        public static string Strip(this string _string, IEnumerable<char> characters)
        {
            StringBuilder sb = new StringBuilder();
            foreach (char c in _string)
            {
                if (!characters.Contains(c))
                {
                    sb.Append(c);
                }
            }

            return sb.ToString();
        }

        /// <summary>
        /// Strips all specific characters from the string.
        /// </summary>
        /// <param name="_string">The string to operate on.</param>
        /// <param name="characters">Characters to remove from the string.</param>
        /// <returns>The string without the characters.</returns>
        public static string Strip(this string _string, string characters)
        {
            return _string.Strip(characters.ToCharArray());
        }

        /// <summary>
        /// Removes all numeric characters from the string.
        /// </summary>
        /// <param name="_string">The string to operate on.</param>
        /// <returns>The string without numeric characters</returns>
        public static string StripNumbers(this string _string)
        {
            StringBuilder sb = new StringBuilder();
            foreach (char c in _string)
            {
                if (c < '0' || c > '9')
                {
                    sb.Append(c);
                }
            }

            return sb.ToString();
        }

        /// <summary>
        /// Removes all nonnumeric characters from the string.
        /// </summary>
        /// <param name="_string">The string to operate on.</param>
        /// <param name="includeDecimal">If true, the decimal character will be included.</param>
        /// <returns>The string with only numeric characters</returns>
        public static string StripNonNumbers(this string _string)
        {
            StringBuilder sb = new StringBuilder();
            
            foreach (var c in _string)
            {
                if (c >= '0' && c <= '9')
                {
                    sb.Append(c);
                }
            }

            return sb.ToString();
        }

        private static char[] _whiteSpace = new char[] { '\r', '\t', '\n', ' ' };
        /// <summary>
        /// Removes all white space (\r, \t, \n, &lt;space&gt;) from the string.
        /// </summary>
        /// <param name="_string">The string to operate on.</param>
        /// <returns>The string without white space.</returns>
        public static string StripWhiteSpace(this string _string)
        {
            return _string.Strip(_whiteSpace);
        }
        #endregion

        #region formatting

        /// <summary>
        /// Formats the string as a tax id.
        /// </summary>
        /// <param name="_string">The string to format.</param>
        /// <returns>The string as a tax id.</returns>
        public static string FormatAsTaxID(this string _string)
        {
            _string = _string.Trim().PadLeft(9);
            return string.Format("{0}-{1}", _string.SmartSubstring(0, 2), _string.SmartSubstring(2));
        }

        /// <summary>
        /// Formats the string as a social security number.
        /// </summary>
        /// <param name="_string">The string to format.</param>
        /// <returns>The string as a social securit number.</returns>
        public static string FormatAsSocial(this string _string)
        {
            _string = _string.Trim().PadLeft(9);
            return string.Format("{0}-{1}-{2}", _string.SmartSubstring(0, 3), _string.SmartSubstring(3, 2), _string.SmartSubstring(5));
        }

        /// <summary>
        /// Formats the string as a phone number.
        /// </summary>
        /// <param name="_string">The string to format.</param>
        /// <returns>The string as a local or long distance phone number, depending on string size.</returns>
        public static string FormatAsPhone(this string _string)
        {
            _string = _string.Trim();
            if (_string.Length <= 7)
            {
                _string = _string.PadLeft(7);
                return string.Format("{0}-{1}", _string.SmartSubstring(0, 3), _string.SmartSubstring(3));
            }

            _string = _string.PadLeft(10);
            return string.Format("({0}) {1}-{2}", _string.SmartSubstring(0, 3), _string.SmartSubstring(3, 3), _string.SmartSubstring(6));
        }


        /// <summary>
        /// Formats a string as a currency value.
        /// </summary>
        /// <param name="_string">The string to format.</param>
        /// <returns></returns>
        public static string FormatAsCurrency(this string _string, int precision = 2)
        {
            if (_string.IsDouble())
            {
                return string.Format("{0:C" + precision + "}", _string.ToDouble());
            }

            return _string;
        }


        /// <summary>
        /// Formats a string as a currency value.
        /// </summary>
        /// <param name="_string">The string to format.</param>
        /// <returns></returns>
        public static string FormatAsDate(this string _string)
        {
            if (_string.IsDateTime())
            {
                DateTime date = _string.ToDateTime();
                if (date == Conventions.NullDate)
                {
                    return "";
                }

                return date.ToShortDateString();
            }

            return _string;
        }

        private const string match_links = @"(?<=\()\b(https?://|www\.)[-A-Za-z0-9+&@#/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#/%=~_()|](?=\))|(?<=(?<wrap>[=~|_#]))\b(https?://|www\.)[-A-Za-z0-9+&@#/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#/%=~_()|](?=\k<wrap>)|\b(https?://|www\.)[-A-Za-z0-9+&@#/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#/%=~_()|]";
        public static string MakeLinksClickable(this string _string)
        {
            foreach (System.Text.RegularExpressions.Group g in Regex.Match(_string, match_links, RegexOptions.Multiline | RegexOptions.IgnoreCase).Groups)
            {
                if (g.Success)
                {
                    if (g.Value.Length < 10) { continue; }
                    _string = _string.Replace(g.Value, String.Format("<a target='_blank' href='{0}'>{1}</a>", NormalizeUrl(g.Value), g.Value.Length > 10 ? g.Value.Substring(0, 30) + "..." : g.Value));
                }
            }

            return _string;
        }

        private static string NormalizeUrl(string url)
        {
            if (url.StartsWith("http://") || url.StartsWith("https://"))
            {
                return url;
            }

            return "http://" + url;
        }
        #endregion
    }
}
