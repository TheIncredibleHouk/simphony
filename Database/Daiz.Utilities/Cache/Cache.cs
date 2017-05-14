using System;
using System.Collections.ObjectModel;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.Utilities.Cache
{
    /// <summary>
    /// Simple base class for cache. Cannot instantiate.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public abstract class Cache<T>
    {
        protected List<T> _objects;
        public delegate List<T> InitializeCache();
        protected InitializeCache _cacheDelegate = null;
        protected TimeSpan expirationTime;
       
        /// <summary>
        /// The date the cache wille expire.
        /// </summary>
        public DateTime ExpirationDate { get; private set; }

        // No intellisense since this cannot be instantiated on its own.
        public Cache(TimeSpan expiration)
        {
            expirationTime = new TimeSpan(24, 0, 0);
        }

        public Cache(InitializeCache cacheDelegate)
        {
            expirationTime = new TimeSpan(24, 0, 0);
            _cacheDelegate = cacheDelegate;
        }

        public Cache(InitializeCache cacheDelegate, TimeSpan expiration)
        {
            expirationTime = expiration;
            _cacheDelegate = cacheDelegate;
        }

        /// <summary>
        /// Returns all items as read only.
        /// </summary>
        public List<T> AllItems
        {
            get {
                if (_objects == null || ExpirationDate <= DateTime.Now)
                {
                    Refresh();
                }

                return _objects.ToList();
            }
        }

        /// <summary>
        /// Refreshes the cache and the expiration time.
        /// </summary>
        protected void Refresh()
        {
            if (_objects == null)
            {
                _objects = new List<T>();
            }

            _objects.Clear();
            if (_cacheDelegate != null)
            {
                _objects.AddRange(_cacheDelegate());
            }
            ExpirationDate = DateTime.Now.Add(expirationTime);
        }

        /// <summary>
        /// Allows manual purging of the cache by an administrator.
        /// </summary>
        /// <param name="context"></param>
        public void Purge()
        {
            Refresh();
        }
    }

    /// <summary>
    /// Simple base class for dictionaries.
    /// </summary>
    /// <typeparam name="K"></typeparam>
    /// <typeparam name="V"></typeparam>
    public abstract class Cache<K, V>
    {
        protected Dictionary<K, V> _objects;

        public delegate Dictionary<K, V> InitializeCache();
        public delegate V LookUpItem(K key);

        protected InitializeCache _cacheDelegate = null;
        protected LookUpItem _lookupDelegate = null;

        protected TimeSpan expirationTime;

        /// <summary>
        /// The date the cache wille expire.
        /// </summary>
        public DateTime ExpirationDate { get; private set; }

        // No intellisense since this cannot be instantiated on its own.
        public Cache(TimeSpan expiration)
        {
            expirationTime = expiration;
        }

        public Cache(InitializeCache cacheDelegate)
        {
            expirationTime = new TimeSpan(24, 0, 0);
            _cacheDelegate = cacheDelegate;
        }

        public Cache(InitializeCache cacheDelegate, TimeSpan expiration)
        {
            expirationTime = expiration;
            _cacheDelegate = cacheDelegate;
        }

        public Cache(LookUpItem lookupDelegate)
        {
            expirationTime = new TimeSpan(24, 0, 0);
            _lookupDelegate = lookupDelegate;
        }

        public Cache(LookUpItem lookupDelegate,  TimeSpan expiration)
        {
            expirationTime = expiration;
            _lookupDelegate = lookupDelegate;
        }

        public Cache(InitializeCache cacheDelegate, LookUpItem lookupDelegate)
        {
            expirationTime = new TimeSpan(24, 0, 0);
            _cacheDelegate = cacheDelegate;
            _lookupDelegate = lookupDelegate;
        }

        public Cache(InitializeCache cacheDelegate, TimeSpan expiration, LookUpItem lookupDelegate)
        {
            expirationTime = expiration;
            _cacheDelegate = cacheDelegate;
            _lookupDelegate = lookupDelegate;
        }

        /// <summary>
        /// Returns the item associated with the key. If the key does not exist, a default value is returned. If a LookUpDelegate
        /// was provided on the constructor, it will be used to attempt to find the item.
        /// </summary>
        /// <param name="key">Key associated with the item.</param>
        /// <returns>The item, if it exists.</returns>
        public V this[K key]
        {
            get
            {
                if (_objects == null || ExpirationDate <= DateTime.Now)
                {
                    Refresh();
                }

                if (_objects.ContainsKey(key))
                {
                    return _objects[key];
                }

                if (_lookupDelegate != null)
                {
                    V value = _lookupDelegate(key);
                    if (value != null)
                    {
                        _objects.Add(key, value);
                    }

                    return value;
                }

                return default(V);
            }
        }

        /// <summary>
        /// Returns all items as read only. If accessing a single item, use the indexer with a key instead.
        /// </summary>
        public Dictionary<K, V>  AllItems
        {
            get
            {
                if (_objects == null || ExpirationDate <= DateTime.Now)
                {
                    Refresh();
                }
                return new Dictionary<K, V>(_objects);
            }
        }

        /// <summary>
        /// Returns all values as read only. If accessing a single item, use the indexer with a key instead.
        /// </summary>
        public List<V> AllValues
        {
            get
            {
                if (_objects == null || ExpirationDate <= DateTime.Now)
                {
                    Refresh();
                }
                return new List<V>(_objects.Values.ToList());
            }
        }

        /// <summary>
        /// Determines if the cache contains the key.
        /// </summary>
        /// <param name="key">Key to check for.</param>
        /// <returns>Whether the cache contains an item with the key.</returns>
        public bool ContainsKey(K key)
        {
            if (_objects == null || ExpirationDate <= DateTime.Now)
            {
                Refresh();
            }
            return _objects.ContainsKey(key);
        }

        /// <summary>
        /// Refreshes the cache and the expiration time.
        /// </summary>
        public void Refresh()
        {
            if (_objects == null)
            {
                _objects = new Dictionary<K, V>();
            }

            _objects.Clear();
            if (_cacheDelegate != null)
            {
                foreach (KeyValuePair<K, V> kvp in _cacheDelegate())
                {
                    _objects[kvp.Key] = kvp.Value;
                }
            }
            ExpirationDate = DateTime.Now.Add(expirationTime);
        }

        /// <summary>
        /// Allows manual purging of the cache by an administrator.
        /// </summary>
        /// <param name="ctx">Security context.</param>
        /// <returns>Whether the purge was successful.</returns>
        public void Purge()
        {
            Refresh();
        }
    }
}
