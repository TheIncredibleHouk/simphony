using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    /// <summary>
    /// Extensions for DateTime
    /// </summary>
    public static class DateTimeExtensions
    {
        /// <summary>
        /// Returns the DateTime as a standard MM/DD/YYYY format. NullDate returns a blank string.
        /// </summary>
        /// <param name="dateTime">The DateTime to format.</param>
        /// <returns>The formatted string.</returns>
        public static string ToStandardString(this DateTime dateTime)
        {
            if (dateTime == Conventions.NullDate)
                return "";

            return dateTime.ToShortDateString();
        }
    }
}
