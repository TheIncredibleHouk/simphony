using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    public static class BooleanExtensions
    {
        /// <summary>
        /// Converts the boolean value into "Yes" or "No".
        /// </summary>
        /// <param name="_bool">Boolean value</param>
        /// <returns>Returns "Yes" of true, "No" if false.</returns>
        public static string ToYesNo(this bool _bool)
        {
            return _bool ? "Yes" : "No";
        }

        /// <summary>
        /// Converts the boolean value into "Y" or "N" (upper case).
        /// </summary>
        /// <param name="_bool">Boolean value</param>
        /// <returns>Returns "Y" of true, "N" if false.</returns>
        public static string ToYN(this bool _bool)
        {
            return _bool ? "Y" : "N";
        }

	   /// <summary>
	   /// Converts the boolean value into "T" or "F" (upper case).
	   /// </summary>
	   /// <param name="_bool">Boolean value</param>
	   /// <returns>Returns "T" of true, "F" if false.</returns>
	   public static string ToTF(this bool _bool) {
		   return _bool ? "T" : "F";
	   }

	    /// <summary>
	    /// Converts this boolean value into "1" or "0".
	    /// </summary>
	    /// <returns>Returns "1" for true or "0" for false.</returns>
	   public static string To10(this bool _bool) {
		   return _bool? "1":"0";
	   }
    }
}
