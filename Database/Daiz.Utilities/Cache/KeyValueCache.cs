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
    public class KeyValueCache<K, V> : Cache<K, V>
    {
        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        public KeyValueCache(TimeSpan expiration)
            : base(expiration)
        {
        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        public KeyValueCache(InitializeCache cacheDelegate)
            : base(cacheDelegate)
        {
        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        public KeyValueCache(InitializeCache cacheDelegate, TimeSpan expiration)
            : base(cacheDelegate, expiration)
        {
            
        }


        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="lookupDelegate">The delegate used to lookup an item if it does not exist in the cache.</param>
        public KeyValueCache(LookUpItem lookupDelegate)
            : base(lookupDelegate)
        {
        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="lookupDelegate">The delegate used to lookup an item if it does not exist in the cache.</param>
        /// /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        public KeyValueCache(LookUpItem lookupDelegate, TimeSpan expiration)
            : base(lookupDelegate, expiration)
        {

        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="lookupDelegate">The delegate used to lookup an item if it does not exist in the cache.</param>
        public KeyValueCache(InitializeCache cacheDelegate, LookUpItem lookupDelegate)
            : base(cacheDelegate, lookupDelegate)
        {
        }

        /// <summary>
        /// Creates a new KeyValueCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="expiration">The amount of time the cache is allowed to persist.</param>
        /// <param name="lookupDelegate">The delegate used to lookup an item if it does not exist in the cache.</param>
        public KeyValueCache(InitializeCache cacheDelegate, LookUpItem lookupDelegate, TimeSpan expiration)
            : base(cacheDelegate, expiration, lookupDelegate)
        {

        }

        /// <summary>
        /// Adds or udpates the item in the cache.
        /// </summary>
        /// <param name="key">Key with the item.</param>
        /// <param name="value">Item associated with the key.</param>
        public void CacheItem(K key, V value)
        {
            _objects[key] = value;
        }

        /// <summary>
        /// Removes the item from the cache with the given key.
        /// </summary>
        /// <param name="key">Key of the item.</param>
        public void DecacheItem(K key)
        {
            _objects.Remove(key);
        }
    }
}
