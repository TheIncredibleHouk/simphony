<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="newpack.aspx.cs" Inherits="newpack" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">
    function searchSongs(e) {
        return Simphony.SearchSongs(e);
    }

    Page.OnLoad.Add(function () {
        for (var i = 0; i < 11; i++) {
            stars.Add(i, "/images/stars/" + i + ".png");
        }

        getEdits();
        $GridView("GrdEdits").OnSelectionChanged.Add(updateDetails);
    });

    function updateDetails() {
        $Template("details").Bind($GridView("GrdEdits").SelectedData[0]);
    }

    function getEdits() {
        Simphony.GetMyEditsAsync(bindEdits);
    }

    function bindEdits(e) {
        $GridView("GrdMyEdits").Bind($AjaxEventArgs(e).ResponseObject);
    }

    var stars = new Dictionary();
    var comment1 = ["(none)", "Just a bit", "Relatively", "Incredibly", "Super", "Light", "Happy", "Hot", "Cool", "???", "Fascinating", "Extreme", "Ultimate", "Miraculous", "Legendary", "Other"];
    var comment2 = ["(none)", "Lesson time!", "Watch out!", "Check this out!", "Trickster", "Freezing Inferno", "Nonstop Madness", "Jumping Jamboree", "Chaos Zone", "For Beginners", "For Intermediates", "For Experts", "My masterpiece!", "My best masterpiece!", "Calling all challengers!", "Something"];
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<h1>Create Pack</h1>
    <div class="fieldset">
        <span class="legend">Search Edits</span>
        <table highlight="formh" width="100%" class="form">
            <colgroup>
                <col width="200" align="right" />
            </colgroup>
            <tr>
                <td>My Edits Only</td>
                <td><asp:CheckBox ID="ChkMine" runat="server" /></td>
            </tr>
            <tr>
                <td>Song Title</td>
                <td><asp:TextBox ID="TxtSong" Width="250" minlength="1" source="searchSongs" bindtext="Title" CssClass="suggestion" runat="server" /></td>
            </tr>
            <tr>
                <td>Username</td>
                <td><asp:TextBox ID="TxtUserName" runat="server" /></td>
            </tr>
            <tr>
                <td>Difficulty Rating</td>
                <td>
                    <asp:DropDownList runat="server" ID="CmbRating">
                        <asp:ListItem Text="Any" Value="" />
                        <asp:ListItem Text="1" Value="1" />
                        <asp:ListItem Text="2" Value="2" />
                        <asp:ListItem Text="3" Value="3" />
                        <asp:ListItem Text="4" Value="4" />
                        <asp:ListItem Text="5" Value="5" />
                        <asp:ListItem Text="6" Value="6" />
                        <asp:ListItem Text="7" Value="7" />
                        <asp:ListItem Text="8" Value="8" />
                        <asp:ListItem Text="9" Value="9" />
                        <asp:ListItem Text="10" Value="10" />
                        <asp:ListItem Text="11" Value="11" />
                        <asp:ListItem Text="12" Value="12" />
                        <asp:ListItem Text="13" Value="13" />
                        <asp:ListItem Text="14" Value="14" />
                        <asp:ListItem Text="15" Value="15" />
                        <asp:ListItem Text="16" Value="16" />
                        <asp:ListItem Text="17" Value="17" />
                        <asp:ListItem Text="18" Value="18" />
                        <asp:ListItem Text="19" Value="19" />
                        <asp:ListItem Text="20" Value="201" />
                    </asp:DropDownList>
                </td>
            </tr>
            <tr class="formfooter">
                <td></td>
                <td><asp:Button OnClientClick="search" runat="server" Text="Search" /></td>
            </tr>
        </table>
    </div>
<table id="GrdEdits" display="15" width="100%" class="gridview" border="0" cellspacing="0" cellpadding="0">
    <colgroup>
        <col />
        <col />
        <col align="right" />
        <col />
        <col />
        <col align="right" />
    </colgroup>
    <thead>
        <tr>
            <th property="Name" width="100">Name</th>
            <th property="Song" width="*">Song</th>
            <th property="Style" width="100">Style</th>
            <th property="Rating" width="50">Rating</th>
            <th property="Downloads" width="50">Downloads</th>
            <th property="Likes">Likes</th>
        </tr>
    </thead>
</table>
<div class="fieldset">
    <span class="legend">Edit Details</span>
    <div class="template" id="details">
        <table width="100%" border="0" class="form" cellspacing="0" cellpadding="0">
            <colgroup>
                <col width="150" align="right" style="font-weight: bold" />
                <col width="200" />
                <col width="150" align="right" style="font-weight: bold" />
                <col />
            </colgroup>
            <tr>
                <td>Song Title</td>
                <td colspan="3">{Song}</td>
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
                <td>Rating</td>
                <td>{Rating}</td>
                <td>Likes</td>
                <td>This edit has been liked {Likes} times.</td>
            </tr>
            <tr>
                <td>Last Updated</td>
                <td>{LastUpdated}</td>
                <td>Measure Offset</td>
                <td>{Offset}</td>
            </tr>
            <tr>
                <td>Publicly Available</td>
                <td>{Public.ToYesNo()}</td>
            </tr>
            <tr>
                <td>Notes</td>
                <td colspan="3">{Notes}</td>
            </tr>
            <tr class="formfooter">
                <td></td>
                <td colspan="3">
                    <asp:Button ID="Button1" Text="Update" runat="server" />
                    <asp:Button ID="Button2" Text="Delete" runat="server" />
                </td>
            </tr>
        </table>
    </div>
</asp:Content>