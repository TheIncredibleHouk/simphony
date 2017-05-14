using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.Utilities.Cache
{
    /// <summary>
    /// Creates basic cache of items that cannot be modified outside of purging the cache.
    /// </summary>
    /// <typeparam name="T">Type of items.</typeparam>
    public class ReadOnlyListCache<T> : Cache<T>
    {
        /// <summary>
        /// Creates a new ReadOnlyListCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        public ReadOnlyListCache(InitializeCache cacheDelegate)
            : base(cacheDelegate)
        {
        }

        /// <summary>
        /// Creates a new ReadOnlyListCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="expiration">Amount of time cache is allowed to persist.</param>
        public ReadOnlyListCache(TimeSpan expiration)
            : base(expiration)
        {
        }

        /// <summary>
        /// Creates a new ReadOnlyListCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="expiration">Amount of time cache is allowed to persist.</param>
        public ReadOnlyListCache(InitializeCache cacheDelegate, TimeSpan expiration)
            : base(cacheDelegate, expiration)
        {
        }
    }
}
