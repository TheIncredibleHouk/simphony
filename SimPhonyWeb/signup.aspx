<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="signup.aspx.cs" Inherits="signup" %>

<asp:Content ContentPlaceHolderID="Scripts" runat="server">
<script type="text/javascript">

    function checkUser() {
        return Simphony.CheckUserId($TextArea("TxtUserName").Text());
    }

    var passwordOk = false;
    function checkPassword() {
        return $Password("TxtPass").Text() == $Password("TxtPass2").Text()
    }
</script>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section runat="server" enteractivates="BtnSignUp">
    <daiz:Subsection HeaderText="Account Sign Up" runat="server">
        <p>Sign up to create and keep track of your edits! You can have others rate them, modify them and create edit packs!</p>
     </daiz:Subsection>
     <daiz:Subsection HeaderText="Information"  runat="server">
        <table highlight="formh" class="form" width="100%">
            <colgroup>
                <col width="150" align="right" />
            </colgroup>
            <tr>
                <td>Username</td>
                <td>
                    <asp:TextBox MaxLength="250" ID="TxtUserName" runat="server" />
                    <daiz:Validator runat="server" Required="true">User id required.</daiz:Validator>
                    <daiz:Validator runat="server" CustomFunction="checkUser">User id already taken.</daiz:Validator>
                    </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>
                <asp:TextBox MaxLength="250" TextMode="Password" ID="TxtPass" runat="server" />    
                <daiz:Validator runat="server" Required="true">Password required.</daiz:Validator>
                <daiz:Validator runat="server" CustomFunction="checkPass">Passwords do not match.</daiz:Validator>
                </td>
            </tr>
            <tr>
                <td>Confirm Password</td>
                <td>
                    <asp:TextBox MaxLength="250" TextMode="Password" ID="TxtPass2" runat="server" />
                    <daiz:Validator runat="server" Required="true">Password confirmation required.</daiz:Validator>
                </td>
            </tr>
            <tr>
                <td>Email</td>
                <td>
                    <asp:TextBox MaxLength="250" ID="TxtEmail" runat="server" />
                    <daiz:Validator runat="server" Required="true">Email is required.</daiz:Validator>
                </td>
            </tr>
            <tr class="formfooter">
                <td></td>
                <td><asp:Button ID="BtnSignUp" OnClick="SignUp" runat="server" Text="Sign Up!" /></td>
            </tr>
        </table>
    </daiz:Subsection>
</daiz:Section>
</asp:Content>

