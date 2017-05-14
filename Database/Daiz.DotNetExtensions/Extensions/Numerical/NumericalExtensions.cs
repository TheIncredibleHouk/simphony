using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    /// <summary>
    /// Extensions for numerical primitives.
    /// </summary>
    public static class NumericalExtensions
    {
        /// <summary>
        /// Returns the double with decimal place spacing and the option for commas.
        /// </summary>
        /// <param name="commas">Whether to include commas between each numerical period (thounsands, millions, etc)</param>
        /// <param name="decimalPlaces">Number of decimal places to include.</param>
        /// <returns>The formatted string.</returns>
        public static string ToStandardString(this double number, bool commas = false, int decimalPlaces = 0)
        {
            string decimals = ".";
            for (int i = 0; i < decimalPlaces; i++)
            {
                decimals += "0";
            }

            return String.Format(String.Format("{{0:0{0}{1}}}", commas ? ",0" : "", decimals), number);
        }

	   /// <summary>
	   /// Returns the decimal with decimal place spacing and the option for commas.
	   /// </summary>
	   /// <param name="commas">Whether to include commas between each numerical period (thounsands, millions, etc)</param>
	   /// <param name="decimalPlaces">Number of decimal places to include.</param>
	   /// <returns>The formatted string.</returns>
	   public static string ToStandardString(this decimal number,bool commas = false,int decimalPlaces = 0) {
		   string decimals = ".";
		   for(int i = 0;i < decimalPlaces;i++) {
			   decimals += "0";
		   }

		   return String.Format(String.Format("{{0:0{0}{1}}}",commas ? ",0" : "",decimals),number);
	   }

        /// <summary>
        /// Returns the integer with commas
        /// </summary>
        /// <returns>The formatted string.</returns>
        public static string ToCommaString(this int number)
        {
            return String.Format("{0:0,0}", number);
        }
    }
}
