///<reference path="~/scripts/NinJa.js" />
///<reference path="~/scripts/NinJaVisuals.js" />

//- Accordion
var NinJaControls = {
    Version: "1.0"
};

function Accordion(id) {
    ///<summary>Creates a new accordion control with the given id.</summary>
    ///<param name="id" type="String">Id to apply to the element.</param>
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
    ///<field name="OnScroll" type="UserEvent">&lt;UserEvent&gt;Fired if the element has scroll bars and the element is scroled.</field>
    ///<field name="Type" type="String">Returns Type.Accordion.</field>
    ///<field name="Items" type="ObservableArray">Array of AccordionItems.</field>
    NinJa.Extend(this, Div);
}

function $Accordion(id) {
    ///<summary>Returns the accordion with the given id.</summary>
    ///<param name="id" type="String">Id of the accordion.</param>

    return new Accordion();
}

Accordion.prototype.Items = [new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem(), new AccordionItem()];

Accordion.prototype.HeaderClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class name applied to accordion item headers.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;The class name applied to accordion item headers.</param>
    if (className === undefined) {
        return "";
    }

    return this;
}

Accordion.prototype.ItemClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class name applied to accordion items.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;The class name applied to accordion items.</param>
    if (className === undefined) {
        return "";
    }

    return this;
}

Accordion.prototype.SelectedClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class name applied to the selected accordion item header.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;The class name applied to the selected accordion item header.</param>
    if (className === undefined) {
        return "";
    }

    return this;
}


Accordion.prototype.SelectedItem = function (item) {
    ///<summary>&lt;Property Function&gt;Gets or sets the selected item, expanding it to full view and collapsing the current item.</summary>
    ///<param name="item" type="AccordionItem">&lt;Optional&gt;AccordionItem to select.</param>
    if (item === undefined) {
        return new AccordionItem();
    }

    return this;
}

Accordion.prototype.Effect = function (effect) {
    ///<summary>Sets the effect used to make transitions from selected to unselected items.</summary>
    ///<param name="effect" type="String">Valid values: Effects.None, Effects.FoldVertical</param>
    return this;
}

function AccordionItem(id) {
    ///<summary>An item in an accordion control that can expand and collapse.</summary>
    ///<param name="id" type="String">Id of the AccordionItem.</param>
    ///<field name="Tag" type="Object">An object to store in the item.</field>
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
    ///<field name="OnScroll" type="UserEvent">&lt;UserEvent&gt;Fired if the element has scroll bars and the element is scroled.</field>
    ///<field name="Type" type="String">Returns Type.AccordionItem.</field>
    NinJa.Extend(this, Div);
}

function $AccordionItem(id) {
    ///<summary>Returns the accordion item with the given id.</summary>
    ///<param name="id" type="String">Id of the accordion.</param>

    return new AccordionItem();
}

AccordionItem.prototype.Header = new Div();

AccordionItem.prototype.Selected = function (selected) {
    ///<summary>&lt;Property Function&gt; Gets or sets whether this accordion item is selected.</summary>
    ///<param name="selected" type="Boolean">&lt;Optional&gt;Whether the  item is selected.</param>
    if (selected === undefined) {
        return true;
    }
    return this;
}

//- DatePicker
function $DatePicker(id) {
    ///<summary>Retrieves the datepicker with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new DatePicker();
}

function DatePicker(id) {
    ///<summary>Creates a new datepicker with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the element.</param>
    ///<param name="OnDateChanged"
    Element(this);
};

DatePicker.prototype.Effect = function (effect) {
    ///<summary>&lt;Property Function&gt;Gets or sets the effect used to hide and show the datepicker.</summary>
    ///<param name="effect" type="String">&lt;Optional&gt;The effect, as a string, used to hide/show the datepicker.</param>
    if (effect === undefined) {
        return "";
    }

    return this;
};

DatePicker.prototype.Collapsed = function (collapsed) {
    ///<summary>&lt;Property Function&gt;Gets or sets the collapsed state of the datepicker display.</summary>
    ///<param name="collapsed" type="Boolean">&lt;Optional&gt;Whether the datepicker is displayed.</param>
    if (collapsed === undefined) {
        return true;
    }

    return this;
};

DatePicker.prototype.PadDays = function (padDays) {
    ///<summary>&lt;Property Function&gt;Gets or sets whether the datepicker will show apdded days.</summary>
    ///<param name="padDays" type="Boolean">&lt;Optional&gt;Whether or not the datepicker displays padded days.</param>
    if (padDays === undefined) {
        return true;
    }

    return this;
}

DatePicker.prototype.SelectedDate = function (dateTime) {
    ///<summary>&lt;Property Function&gt;Gets or sets the selected date.</summary>
    ///<param name="dateTime" type="DateTime">&lt;Optional&gt;The date to set the datepicker to.</param>
    if (dateTime === undefined) {
        return new DateTime();
    }

    return this;
}


