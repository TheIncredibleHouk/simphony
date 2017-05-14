<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="edit.aspx.cs" Inherits="edit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">
    function rateIt(id) {
        Simphony.RateEdit(id, $DropDownList("rating").SelectedValue().ToInt());
        $Row("rating_row").Collapsed(true);
    }

    var bars, sizes = [], colors = [];

    Page.OnLoad.Add(function () {
        bars = [$Element("taps"),
                $Element("jumps"),
                $Element("streams"),
                $Element("stream_jump"),
                $Element("freezes"),
                $Element("trills"),
                $Element("gallops"),
                $Element("twelfths")];
        var l = bars.length, i = 0;
        for (var i = 0; i < l; i++) {
            sizes[i] = bars[i].Size();
            colors[i] = bars[i].BackgroundColor();
            bars[i].Size(new Size(0, sizes[i].Height)).BackgroundColor(Colors.Green);
        }

        growAll();
    });

    function growAll() {
        var l = bars.length, i = 0;
        for (i = 0; i < l; i++) {
            bars[i].ResizeTo(sizes[i], 1500, 50, colorAll);
        }
    }

    function colorAll() {
        var l = bars.length, i = 0;
        for (i = 0; i < l; i++) {
            bars[i].BlendBgTo(colors[i], 1000, 20);
        }
    }

    function toggleLike(id) {
        var like = Simphony.ToggleLike(id);
        var e = $Span("Likes").Text().ToInt();
        
        if (like) {
            e++;
        }
        else {
            e--;
        }

        $Span("Likes").Text(e);
        $Span("likespan").Text(like ? " Dislike this edit." : "Like this edit.");

    }
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section runat="server" HeaderText="Detailed Edit Data">
    <table width="100%" border="0" class="form" cellspacing="0" cellpadding="0">
        <colgroup>
            <col width="150" align="right" style="font-weight: bold" />
            <col width="200" />
            <col width="150" align="right" style="font-weight: bold" />
            <col />
        </colgroup>
        <tr>
            <td>User</td>
            <td><daiz:Label ID="UserID" runat="server" /></td>
            <td colspan="2" align="right"><daiz:HyperLink runat="server" ID="add_edit">+ Add to current library</daiz:HyperLink> </td>
        </tr>
        <tr>
            <td>Song Title</td>
            <td colspan="2"><daiz:Label ID="SongTitle" runat="server" /></td>
            <td valign="bottom"><a runat="server" id="likelink">
                <img src="/images/like.png" />
                <span runat="server" id="likespan">Like this edit!</span></a>
           </td>
        </tr>
        <tr>
            <td>Edit Name</td>
            <td><daiz:Label ID="Name" runat="server" /></td>
            <td>Comment 1</td>
            <td><daiz:Label ID="Comment1" runat="server" /></td>
        </tr>
        <tr>
            <td>Style</td>
            <td><daiz:Label ID="Style" runat="server" /></td>
            <td>Comment 2</td>
            <td><daiz:Label ID="Comment2" runat="server" /></td>
        </tr>
        <tr>
            <td>Level</td>
            <td><daiz:Label ID="Level" runat="server" /></td>
            <td>Likes</td>
            <td>Has been liked <daiz:Label ID="Likes" runat="server" /> times.</td>
        </tr>
        <tr>
            <td>Last Updated</td>
            <td><daiz:Label ID="LastUpdate" runat="server" /></td>
            <td>Difficulty</td>
            <td><daiz:Label ID="difficulty" runat="server" /></td>
        </tr>
        <tr>
            <td>Video</td>
            <td colspan="3"><asp:Label runat="server" ID="video"></asp:Label></td>
        </tr>
          <tr>
            <td>Chart</td>
            <td colspan="3"><asp:Label runat="server" ID="chart"></asp:Label></td>
        </tr>
        <tr>
            <td>Description</td>
            <td colspan="3"><daiz:Label ID="Description" runat="server" /></td>
        </tr>
        <tr>
            <td>Taps:</td>
            <td colspan="3"><asp:Literal ID="taps" runat="server" /></td>
        </tr>
        <tr>
            <td>Jumps:</td>
            <td colspan="3"><asp:Literal ID="jumps" runat="server" /></td>
        </tr>
        <tr>
            <td>Streams:</td>
            <td colspan="3"><asp:Literal ID="streams" runat="server" /></td>
        </tr>
        <tr>
            <td>Stream Jumps:</td>
            <td colspan="3"><asp:Literal ID="stream_jump" runat="server" /></td>
        </tr>
        <tr>
            <td>Freezes:</td>
            <td colspan="3"><asp:Literal ID="freezes" runat="server" /></td>
        </tr>
        <tr>
            <td>Sixteenth Streams:</td>
            <td colspan="3"><asp:Literal ID="trills" runat="server" /></td>
        </tr>
        <tr>
            <td>Gallops:</td>
            <td colspan="3"><asp:Literal ID="gallops" runat="server" /></td>
        </tr>
        <tr>
            <td>Twelfths:</td>
            <td colspan="3"><asp:Literal ID="twelfths" runat="server" /></td>
        </tr>
        <tr valign="top">
            <td>Downloads:</td>
            <td colspan="3">
                <daiz:HyperLink runat="server" ID="linkU"><img src="/images/download.png" /> Download North America Arcade Data File</daiz:HyperLink>
                <daiz:HyperLink runat="server" ID="linkE"><img src="/images/download.png" /> Download Europe Arcade Data File</daiz:HyperLink>
                <daiz:HyperLink runat="server" ID="linkSM"><img src="/images/download.png" /> Download Stepmania Simfile</daiz:HyperLink>
            </td>
        </tr>
        <tr runat="server" id="update_row" visible="false" class="formfooter">
            <td></td>
            <td colspan="3"><daiz:Button ID="updateButton" OnClick="Update" runat="server" Text="Update" /></td>
        </tr>
        <tr runat="server" id="rating_row" class="formfooter">
            <td>Rating</td>
            <td colspan="3">
                <asp:DropDownList runat="server" ID="rating">
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
                </asp:DropDownList>
                <daiz:Button ID="rateButton" ButtonType="Button" runat="server" Text="Submit" />
            </td>
        </tr>
    </table>
</daiz:Section>
</asp:Content>