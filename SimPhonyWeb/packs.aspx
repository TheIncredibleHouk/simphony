<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="packs.aspx.cs" Inherits="packs" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">
  function getPack() {
      $Template("packdownloads").Collapsed(true);
      if ($GridView("allPacks").SelectedData.length > 0) {
          Simphony.GetEditsAsync($GridView("allPacks").SelectedData[0].ID, bindEdits);
      }
    }

    Page.OnLoad.Add(function () {
        for (var i = 0; i < 11; i++) {
            stars.Add(i, "/images/stars/" + i + ".png");
        }

        $GridView("allPacks").OnSelectionChanged.Add(getPack);
        $GridView("packEdits").OnSelectionChanged.Add(updateDetails);
        $Template("details").Collapsed(true);
        $Template("packdownloads").Collapsed(true);
        Simphony.AllLibrariesAsync(allPacks);
    });

    function allPacks(e) {
        $GridView("allPacks").Bind(e.ResponseObject);
    }

    function updateDetails() {
        var d = $GridView("packEdits").SelectedData[0];
        if (d) {
            $Template("details").Bind(d);
            $Template("details").Collapsed(NullOrUndefined(d));
            $HiddenField("selected_id").Value(d.ID);
            v = d.Video;
            if (v) {
                $Span("novideo").Collapsed(true);
                $Anchor("video").Href(v).Collapsed(false);
            }
            else {
                $Span("novideo").Collapsed(false);
                $Anchor("video").Collapsed(true);
            }
        }
    }

    function bindEdits(e) {
        $GridView("packEdits").Bind($AjaxEventArgs(e).ResponseObject);
        $Template("packdownloads").Collapsed(false);
        $Template("packdownloads").Bind($GridView("allPacks").SelectedData[0]);
    }

    function addPack(e) {
        Simphony.AddLibraryAsync(e, updateEdits);
    }

    var stars = new Dictionary();
    var comment1 = ["(none)", "Just a bit", "Relatively", "Incredibly", "Super", "Light", "Happy", "Hot", "Cool", "???", "Fascinating", "Extreme", "Ultimate", "Miraculous", "Legendary", "Other"];
    var comment2 = ["(none)", "Lesson time!", "Watch out!", "Check this out!", "Trickster", "Freezing Inferno", "Nonstop Madness", "Jumping Jamboree", "Chaos Zone", "For Beginners", "For Intermediates", "For Experts", "My masterpiece!", "My best masterpiece!", "Calling all challengers!", "Something"];
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section runat="server" HeaderText="Edit Packs">
    <table id="allPacks" rowheight="16" display="15" width="400" class="gridview" border="0" cellspacing="0" cellpadding="0">
        <thead>
            <tr>
                <th width="100" data="UserID">User</th>
                <th data="Name">Name</th>
            </tr>
        </thead>
    </table>
</daiz:Section>
<daiz:Section HeaderText="Edits In Pack" runat="server">
<table id="packEdits" rowheight="16" display="15" width="100%" class="gridview" border="0" cellspacing="0" cellpadding="0">
    <colgroup>
        <col />
        <col />
        <col align="center" />
        <col align="center" />
        <col align="right" />
        <col align="right" />
        <col />
    </colgroup>
    <thead>
        <tr>
            <th data="Name" width="100">Name</th>
            <th data="SongTitle.ToLower" display="{SongTitle}" width="*">Song</th>
            <th data="Style" width="100">Style</th>
            <th data="Difficulty" width="100">Difficulty</th>
            <th data="Rating" width="50">Level</th>
            <th data="Downloads" width="50"><img src="/images/download.png" /></th>
            <th data="Likes" width="50">Likes</th>
        </tr>
    </thead>
</table>
<div class="template" id="packdownloads">
    <table border="0" class="form" width="100%">
        <tr>
            <td width="200">Pack Downloads</td>
            <td>
                <a href="javascript: addPack('{ID}')">+ Add all to current library</a>
                <%--<a href="/downloadlibrary.aspx?type=U|DAT&id={ID}">Download US Arcade File</a>
                <a href="/downloadlibrary.aspx?type=E|DAT&id={ID}">Download Eropean Arcade File</a>--%>
                <a href="/downloadlibrary.aspx?type=U|ZIP&id={ID}">Download US Data Zip File</a>
                <a href="/downloadlibrary.aspx?type=E|ZIPA&id={ID}">Download US Data Zip File</a>
                <a href="/downloadlibrary.aspx?type=|SM&id={ID}">Download Simfile Pack</a>
            </td>
        </tr>
    </table>
</div>
</daiz:Section>
<daiz:Section CssClass="template" ID="details" HeaderText="Edit Details" runat="server">
    <table width="100%" border="0" class="form" cellspacing="0" cellpadding="0">
        <colgroup>
            <col width="150" align="right" style="font-weight: bold" />
            <col width="200" />
            <col width="150" align="right" style="font-weight: bold" />
            <col />
        </colgroup>
        <tr>
            <td>View Details</td>
            <td><a target="_blank" href="/edit.aspx?id={ID}">View Details</a></td>
        </tr>
        <tr>
            <td>Song Title</td>
            <td colspan="3">{SongTitle}</td>
        </tr>
        <tr>
            <td>Edit Name</td>
            <td>{Name}</td>
            <td>Comment 1</td>
            <td>{Comment1@comment1}</td>
        </tr>
        <tr>
            <td>Style</td>
            <td>{Style}</td>
            <td>Comment 2</td>
            <td>{Comment2@comment2}</td>
        </tr>
        <tr>
            <td>Level</td>
            <td>{Rating}</td>
            <td>Likes</td>
            <td>This edit has been liked {Likes} times.</td>
        </tr>
        <tr>
            <td>Last Updated</td>
            <td>{LastUpdated}</td>
            <td>Publicly Available</td>
            <td>{Public.ToYesNo()}</td>
        </tr>
        <tr>
            <td>Video</td>
            <td><span id="novideo">No Video</span><a target="_blank" id="video">View Video</a></td>
        </tr>
        <tr>
            <td>Description</td>
            <td colspan="3">{Description}</td>
        </tr>
        <tr valign="top">
            <td>Downloads:</td>
            <td colspan="3">
                <a href="/downloaddat.aspx?id={ID}&region=U"><img src="/images/download.png" /> Download North America Arcade Data File</a>
                <a href="/downloaddat.aspx?id={ID}&region=E"><img src="/images/download.png" /> Download Europe Arcade Data File</a>
                <a href="/downloadsm.aspx?id={ID}"><img src="/images/download.png" /> Download Stepmania Simfile</a>
            </td>
        </tr>
    </table>
    <asp:HiddenField ID="selected_id" runat="server" />
</daiz:Section>
</asp:Content>

