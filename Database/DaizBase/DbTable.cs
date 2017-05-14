using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DataBase
{
    [AttributeUsage(AttributeTargets.Class)]
    public class DbTable : Attribute
    {
        public DbTable(string table)
        {
            TableName = table;
        }

        public string TableName { get; private set; }
    }
}