DatePicker.prototype.PadClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class applied to padded days.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;Class name applied to padded days.</param>
    if (className === undefined) {
        return "";
    }

    return this;
};

DatePicker.prototype.SelectedClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class applied to the selected days.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;Class name applied to the selected days.</param>
    if (className === undefined) {
        return "";
    }

    return this;
};

//- Dialog
var DialogResult = {
    Ok: 0,
    Cancel: 1,
    Yes: 2,
    No: 3
};


function $Dialog(id) {
    ///<summary>Returns the dialog of the given id.</summary>
    ///<param name="id" type="String">Id of the dialog.</param>
    return new Dialog();
};

function Dialog(id) {
    ///<summary>Creates a new Div that can be created as a Dialog.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the Dialog.</param>
    ///<field name="OnDialogClose" type="Event">&lt;Event&gt;Fired when the Dialog is closed.</field>
    NinJa.Extend(this, Div);
}

Dialog.Color = "black",
Dialog.Opacity = .5,
Dialog.ZIndex = 100000,
Dialog.Hide = function (data) {
    ///<summary>Hides the currently displayed Dialog.</summary>
    ///<param name="data" type="Object/DialogResult">&lt;Optional&gt;The data returned from the dialog.</param>
}

Dialog.prototype = new Div();
Dialog.prototype.OnDialogClose = new Event();


Dialog.prototype.Show = function () {
    ///<summary>Shows the Element as a dialog box with the given effect, speed and smoothness.</summary>
    return this;

};

Dialog.prototype.Hide = function (data) {
    ///<summary>Hides the Dialog, returning the given data.</summary>
    ///<param name="data" type="Object/DialogResult">&lt;Optional&gt;Data to return.</param>
    return this;

};


Div.Extensions.Add(new Extension("formtemplate", FormTemplate));
function FormTemplate(id) {
    ///<summary>Creates a new FormTemplate with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the FormTemplate.</param>
    NinJa.Extend(this, Div);
}

function $FormTemplate(id) {
    ///<summary>Retrieves the FormTemplate with the given id.</summary>
    ///<param name="id" type="String">Id of the FormTemplate.</param>
    return new FormTemplate();
}

FormTemplate.prototype.Bind = function (object) {
    ///<summary>Binds the object to the FormTemplate, setting an inputs with an attribute of "bindproperty" to the given value in the attribute.</summary>
    ///<param name="object" Type="Object">Object to bind to.</param>
    return this;
}


FormTemplate.prototype.CreatePropertyMap = function () {
    ///<summary>Creates an object with the bindproperty of an input  as its fields and their value as the value.</summary>
    return {};
}


function Grid(id) {
    ///<summary>Creates a new Grid with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the Grid.</param>
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
    ///<field name="OnScroll" type="UserEvent">&lt;UserEvent&gt;Fired if the element has scroll bars and the element is scroled.</field>
    ///<field name="Type" type="String">Returns Type.Grid.</field>
    ///<field name="Rows" type="Array">Array of GridRows in the Grid.</field>
    NinJa.Extend(this, Div);
}

Grid.prototype.Rows = [GridRow(), GridRow(), GridRow(), GridRow(), GridRow(), GridRow(), GridRow(), GridRow(), GridRow(), GridRow()];

function $Grid(id) {
    ///<summary>Gets the Grid with the given id.</summary>
    ///<param name="id" type="String">Id of the Grid.</param>
    return new Grid();
}

function GridRow(id) {
    ///<summary>Creates a new GridRow with the given id.</summary>
    ///<param name="id" type="String">Id of the GridRow.</param>
    NinJa.Extend(this, Div);
}

GridRow.prototype.Cells = [new GridCell(), new GridCell(), new GridCell(), new GridCell(), new GridCell(), new GridCell(), new GridCell(), new GridCell(), new GridCell(), new GridCell()];

GridRow.prototype.Height = function (height) {
    ///<summary>&lt;Property Function&gt;Gets or sets the height of the GridRow.</summary>
    ///<param name="height" type="String/Number">&lt;Optional&gt;Height of the GridRow.</param>
    if (height === undefined) {
        return 0;
    }

    return this;
}

function GridCell(id) { 
    ///<summary>Creates a new GridCell with the given id.</summary>
    ///<param name="id" type="String">Id of the GridCell.</param>
}

GridCell.prototype.Width = function (width) {
    ///<summary>&lt;Property Function&gt;Gets or sets the width of the GridCell.</summary>
    ///<param name="height" type="String/Number">&lt;Optional&gt;Width of the GridCell.</param>
    if (width === undefined) {
        return 0;
    }

    return this;
}

