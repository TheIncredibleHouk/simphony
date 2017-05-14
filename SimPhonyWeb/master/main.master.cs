using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using SimPhony;
using Daiz.DataBase;
using Daiz.Utilities.Cache;
using Daiz.WebFramework;

public partial class master_main : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        GeneralPage sPage = (GeneralPage)Page;
        if (sPage.CurrentUser != null)
        {
            PnlUser.Style["display"] = "block";
            PnlNonUser.Style["display"] = "none";
            PnlUser.HeaderText = "Welcome " + sPage.CurrentUser.UserID + "!";
        }
        else
        {
            PnlUser.Style["display"] = "none";
            PnlNonUser.Style["display"] = "block";
        }
        saveLibraryButton.Visible = sPage.CurrentUser != null;
        GetTopEdits();
    }

    private static int topEditCount = 5;
    private static List<EditInfo> latestEdits()
    {
        using (DbManager mgr = new DbManager())
        {
            return mgr.Query<EditInfo>(string.Format("SELECT TOP {0} id, songid, userid, style, name, lastupdated FROM {1} WHERE [public] = 'TRUE' ORDER BY id DESC ", topEditCount, "edit"));
        }
    }

    private static List<EditInfo> getTopEditsByLikes()
    {
        using (DbManager mgr = new DbManager())
        {
            return mgr.Query<EditInfo>(string.Format("SELECT TOP {0} id, songid, userid, style, name, likes FROM {1} WHERE [public] = 'TRUE' ORDER BY likes DESC", topEditCount, "edit"));
        }
    }

    private static List<EditInfo> getTopEditsByDownload()
    {
        using (DbManager mgr = new DbManager())
        {
            return mgr.Query<EditInfo>(string.Format("SELECT TOP {0} id, songid, userid, style, name, downloads FROM {1} WHERE [public] = 'TRUE' ORDER BY downloads DESC", topEditCount, "edit"));
        }
    }

    private void GetTopEdits()
    {
        foreach (EditInfo e in getTopEditsByLikes())
        {
            HyperLink h = new HyperLink();
            h.NavigateUrl = string.Format("/edit.aspx?id={0}", e.ID);
            h.Text = string.Format("<b>{0}</b> <div>\"{1}\" / {2} / {3}</div>", Song.GetSong(e.SongID).Title, e.Name, e.Style, e.UserID);
            h.ToolTip = string.Format("{0} - Likes: {1}", e.Name, e.Likes);
            topeditspanel.Controls.Add(h);
        }

        foreach (EditInfo e in getTopEditsByDownload())
        {
            HyperLink h = new HyperLink();
            h.NavigateUrl = string.Format("/edit.aspx?id={0}", e.ID);
            h.Text = string.Format("<b>{0}</b> <div>\"{1}\" / {2} / {3}</div>", Song.GetSong(e.SongID).Title, e.Name, e.Style, e.UserID);
            h.ToolTip = string.Format("{0} Downloads: {1}", e.Name, e.Downloads);
            topedits2panel.Controls.Add(h);
        }

        foreach (EditInfo e in latestEdits())
        {
            HyperLink h = new HyperLink();
            h.NavigateUrl = string.Format("/edit.aspx?id={0}", e.ID);
            h.Text = string.Format("<b>{0}</b> <div>\"{1}\" / {2} / {3}</div>", Song.GetSong(e.SongID).Title, e.Name, e.Style, e.UserID);
            h.ToolTip = string.Format("{0} Added: {1}", e.Name, e.LastUpdated.ToShortDateString());
            latestedits.Controls.Add(h);
        }
    }
}
