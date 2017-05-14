using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Daiz.DataBase;
using Daiz.Utilities.Cache;

namespace SimPhony
{
    [DbTable("song")]
    public class Song : DbObject
    {
        private static KeyValueCache<string, Song> songCache = new KeyValueCache<string, Song>(_initSongCache, new TimeSpan(4, 0, 0));
        private static Dictionary<string, Song> _initSongCache()
        {
            using (DbManager dMgr = new DbManager())
            {
                List<Song> songs = dMgr.Query<Song>("SELECT * FROM song ORDER BY title");
                Dictionary<string, Song> table = new Dictionary<string,Song>();
                foreach (Song s in songs)
                {
                    table[s.ID] = s;
                }

                return table;
            }
        }

        [DbColumn("id", true)]
        public string ID { get; set; }

        [DbColumn("title")]
        public string Title { get; set; }

        [DbColumn("firstmeasure")]
        public int FirstMeasure { get; set; }

        [DbColumn("confirm")]
        public bool Confirmed { get; set; }


        public bool Load(string id)
        {
            return this.KeyLoad(id);
        }

        public static Song GetSong(string id)
        {
            return songCache[id];
        }
        public static List<Song> AllSongs()
        {
            return songCache.AllValues;
        }
    }
}
