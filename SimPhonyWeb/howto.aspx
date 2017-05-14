<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="howto.aspx.cs" Inherits="howto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section HeaderText="1. Create an Edit in Stepmania" runat="server">
    <p>The first step is to create an edit in Stepmania. SimPhony works by converting Stepmania format step charts into
    a format that Konami's conversion program can read. In order for the converter to properly work, <b>you must have the Expert or Challenge only singles official chart in your simfile</b>!
    SimPhony uses the information to determine the syncing differences between your chart and the official data in the arcade game.
    </p>
    <center>
        <img src="/images/howto1.png" />
    </center>
</daiz:Section>
<daiz:Section HeaderText="2. Sign Up for an Account" runat="server">
    <p>If you haven't already, sign up for an account on SimPhony Online so you can convert your edits. You can mark them
    private so that no one will see your edits!</p>
    <center>
        <img src="/images/howto2.png" />
    </center>
</daiz:Section>
<daiz:Section HeaderText="3. Convert Your Chart" runat="server">
    <p>Once you've signed in, you can click "New Edit" on the left. You simply upload your Stepmania simfile and
    SimPhony will detect all the available charts. You select the chart you want to convert into a DDR edit, set a few
    properties and save! After a few moments, your chart will be converted and you are almost ready!
    </p>
    <center>
        <img src="/images/howto3.png" />
    </center>
</daiz:Section>
<daiz:Section HeaderText="4. Download your .DAT Files" runat="server">
    <p>
    Each file is converted into a .DAT file that can be downloaded on the details screen of your edits. You must
    download the correct region for your .DAT file. North American .DAT files will not work on European machines and vice versa.
    </p>
    <center>
        <img src="/images/howto4.png" />
    </center>
</daiz:Section>
<daiz:Section HeaderText="5. Use Konami's Library Manager" runat="server">
    <p>
    Once you have your files downloaded, combine all of your .DAT files into a singe .zip file. Visit <a href="http://ddredit.konamionline.com/ddrse/library_manager/index.php">Konami's Library Manager</a> and use 
    their tool to convert the .zip file into a single .DAT file.
    </p>
    <center>
        <img src="/images/howto5.png" />
    </center>
</daiz:Section>
<daiz:Section HeaderText="6. Place .DAT File on USB Drive." runat="server">
    <p>
        Place your .DAT file given to you by Konami's Library Manager on your USB drive under the folder "DDR_EDIT" located at the root.
        You must name the .DAT file as "DDR_EDIT_U.DAT" or "DDR_EDIT_E.DAT" depending on the region.
    </p>
    <center>
        <img src="/images/howto6.png" />
    </center>
</daiz:Section>
<daiz:Section HeaderText="7. Play at the Arcade!" runat="server">
    <p>
        Take your USB drive to your local DDR X or DDR X2 machine and play your edit on the machine!
    </p>
    <center>
        <img src="/images/howto7.png" />
    </center>
</daiz:Section>
</asp:Content>