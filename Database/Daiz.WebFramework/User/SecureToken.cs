using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;

namespace Daiz.WebFramework
{
    public class SecureToken
    {
        private static string authkey = "$!MPH0NY";
        private static string passkey = "D4NC3D4NC3R3V0LUT!0N";
        public static string CreateToken(string userid)
        {
            MD5CryptoServiceProvider mcsp = new MD5CryptoServiceProvider();
            byte[] keyBytes = mcsp.ComputeHash(UTF8Encoding.UTF8.GetBytes(authkey));
            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyBytes;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;
            string token = userid + "|"+ DateTime.Now.AddDays(30).ToString();
            byte[] tBytes = UTF8Encoding.UTF8.GetBytes(token);
            byte[] output = tdes.CreateEncryptor().TransformFinalBlock(tBytes, 0, tBytes.Length);
            return Convert.ToBase64String(output);
        }

        public static string Encrypt(string password)
        {
            MD5CryptoServiceProvider mcsp = new MD5CryptoServiceProvider();
            byte[] keyBytes = mcsp.ComputeHash(UTF8Encoding.UTF8.GetBytes(passkey));
            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyBytes;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;
            byte[] pBytes = UTF8Encoding.UTF8.GetBytes(password);
            byte[] output = tdes.CreateEncryptor().TransformFinalBlock(pBytes, 0, pBytes.Length);
            return Convert.ToBase64String(output);
        }

        public string UserId { get; private set; }
        public DateTime Expiration { get; private set; }
        public bool Valid { get; private set; }

        public SecureToken(string token)
        {
            MD5CryptoServiceProvider mcsp = new MD5CryptoServiceProvider();
            byte[] keyBytes = mcsp.ComputeHash(UTF8Encoding.UTF8.GetBytes(authkey));
            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();
            tdes.Key = keyBytes;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;
            byte[] tBytes = Convert.FromBase64String(token);
            string sToken = UTF8Encoding.UTF8.GetString(tdes.CreateDecryptor().TransformFinalBlock(tBytes, 0, tBytes.Length));
            string[] split = sToken.Split('|');
            if (split.Length == 2)
            {
                string userid = split[0];
                DateTime dt;
                if (DateTime.TryParse(split[1], out dt))
                {
                    if (dt > DateTime.Now)
                    {
                        Valid = true;
                        UserId = userid;
                        return;
                    }
                }
            }

            Valid = false;
            return;
        }
    }
}
