///<reference path="~/scripts/NinJa.js" />
Type.MenuItem = "MenuItem";
Type.Menu = "Menu";
Type.ContextMenu = "ContextMenu";
Type.MenuCheckItem = "MenuCheckItem";
Type.MenuIcon = "MenuIcon";

var MenuLayout = {
    Vertical: "vertical",
    Horizontal: "horizontal"
};

function $Menu() {
    ///<summary>Returns the menu with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Menu();
}

function $ContextMenu() {
    ///<summary>Returns the context menu element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new ContextMenu();
}

function $MenuItem() {
    ///<summary>Returns the menu item element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new MenuItem();
}

function Menu(id) {
    ///<summary>Creates a new menu with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the menu.</param>
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
    ///<field name="ParentItem" type="MenuItem">The menu item that displays the menu.</field>
    ///<field name="Root" type="Menu">The root menu.</field>
    ///<field name="Items" type="ObservableArray">Array of menu items found in the menu.</field>
    ///<field name="IsRoot" type="Boolean">Whether the menu is the root or not.</field>
    ///<field name="Type" type="String">Returns Type.Menu</field>
    ///<field name="OnOpening" type="Event">&lt;Event&gt;Fired when the menu is about to display.</field>
    ///<field naem="OnClosing" type="Event">&lt;Event&gt;Fired when the menu is about to hide.</field>
}

Menu.prototype = new List();
Menu.prototype.ParentItem = new MenuItem();
Menu.prototype.Root = new Menu();
Menu.prototype.Items = new ObservableArray(new MenuItem());
Menu.prototype.IsRoot = false;
Menu.prototype.OnOpening = new Event();
Menu.prototype.OnClosing = new Event();

function ContextMenu(id) {
    ///<summary>Creates a new context menu with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the context menu.</summary>
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
    ///<field name="ParentItem" type="MenuItem">The menu item that displays the menu.</field>
    ///<field name="Root" type="ContextMenu">The root context menu.</field>
    ///<field name="Items" type="ObservableArray">Array of menu items found in the menu.</field>
    ///<field name="IsRoot" type="Boolean">Whether the menu is the root or not.</field>
    ///<field name="Type" type="String">Returns Type.ContextMenu</field>
    ///<field name="OnOpening" type="Event">&lt;Event&gt;Fired when the menu is about to display.</field>
    ///<field name="OnClosing" type="Event">&lt;Event&gt;Fired when the menu is about to hide.</field>
    
}

ContextMenu.prototype = new List();
ContextMenu.prototype.ParentItem = new MenuItem();
ContextMenu.prototype.Root = new Menu();
ContextMenu.prototype.Items = new ObservableArray(new MenuItem());
ContextMenu.prototype.IsRoot = false;
ContextMenu.prototype.OnOpening = new Event();
ContextMenu.prototype.OnClosing = new Event();


Menu.prototype.Show =
ContextMenu.prototype.Show = function () {
    ///<summary>Shows the menu.</summary>
}

Menu.prototype.Hide =
ContextMenu.prototype.Hide = function () {
    ///<summary>Hides the menu.</summary>
}

Menu.prototype.Layout =
ContextMenu.prototype.Layout = function (layout) {
    ///<summary>&tl;Property Function&gt;Gets or sets the layout of the menu.</summary>
    ///<param name="layout" type="MenuLayout">&lt;Optional&gt;The layout to use.</param>
    if (layout === undefined) { return ""; }
    return this;
};

function MenuItem(id) {
    ///<summary>Represents an item on a menu.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Idof the MenuItem.</param>
    ///<field name="ParentMenu" type="Menu">The menu that the menu item beleongs to.</field>
    ///<field name="Icon" type="MenuIcon">The image icon displayed next to the menu item.</field>
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
    ///<field name="OnScroll" type="UserEvent">&lt;UserEvent&gt;Fired if the element has scroll bars and the element is scroled.</field>
}

MenuItem.prototype = new ListItem();
MenuItem.prototype.ParentMenu = new Menu();
MenuItem.prototype.Icon = new MenuIcon();

