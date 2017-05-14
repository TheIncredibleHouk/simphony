using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    /// <summary>
    /// String functionality extensions.
    /// </summary>
    public static class StringConverters
    {
        #region Boolean
        /// <summary>
        /// Determines if the string can represent a Boolean value.
        /// </summary>
        /// <param name="_string">The string to test.</param>
        /// <returns>If the string equals: "yes", "no", "true", "false", "1" or "0", returns true, otherwise, false.</returns>
        public static bool IsBoolean(this string _string)
        {
            _string = _string.ToLower().Trim();
            return _string == "yes" || _string == "no" || _string == "true" || _string == "false" || _string == "1" || _string == "0";
        }

        private static bool _ToBool(string _string, bool useDefault, bool defaultValue)
        {
            if (string.IsNullOrEmpty(_string))
                return false;

            _string = _string.Trim().ToLower();
            if (_string == "t" || _string == "y" || _string == "true" || _string == "yes" || _string == "1")
                return true;
            else if (_string == "f" || _string == "n" || _string == "false" || _string == "no" || _string == "0")
                return false;

            if (useDefault)
            {
                return defaultValue;
            }

            return false;
        }

        /// <summary>
        /// Converts the string value to a boolean value.
        /// </summary>
        /// <param name="_bool">The string to convert.</param>
        /// <returns> For strings beginning with y or t (yes, true, TRUE, YES, etc) or just the value 1, true is returned. All other strings return false.</returns>
        public static bool ToBool(this string _string)
        {
            return StringConverters._ToBool(_string, false, false);
        }

        /// <summary>
        /// Converts the string value to a boolean value.
        /// </summary>
        /// <param name="_string">The string to convert.</param>
        /// <param name="defaultValue">Default value to return if the conversion fails.</param>
        /// <returns> For strings beginning with y or t (yes, true, TRUE, YES, etc) or just the value 1, true is returned. All other strings return false.</returns>
        public static bool ToBool(this string _string, bool defaultValue)
        {
            return StringConverters._ToBool(_string, true, defaultValue);
        }
        
        #endregion

        #region DateTime

        /// <summary>
        /// Determines if the string can represent a DateTime value.
        /// </summary>
        /// <param name="_string">The string to test.</param>
        /// <returns>True if the string can represent a DateTime, otherwise false.</returns>
        public static bool IsDateTime(this string _string)
        {
            DateTime dt = new DateTime();
            return DateTime.TryParse(_string, out dt);
        }

        private static DateTime _ToDateTime(string _string, bool useDefault, DateTime defaultValue)
        {
            DateTime dt = new DateTime();
            if (DateTime.TryParse(_string, out dt))
            {
                return dt;
            }

            if (useDefault)
            {
                return defaultValue;
            }

            throw new Exception(String.Format("Invalid DateTime conversion from '{0}'. Consider using IsDateTime to check validate.", _string));
        }
        /// <summary>
        /// Converts the string to a DateTime value.
        /// </summary>
        /// <param name="_string">String to convert.</param>
        /// <returns>The converted DateTime.</returns>
        public static DateTime ToDateTime(this string _string)
        {
            return StringConverters._ToDateTime(_string, true, Conventions.NullDate);
        }

        /// <summary>
        /// Converts the string to a DateTime value.
        /// </summary>
        /// <param name="_string">String to convert.</param>
        /// <param name="defaultValue">Default value to return if the conversion fails.</param>
        /// <returns>The converted DateTime.</returns>
        public static DateTime ToDateTime(this string _string, DateTime defaultValue)
        {
            return StringConverters._ToDateTime(_string, true, Conventions.NullDate);
        }

        #endregion

        #region Int32

        /// <summary>
        /// Determines if the string represents an Int32 value.
        /// </summary>
        /// <param name="_string">The string to test.</param>
        /// <returns>Whether the string represents an Int32 value.</returns>
        public static bool IsInt(this string _string)
        {
            int i;
            return Int32.TryParse(_string, out i);
        }


        private static int _ToInt(string _string, bool useDefault, int defaultValue)
        {
            int i;
            if (string.IsNullOrEmpty(_string))
            {
                return 0;
            }

            if (Int32.TryParse(_string, out i))
            {
                return i;
            }

            if (useDefault)
            {
                return defaultValue;

            }

            throw new Exception(string.Format("Invalid integer representation of '{0}'. Use IsInt to validate your string.", _string));
        }
        
        /// <summary>
        /// Returns the integer representation of the string. Blank strings and null return 0.
        /// </summary>
        /// <param name="_string">The string to convert.</param>
        /// <returns>The integer value of the string.</returns>
        public static int ToInt(this string _string)
        {
            return StringConverters._ToInt(_string, false, 0);
        }

        /// <summary>
        /// Returns the integer representation of the string. Blank strings and null return 0.
        /// </summary>
        /// <param name="_string">The string to convert.</param>
        ///<param name="defaultValue">The default value to return if the conversion fails.</param>
        /// <returns>The integer value of the string.</returns>
        public static int ToInt(this string _string, int defaultValue)
        {
            return StringConverters._ToInt(_string, true, defaultValue);
        }
        #endregion

        #region Double

        /// <summary>
        /// Determines if the string represents an Double value.
        /// </summary>
        /// <param name="_string">The string to test.</param>
        /// <param name="strict">If true, throws an exception for invalid integers.</param>
        /// <returns>Whether the string represents an Int32 value.</returns>
        public static bool IsDouble(this string _string)
        {
            double d;
            return Double.TryParse(_string, out d);
        }

        private static double _ToDouble(string _string, bool useDefault, double defaultValue)
        {
            Double d;

            if (string.IsNullOrEmpty(_string))
            {
                return 0;
            }

            if (Double.TryParse(_string, out d))
            {
                return d;
            }

            if (useDefault)
            {
                return defaultValue;
            }

            throw new Exception(string.Format("Invalid double representation of '{0}'. Use IsDouble to validate your string.", _string));
        }

        /// <summary>
        /// Returns the double representation of the string. Blank strings and null return 0.
        /// </summary>
        /// <param name="_string">The string to convert.</param>
        /// <returns>The double value of the string.</returns>
        public static double ToDouble(this string _string)
        {
            return StringConverters._ToDouble(_string, false, 0);
        }

        /// <summary>
        /// Returns the double representation of the string. Blank strings and null return 0.
        /// </summary>
        /// <param name="_string">The string to convert.</param>
        /// <param name="defaultValue">The default value to return if the conversion fails.</param>
        /// <returns>The double value of the string.</returns>
        public static double ToDouble(this string _string, double defaultValue)
        {
            return StringConverters._ToDouble(_string, true, defaultValue);
        }
        #endregion

        #region Enum
        /// <summary>
        /// Determines of the string represents an enumeration value of type T, ignoring case.
        /// </summary>
        /// <typeparam name="T">Enum</typeparam>
        /// <param name="_string">String value to test.</param>
        /// <returns>True if the string represents an enumeration value, ignoring case.</returns>
        public static bool IsEnum<T>(this string _string) where T : struct, IConvertible
        {
            if (!typeof(T).IsEnum)
                throw new ArgumentException("T must be an enumeration type.");

            _string = _string.Trim().ToLower();
            foreach (string s in Enum.GetNames(typeof(T)))
            {
                if (s.ToLower() == _string)
                    return true;
            }

            return false;
        }

        private static T _ToEnum<T>(string _string, bool useDefault, T defaultValue) where T : struct, IConvertible
        {
            if (!typeof(T).IsEnum)
                throw new ArgumentException("T must be an enumeration type.");

            _string = _string.Trim();
            if (_string.IsEnum<T>())
            {
                return (T)Enum.Parse(typeof(T), _string, true);
            }

            if (useDefault)
            {
                return defaultValue;
            }            

            throw new Exception(string.Format("Invalid enumeration conversion on string '{0}' to type '{1}'. Try using IsEnum<T>.", _string, typeof(T)));
            
        }

        /// <summary>
        /// Converts the string to an enumeration value of type T, ignoring case.
        /// </summary>
        /// <typeparam name="T">Enum</typeparam>
        /// <param name="_string">String value to convert.</param>
        /// <returns>The numeration value represneted by the string, ignoring case.</returns>
        public static T ToEnum<T>(this string _string) where T: struct, IConvertible
        {
            return StringConverters._ToEnum<T>(_string, false, default(T));
        }



        /// <summary>
        /// Converts the string to an enumeration value of type T, ignoring case.
        /// </summary>
        /// <typeparam name="T">Enum</typeparam>
        /// <param name="_string">String value to convert.</param>
        /// <param name="defaultValue">The default value if the conversion fails.</param>
        /// <returns>The numeration value represneted by the string, ignoring case.</returns>
        public static T ToEnum<T>(this string _string, T defaultValue) where T : struct, IConvertible
        {
            return StringConverters._ToEnum<T>(_string, true, defaultValue);
        }
        #endregion

    }
}
