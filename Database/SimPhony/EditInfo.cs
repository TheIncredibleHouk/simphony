using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Daiz.DataBase;
using Daiz.WebFramework;

namespace SimPhony
{
    [DbTable("edit")]
    public class EditInfo : DbObject
    {
        public EditInfo()
        {
        }

        public bool Load(int id, User u)
        {
            if (base.KeyLoad(id))
            {
                SongTitle = Song.GetSong(SongID).Title;
                CanLike = u != null && this.UserID != u.UserID && !Liked;
                return true;
            }
            return false;
        }

        public bool CanLike { get; private set; }

        public EditInfo(DbRow row, User u)
        {
            base.Load(row);

            SongTitle = Song.GetSong(SongID).Title;
            CanLike = u != null && this.UserID != u.UserID;
        }

        public override bool Load(System.Data.Common.DbDataReader dr)
        {
            if (base.Load(dr))
            {
                SongTitle = Song.GetSong(SongID).Title;
                return true;
            }

            return false;
        }
        [DbColumn("description")]
        public string Description { get; set; }

        [DbColumn("songid")]
        public string SongID { get; set; }

        [DbColumn("name")]
        public string Name { get; set; }

        public bool Liked { get; set; }

        public string SongTitle { get; set; }

        [DbColumn("style")]
        public string Style { get; set; }

        [DbColumn("difficulty")]
        public string Difficulty { get; set; }

        [DbColumn("rating")]
        public int Rating { get; set; }

        [DbColumn("downloads")]
        public int Downloads { get; set; }

        [DbColumn("comment1")]
        public int Comment1 { get; set; }

        [DbColumn("comment2")]
        public int Comment2 { get; set; }

        [DbColumn("lastupdated")]
        public DateTime LastUpdated { get; set; }

        [DbColumn("public")]
        public bool Public { get; set; }

        [DbColumn("id", true)]
        public int ID { get; set; }

        [DbColumn("userid")]
        public string UserID { get; set; }

        [DbColumn("video")]
        public string Video { get; set; }

        [DbColumn("likes")]
        public int Likes { get; set; }
    }
}
