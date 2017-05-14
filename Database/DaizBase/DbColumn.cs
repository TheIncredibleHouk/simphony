using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DataBase
{
    [AttributeUsage(AttributeTargets.Property)]
    public class DbColumn : Attribute
    {
        public bool IsKey { get; private set; }
        public string Column { get; private set; }
        public bool AutoID { get; private set; }
        internal PropertyInfo Property { get; set; }
        internal bool Quoted { get; set; }

        public DbColumn(string column)
        {
            Column = column;
            IsKey = false;
            AutoID = true;
        }

        public DbColumn(string column, bool key)
        {
            Column = column;
            IsKey = key;
            AutoID = true;
        }

        public DbColumn(string column, bool key, bool  autoID)
        {
            Column = column;
            IsKey = key;
            AutoID = autoID;
        }
    }
}
