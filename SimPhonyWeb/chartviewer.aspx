<%@ Page Language="C#" AutoEventWireup="true" CodeFile="chartviewer.aspx.cs" Inherits="chartviewer" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        #chart
        {
            position: absolute;
            top: 32px;
            left: 32px;
            width: <%=chartWidth%>px;
            height: <%=chartHeight%>px;
            background-image: url('/images/notes/measure_<%=SpeedMod%>x.png');
        }
        
        img, span
        {
            position: absolute;
        }
        
        td:first-child
        {
            font-weight: bold;
            text-align: right;
        }
        
        #info
        {
            position: fixed;
            float: right;
            top: 16px;
            right: 0px;
            border: 1px solid #000000;
            width: 600px;
        }
        
        .freeze
        {
            background-image: url('/images/notes/freeze.png');
            background-position: bottom;
            width: 32px;
            position: absolute;
            overflow: visible;
        }
        
        .freeze_end
        {
            min-height: 16px;
            width: 100%;
            height: 100%;
            background-image: url('/images/notes/freeze_end.png');
            background-position: bottom;
            background-repeat: no-repeat;
            position: absolute;
            bottom: -14px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="info">
        <table border="0" cellspacing="0" cellpadding="2">  
            <tr>
                <td>Edit Name:</td>
                <td><asp:Literal ID="name" runat="server" /></td>
            </tr>
            <tr>
                <td>User:</td>
                <td><asp:Literal ID="user" runat="server" /></td>
            </tr>
            <tr>
                <td>Song:</td>
                <td><asp:Literal ID="song" runat="server" /></td>
            </tr>
            <tr>
                <td>Style:</td>
                <td><asp:Literal ID="style" runat="server" /></td>
            </tr>
            <tr>
                <td>Difficulty Level:</td>
                <td><asp:Literal ID="rating" runat="server" /></td>
            </tr>
            <tr>
                <td>Speed:</td>
                <td><asp:DropDownList AutoPostBack="true" OnSelectedIndexChanged="Reload" ID="speed" runat="server">
                    <asp:ListItem Text="1x" Value="1" />
                    <asp:ListItem Text="1.5x" Value="1.5" />
                    <asp:ListItem Text="2x" Value="2" />
                </asp:DropDownList></td>
            </tr>
            <tr>
                <td>Note Skin:</td>
                <td><asp:DropDownList AutoPostBack="true" OnSelectedIndexChanged="Reload" ID="noteskin" runat="server">
                    <asp:ListItem Text="Note" Value="" />
                    <asp:ListItem Text="Couples" Value="C" />
                </asp:DropDownList></td>
            </tr>
        </table>
    </div>
    <asp:Panel ID="chart" runat="server">
    </asp:Panel>
    <asp:Literal ID="chart_tags" runat="server" />
    </form>
</body>
</html>
