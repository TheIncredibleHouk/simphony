///<reference path="~/scripts/NinJa.js" />

function $Tab(id) {
    ///<summary>Returns the Tab with the given id.</summary>
    return new Tab();
}

function $TabItem(id) {
    ///<summary>Returns the Tab with the given id.</summary>
    return new TabItem();
}

Type.Tab = "";
Type.TabHeader = "";
Type.TabItem = "";

var TabLayout = {
    Top: "top",
    Bottom: "bottom",
    Left: "left",
    Right: "right"
};

function Tab(id) {
    ///<summary>Creates a new Tab control with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the control.</param>
    ///<field name="TabItems" type="ObservableArray">Array of TabItems in the Tab control.</field>
    ///<field name="OnSelectionChanged" type="Event">&lt;Event&gt;Fired when the selected tab item has changed.</field>
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
    ///<field name="TabItems" type="ObservableArray">Array of TabItems in the tab control.</field>
    ///<field name="OnSelectionChanged" type="Event">&lt;Event&gt;Fired when the selected tab item chnages.</field>
}

Tab.prototype = new Div();
Tab.prototype.TabItems = new ObservableArray(new TabItem());
Tab.prototype.OnSelectionChanged = new Event();

Tab.prototype.SelectedItem = function (tabItem) {
    ///<summary>&lt;Property Function&gt;Gets or sets the selected tab item.</summary>
    ///<param name="tabItem" type="TabItem">&lt;Optional&gt;The TabItem to be selected.</param>
    if (tabItem === undefined) {
        return new TabItem();
    }

    return this;
};

function TabItem(id) {
    ///<summary>Creates a new TabItem with the given id.</summary>
    ///<field name="Header" type="Span">The element that displays in the tab header.</field>
}

TabItem.prototype = new Div();
TabItem.prototype.Header = new Span();

TabItem.prototype.Selected = function (selected) {
    ///<summary>&lt;Property Function&gt;Gets or sets whether the TabItem is selected.</summary>
    ///<param name="selected" type="Boolean">&lt;Optional&gt;Whether the TabItem is selected.</param>
    if (selected === undefined) {
        return false;
    }

    return this;
};

TabItem.prototype.Shown = function (shown) {
    ///<summary>&lt;Property Function&gt;Gets or sets whether the TabItem is shown.</summary>
    ///<param name="shown" type="Boolean">&gt;Optional&lt;Whether the TabItem is shown.<param>
    if (shown === undefined) {
        return true;
    }

    return this;
}

function TabHeader() {
    return new Span();
}
