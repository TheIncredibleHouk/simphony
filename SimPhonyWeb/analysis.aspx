<%@ Page Title="" Language="C#" MasterPageFile="~/master/main.master" AutoEventWireup="true" CodeFile="analysis.aspx.cs" Inherits="analysis" %>

<asp:Content ID="Content1" ContentPlaceHolderID="Scripts" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<daiz:Section HeaderText="Chart Information" runat="server">
     <table width="100%" border="0" class="form" cellspacing="0" cellpadding="0">
        <colgroup>
            <col width="150" align="right" style="font-weight: bold" />
            <col width="200" />
            <col width="150" align="right" style="font-weight: bold" />
            <col />
        </colgroup>
        <tr>
            <td>User</td>
            <td>The user that uploaded the edit.</td>
        </tr>
        <tr>
            <td>Song Title</td>
            <td colspan="3">Name of the song the edit applies to.</td>
        </tr>
        <tr>
            <td>Edit Name</td>
            <td>Name of the edit that will appear when it is played in the arcade.</td>
            <td>Comment 1</td>
            <td>First comment for that will appear when it is played in the arcade.</td>
        </tr>
        <tr>
            <td>Style</td>
            <td>Singles, Doubles or Couples</td>
            <td>Comment 2</td>
            <td>Second comment for that will appear when it is played in the arcade.</td>
        </tr>
        <tr>
            <td>Level</td>
            <td>Difficulty level (1-20 X Scale)</td>
            <td>Likes</td>
            <td>Number of times the edit has been liked.</td>
        </tr>
        <tr>
            <td>Last Updated</td>
            <td colspan="3">Last time this chart was modified.</td>
        </tr>
        <tr>
            <td>Description</td>
            <td colspan="3">Brief description of the chart.</td>
        </tr>
        <tr>
            <td>Taps:</td>
            <td colspan="3">
                <div class="status"><div class="value" style="width: 59.8571428571429%; background-color: #fff000">&nbsp;</div></div>
                <br />
                Number of total combo steps (jumps count as 1). The longer the bar, the more steps in the chart. The closer
                to "red", the more "dense" the notes. For example, a song with 500 notes at 1:30 would be considered "red". A song with 500 notes that's close
                to 2:00 would be considered more "orange".
            </td>
        </tr>
        <tr>
            <td>Jumps:</td>
            <td colspan="3"><div class="status"><div class="value" style="width: 14.3198090692124%; background-color: #57ff00">&nbsp;</div></div>
            <br />
            Number of jumps in the song. The longer the bar, the more jumps are in the song. The closer to red, the higher the ration of jumps
            to notes. A song with 60 jumps out of 500 would have a long bar, but colored orange. A song with 20 jumps out of 200 notes would
            have a shorter bar but be colored closer to red.
            </td>
        </tr>
        <tr>
            <td>Streams:</td>
            <td colspan="3"><div class="status"><div class="value" style="width: 77.4011299435028%; background-color: #d6ff00">&nbsp;</div></div>
            <br />
            Number of streams in the song. The longer the bar, the more of the song that is stream based. The closer to red the bar is,
            the longer the streams are. A song that mostly streams of 3 steps will have a long bar, but be colored green. A song with
            long streams will be closer to red.
            </td>
        </tr>
        <tr>
            <td>Stream Jumps:</td>
            <td colspan="3"><div class="status"><div class="value" style="width: 66.1016949152542%; background-color: #ff6b00">&nbsp;</div></div>
            <br />
            Number of jumps that occur during a stream. The more jumps that occur during a stream, the longer the bar. If the jumps occur across
            several streams, the color will be closer to green. If the jumps occur mostly in a stream or two, the closer to red it will be.
            </td>
        </tr>
        <tr>
            <td>Freezes:</td>
            <td colspan="3"><div class="status"><div class="value" style="width: 62.780269058296%; background-color: #ff1f00">&nbsp;</div></div>
            <br />
            Number of freezes in the song.  The more individual freeze arrows there are, the longer the bar is. The more a song occurs during a freeze, the
            closer to red it is. A song with a lot of short freezes will have a long bar, but be colored green. A song with few but long freezes will have a short
            bar but be closer to red.
            </td>
        </tr>
        <tr>
            <td>Sixteenths:</td>
            <td colspan="3"><div class="status"><div class="value" style="width: 50.5714285714286%; background-color: #e6ff00">&nbsp;</div></div>
            <br />
            The number of sixteenth notes in the song. The more sixteenth streams, the longer the bar. The longer the sixteenth streams are, the closer
            to red the bar becomes. A song with lots of 16ths that are short 3 notes will have a longer bar but be closer to green. A song with a small amount
            of 16ths but with a long stream occurence will be closer to red.
            </td>
        </tr>
        <tr>
            <td>Gallops:</td>
            <td colspan="3">
                <div class="status"><div class="value" style="width: 13.5593220338983%; background-color: #3dff00">&nbsp;</div></div>
                <br />
                The number of gallops, or set of two sixteenth notes not a part of a stream. The more gallops there are, the longer and closer to red the bar is.
            </td>
        </tr>
        <tr>
            <td>Twelfths:</td>
            <td colspan="3">
                <div class="status"><div class="value" style="width: 33.5593220338983%; background-color: #3dff00">&nbsp;</div></div>
                <br />
                The number of twelfth notes that occur.
            </td>
        </tr>
        <tr valign="top">
            <td>Downloads:</td>
            <td colspan="3">
                Links to downloads for the edit in different formats. The formats are the arcade .DAT files for North America and Europe, and the 
                original simfile submitted by the user.
            </td>
        </tr>
    </table>
</daiz:Section>
</asp:Content>