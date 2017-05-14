using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    /// <summary>
    /// Extension functions of classes that implement IEnumerable.
    /// </summary>
    public static class CollectionExtensons
    {
        /// <summary>
        /// Returns the collection as a string seperated by the delimiter.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="list"></param>
        /// <param name="firstString"></param>
        /// <param name="formatString"></param>
        /// <returns></returns>
        public static string ToDelimitedString<T>(this IEnumerable<T> list, string delimiter)
        {
            StringBuilder sb = new StringBuilder();
            foreach (T t in list)
            {
                sb.AppendFormatWithFirst("{0}", "{1}{0}", t, delimiter);
            }

            return sb.ToString();
        }

        /// <summary>
        /// Returns the collection of objects as another list of another object.
        /// </summary>
        /// <typeparam name="T">Type to object to cast to.</typeparam>
        /// <param name="list">List to cast.</param>
        /// <returns>Type to convert</returns>
        public static List<T> CastAs<T>(this IEnumerable<object> list)
        {
            List<T> returnList = new List<T>();
            foreach (object c in list)
            {
                returnList.Add((T) c);
            }

            return returnList;
        }

	    /// <summary>
	    /// Returns distinct elements from a sequence by using the given mutator function called on each value, and comparing
	    /// values based on the mutated results.
	    /// </summary>
	    /// <typeparam name="T">The type of the elements of source.</typeparam>
	    /// <typeparam name="TResult">The resulting type of the elements after they are mutated.</typeparam>
	    /// <param name="source">The sequence to remove duplicate elements from.</param>
	    /// <param name="mutator">A mutator function to call on each value before comparison.</param>
	    /// <returns>An IEnumerable that contains distinct elements from the source sequence.</returns>
	   public static IEnumerable<T> Distinct<T,TResult>(this IEnumerable<T> source,Func<T,TResult> mutator) {
		   return source.Distinct(new DelegateComparer<T,TResult>(mutator));
	   }

	   private class DelegateComparer<T,TResult>:IEqualityComparer<T> {
		   private readonly Func<T,TResult> delegateFunc;

		   public DelegateComparer(Func<T,TResult> identitySelector) {
			   this.delegateFunc = identitySelector;
		   }

		   public bool Equals(T x,T y) {
			   return Equals(delegateFunc(x),delegateFunc(y));
		   }

		   public int GetHashCode(T obj) {
			   return delegateFunc(obj).GetHashCode();
		   }
	   }
    }
}
