<%@ Page Title="" ValidateRequest="false" EnableEventValidation="false" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="newedit.aspx.cs" Inherits="newedit" %>

<asp:Content ContentPlaceHolderID="Scripts" runat="server">
    <script type="text/javascript">
        Page.OnLoad.Add(function () {
            $Span("upload").Collapsed(true);
            $Button("BtnUpload").Collapsed(true);
            switch ($HiddenField("HdnMode").Value()) {
                case "0":
                    $SuggestionBox("TxtSong").OnSuggestionSelected.Add(songOk);
                    $FileUpload("FupSMFile").OnChange.Add(function () {
                        $Button("BtnUpload").Click(true);
                    });
                    break;

                case "1":
                    window.parent.confirmUpload();
                    break;
            }

            songs = Simphony.AllSongs();
            $Div("error_list").Collapsed(true);
            Page.Form.OnSubmit.Insert(0, saveEdit);
        });

        var songs;

        function searchSongs(e) {
            var t = $TextBox("TxtSong").Text().ToLower();
            return From(songs).Where(function (e) { return e.Title.ToLower().Contains(t) }).Select();
        }

        var hasSong = false;
        var hasFile = false;

        function songOk(e) {
            e = $EventArgs(e);
            $Span("song_ok").Text(e.Data.ID + " - \"" + e.Data.Title + "\"").ClassName("ok");
            $HiddenField("HdnSongId").Value(e.Data.ID);
            hasSong = true;
            $Row("measure_row").Collapsed(e.Data.Confirmed);
        }

        function fileUpload() {
            $Span("upload").Collapsed(false);
            Page.Form.Target("upload_target");
            NinJaValidation.EnableValidation = false;
            uppingFile = true;
        }


        var styles = ["Single", "Double", "Couple"];
        var difficulties = ["Beginner", "Easy", "Medium", "Hard", "Challenge", "Edit"];
        function confirmUpload() {
            NinJaValidation.EnableValidation = true;
            uppingFile = false;
            Page.Form.Target("");
            $Span("upload").Collapsed(true);
            var charts = Simphony.GetSimData();
            if (charts != null) {
                var l = charts.Charts.length, v, o;
                var list = [];
                for (var i = 0; i < l; i++) {
                    v = charts.Charts[i];
                    o = new Option(String.Format("[{0}] {1} - {2} : {3}", [styles[v.Style], v.Name ? v.Name : "<No Name>", difficulties[v.Difficulty], v.Rating]), v.ID);
                    o.Tag = v;
                    list.Add(o);
                }

                $DropDownList("CmbChart").Options.Clear().AddRange(list);
                var sgst = $SuggestionBox("TxtSong");
                sgst.Text(charts.SongTitle).Update();
                if (sgst.Data.length == 1) {
                    sgst.SelectedData(sgst.Data[0]);
                }
                else {
                    sgst.Focus();
                }
                hasFile = true;
            }
        }

        function chartChanged() {
            var c = $DropDownList("CmbChart").SelectedOption();
            if (c) {
                $DropDownList("CmbRating").SelectedValue(c.Tag.Rating);
                $TextBox("TxtName").Text(c.Tag.Name);
                $HiddenField("HdnChart").Value(c.Value());
                if (c.Tag.Errors.length > 0) {
                    $Div("error_list").Collapsed(false).Content(c.Tag.Errors.ToString("<br />"));
                }
                else {
                    $Div("error_list").Collapsed(true);
                }
            }
        }

        var uppingFile;
        function saveEdit() {
            if (uppingFile) return;
            var e = NinJa.Event;
            var ok = true;
            if (!hasFile) {
                ok = false;
                alert("Please upload a simfile to convert data from.");
            }

            if (!hasSong) {
                ok = false;
                alert("Please select the song the edit applies to.");
            }

            e.Handled = !ok;

            if (ok) {
                $Cell("upload_cell").RemoveElement($FileUpload("FupSMFile"));
            }
        }

        function checkName() {
            var t = $TextBox("TxtName").Text(), l = t.length, i = 0, v;
            for (; i < l; i++) {
                v = t.charAt(i);
                if (v >= 'a' && v <= 'z') continue;
                if (v >= 'A' && v <= 'Z') continue;
                if (v >= '0' && v <= '9') continue;
                if (v == '!') continue;
                if (v == '?') continue;
                if (v == '_') continue;
                if (v == '-') continue;
                return false;

            }

            return true;
        }
    </script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" Runat="Server">
    <asp:Panel ID="PnlNewEdit" runat="server" Visible="true">
    <daiz:Section runat="server" HeaderText="First Measure *">
        <p>In order to make SimPhony Online live, I've temporarily added a way to supply the first measure of the official chart if I have not recorded
        it in the database yet. Once the starting measure of a song is confirmed, you will no longer have to supply it yourself.
        </p>
        <p>In order to figure out the starting measure, simply look for a video of the song being played on an arcade machine. Once the word "HERE WE GO" appears and the
        arrows begin to flash, starting counting "1, 2, 3, 4, 1, 2, 3, 4" to count the measures. One the first note reaches the top, that will be the first measure of the song.</p>
    </daiz:Section>
    <daiz:Section runat="server">
        <daiz:Subsection HeaderText="Simfile" runat="server">
            <table highlight="formh" width="100%" class="form">
                <colgroup>
                    <col width="200" align="right" />
                </colgroup>
                <tr>
                    <td>Simfile</td>
                    <td id="upload_cell"><asp:FileUpload ID="FupSMFile" runat="server" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><span id="upload">Uploading file, please wait.</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><asp:Button OnClientClick="fileUpload()" OnClick="UploadSim" ID="BtnUpload" runat="server" Text="Upload File" /></td>
                </tr>
            </table>
        </daiz:Subsection>
        <daiz:Subsection HeaderText="Conversion Information" runat="server">
            <table highlight="formh" width="100%" class="form">
                <colgroup>
                    <col width="200" align="right" />
                </colgroup>
                <tr>
                    <td>Song Title</td>
                    <td><daiz:SuggestionBox ID="TxtSong" Width="250" Source="searchSongs" BindText="Title" runat="server" /></td>
                </tr>
                <tr>
                    <td>Song ID</td>
                    <td><span id="song_ok">No song selected.</span></td>
                </tr>
                <tr>
                    <td>Select Chart</td>
                    <td>
                        <asp:DropDownList onchange="chartChanged()" runat="server" ID="CmbChart" />
                        <div class="error" id="error_list"></div>
                    </td>
                </tr>
                <tr id="measure_row">
                    <td>*Enter Measure of First Note of Official Chart</td>
                    <td><asp:TextBox ID="first" runat="server" Columns="2" /></td>
                </tr>
            </table>
        </daiz:Subsection>
        <iframe style="display: none" name="upload_target" width="0" height="0" frameborder="0"></iframe>
        <daiz:Subsection HeaderText="Edit Information" runat="server">
            <table highlight="formh" width="100%" class="form">
                <colgroup>
                    <col width="200" valign="top" align="right" />
                </colgroup>
                <tr>
                    <td>Edit Level</td>
                    <td>
                        <asp:DropDownList ID="CmbRating" runat="server">
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
                <tr>
                    <td>Edit Difficulty</td>
                    <td>
                        <asp:DropDownList ID="CmbEditDifficulty" runat="server">
                            <asp:ListItem Text="Beginner" Value="Beginner"></asp:ListItem>
                            <asp:ListItem Text="Basic" Value="Basic"></asp:ListItem>
                            <asp:ListItem Text="Difficult" Value="Difficult"></asp:ListItem>
                            <asp:ListItem Selected="True" Text="Expert" Value="Expert"></asp:ListItem>
                            <asp:ListItem Text="Challenge" Value="Challenge"></asp:ListItem>
                        </asp:DropDownList>    
                    </td>
                </tr>
                <tr>
                    <td>Comment 1</td>
                    <td>
                        <asp:DropDownList ID="CmbComment1" runat="server">
                            <asp:ListItem Text="(none)" Value="(none)" />
                            <asp:ListItem Text="Just a bit" Value="Just a bit" />
                            <asp:ListItem Text="Relatively" Value="Relatively" />
                            <asp:ListItem Text="Incredibly" Value="Incredibly" />
                            <asp:ListItem Text="Super" Value="Super" />
                            <asp:ListItem Text="Light" Value="Light" />
                            <asp:ListItem Text="Happy" Value="Happy" />
                            <asp:ListItem Text="Hot" Value="Hot" />
                            <asp:ListItem Text="Cool" Value="Cool" />
                            <asp:ListItem Text="???" Value="???" />
                            <asp:ListItem Text="Fascinating" Value="Fascinating" />
                            <asp:ListItem Text="Extreme" Value="Extreme" />
                            <asp:ListItem Text="Ultimate" Value="Ultimate" />
                            <asp:ListItem Text="Miraculous" Value="Miraculous" />
                            <asp:ListItem Text="Legendary" Value="Legendary" />
                            <asp:ListItem Text="Other" Value="Other" />
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td>Comment 2</td>
                    <td>
                        <asp:DropDownList ID="CmbComment2" runat="server">
                            <asp:ListItem Text="(none)" Value="(none)" />
                            <asp:ListItem Text="Lesson time!" Value="Lesson time!" />
                            <asp:ListItem Text="Watch out!" Value="Watch out!" />
                            <asp:ListItem Text="Check this out!" Value="Check this out!" />
                            <asp:ListItem Text="Trickster" Value="Trickster" />
                            <asp:ListItem Text="Freezing Inferno" Value="Freezing Inferno" />
                            <asp:ListItem Text="Nonstop Madness" Value="Nonstop Madness" />
                            <asp:ListItem Text="Jumping Jamboree" Value="Jumping Jamboree" />
                            <asp:ListItem Text="Chaos Zone" Value="Chaos Zone" />
                            <asp:ListItem Text="For Beginners" Value="For Beginners" />
                            <asp:ListItem Text="For Intermediates" Value="For Intermediates" />
                            <asp:ListItem Text="For Experts" Value="For Experts" />
                            <asp:ListItem Text="My masterpiece!" Value="My masterpiece!" />
                            <asp:ListItem Text="My best masterpiece!" Value="My best masterpiece!" />
                            <asp:ListItem Text="Calling all challengers!" Value="Calling all challengers!" />
                            <asp:ListItem Text="Something" Value="Something" />
                        </asp:DropDownList>
                    </td>
                </tr>
                <tr>
                    <td>Edit Name</td>
                    <td><asp:TextBox MaxLength="8" ID="TxtName" runat="server" /><daiz:Validator runat="server" Required="true">Name required.</daiz:Validator>
                    <daiz:Validator ControlToValidate="TxtName" runat="server" CustomFunction="checkName">Only alphanumeric characters and '?', '!', '_' or '-' are allowed.</daiz:Validator>
                    </td>
                </tr>
                <tr>
                    <td>Publicly Available</td>
                    <td><asp:CheckBox ID="ChkPublic" runat="server" Checked="true" /></td>
                </tr>
                <tr>
                    <td>Notes</td>
                    <td><asp:TextBox MaxLength="5000" ID="TxtNotes" runat="server" TextMode="MultiLine" Rows="5" Columns="50" /></td>
                </tr>
                <tr>
                    <td>Video URL</td>
                    <td><daiz:TextBox MaxLength="500" Size="75" ID="video" runat="server" /></td>
                </tr>
                <tr class="formfooter">
                    <td></td>
                    <td>
                        <asp:Button ID="BtnCreate" OnClick="SaveEdit" runat="server" Text="Save" />
                        <daiz:Button  OnClientClick="Page.Location('/myedits.aspx')" runat="server" Text="Cancel" />
                    </td>
                </tr>
            </table>
        </daiz:Subsection>
    </daiz:Section>
    <asp:HiddenField runat="server" ID="HdnSongId" Value="" />
    </asp:Panel>
    <asp:HiddenField ID="HdnMode" runat="server" />
    <asp:HiddenField ID="HdnChart" runat="server" />
</asp:Content>

