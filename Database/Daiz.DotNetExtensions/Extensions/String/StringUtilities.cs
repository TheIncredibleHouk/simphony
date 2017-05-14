using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    public static class StringUtilities
    {
        #region string
        /// <summary>
        /// Returns the portion of the string at the start index to the end. If the start index goes
        /// beyond the bounds of the string, an empty string is returned.
        /// </summary>
        /// <param name="_string">The string to pull from.</param>
        /// <param name="start">Start index in the string.</param>
        /// <returns>The portion of the string at the start index to the end. If the start index goes
        /// beyond the bounds of the string, an empty string is returned</returns>
        public static string SmartSubstring(this string _string, int start)
        {
            if(start >= _string.Length){
                return "";
            }

            return _string.Substring(start);
        }

        /// <summary>
        /// Returns the portion of the string at the start index with the number of characters. If the start index goes
        /// beyond the bounds of the string, an empty string is returned. If the start index plus number of characters goes
        /// beyond the length of the string, the string from the start index to the end is returned.
        /// </summary>
        /// <param name="_string">The string to pull from.</param>
        /// <param name="start">Start index in the string.</param>
        /// <param name="numberOfCharacters">Number of characters to pull.</param>
        /// <returns>The portion of the string at the start index with the number of characters. If the start index goes
        /// beyond the bounds of the string, an empty string is returned. If the start index plus number of characters goes
        /// beyond the length of the string, the string from the start index to the end is returned.</returns>
        public static string SmartSubstring(this string _string, int start, int numberOfCharacters)
        {
            if (start + numberOfCharacters >= _string.Length)
            {
                return _string.SmartSubstring(start);
            }

            return _string.Substring(start, numberOfCharacters);
        }

        /// <summary>
        /// Returns the portion of the string at the start index with the number of characters. If the start index goes
        /// beyond the bounds of the string, an empty string is returned. If the start index plus number of characters goes
        /// beyond the length of the string, the string from the start index to the end is returned.
        /// </summary>
        /// <param name="_string">The string to pull from.</param>
        /// <param name="start">Start index in the string.</param>
        /// <param name="numberOfCharacters">Number of characters to pull.</param>
        /// <param name="moreIndicator">If the string is longer than the number of characters to to provide, this string will indicate it by displaying.</param>
        /// <returns>The portion of the string at the start index with the number of characters. If the start index goes
        /// beyond the bounds of the string, an empty string is returned. If the start index plus number of characters goes
        /// beyond the length of the string, the string from the start index to the end is returned.</returns>
        public static string SmartSubstring(this string _string, int start, int numberOfCharacters, string moreIndicator)
        {
            if (start + numberOfCharacters >= _string.Length)
            {
                return _string.SmartSubstring(start);
            }

            if (_string.Length > numberOfCharacters)
            {
                return _string.Substring(start, numberOfCharacters) + moreIndicator;
            }

            return _string.Substring(start, numberOfCharacters);
        }

        private const string _puncChars = ".!?";
        /// <summary>
        /// Returns the portion of the string at the start index with the number of characters. If the start index goes
        /// beyond the bounds of the string, an empty string is returned. If the start index plus number of characters goes
        /// beyond the length of the string, the string from the start index to the end is returned.
        /// </summary>
        /// <param name="_string">The string to pull from.</param>
        /// <param name="start">Start index in the string.</param>
        /// <param name="numberOfCharacters">Number of characters to pull.</param>
        ///<param name="extendToEndOfSentence">If true, the string returned will extend to either the end of the sentence or end of the word.</param>
        /// <returns>The portion of the string at the start index with the number of characters. If the start index goes
        /// beyond the bounds of the string, an empty string is returned. If the start index plus number of characters goes
        /// beyond the length of the string, the string from the start index to the end is returned.</returns>
        public static string SmartSubstring(this string _string, int start, int numberOfCharacters, bool extendToEndOfSentence)
        {
            if (start + numberOfCharacters >= _string.Length)
            {
                return _string.SmartSubstring(start);
            }

            if (_string.Length > numberOfCharacters && extendToEndOfSentence)
            {
                string s = _string.Substring(start, numberOfCharacters);
                for (int i = start + numberOfCharacters; i < _string.Length; i++)
                {
                    if (_puncChars.Contains(_string[i]))
                    {
                        s += _string[i++];
                        if (i < s.Length)
                        {
                            if (_puncChars[i] == '"')
                            {
                                s += '"';
                            }
                        }

                        break;
                    }

                    s += _string[i];
                }

                return s;
            }

            return _string.Substring(start, numberOfCharacters);
        }

        /// <summary>
        /// Splits the string into a dictionary on the given delimiters.
        /// </summary>
        /// <param name="_string">String to operate on.</param>
        /// <param name="pairDelimiter">The character that separates each key value pair.</param>
        /// <param name="keyValueDelimiter">The character that separates the key and value.</param>
        /// <returns>Dictionary of the key value pairs.</returns>
        public static Dictionary<string, string> SplitToDictionary(this string _string, char pairDelimiter, char keyValueDelimiter)
        {
            Dictionary<string, string> returnValue = new Dictionary<string, string>();
            string[] split = _string.Split(pairDelimiter);
            foreach (string s in split)
            {
                string[] split2 = s.Split(keyValueDelimiter);
                if (split2.Length == 2)
                {
                    returnValue.Add(split2[0], split2[1]);
                }
                else if (split2.Length == 1)
                {
                    returnValue.Add(split2[0], "");
                }
            }

            return returnValue;
        }

        /// <summary>
        /// Sanitizes the string to remove SQL injection.
        /// </summary>
        /// <param name="_string">The string to operate on.</param>
        /// <returns>The sanitized string.</returns>
        public static string SqlSanitize(this string _string)
        {
            return _string.Replace("'", "''");
        }
        #endregion

        #region string builder
        /// <summary>
        /// Appends to the string builder with a format string using a different string for the first append, and a different string
        /// for all subsequent appends.
        /// </summary>
        /// <param name="stringBuilder">The string builder to operate on.</param>
        /// <param name="_firstString">The first formatted string to use.</param>
        /// <param name="_string">The formated string to use after the first append.</param>
        /// <param name="objects">Object array of zero or more items to format.</param>
        public static void AppendFormatWithFirst(this StringBuilder stringBuilder, string _firstString, string _string, params object[] objects)
        {
            if (stringBuilder.Length == 0)
            {
                stringBuilder.AppendFormat(_firstString, objects);
            }
            else
            {
                stringBuilder.AppendFormat(_string, objects);
            }
        }

        
        #endregion

        public static string Base64Encode(this string s)
        {
            return Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(s));
        }

        public static string Base64Decode(this string s)
        {
            return System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(s));
        }
    }
}
