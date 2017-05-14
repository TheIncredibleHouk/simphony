using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Daiz.DataBase;
using System.Data.Common;
using Daiz.WebFramework;

using Daiz.DotNet;
using System.Xml.Linq;

namespace SimPhony
{
    [DbTable("edit")]
    public class Edit : DbObject
    {
        public Edit()
        {
            Name = Difficulty = Style = Steps = Description = "";
        }

        [DbColumn("id", true)]
        public int ID { get; private set; }

        [DbColumn("songid")]
        public string SongID { get; set; }

        [DbColumn("name")]
        public string Name { get; set; }

        [DbColumn("rating")]
        public int Rating { get; set; }

        [DbColumn("difficulty")]
        public string Difficulty { get; set; }

        [DbColumn("style")]
        public string Style { get; set; }

        [DbColumn("comment1")]
        public int Comment1 { get; set; }

        [DbColumn("comment2")]
        public int Comment2 { get; set; }

        [DbColumn("steps")]
        public string Steps { get; set; }

        [DbColumn("description")]
        public string Description { get; set; }

        [DbColumn("userid")]
        public string UserID { get; private set; }

        [DbColumn("offset")]
        public int Offset { get; set; }

        [DbColumn("lastupdated")]
        public DateTime LastUpdated { get; set; }

        [DbColumn("public")]
        public bool Public { get; set; }

        [DbColumn("downloads")]
        public int Downloads { get; set; }

        [DbColumn("video")]
        public string Video { get; set; }

        [DbColumn("stats")]
        public string Stats { get; set; }

        [DbColumn("firstmeasure")]
        public int FirstMeasure { get; set; }

        [DbColumn("likes")]
        public int Likes { get; set; }

        public bool Liked(User u)
        {
            if (u == null) { return false; }
            return Convert.ToInt32(new DbManager().Scalar(string.Format("SELECT COUNT(*) FROM editlikes WHERE editid = {0} AND userid = '{1}'", this.ID, u.UserID))) > 0;
        }

        public bool CanLike(User u)
        {
            return u != null && this.UserID != u.UserID;
        }

        public bool New(User u)
        {
            if (this.InitNew())
            {
                UserID = u.UserID;
                return true;
            }

            FirstMeasure = -1;
            return false;
        }

        public List<Arrow> Taps { get; private set; }
        public List<Arrow> Freezes { get; private set; }

        public void GenerateSteps()
        {
            Taps = new List<Arrow>() { Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None };
            Freezes = new List<Arrow>() { Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None, Arrow.None };
            string t = Steps.Substring(0, Steps.IndexOf("<FREEZ"));
            string f = Steps.Substring(Steps.IndexOf("<FREEZ"));
            XElement e = XElement.Parse(t);
            foreach (XElement x in e.Elements())
            {
                switch (x.Name.LocalName.ToLower())
                {
                    case "node":
                        Taps.Add(x.ToArrow());
                        break;
                }
            }

            e = XElement.Parse(f);
            foreach (XElement x in e.Elements())
            {
                switch (x.Name.LocalName.ToLower())
                {
                    case "node":
                        Freezes.Add(x.ToArrow());
                        break;
                }
            }
        }

        public override bool Save()
        {
            return Save(true);
        }

        public bool Save(bool updateTime)
        {
            if(updateTime)
                LastUpdated = DateTime.Now;
            return base.Save();
        }

        public bool Load(int id)
        {
            return KeyLoad(id);
        }

        public void Like(User u)
        {
            DbManager mgr = new DbManager();
            if ((Convert.ToInt32(mgr.Scalar(string.Format("SELECT COUNT(*) FROM editlikes WHERE editid = {0} and userid = '{1}'", this.ID, u.UserID))) == 0))
            {
                mgr.Insert(string.Format("INSERT INTO editlikes VALUES({0}, '{1}')", this.ID, u.UserID));
                Likes = Convert.ToInt32(new DbManager().Scalar(string.Format("SELECT COUNT(*) FROM editlikes WHERE editid = {0}", this.ID)));
                this.Save(false);
            }
        }

        public void Dislike(User u)
        {
            DbManager mgr = new DbManager();
            mgr.Delete(string.Format("DELETE FROM editlikes WHERE editid = {0} AND userid = '{1}'", this.ID, u.UserID));
            Likes = Convert.ToInt32(new DbManager().Scalar(string.Format("SELECT COUNT(*) FROM editlikes WHERE editid = {0}", this.ID)));
            this.Save(false);
        }
    }
}
