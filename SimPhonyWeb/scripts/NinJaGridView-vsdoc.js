///<reference path="~/scripts/NinJa.js" />
///<reference path="~/scripts/NinJaQuery.js" />
///<reference path="~/scripts/NinJaVisuals.js" />
///<reference path="~/scripts/NinJaScrollBar.js" />

// NOTE: Using styles may be necessary in order for the gridview to look right.

Type.GridView = "";
Type.GridView = "";
Type.GridViewColumn = "";
Type.GridViewRow = "";
Type.GridViewGroupRow = "";
Type.GridColumnSize = "";

GridView.AscSortIcon = "▲";
GridView.DescSortIcon = "▼";

function GridView(id) {
    ///<summary>Creates a new GridView control with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt; Gives the id to the control.</param>
    ///<field name="Columns" type="ObservableArray">Array of columns for the GridView.</field>
    ///<field name="Data" type="ObservableArray">The data currently bound to the GridView.</field>
    ///<field name="SelectedData" type="ObservableArray">The currently selected data in the GridView.</field>
    ///<field name="AscSortIcon" type="String">Icon to display when sorting ascending.</field>
    ///<field name="DescSortIcon" type="String">Icon to display when sorting descending.</field>
    ///<field name="OnSelectionChanged" type="Event">Fired when the selection has changed.</field>
    ///<field name="OnRowBound" type="Event">Fired when a row's display is changed with new data.</field>
    ///<field name="Classes" type="ClassArray">Collection of classes applied to the element.</field>
    ///<field name="IsMouseOver" type="Boolean">Set to true if the mouse is over the element.</field>
    ///<field name="OnClick" type="UserEvent">&lt;UserEvent&gt;Fired when the user clicks on the element.</field>
    ///<field name="OnDoubleClick" type="UserEvent">&lt;UserEvent&gt;Fired when the user double clicks on the element.</field>
    ///<field name="OnMouseOut" type="UserEvent">&lt;UserEvent&gt;Fired when the user moves the mouse away from the element.</field>
    ///<field name="OnMouseOver" type="UserEvent">&lt;UserEvent&gt;Fired when the user moves the mouse on to the element.</field>
    ///<field name="OnMouseMove" type="UserEvent">&lt;UserEvent&gt;Fired when the user removes the mouse on the element.</field>
    ///<field name="OnMouseDown" type="UserEvent">&lt;UserEvent&gt;Fired when the user presses the left mouse button down on to the element.</field>
    ///<field name="OnMouseUp" type="UserEvent">&lt;UserEvent&gt;Fired when the user releases the left mouse button on the element.</field>
    ///<field name="OnKeyDown" type="UserEvent">&lt;UserEvent&gt;Fired when the user presses a key down on the element.</field>
    ///<field name="OnKeyUp" type="UserEvent">&lt;UserEvent&gt;Fired when the user releases a key on the element.</field>
    ///<field name="OnKeyPress" type="UserEvent">&lt;UserEvent&gt;Fired when the user presses a key element.</field>
    ///<field name="OnContextMenu" type="UserEvent">&lt;UserEvent&gt;Fired when the user makes a context menu appear over the element.</field>
    ///<field name="OnMouseWheel" type="UserEvent">&lt;UserEvent&gt;Fired when the user rolls the mouse wheel over element.</field>
    ///<field name="Tag" type="Object">Any object to attach to the element.</field>
    ///<field name="Type" type="String">Returns Type.GridView</field>
    NinJa.Extend(this, Div);
}


function $GridView(id) {
    ///<summary>Returns the GridView with the given id.</summary>
    ///<param name="id" type="String">Id of the GridView.</param>
    return new GridView();
}

GridView.prototype.Columns = new ObservableArray(new GridViewColumn());
GridView.prototype.Data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
GridView.prototype.SelectedData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
GridView.prototype.AscSortIcon = "";
GridView.prototype.DescSortIcon = "";
GridView.prototype.OnSelectionChanged = new Event();
GridView.prototype.OnRowBound = new Event();

GridView.prototype.Sort = function (property) {
    ///<summary>Sorts the GridView by the given property.</summary>
    ///<param name="property" type="String">The property to sort the data by.</param>
    return this;
};

GridView.prototype.Bind = function (data) {
    ///<summary>Causes the GridView to display the data provided in its list.</summary>
    ///<param name="data" type="Array">Data to display.</param>
    return this;
};

GridView.prototype.Loading = function (text) {
    ///<summary>Clears the GridView and displays the text until Bind is called again.</summary>
    ///<param name="text" type="String">&lt;Default: "Loading..."&gt;Text to display in the first row.</param>
    return this;
};

GridView.prototype.Refresh = function () {
    ///<summary>Refreshes the display of the data. Call this when you modify data values.</summary>
    return this;
};

GridView.prototype.RowHeight = function (height) {
    ///<summary>&lt;Property Function&gt;Gets or sets the height of every row in the list.</summary>
    ///<param name="height" type="Number">&lt;Optional&gt;If provided, sets the row height of the gridview and refreshes the display.</param>
    if (height === undefined) {
        return 0;
    }

    return this;
}

GridView.prototype.DisplayRows = function (rows) {
    ///<summary>&lt;Property Function&gt;Gets or sets the number of rows to display.</summary>
    ///<param name="rows" type="Number">&lt;Optional&gt;If provided, sets the number of rows to display and refreshes the display.</param>
    if (rows === undefined) {
        return 0;
    }

    return this;
}


GridView.prototype.RefreshWidth = function () {
    ///<summary>Refreshes the display the GridView. If the GridView was not visible initially, this must be called once it is.</summary>
};

function GridViewColumn(id) {
    ///<summary>Creates a new GridViewColumn with the given id.</summary>
}

var GridViewColumnType = {
    Data: "data",
    Image: "image"
}

function RowBoundEventArgs() {
}

function $RowBoundEventArgs(object) {
    ///<summary>Treats the object as a RowBoundEventArgs type.</summary>
    return new RowBoundEventArgs();
}

RowBoundEventArgs.prototype.Sender = new GridView();
RowBoundEventArgs.prototype.Row = new Row();
RowBoundEventArgs.prototype.Item = {};