using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.Utilities.Cache
{
    /// <summary>
    /// Basic cache for keeping a list of items.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ListCache<T> : Cache<T>
    {
        /// <summary>
        /// Creates a new ListCache.
        /// </summary>
        /// <param name="expiration">Amount of time cache is allowed to persist.</param>
        public ListCache(TimeSpan expiration)
            : base(expiration)
        {

        }

        /// <summary>
        /// Creates a new ListCache. Default expiration is 1 day.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        public ListCache(InitializeCache cacheDelegate)
            : base(cacheDelegate)
        {
        }

        /// <summary>
        /// Creates a new ListCache.
        /// </summary>
        /// <param name="cacheDelegate">The delegate that returns the initial list of items.</param>
        /// <param name="expiration">Amount of time cache is allowed to persist.</param>
        public ListCache(InitializeCache cacheDelegate, TimeSpan expiration)
            : base(cacheDelegate, expiration)
        {
            
        }

        /// <summary>
        /// Adds the item to the cache.
        /// </summary>
        /// <param name="item">Item to add.</param>
        /// <param name="allowDupes">If true, duplicated values can be added, otherwise the new item will replace the old.</param>
        public void CacheItem(T item, bool allowDupes = false)
        {
            if (allowDupes)
            {
                _objects.Add(item);
            }
            else
            {
                if (_objects.Contains(item))
                {
                    _objects.Remove(item);
                }

                _objects.Add(item);
            }
        }

        /// <summary>
        /// Removes the item from the cache.
        /// </summary>
        /// <param name="item"></param>
        public void DecacheItem(T item)
        {
        }
    }
}