//- OneClickButton/Anchor/ContentButton
function OneClickAnchor(id) {
    ///<summary>Creates a new anchor that can only be activated once.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the anchor.</param>
    return new Anchor();
}

function OneClickButton(id) {
    ///<summary>Creates a new button that can only be activated once.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the button.</param>
    return new Button();
}

function OneClickContentButton(e) {
    ///<summary>Creates a new content button that can only be activated once.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the content button.</param>
    return new ContentButton();
}

// - RollOverImage
function RollOverImage(id) {
    ///<summary>Creates a new RollOverImage.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;The id of the RollOverImage</param>
    NinJa.Extend(this, ImageElement);
}

function $RollOverImage(id) {
    return new RollOverImage();
}

RollOverImage.prototype.Source = function (src) {
    ///<summary>&lt;Property Function&gt;Gets or sets source of the image when the mouse is not over it.</source>
    ///<param name="src" type="String">&lt;Optional&gt;Source of the image.</param>
    if (src === undefined) {
        return "";
    }

    return this;
}

RollOverImage.prototype.HoverSource = function (src) {
    ///<summary>&lt;Property Function&gt;Gets or sets source of the image when the mouse is over it.</source>
    ///<param name="src" type="String">&lt;Optional&gt;Source of the image.</param>
    if (src === undefined) {
        return "";
    }

    return this;
}


Type.ScrollBar = 0;

function ScrollBar(id) {
    ///<summary>Creates a new scroll bar.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the scrollbar.</param>
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
    ///<field name="OnScrollChange" type="Event">&lt;Event&gt;Fired when the ScrollBar's value changes.</field>
    ///<field name="Type" type="String">Returns Type.ScrollBar.</field>
    NinJa.Extend(this, Element);
}

ScrollBar.prototype.OnScrollChange = new Event();

function $ScrollBar(id) {
    ///<summary>Returns the ScrollBar with the given id.</summary>
    ///<param name="id" type="String">Id of the ScrollBar.</param>
    return new ScrollBar();
}

ScrollBar.prototype.Width = function (width) {
    ///<summary>&lt;Property Function&gt;The width of the scroll bar.</summary>
    ///<param type="Number" name="width">&lt;Optional&gt;Width of the scroll bar.</param>
    if (width === undefined) {
        return 0;
    }
    return this;
};

ScrollBar.prototype.Height = function (height) {
    ///<summary>&lt;Property Function&gt;The height of the scroll bar.</summary>
    ///<param type="Number" name="height">&lt;Optional&gt;Height of the scroll bar.</param>
    if (height === undefined) {
        return 0;
    }
    return this;
};

ScrollBar.prototype.MaxValue = function (maxValue) {
    ///<summary>&lt;Property Function&gt;The maximum value of the scroll bar.</summary>
    ///<param type="Number" name="maxValue">&lt;Optional&gt;Maximum value of the scroll bar.</param>
    if (maxValue === undefined) {
        return 0;
    }
    return this;
};


ScrollBar.prototype.Value = function (value) {
    ///<summary>&lt;Property Function&gt;The current value of the scroll bar.</summary>
    ///<param type="Number" name="value">&lt;Optional&gt;Current value of the scroll bar.</param>
    if (value === undefined) {
        return 0;
    }
    return this;
};

ScrollBar.prototype.Decrease = function () {
    ///<summary>Decreases the value of the scrollbar by one.</summary>
    return this;
}

ScrollBar.prototype.Increase = function () {
    ///<summary>Incrases the value of the scrollbar by one.</summary>
    return this;
}

function SuggestionBox(id) {
    ///<summary>Creates a new SuggestionBox with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the SuggestionBox.</param>
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
    ///<field name="OnTextChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the text of the element changes.</field>
    ///<field name="OnEnterKey" type="Event">&lt;Event&gt;Fired when the user hits the enter key.</field>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.SuggestionBox.</field>
    ///<field name="OnSuggestionSelected" type="Event">&lt;Event&gt;Fired when a suggested value is selected.</field>
    ///<field name="Data" type="Array">Current list of suggested items.</field>

    NinJa.Extend(this, TextBox);
}

function $SuggestionBox(id) {
    ///<summary>Returns the SuggestionBox with the given id.</summary>
    ///<param name="id" type="String">Id of the SuggestionBox.</param>
    return new SuggestionBox();
}

SuggestionBox.prototype.OnSuggestionSelected = new Event();
SuggestionBox.prototype.Data = new Array(20);

SuggestionBox.prototype.SelectedData = function (data) {
    ///<summary>&lt;Property Function&gt;Gets or sets the selected suggested data.</summary>
    ///<param name="data" type="Object">&lt;Optional&gt;Sets the suggested data itme.</param>
    if (data === undefined) {
        return {};
    }

    return this;
};

SuggestionBox.prototype.DisplayClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class applied to the displayed list of suggestions.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;Class applied to the displayed list.</param>
    if (className == undefined) {
        return "";
    }

    return this;
}

