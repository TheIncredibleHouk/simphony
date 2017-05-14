<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="myedits.aspx.cs" Inherits="myedits" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">

    Page.OnLoad.Add(function () {
        getEdits();
        $GridView("GrdMyEdits").Loading("Retrieving edits...");
        $GridView("GrdMyEdits").OnSelectionChanged.Add(updateDetails);
        $Template("details").Collapsed(true);
    });

    function updateDetails() {
        var d = $GridView("GrdMyEdits").SelectedData[0];
        if (d) {
            $Template("details").Bind(d);
            $Template("details").Collapsed(NullOrUndefined(d));
            $HiddenField("selected_id").Value(d.ID);
        }
    }

    function getEdits() {
        Simphony.GetMyEditsAsync(bindEdits);
    }

    function bindEdits(e) {
        $GridView("GrdMyEdits").Bind($AjaxEventArgs(e).ResponseObject);
    }

    function deleteEdit() {
        
        var d = $GridView("GrdMyEdits").SelectedData[0];
        if (d) {
            if (confirm("Are you sure you want to remove " + d.Name + "?")) {
                if (Simphony.DeleteEdit(d.ID)) {
                    $GridView("GrdMyEdits").Data.Remove(d);
                    $Template("details").Collapsed(true);
                }
            }
        }
    }

    var comment1 = ["(none)", "Just a bit", "Relatively", "Incredibly", "Super", "Light", "Happy", "Hot", "Cool", "???", "Fascinating", "Extreme", "Ultimate", "Miraculous", "Legendary", "Other"];
    var comment2 = ["(none)", "Lesson time!", "Watch out!", "Check this out!", "Trickster", "Freezing Inferno", "Nonstop Madness", "Jumping Jamboree", "Chaos Zone", "For Beginners", "For Intermediates", "For Experts", "My masterpiece!", "My best masterpiece!", "Calling all challengers!", "Something"];
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section HeaderText="My Edits" runat="server">
<table id="GrdMyEdits" rowheight="18" display="20" width="100%" class="gridview" border="0" cellspacing="0" cellpadding="0">
    <colgroup>
        <col />
        <col />
        <col align="center" />
        <col align="center" />
        <col align="right" />
        <col align="right" />
        <col align="right" />
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
            <td colspan="2" align="right"><a href="javascript: addEdit({ID})">+ Add to current library</a> </td>
        </tr>
        <tr>
            <td>Song Title</td>
            <td colspan="3">{SongTitle}</td>
        </tr>
        <tr>
            <td>Edit Name</td>
            <td>{Name}</td>
            <td>Comment 1</td>
            <td>{Comment1.@comment1}</td>
        </tr>
        <tr>
            <td>Style</td>
            <td>{Style}</td>
            <td>Comment 2</td>
            <td>{Comment2.@comment2}</td>
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
            <td>{Public.ToYesNo}</td>
        </tr>
        <tr>
            <td>Video</td>
            <td colspan="3"><a target="_blank" href="{Video}">{Video}</a></td>
        </tr>
        <tr>
            <td>Chart</td>
            <td colspan="3"><a target="_blank" href="/chartviewer.aspx?id={ID}">View Chart</a></td>
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
        <tr class="formfooter">
            <td></td>
            <td colspan="3">
                <daiz:Button Text="Update" OnClick="Edit" runat="server" />
                <daiz:Button ButtonType="Button" OnClientClick="deleteEdit()" Text="Delete"  runat="server" />
            </td>
        </tr>
    </table>
    <asp:HiddenField ID="selected_id" runat="server" />
</daiz:Section>
</asp:Content>

