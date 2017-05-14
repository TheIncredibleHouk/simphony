using System;
using System.IO;
using System.ComponentModel;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Data.Common;

namespace Daiz.DataBase
{
    public abstract class DbObject
    {
        protected bool IsNew = false;
        private DbColumn KeyColumn = null;
        private Dictionary<string, DbColumn> _ColumnMap = new Dictionary<string, DbColumn>();
        private string _TableName;
        private bool _Initialized = false;

        private void Initialize()
        {
            if (_Initialized) return;

            MemberInfo info = this.GetType();
            object[] tableName = info.GetCustomAttributes(typeof(DbTable), true);
            if (tableName.Length == 1)
            {
                _TableName = ((DbTable)tableName[0]).TableName;
            }
            
            PropertyInfo[] pInfo = this.GetType().GetProperties();
            
            foreach (PropertyInfo p in pInfo)
            {
                foreach (DbColumn c in p.GetCustomAttributes(typeof(DbColumn), true))
                {
                    c.Property = p;
                    c.Quoted = p.PropertyType == typeof(DateTime) || p.PropertyType == typeof(string) || p.PropertyType == typeof(bool);

                    if (c.IsKey)
                    {
                        KeyColumn = c;
                    }
                    
                    _ColumnMap.Add(c.Column.ToLower(), c);
                }
            }

            _Initialized = true;

        }

        protected bool InitNew()
        {
            Initialize();
            _Initialized = true;
            IsNew = true;
            return true;
        }

        protected bool KeyLoad(object key)
        {
            Initialize();
            _Initialized = true;
            using (DbManager mgr = new DbManager())
            {
                StringBuilder sb = new StringBuilder();
                foreach (string c in _ColumnMap.Keys)
                {
                    if (sb.Length > 0)
                    {
                        sb.Append(", [" + c + "]");
                    }
                    else
                    {
                        sb.Append("[" + c + "]");
                    }
                }

                DbRow dr = mgr.QuerySingle(string.Format("SELECT {0} FROM [{1}] WHERE [{2}] = {3}{4}{3}", sb.ToString(), _TableName, KeyColumn.Column, KeyColumn.Quoted ? "'" : "", key.ToString().Replace("'", "''")));
                return Load(dr);
            }
        }

        public virtual bool Load(DbRow dr)
        {
            if (dr == null) return false;
            Initialize();
            foreach (string s in _ColumnMap.Keys)
            {
                _ColumnMap[s].Property.SetValue(this, dr[s], null);
            }

            IsNew = false;

            return true;
        }

        public virtual bool Load(DbDataReader dr)
        {
            Initialize();

            for (int i = 0; i < dr.FieldCount; i++)
            {
                string s = dr.GetName(i);
                if (_ColumnMap.ContainsKey(s))
                {
                    _ColumnMap[s].Property.SetValue(this, dr.GetValue(i), null);
                }
            }

            IsNew = false;
            return true;
        }

        public virtual bool Save()
        {
            if (!_Initialized) return false;
            string sql;

            using (DbManager mgr = new DbManager())
            {
                if (IsNew)
                {
                    StringBuilder values = new StringBuilder();
                    StringBuilder fields = new StringBuilder();
                    object value;

                    foreach (string c in _ColumnMap.Keys)
                    {
                        DbColumn dc = _ColumnMap[c];
                        if (dc.IsKey && dc.AutoID) continue;
                        value = dc.Property.GetValue(this, null);
                        if (value == null)
                        {
                            if (dc.Property.PropertyType == typeof(string))
                            {
                                value = "";
                            }
                            else if (dc.Property.PropertyType == typeof(DateTime))
                            {
                                value = new DateTime(1900, 1, 1);
                            }
                            else if (dc.Property.PropertyType == typeof(Boolean))
                            {
                                value = false;
                            }
                            else
                            {
                                value = 0;
                            }
                        }

                        if (fields.Length == 0)
                        {
                            fields.Append("[" + dc.Column + "]");
                            values.AppendFormat("{0}{1}{0}", dc.Quoted ? "'" : "", value.ToString().Replace("'", "''"));
                        }
                        else
                        {
                            fields.Append(",[" + dc.Column + "]");
                            values.AppendFormat(",{0}{1}{0}", dc.Quoted ? "'" : "", value.ToString().Replace("'", "''"));
                        }
                    }

                    sql = string.Format("INSERT INTO {0} ({1}) VALUES({2})", _TableName, fields, values);
                    object result = mgr.Insert(sql);
                    if (KeyColumn.AutoID)
                    {
                        KeyColumn.Property.SetValue(this, Convert.ToInt32(result), null);
                    }
                    IsNew = false;
                    return true;
                }
                else
                {
                    StringBuilder setValues = new StringBuilder();

                    foreach (string c in _ColumnMap.Keys)
                    {
                        DbColumn dc = _ColumnMap[c];
                        object value = dc.Property.GetValue(this, null);
                        if (value == null) continue;
                        if (dc.IsKey) continue;
                        if (setValues.Length == 0)
                        {
                            setValues.Append("[" + dc.Column + "]=");
                            setValues.AppendFormat("{0}{1}{0}", dc.Quoted ? "'" : "", value.ToString().Replace("'", "''"));
                        }
                        else
                        {
                            setValues.Append(",[" + _ColumnMap[c].Column + "]=");
                            setValues.AppendFormat("{0}{1}{0}", dc.Quoted ? "'" : "", value.ToString().Replace("'", "''"));
                        }
                    }

                    sql = string.Format("UPDATE {0} SET {1} WHERE {2} = {3}{4}{3}", _TableName, setValues, KeyColumn.Column, KeyColumn.Quoted ? "'" : "", KeyColumn.Property.GetValue(this, null));
                    return mgr.Update(sql);
                }
            }
        }

        public virtual bool Delete()
        {
            if (!_Initialized) return false;
            using (DbManager mgr = new DbManager())
            {
                string sql = string.Format("DELETE FROM {0} WHERE {1} = {2}{3}{2}", _TableName, KeyColumn.Column, KeyColumn.Quoted ? "'" : "", KeyColumn.Property.GetValue(this, null));
                return mgr.Delete(sql);
            }
        }

        public byte[] ReadBinary(string column)
        {
            if (!_Initialized) return null;
            using (DbManager mgr = new DbManager())
            {
                string sql = string.Format("SELECT {0} FROM {1} WHERE {2} = {3}{4}{3}", column, _TableName, KeyColumn.Column, KeyColumn.Quoted ? "'" : "", KeyColumn.Property.GetValue(this, null));
                return (byte[]) mgr.Scalar(sql);
            }
        }

        public bool WriteBinary(string column, byte[] data)
        {
            if (!_Initialized) return false;
            using (DbManager mgr = new DbManager())
            {
                string sql = string.Format("UPDATE {0} SET {1}=@data_param WHERE {2} = {3}{4}{3}", _TableName, column, KeyColumn.Column, KeyColumn.Quoted ? "'" : "", KeyColumn.Property.GetValue(this, null));
                return mgr.WriteBinary(sql, data);
            }
        }
    }
}
