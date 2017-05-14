using System;
using System.Data.Common;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Daiz.DataBase
{
    public class DbRow
    {
        private Dictionary<string, object> data;

        internal DbRow(DbDataReader dr)
        {
            data = new Dictionary<string, object>();
            for (int i = 0; i < dr.FieldCount; i++)
            {
                data[dr.GetName(i).ToLower()] = dr.GetValue(i);
            }
        }

        public object this[string index]
        {
            get { return data[index.ToLower()]; }
        }
    }
}
