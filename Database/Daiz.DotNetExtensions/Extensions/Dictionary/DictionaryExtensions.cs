using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DotNet
{
    public static class DictionaryExtensions
    {
        /// <summary>
        /// Adds the range of key value pairs to the dictionary. If a key exists, the new value will overwrite it.
        /// </summary>
        /// <typeparam name="K">Key</typeparam>
        /// <typeparam name="V">Value</typeparam>
        /// <param name="_dictionary">Dictionary to operate on.</param>
        /// <param name="items">Collection of key value pairs to add.</param>
        public static void AddRange<K, V>(this Dictionary<K, V> _dictionary, IEnumerable<KeyValuePair<K, V>> items)
        {
            foreach (KeyValuePair<K, V> kvp in items)
            {
                _dictionary[kvp.Key] = kvp.Value;
            }
        }

        /// <summary>
        /// Mutates each key value pair in the this dictionary via the given mutator methods.
        /// </summary>
        /// <typeparam name="TKey">Key type</typeparam>
        /// <typeparam name="TValue">Value type</typeparam>
        /// <param name="keyMutator">The function to perform on the keys in this dictionary.</param>
        /// <param name="valueMutator">The function to perform on the values in this dictionary.</param>
        public static Dictionary<TKey, TValue> MutateEach<TKey, TValue>(this Dictionary<TKey, TValue> dict, Func<TKey, TKey> keyMutator, Func<TValue, TValue> valueMutator)
        {
            List<TKey> removals = new List<TKey>();
            List<KeyValuePair<TKey, TValue>> additions = new List<KeyValuePair<TKey, TValue>>();
            foreach (KeyValuePair<TKey, TValue> pair in dict)
            {
                KeyValuePair<TKey, TValue> newPair = new KeyValuePair<TKey, TValue>(keyMutator(pair.Key), valueMutator(pair.Value));
                if (!(newPair.Key.Equals(pair.Key)) || !(newPair.Value.Equals(pair.Value)))
                {
                    removals.Add(pair.Key);
                    additions.Add(newPair);
                }
            }
            foreach (TKey removal in removals)
                dict.Remove(removal);
            foreach (KeyValuePair<TKey, TValue> addition in additions)
                dict.Add(addition.Key, addition.Value);
            return dict;
        }
    }
}
