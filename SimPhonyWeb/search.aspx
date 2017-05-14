<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true"
    CodeFile="search.aspx.cs" Inherits="search" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" runat="Server">
    <script type="text/javascript">
        Page.OnLoad.Add(function () {
            $GridView("editresults").OnSelectionChanged.Add(function () {
                var e = $GridView("editresults").SelectedData[0];
                if (e) {
                    $Template("details").Bind(e);
                    $Template("details").Collapsed(false);
                    if (e.CanLike) {
                        $Span("likespan").Text(e.Liked ? " Dislike this edit." : "Like this edit.");
                    }
                    $Anchor("likelink").Collapsed(!e.CanLike);
                }
            });

            $Template("details").Collapsed(true);
            songs = Simphony.AllSongs();
            searchEdits();
        });

        var songs;
        function searchSongs(e) {
            var t = $TextBox("song").Text().ToLower();
            return From(songs).Where(function (e) { return e.Title.ToLower().Contains(t) }).Select();
        }

        function searchEdits() {
            $GridView("editresults").Loading("Searching edits...");
            Simphony.SearchEditsAsync($DropDownList("userid").SelectedValue(), $DropDownList("level").SelectedValue().ToInt(), $SuggestionBox("song").Text(), $DropDownList("style").SelectedValue(), getEdits);
            $Template("details").Collapsed(true);

        }

        function getEdits(e) {
            $GridView("editresults").Bind(e.ResponseObject);
            $Span("total").Text(e.ResponseObject.length + " edit".FormatPlural(e.ResponseObject.length));
        }

        var comment1 = ["(none)", "Just a bit", "Relatively", "Incredibly", "Super", "Light", "Happy", "Hot", "Cool", "???", "Fascinating", "Extreme", "Ultimate", "Miraculous", "Legendary", "Other"];
        var comment2 = ["(none)", "Lesson time!", "Watch out!", "Check this out!", "Trickster", "Freezing Inferno", "Nonstop Madness", "Jumping Jamboree", "Chaos Zone", "For Beginners", "For Intermediates", "For Experts", "My masterpiece!", "My best masterpiece!", "Calling all challengers!", "Something"];

        function searchUser(u) {
            $SuggestionBox("song").Clear();
            $DropDownList("style").SelectedIndex(0);
            $DropDownList("level").SelectedIndex(0);
            $TextBox("song").Clear();
            $DropDownList("userid").SelectedValue(u);
            searchEdits();
            Page.VerticalScrollPosition(0);
        }

        function searchSong(u) {
            $SuggestionBox("song").Clear();
            $DropDownList("style").SelectedIndex(0);
            $DropDownList("level").SelectedIndex(0);
            $DropDownList("userid").SelectedIndex(0);
            $TextBox("song").Text(u);
            searchEdits();
            Page.VerticalScrollPosition(0);
        }

        function toggleLike(id) {
            var like = Simphony.ToggleLike(id);
            var e = $GridView("editresults").SelectedData[0];
            e.Liked = like;
            if (like) {
                e.Likes++;
            }
            else {
                e.Likes--;
            }

            $GridView("editresults").Refresh();
            $Span("likespan").Text(e.Liked ? " Dislike this edit." : "Like this edit.");

        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="Server">
    <daiz:Section HeaderText="Search Edits" runat="server">
        <table enteractivates="searchButton" class="form" width="100%" highlight="formh">
            <tr>
                <td width="200">
                    User
                </td>
                <td>
                    <daiz:DropDownList ID="userid" runat="server">
                        <asp:ListItem Text="Any user" Value=""></asp:ListItem>
                    </daiz:DropDownList>
                </td>
            </tr>
            <tr>
                <td>
                    Song
                </td>
                <td>
                    <daiz:SuggestionBox Size="30" BindText="Title" runat="server" ID="song" Source="searchSongs" />
                </td>
            </tr>
            <tr>
                <td>
                    Style
                </td>
                <td>
                    <daiz:DropDownList runat="server" ID="style">
                        <asp:ListItem Text="Any" Value="" />
                        <asp:ListItem Text="Single" Value="Single" />
                        <asp:ListItem Text="Double" Value="Double" />
                        <asp:ListItem Text="Couple" Value="Couple" />
                    </daiz:DropDownList>
                </td>
            </tr>
            <tr>
                <td>
                    Difficulty Level
                </td>
                <td>
                    <asp:DropDownList ID="level" runat="server">
                        <asp:ListItem Text="Any" Value="0" />
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
                        <asp:ListItem Text="20" Value="20" />
                    </asp:DropDownList>
                </td>
            </tr>
            <tr class="formfooter">
                <td>
                </td>
                <td>
                    <daiz:Button ID="searchButton" runat="server" ButtonType="Button" Text="Search" OnClientClick="searchEdits()" />
                </td>
            </tr>
        </table>
    </daiz:Section>
    <daiz:Section runat="server" HeaderText="Search Results">
        Found <span id="total"></span>.
        <table rowheight="18" id="editresults" display="20" width="100%" class="gridview"
            border="0" cellspacing="0" cellpadding="0">
            <colgroup>
                <col />
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
                    <th width="100" data="UserID">
                        User
                    </th>
                    <th data="Name" width="100">
                        Name
                    </th>
                    <th data="SongTitle.ToLower" display="{SongTitle}" width="*">
                        Song
                    </th>
                    <th data="Style" width="100">
                        Style
                    </th>
                    <th data="Difficulty" width="100">
                        Difficulty
                    </th>
                    <th data="Rating" width="50">
                        Level
                    </th>
                    <th data="Downloads" width="75">
                        <img src="/images/download.png" />
                    </th>
                    <th data="Likes" width="75">
                        Likes
                    </th>
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
                <td>
                    View Details
                </td>
                <td>
                    <a target="_blank" href="/edit.aspx?id={ID}">View Details</a>
                </td>
                <td colspan="2" align="right">
                    <a href="javascript: addEdit({ID})">+ Add to current library</a>
                </td>
            </tr>
            <tr>
                <td>
                    User
                </td>
                <td>
                    <a href="javascript: searchUser('{UserID}')">{UserID}</a>
                </td>
                <td colspan="2" align="right">
                    <a id="likelink" href="javascript: toggleLike({ID})">
                        <img src="/images/like.png" />
                        <span runat="server" id="likespan">Like this edit!</span></a>
                </td>
            </tr>
            <tr>
                <td>
                    Song Title
                </td>
                <td colspan="3">
                    <a href="javascript: searchSong('{SongTitle}')">{SongTitle}</a>
                </td>
            </tr>
            <tr>
                <td>
                    Edit Name
                </td>
                <td>
                    {Name}
                </td>
                <td>
                    Comment 1
                </td>
                <td>
                    {Comment1.@comment1}
                </td>
            </tr>
            <tr>
                <td>
                    Style
                </td>
                <td>
                    {Style}
                </td>
                <td>
                    Comment 2
                </td>
                <td>
                    {Comment2.@comment2}
                </td>
            </tr>
            <tr>
                <td>
                    Level
                </td>
                <td>
                    {Rating}
                </td>
                <td>
                    Likes
                </td>
                <td>
                    Has been liked {Likes} times.
                </td>
            </tr>
            <tr>
                <td>
                    Last Updated
                </td>
                <td>
                    {LastUpdated}
                </td>
                <td>
                    Difficulty
                </td>
                <td>
                    {Difficulty}
                </td>
            </tr>
            <tr>
                <td>
                    Video
                </td>
                <td colspan="3">
                    <a target="_blank" href="{Video}">{Video}</a>
                </td>
            </tr>
            <tr>
                <td>
                    Chart
                </td>
                <td colspan="3">
                    <a target="_blank" href="/chartviewer.aspx?id={ID}">View Chart</a>
                </td>
            </tr>
            <tr>
                <td>
                    Description
                </td>
                <td colspan="3">
                    {Description}
                </td>
            </tr>
            <tr valign="top">
                <td>
                    Downloads:
                </td>
                <td colspan="3">
                    <a href="/downloaddat.aspx?id={ID}&region=U">
                        <img src="/images/download.png" />
                        Download North America Arcade Data File</a> <a href="/downloaddat.aspx?id={ID}&region=E">
                            <img src="/images/download.png" />
                            Download Europe Arcade Data File</a> <a href="/downloadsm.aspx?id={ID}">
                                <img src="/images/download.png" />
                                Download Stepmania Simfile</a>
                </td>
            </tr>
        </table>
    </daiz:Section>
</asp:Content>