function MenuCheckItem() {
    ///<summary>Represents a menu item that will change it's checked state when clicked. Its icon is shown or displayed depending on it's checked state.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Idof the MenuCheckItem.</param>
    ///<field name="OnCheckChanged" type="Event">&lt;Event&gt;Fired when the checked state changes.</field>
    ///<field name="ParentMenu" type="Menu">The menu that the menu item belongs to.</field>
    ///<field name="Icon" type="MenuIcon">The image icon displayed next to the menu item.</field>
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
    ///<field name="OnScroll" type="UserEvent">&lt;UserEvent&gt;Fired if the element has scroll bars and the element is scroled.</field>
}

MenuCheckItem.prototype = new MenuItem();
MenuCheckItem.prototype.ParentMenu = new Menu();
MenuCheckItem.prototype.Icon = new MenuIcon();

MenuCheckItem.prototype.Text =
MenuItem.prototype.Text = function (text) {
    ///<summary>&lt;Property Function&gt;Gets or sets the text of the menu item.</summary>
    ///<param name="text" type="String">&lt;Optional&gt;Sets the text of the menu item.</param>
    if (text === undefined) {
        return "";
    }
    return this;
}

MenuCheckItem.prototype.Submenu =
MenuItem.prototype.Submenu = function (Submenu) {
    ///<summary>&lt;Property Function&gt;Gets or sets the menu to display when the parent item is clicked on or hovered on.</summary>
    ///<param name="Submenu" type="Menu/ContextMenu">&lt;Optional&gt;The menu to display.</param>
    if (Submenu === undefined) {
        return new Menu();
    }
}

MenuCheckItem.prototype.Enabled =
MenuItem.prototype.Enabled = function (enabled) {
    ///<summary>&lt;Property Function&gt;Gets or sets the enabled state of the menu item.</summary>
    ///<param name="enabled" type="Boolean'>&lt;Optional&gt;The enabled state of the menu item.</param>
    if (enabled === undefined) {
        return true;
    }

    return this;
}

MenuCheckItem.prototype.Checked = function (checked) {
    ///<summary>&lt;Property Function&gt;Gets or sets the checked state of the menu item.</summary>
    ///<param name="checked" type="Boolean">&lt;Optional&gt;Whether or not the menu item is checked.</param>
    if (checked === undefined) {
        return true;
    }

    return this;
}

Anchor.prototype.ContextMenu =
Body.prototype.ContextMenu =
Button.prototype.ContextMenu =
Cell.prototype.ContextMenu =
CheckBox.prototype.ContextMenu =
DropDownList.prototype.ContextMenu =
Content.prototype.ContextMenu =
ContentButton.prototype.ContextMenu =
Div.prototype.ContextMenu =
Element.prototype.ContextMenu =
FileUpload.prototype.ContextMenu =
Header.prototype.ContextMenu =
ImageElement.prototype.ContextMenu =
Label.prototype.ContextMenu =
List.prototype.ContextMenu =
ListBox.prototype.ContextMenu =
ListItem.prototype.ContextMenu =
Password.prototype.ContextMenu =
RadioButton.prototype.ContextMenu =
Row.prototype.ContextMenu =
Span.prototype.ContextMenu =
Table.prototype.ContextMenu =
TableBody.prototype.ContextMenu =
TableFoot.prototype.ContextMenu =
TableHead.prototype.ContextMenu =
TextArea.prototype.ContextMenu =
TextBox.prototype.ContextMenu  = function (ctxMenu) {
    ///<summary>&lt;Property Function&gt;Gets or sets the context menu to display when the user right clicks on the element. If the context menu is set, the normal browser context menu is suppressed.</summary>
    ///<param name="ctxMenu" type="ContextMenu">&lt;Optional&gt;The context menu to attach to the element.</param>
    if(ctxMenu === undefined){
        return new ContextMenu();
    }

    return this;
}

function MenuIcon() {
    ///<summary>Represents an icon displayed to the left of the menu item.</summary>
    return new ImageElement();
}

MenuIcon.prototype.Source = function (source) {
    ///<summary>&lt;Property Function&lt;Gets or sets the source of the image for the icon.</summary>
    ///<param name="source" type="String">&lt;Optional&gt;The source of the image.</param>
    if (source == undefined) {
        return "";
    }

    return this;
}

function Separator() {
    ///<summary>Creates a new separator to separate menu items.</summary>
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
    ///<field name="Type" type="String">Returns Type.Separator.</field>
    return new Element();
}