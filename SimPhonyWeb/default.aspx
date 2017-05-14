<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="default.aspx.cs" Inherits="_default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section runat="server" HeaderText="Welcome to SimPhony Online (beta)">
    <p>Registration is now open! The only crucial missing feature is having the starting measure of every song in the database. Until I can get them all in, you can
    supply the value yourself. If the database has the starting measure value recorded you will not have to supply this value.
    </p>
    <p>If you have any comments or suggestions, contact me at  dahrkdaiz[at]hotmail[dot]com.</p>
</daiz:Section>
<daiz:Section ID="Section7" runat="server" HeaderText="Changes 3/15/2013">
    <p>Updates for March 15th:
        It's been a while since an update has been made. Thanks to everyone that continues to use this site! I have removed the
        verification process required to sign up. All previous users should be able to log in with their password they had set up in the beginning.
        <br />
        Also, look for official Konami charts to appear under the "KonamiOfficial" user. Charts from the home series such as Ultramix and Universe that never made it
        to the arcade such as Maximizer Challenge, Un Deux Trois Challenge, etc. 
    </p>
</daiz:Section>
<daiz:Section ID="Section6" runat="server" HeaderText="Changes 7/7/2012">
    <p>Updates for July 7th:
        <ul>
            <li>Removed the rating feature since no one was using it.</li>
            <li>Added the "Like" feature instead. Simply click that you like something and you're done.</li>
            <li>All rating related stuff has been replaced with "Like".</li>
            <li>Removed songs that were in the database but were no longer in DDR X or X2.</li>
        </ul>

        Be sure to "Like" an edit if you enjoy it!
    </p>
</daiz:Section>
<daiz:Section ID="Section5" runat="server" HeaderText="Changes 7/2/2012">
    <p>Further fixes have been made to the site:
        <ul>
            <li>Simfiles that contained solo charts would break the simfile reader and stop parsing any part of the file after. This has been correct.</li>
            <li>Edit packs could be properly viewed.</li>
            <li>Song sorting is now case insensitive (clicking on the column header).</li>
        </ul>

        Minor changes:
        <ul>
            <li>Edit details now shows a small animation for the stat bars. Useless but neat :P</li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section ID="Section4" runat="server" HeaderText="Changes 6/23/2012">
    <p>Tiny Errors:
        <ul>
            <li>The last update broke the site for FireFox users. All is well now</li>
            <li>There is also a bug with simfiles that contain solo charts. A fix for this will come soon.</li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section ID="Section3" runat="server" HeaderText="Changes 6/18/2012">
    <p>Slight site update:
        <ul>
            <li>Added link to Konami's Library Manager back to the side panel</li>
            <li>Improved JavaScript performance</li>
            <li>Minified JavaScript for quicker loading</li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section ID="Section2" runat="server" HeaderText="Changes 6/1/2012">
    <p>Chart viewer update:
        <ul>
            <li>Updated the note skin</li>
            <li>Fixed the ends of freeze arrows</li>
            <li>Freeze arrow lengths are proper now</li>
            <li>Added a "couple" note skin. This will convert freezes into blue arrows and non-freezes to red arrow to distinguish P1 versus P2 patterns. </li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section ID="Section1" runat="server" HeaderText="Changes 5/30/2012">
    <p>Just some minor changes today.
        <ul>
            <li>You can now update an edit from the details page if you're signed in.</li>
            <li>You can now delete edits from the edit manager.</li>
            <li>You can now delete packs.</li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section runat="server" HeaderText="Changes 5/29/2012">
    <p>Added a chart viewer to the site. Simply click on 'View Chart'. 12th notes are not shown but it support will soon be added.</p>
    <p>Just some minor changes today.
        <ul>
            <li>The search edits page now lists all the users in a drop down list.</li>
            <li>deltaMAX has been removed from the song lists. Any edit of deltaMAX crashes the machine.</li>
            <li>Theory of Eternity and I'm So Happy have been removed from the song list as the songs aren't available on US or Euorpean machines.</li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section runat="server" HeaderText="Issues 5/28/2012">
    <p>There seems to be an issue with the library manager. If you download the precompiled .DAT files, only the first edit listed alphabetically
    will be compiled over. For now, download the library as a .ZIP and use Konami's Library Manager.</p>
</daiz:Section>
<daiz:Section runat="server" HeaderText="Updates 5/28/2012">
    <p>
        Several issues have been fixed that were discovered from a play test yesterday:
        <ul>
            <li>Simfiles that had a first measure <i>before</i> the official chart had the padding added to the end of the data. This has been fixed.</li>
            <li>The first measure of the first step in the simfile was always being calculated as 0. Since this resulted needing a padded measures, the previous mentioned bug
            caused the padding to appear at the end, therefore the two bugs canceled each other out. This has been fixed.</li>
            <li>Video links were not being shown in the search results or manage edits. This has been fixed.</li>
        </ul>
    </p>
    <p>
        Several tweaks have been made to the site as well:
        <ul>    
            <li>Find edits is now browse edits. All edits are listed if no search terms are included.</li>
            <li>You can click on song titles and userid's to search all edits by that particular song/person.</li>
        </ul>
    </p>
</daiz:Section>
<daiz:Section runat="server" HeaderText="Library Manager Done 5/27/2012">
    <p>The Library Manager is done! If you are not logged in you can add edits to a temporary to download either as a proper arcade .DAT file, or a zip of all the 
    .DAT files or all the Simfiles in a zip file.</p>
    <p>If you are logged in, you can save a pack with edits you created for people to download at once in the View Packs link on the left.</p>
</daiz:Section>
<daiz:Section HeaderText="Beta To Do List" runat="server">
    <ul>
        <li>Adding comments for particular edits</li>
    </ul>
</daiz:Section>
</asp:Content>

