using System;
using System.Text;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using System.Data.Common;
using Daiz.DataBase;
using Daiz.Utilities.Cache;
using Daiz.WebFramework;
using Daiz.DotNet;
using SimPhony;

/// <summary>
/// Summary description for simphony
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class simphony : SecureService
{

    public simphony()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public bool CheckUserId(string userid)
    {
        userid = userid.SqlSanitize();
        User u = new User();
        return !u.Load(userid);
    }

    [WebMethod]
    public string SignIn(string userid, string password)
    {
        userid = userid.SqlSanitize();
        password = password.SqlSanitize();
        if (CurrentUser != null)
        {
            return "";
        }

        User u = new User();
        if (!u.Load(userid))
        {
            return "";
        }

        if (u.KeyCode.Length > 0)
        {
            return "";
        }
        if (u.LogIn(password))
        {
            return SecureToken.CreateToken(u.UserID);
        }

        return "";
    }


    [WebMethod]
    public List<Song> AllSongs()
    {
        return Song.AllSongs();
    }

    [WebMethod]
    public List<EditInfo> GetMyEdits()
    {
        if (CurrentUser == null)
        {
            return new List<EditInfo>();
        }

        List<EditInfo> list = new List<EditInfo>();

        using (DbManager mgr = new DbManager())
        {
            foreach (DbRow row in mgr.Query(string.Format("SELECT edit.id, CONVERT(bit, 0) as liked, rating, name, likes, difficulty, style, comment1, comment2, userid, lastupdated, songid, likes, downloads, [public], [description], video, [stats] FROM edit JOIN song ON edit.songid = song.id WHERE userid = '{0}'", CurrentUser.UserID)))
            {
                list.Add(new EditInfo(row, CurrentUser));
            }
        }

        return list;
    }

    [WebMethod]
    public List<EditInfo> GetEdits(int id)
    {
        Library l = new Library();
        l.Load(id);
        if (l.EditList.Count == 0)
        {
            return new List<EditInfo>();
        }

        List<EditInfo> list = new List<EditInfo>();
        using (DbManager mgr = new DbManager())
        {
            foreach (DbRow row in mgr.Query(string.Format("SELECT id, name, rating, difficulty, style, comment1, comment2, userid, lastupdated, songid, likes, downloads, [public], [description], video, [stats] FROM edit WHERE id IN ({0})", l._EditList)))
            {
                list.Add(new EditInfo(row, CurrentUser));
            }
        }

        return list;
    }

    [WebMethod(EnableSession = true)]
    public SimData GetSimData()
    {
        if (Session["currentSim"] != null)
        {
            SimFileData simData = (SimFileData)Session["currentSim"];
            SimData sd = new SimData();
            sd.SongTitle = simData.SongTitle;
            foreach (ChartData cd in from c in simData.Charts orderby c.ChartInfo.Style, c.ChartInfo.Difficulty select c)
            {
                sd.Charts.Add(cd.ChartInfo);
            }

            return sd;
        }

        return null;
    }

    [WebMethod(EnableSession = true)]
    public bool ConvertData(int id)
    {
        Edit e = new Edit();
        e.Load(id);
        if (e.UserID != CurrentUser.UserID)
        {
            return false;
        }

        try
        {
            File.WriteAllBytes(Server.MapPath(string.Format("/dats/U/{0}.DAT", id)), WebConverter.ConvertStepEdit(e, 1));
            File.WriteAllBytes(Server.MapPath(string.Format("/dats/E/{0}.DAT", id)), WebConverter.ConvertStepEdit(e, 2));
        }
        catch
        {
            return false;
        }

        return true;
    }

    [WebMethod(EnableSession = true)]
    public List<EditInfo> SearchEdits(string user, int rating, string song, string style)
    {
        user = user.SqlSanitize();
        song = song.SqlSanitize();
        using (DbManager mgr = new DbManager())
        {
            StringBuilder sb = new StringBuilder(string.Format("SELECT id, name, rating, difficulty, style, comment1, comment2, userid, lastupdated, songid, likes, downloads, [public], [description], video, [stats],  dbo.isLiked(id, '{0}') as liked FROM edit WHERE [public] = 'TRUE'", CurrentUser == null ? "" : CurrentUser.UserID));
            int i = sb.Length;
            if (!string.IsNullOrEmpty(user))
            {
                sb.AppendFormat(" AND userid = '{0}'", user);
            }

            if (rating > 0)
            {
                sb.AppendFormat(" AND rating = {0}", rating);
            }

            if (!string.IsNullOrEmpty(style))
            {
                sb.AppendFormat(" AND style = '{0}'", style);
            }

            if (!string.IsNullOrEmpty(song))
            {
                sb.AppendFormat(" AND songid IN (SELECT id as songid FROM song WHERE title LIKE '%{0}%')", song);
            }

            List<EditInfo> list = new List<EditInfo>();
            foreach (DbRow row in mgr.Query(sb.ToString()))
            {
                list.Add(new EditInfo(row, CurrentUser));
            }

            return list;
        }
    }

    [WebMethod(EnableSession = true)]
    public List<EditInfo> AddEdit(string id)
    {
        HttpCookie c = Context.Request.Cookies["edits"];
        if (c == null)
        {
            c = new HttpCookie("edits", "");
        }

        if (id.IsInt())
        {
            Edit e = new Edit();
            if (e.Load(id.ToInt()))
            {
                if (!e.Public && (CurrentUser == null || (CurrentUser.UserID != e.UserID)))
                {
                }
                else
                {

                    List<string> list = c.Value.Split(',').ToList();
                    if (list.Count < 30)
                    {

                        if (!list.Contains(id))
                        {
                            list.Add(id);
                        }

                        c.Value = list.ToDelimitedString(",");
                        Context.Response.Cookies.Add(c);
                    }
                }
            }
        }

        using (DbManager mgr = new DbManager())
        {
            return mgr.Query<EditInfo>(string.Format("SELECT id, songid, userid, style, name FROM edit WHERE id IN({0})", c.Value));
        }
    }

    [WebMethod(EnableSession = true)]
    public List<EditInfo> AddLibrary(string id)
    {
        HttpCookie c = Context.Request.Cookies["edits"];
        if (c == null)
        {
            c = new HttpCookie("edits", "");
        }

        if (id.IsInt())
        {
            Library l = new Library();
            List<string> list = c.Value.Split(',').ToList();
            if (l.Load(id.ToInt()))
            {
                foreach (int i in l.EditList)
                {
                    Edit e = new Edit();
                    if (e.Load(i))
                    {
                        if (!e.Public && (CurrentUser == null || (CurrentUser.UserID != e.UserID)))
                        {
                        }
                        else
                        {

                            if (list.Count < 30)
                            {

                                if (!list.Contains(i.ToString()))
                                {
                                    list.Add(i.ToString());
                                }
                            }
                        }
                    }
                }

                c.Value = list.ToDelimitedString(",");
                Context.Response.Cookies.Add(c);
            }
        }

        using (DbManager mgr = new DbManager())
        {
            return mgr.Query<EditInfo>(string.Format("SELECT id, songid, userid, style, name FROM edit WHERE id IN({0})", c.Value));
        }
    }

    [WebMethod(EnableSession = true)]
    public List<EditInfo> RemoveEdit(string id)
    {
        HttpCookie c = Context.Request.Cookies["edits"];
        if (c == null)
        {
            return new List<EditInfo>();
        }

        List<string> list = c.Value.Split(',').ToList();
        if (list.Count == 0)
        {
            return new List<EditInfo>();
        }

        list.Remove(id);

        c.Value = list.ToDelimitedString(",");
        Context.Response.Cookies.Add(c);
        if (c.Value.Length > 0)
        {
            using (DbManager mgr = new DbManager())
            {
                return mgr.Query<EditInfo>(string.Format("SELECT id, songid, userid, style, name FROM edit WHERE id IN({0})", c.Value));
            }
        }

        return new List<EditInfo>();
    }

    [WebMethod(EnableSession = true)]
    public List<EditInfo> CurrentLibrary()
    {
        HttpCookie c = Context.Request.Cookies["edits"];
        if (c == null)
        {
            return new List<EditInfo>();
        }

        if (c.Value.Length > 0)
        {
            using (DbManager mgr = new DbManager())
            {
                return mgr.Query<EditInfo>(string.Format("SELECT id, songid, userid, style, name FROM edit WHERE id IN({0})", c.Value));
            }
        }

        return new List<EditInfo>();
    }

    [WebMethod(EnableSession = true)]
    public List<Library> AllLibraries()
    {
        using (DbManager mgr = new DbManager())
        {
            return mgr.Query<Library>("SELECT * FROM library");
        }
    }

    [WebMethod(EnableSession = true)]
    public bool DeleteEdit(int id)
    {
        if (CurrentUser == null)
        {
            return false;
        }

        Edit e = new Edit();
        if (e.Load(id))
        {
            if (e.UserID == CurrentUser.UserID)
            {
                return e.Delete();
            }
        }

        return false;
    }

    [WebMethod(EnableSession = true)]
    public bool DeletePack(int id)
    {
        if (CurrentUser == null)
        {
            return false;
        }

        Library e = new Library();
        if (e.Load(id))
        {
            if (e.UserID == CurrentUser.UserID)
            {
                return e.Delete();
            }
        }

        return false;
    }

    [WebMethod(EnableSession = true)]
    public bool SetSongFirstMeasure(string songid, int measure)
    {
        if (CurrentUser == null || (CurrentUser.UserID.ToLower() != "daiz" && CurrentUser.UserID.ToLower() != "silverhawke"))
        {
            return false;
        }

        Song s = Song.GetSong(songid);
        s.FirstMeasure = measure;
        s.Confirmed = true;
        return s.Save();
    }

    [WebMethod(EnableSession=true)]
    public bool ToggleLike(int editid)
    {
        if(CurrentUser == null) return false;
        Edit e = new Edit();
        e.Load(editid);
        if (e.UserID == CurrentUser.UserID) return false;

        if (e.Liked(CurrentUser))
        {
            e.Dislike(CurrentUser);
            return false;
        }
        else
        {
            e.Like(CurrentUser);
            return true;
        }

    }
}


public class SimData
{
    public string SongTitle { get; set; }
    public List<ChartInfo> Charts { get; set; }

    public SimData()
    {
        Charts = new List<ChartInfo>();
    }
}
