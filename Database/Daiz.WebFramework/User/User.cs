using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Daiz.DataBase;

namespace Daiz.WebFramework
{
    [DbTable("users")]
    public class User : DbObject
    {
        public User()
        {
            
        }

        public bool New(string userid, string password)
        {
            if (this.Load(userid))
            {
                return false;
            }

            if (this.InitNew())
            {
                this.UserID = userid;
                this.Password = SecureToken.Encrypt(password);
                return true;
            }


            return false;
        }

        public bool LogIn(string password)
        {
            Authenticated = SecureToken.Encrypt(password) == Password;
            return Authenticated;
        }

        public bool Load(string userid)
        {
            return KeyLoad(userid);
        }

        public bool Authenticate(string token)
        {
            SecureToken sToken = new SecureToken(token);
            if (sToken.Valid)
            {
                Authenticated = KeyLoad(sToken.UserId);
                if (Authenticated)
                {
                    return true;
                }
            }

            return false;
        }

        public string GetToken()
        {
            if (Authenticated)
            {
                return SecureToken.CreateToken(this.UserID);
            }

            return "";
        }

        public bool Authenticated { get; private set; }

        [DbColumn("userid", true, false)]
        public string UserID { get; private set; }


        [DbColumn("password")]
        public string Password { get; private set; }

        [DbColumn("email")]
        public string Email { get; set; }

        [DbColumn("keycode")]
        public string KeyCode { get; set; }
    }
}
