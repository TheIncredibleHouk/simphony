<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="savepack.aspx.cs" Inherits="savepack" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">
    Page.OnLoad.Add(function () {
        var e = $Div("edit_list3");
        $Div("edit_list2").RemoveElement(e);
        $Cell("moved_edit_list").AddElement(e);
        $Div("edit_list").Collapsed(true);
        $Div("edit_list4").Style("float", "none");
    });
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section HeaderText="Save Edit Pack" runat="server">
<p>Your current library has been moved to the bottom. You may review your edits or remove any before saving your pack. </p>
<table width="100%" class="form" highlight="highlight">
    <tr>
        <td width="200">Existing Pack</td>
        <td>
            <daiz:DropDownList onchange="$TextBox('new_row').Collapsed(this.SelectedIndex() > 0)" runat="server" ID="existing">
                <asp:ListItem Text="&lt;New Pack&gt;" Value=""></asp:ListItem>
            </daiz:DropDownList>
        </td>
    </tr>
    <tr id="new_row">
        <td>Name</td>
        <td><daiz:TextBox ID="packname" runat="server" /><daiz:Validator runat="server" Required="true">Name required.</daiz:Validator></td>
    </tr>
    <tr>
        <td>Edits In Library</td>
        <td align="left" id="moved_edit_list"></td>
    </tr>
    <tr>
        <td></td>
        <td><asp:Label ID="warning" CssClass="error" runat="server" Visible="false" /></td>
    </tr>
    <tr class="formfooter">
        <td></td>
        <td><daiz:Button ID="saveButton" OnClick="SavePack" Text="Save" runat="server" /></td>
    </tr>
</table>
</daiz:Section>
</asp:Content>

