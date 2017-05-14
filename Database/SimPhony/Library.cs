using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Daiz.Utilities;
using Daiz.DataBase;
using Daiz.DotNet;
using Daiz.WebFramework;

namespace SimPhony
{
    [DbTable("library")]
    public class Library : DbObject
    {

        public Library()
        {
            _EditList = "";
            EditList = new List<int>();
        }

        public bool New(User u)
        {
            if (base.InitNew())
            {
                if (u != null)
                {
                    UserID = u.UserID;
                }
                else
                {
                    UserID = "";
                }
                return true;
            }

            return false;
        }

        public bool Load(int id)
        {
            return KeyLoad(id);
        }

        public override bool Load(DbRow dr)
        {
            if (base.Load(dr))
            {
                foreach (string i in _EditList.Split(','))
                {
                    if (i.IsInt())
                    {
                        EditList.Add(i.ToInt());
                    }
                }

                return true;
            }

            return false;
        }

        public override bool Save()
        {
            _EditList = EditList.ToDelimitedString(",");
            return base.Save();
        }

        [DbColumn("id", true)]
        public int ID { get; set; }

        [DbColumn("userid")]
        public string UserID { get; set; }

        [DbColumn("edit_list")]
        public string _EditList { get; set; }

        [DbColumn("name")]
        public string Name { get; set; }

        public List<int> EditList { get; private set;  }
    }
}
