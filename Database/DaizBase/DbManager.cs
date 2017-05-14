using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Data;
using System.Data.Common;
using System.Data.SqlClient;

namespace Daiz.DataBase
{
    public class DbManager : IDisposable
    {
        private SqlCommand sqlCommand;
        public static string ConnectionString { get; set; }

        private SqlCommand _GetCommand(string sql)
        {
            sqlCommand = new SqlCommand(sql, new SqlConnection(ConnectionString));
            sqlCommand.Connection.Open();
            return sqlCommand;
        }

        public object Insert(string sql)
        {
            return _GetCommand(sql + "; select scope_identity()").ExecuteScalar();
        }

        public bool Update(string sql)
        {
            return _GetCommand(sql).ExecuteNonQuery() > 0;
        }

        public bool Delete(string sql)
        {
            return _GetCommand(sql).ExecuteNonQuery() > 0;
        }

        public object Scalar(string sql)
        {
            return _GetCommand(sql).ExecuteScalar();
        }

        public bool WriteBinary(string sql, byte[] binary)
        {
            SqlCommand cmd = _GetCommand(sql);
            SqlParameter param = new SqlParameter("@data_param", SqlDbType.Image);
            param.Value = binary;
            cmd.Parameters.Add(param);
            return cmd.ExecuteNonQuery() == 1;
        }

        public List<T> Query<T>(string sql) where T : DbObject, new()
        {
            DbDataReader dr = _GetCommand(sql).ExecuteReader();

            List<T> objects = new List<T>();
            while (dr.Read())
            {
                T t = new T();
                t.Load(dr);
                objects.Add(t);
            }

            
            return objects;
        }

        public DbRow QuerySingle(string sql)
        {
            DbDataReader dr = _GetCommand(sql).ExecuteReader();
            if (dr == null) return null;
            if (!dr.HasRows) return null;
            dr.Read();
            return new DbRow(dr);
        }

        public List<DbRow> Query(string sql)
        {
            DbDataReader dr = _GetCommand(sql).ExecuteReader();
            if (dr == null) return new List<DbRow>();
            if (!dr.HasRows) return new List<DbRow>();
            List<DbRow> rows = new List<DbRow>();
            while (dr.Read())
            {
                rows.Add(new DbRow(dr));
            }
            return rows;
        }

        public void Dispose()
        {
            if (sqlCommand != null)
            {
                sqlCommand.Connection.Close();
            }
        }
    }
}
