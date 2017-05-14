<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="verify.aspx.cs" Inherits="verify" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section HeaderText="Account Verification" runat="server">
<asp:Label Visible="false" runat="server" ID="ok">Your email has been verified! Your account is now unlocked.</asp:Label>
<asp:Label Visible="false" runat="server" ID="notok">Your email has been verified! Your account is now unlocked.</asp:Label>
</daiz:Section>
</asp:Content>