SuggestionBox.prototype.FocusClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class applied to the suggested item that has focus in the list.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;Class applied to the suggested item that has focus in the list.</param>
    if (className == undefined) {
        return "";
    }

    return this;
}

SuggestionBox.prototype.Source = function (source) {
    ///<summary>&lt;Property Function&gt;Gets or sets the function used to retrieve the list of suggestions. This function has the current text passed to it as the first parameter.</summary>
    ///<param name="source" type="Function">&lt;Optional&gt;The function used to retrieve the list of suggestions.</param>
    if (source === undefined) {
        return function () { };
    }

    return this;
}

SuggestionBox.prototype.MinLength = function (minLength) {
    ///<summary>&lt;Property Function&gt;Gets or sets the minimum text length required for suggestions to be retrieved.</summary>
    ///<param name="minLength" type="Number">&lt;Optional&gt;Minimum text length.</param>
    if (minLength === undefined) {
        return 0;
    }

    return this;
}

SuggestionBox.prototype.ShowSuggestions = function () {
    ///<summary>Manually displays the suggestions.</summary>
    return this;
};

SuggestionBox.prototype.HideSuggestions = function (forced) {
    ///<summary>Manually hides the suggestions.</summary>
    return this;
};

SuggestionBox.prototype.Update = function () {
    ///<summary>Manually updates the list of suggested items.</summary>
    return this;
}

SuggestionBox.prototype.Bind = function (data) {
    ///<summary>Sets the source of suggestions and displays the suggestion list.</summary>
    ///<param name="data" type="Array">Array of items suggested.</param>
    return this;
};

SuggestionBox.prototype.BindText = function (text) {
    ///<summary>&lt;Property Function&gt;Gets or sets the text value used to display suggested items.</summary>
    ///<param name="text" type="String">&lt;Optional&gt;Text value used to display the suggested items.</param>
    if (text === undefined) {
        return "";
    }

    return this;
}

SuggestionBox.prototype.BindValue = function (value) {
    ///<summary>&lt;Property Function&gt;Gets or sets the value used to fill the textbox with when a suggested item is selected.</summary>
    ///<param name="value" type="String">&lt;Optional&gt;Vlue used to fill the textbox with when a suggested item is selected.</param>
    if (value === undefined) {
        return "";
    }

    return this;
}
//-Template
Type.Template = 0;

function $Template(id) {
    ///<summary>Returns the Template with the given id.</summary>
    return new Template();
}

Div.Extensions.Add(new Extension("template", Template));

function Template() {
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
    ///<field name="OnScroll" type="UserEvent">&lt;UserEvent&gt;Fired if the element has scroll bars and the element is scroled.</field>
    ///<field name="Type" type="String">Returns Type.Template.</field>
    NinJa.Extend(this, Div);
}

Template.prototype.Bind = function (object) {
    ///<summary>Pulls values from the object and places them inside of any expression markers
    ///indicated with {expression}. All binding exrpression rules apply.</summary>
    ///<param name="object" type="Object">Object to pull values from.</param>
};

function $WaterMarkTextBox(id) {
    ///<summary>Returns the WaterMarkTextBox with the given id.</summary>
    ///<param name="id" type="String">Id of the WaterMarkTextBox.</param>

    return new WaterMarkTextBox();
}
function WaterMarkTextBox(id) {
    ///<summary>Creates a new WaterMarkTextBox.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;Id of the WaterMarkTextBox</param>
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
    ///<field name="OnTextChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the text of the element changes.</field>
    ///<field name="OnEnterKey" type="Event">&lt;Event&gt;Fired when the user hits the enter key.</field>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.WaterMarkTextBox.</field>
    NinJa.Extend(this, TextBox)
}

WaterMarkTextBox.prototype.WaterMarkValue = function (value) {
    ///<summary>&lt;Property Function&gt;Gets or sets the value to display for the watermark.</summary>
    ///<param name="value" type="String">&lt;Optional&gt;Value of the watermark.</param>
    if (value === undefined) {
        return "";
    }

    return this;
}
WaterMarkTextBox.prototype.WaterMarkClass = function (className) {
    ///<summary>&lt;Property Function&gt;Gets or sets the class to use for the watermark.</summary>
    ///<param name="className" type="String">&lt;Optional&gt;Class of the watermark.</param>
    if (className === undefined) {
        return "";
    }

    return this;
}

WaterMarkTextBox.prototype.WaterMarkStyle = function (markStyle) {
    ///<summary>&lt;Property Function&gt;Gets or sets the style to use for the watermark.</summary>
    ///<param name="markStyle" type="String">&lt;Optional&gt;Class of the watermark.</param>
    if (className === undefined) {
        return "";
    }

    return this;
}
