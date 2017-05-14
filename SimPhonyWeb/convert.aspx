<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="convert.aspx.cs" Inherits="convert" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
<script type="text/javascript">
    Page.OnLoad.Add(function () {
        Simphony.ConvertDataAsync($HiddenField("convertid").Value(), conversionResult);
    });

    function conversionResult(e) {
        if (e.ResponseObject) {
            $Span("convert_status").Content("Conversion done! Redirecting...");
            Timer.Delay(1000, function () {
                Page.Location("myedits.aspx");
            });
        }
        else {
            $Span("convert_status").Content("Conversion failed!");
        }
    }
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section HeaderText="Edit Saved" runat="server">
    <span id="convert_status">Converting data. This may take a moment.</span>
</daiz:Section>
<asp:HiddenField ID="convertid" runat="server" />
</asp:Content>

