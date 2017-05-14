<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="setsongmeasure.aspx.cs" Inherits="setsongmeasure" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">
    Simphony.AddCall("SetSongFirstMeasure", "Boolean", "songid", "measure");
    var songs;
    
    Page.OnLoad.Add(function () {
        songs = Simphony.AllSongs();
        $SuggestionBox("song").OnSuggestionSelected.Add(showFirstMeasure);
    });

    function showFirstMeasure() {
        var s = $SuggestionBox("song").SelectedData();
        $TextBox("firstmeasure").Text(s.FirstMeasure).BackgroundColor(!s.Confirmed ? "red" : "white");
        
    }
    function searchSongs(e) {
        var t = $TextBox("song").Text().ToLower();
        return From(songs).Where(function (e) { return e.Title.ToLower().Contains(t) }).Select();
    }

    function saveSong(){
        var s = $SuggestionBox("song").SelectedData();
        if (!Simphony.SetSongFirstMeasure(s.ID, $TextBox("firstmeasure").Text().ToInt())) {
            alert("An error has occurred!");
        }
        else {
            $TextBox("firstmeasure").BackgroundColor("white");
            alert("Song saved!");
        }
    }
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section ID="Section1" HeaderText="Search Edits" runat="server">
    <table enteractivates="searchButton" class="form" width="100%" highlight="formh">
        <tr>
            <td>Song </td>
            <td>
               <daiz:SuggestionBox Size="30" BindText="Title" runat="server" ID="song" Source="searchSongs" />
            </td>
        </tr>
         <tr>
            <td>First Measure </td>
            <td>
               <asp:TextBox ID="firstmeasure" runat="server" Columns="2" />
            </td>
        </tr>
        <tr class="formfooter">
            <td></td>
            <td><daiz:Button runat="server" ButtonType="Button" Text="Save" OnClientClick="saveSong()" /></td>
        </tr>
    </table>
</daiz:Section>
</asp:Content>

