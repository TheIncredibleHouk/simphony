using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.Utilities.Cache
{
    /// <summary>
    /// Basic cache of key value pairs.
    /// </summary>
    /// <typeparam name="K">Type of key.</typeparam>
    /// <typeparam name="V">Type of value.</typeparam>
    public class ReadOnlyKeyValueCache<K, V> : Cache<K, V>
    {
        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        public ReadOnlyKeyValueCache(InitializeCache cacheDelegate)
            : base(cacheDelegate)
        {
        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        public ReadOnlyKeyValueCache(TimeSpan expiration)
            : base(expiration)
        {

        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        public ReadOnlyKeyValueCache(InitializeCache cacheDelegate, TimeSpan expiration)
            : base(cacheDelegate, expiration)
        {

        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="lookupDelegate">The delegate used to lookup an item if it does not exist in the cache.</param>
        public ReadOnlyKeyValueCache(InitializeCache cacheDelegate, LookUpItem lookupDelegate)
            : base(cacheDelegate, lookupDelegate)
        {
        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        /// <param name="lookupDelegate">The delegate used to lookup an item if it does not exist in the cache.</param>
        public ReadOnlyKeyValueCache(InitializeCache cacheDelegate, TimeSpan expiration, LookUpItem lookupDelegate)
            : base(cacheDelegate, expiration, lookupDelegate)
        {

        }
    }
}
