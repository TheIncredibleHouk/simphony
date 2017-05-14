///<reference path="~/scripts/NinJa.js" />

var NinJaVisuals = {
    Version: "1.2",
    ZIndex: 1000
};

var Speed = {
    Slow: 400,
    Normal: 200,
    Fast: 100
};

var Alignment = {
    Top: 0,
    Bottom: 1,
    Left: 2,
    Right: 3,
    Center: 4,
    Middle: 5
};

var Side = {
    Top: 0,
    Bottom: 1,
    Left: 2,
    Right: 3
};

var Direction = {
    Vertical: 1,
    Horizontal: 2,
    Diagonal: 3
};

var Effects = LazyEnum({
    None: "none",
    Fade: "fade",
    Slide: "slide",
    FoldVertical: "foldv",
    FoldHorizontal: "foldh",
    FoldBoth: "foldd"
});

var Edge = LazyEnum({
    NorthWest: Cursor.NorthWest,
    SouthEast: Cursor.SouthEast,
    SouthWest: Cursor.SouthWest,
    NorthEast: Cursor.NorthEast,
    North: Cursor.North,
    West: Cursor.West,
    South: Cursor.South,
    East: Cursor.East
});

NinJaVisuals.TextHeight = function (text, fontFamily, fontToggleFade) {
    ///<summary>Measures the height of the text given the font family and font size.</summary>
    ///<param name="text" type="String">The text to measure.</param>
    ///<param name="fontFamily" type="String" optional="true" default="default">(Optional) The family of to use to render the text.</param>
    ///<param name="fontToggleFade" type="Number" optional="true" default="default">(Optional) The size of the font, in points, to render the text.</param>
    ///<returns type="Number">Returns the height of the rendered text in pixels.</returns>
    return 0;
};

NinJaVisuals.TextWidth = function (text, fontFamily, fontToggleFade) {
    ///<summary>Measures the width of the text given the font family and font size.</summary>
    ///<param name="text" type="String">The text to measure.</param>
    ///<param name="fontFamily" type="String" optional="true" default="default">(Optional) The family of to use to render the text.</param>
    ///<param name="fontToggleFade" type="Number" optional="true" default="default">(Optional) The size of the font, in points, to render the text.</param>
    ///<returns type="Number">Returns the width of the rendered text in pixels.</returns>
};

function Animation(element, property, from, to, time, frames, func) {
    ///<summary>Represents an animation that modifies a property over a set time in provided number of frames.</summary>
    ///<param name="element" type="Element">Element to modify for the animation.</param>
    ///<param name="property" type="String">Property to modify for the animation.</param>
    ///<param name="from" type="Object">A number or unit (Location, ToggleFade, Color, etc) that is the start point of the animation.</param>
    ///<param name="to" type="Object">A number or unit (Location, ToggleFade, Color, etc) that is the end point of the animation</param>
    ///<param name="time" type="Number">The number of milliseconds the animation should last.</param>
    ///<param name="frames" type="Number">The number of frames the animation should last.</param>
    ///<param name="func" type="Function">The function to execute once the animation is finished.</param>
    ///<field name="Element" type="Element">The element the animation is modifying.</field>
    ///<field name="Property" type="String">The name of the property the animation is modifying.</field>
    ///<field name="From" type="Number">Number or unit the animation started from.</field>
    ///<field name="To" type="Number">Number or unit the animation ends on.</field>
    ///<field name="Time" type="Number">Number of milliseconds the animation should last.</field>
    ///<field name="Frames" type="Number">Number of frames the animation should last.</field>
    ///<field name="Value" type="Number">Number or unit the element is currently set to in the current animation frame.</field>
    ///<field name="Step" type="Number">Number or unit that represents the amount of change to the property set per frame.</field>
    ///<field name="Steps" type="Number">Number of frames left in the animation.</field>
    ///<field name="Timer" type="Timer">The timer used to execute each frame of the animation.</field>
    ///<field name="OnFinish" type="Function">Function to execute once the animation is funished.</field>
}

Animation.prototy.Element = new Element();
Animation.prototy.Property = "";
Animation.prototy.From = 0;
Animation.prototy.To = 0;
Animation.prototy.Time = 0;
Animation.prototy.Frames = 0;
Animation.prototy.Value = 0;
Animation.prototy.Step = 0;
Animation.prototy.Steps = 0;
Animation.prototy.Timer = new Timer(0);
Animation.prototy.OnFinish = function () { };

Animation.prototype.Reverse = function () {
    ///<summary>Reverses the animation by switch the To and From values.</summary>
    ///<returns type="Animation">Returns the instance.</returns>
    return this;
};

Animation.prototype.Start = function () {
    ///<summary>Starts the animation.</summary>
    ///<returns type="Animation">Returns the instance.</returns>
    return this;
}

Animation.prototype.Next = function () {
    ///<summary>Calls the next frame of the animation.</summary>
    ///<returns type="Animation">Returns the instance.</returns>
    return this;
};

Anchor.prototype.FadeOut =
Body.prototype.FadeOut =
Button.prototype.FadeOut =
Cell.prototype.FadeOut =
CheckBox.prototype.FadeOut =
DropDownList.prototype.FadeOut =
Content.prototype.FadeOut =
ContentButton.prototype.FadeOut =
Div.prototype.FadeOut =
Element.prototype.FadeOut =
FileUpload.prototype.FadeOut =
Header.prototype.FadeOut =
ImageElement.prototype.FadeOut =
Label.prototype.FadeOut =
List.prototype.FadeOut =
ListBox.prototype.FadeOut =
ListItem.prototype.FadeOut =
Password.prototype.FadeOut =
RadioButton.prototype.FadeOut =
Row.prototype.FadeOut =
Span.prototype.FadeOut =
Table.prototype.FadeOut =
TableBody.prototype.FadeOut =
TableFoot.prototype.FadeOut =
TableHead.prototype.FadeOut =
TextArea.prototype.FadeOut =
TextBox.prototype.FadeOut = function (time, frames, func) {
    ///<summary>Fades the element out by modifying the opacity from the current value to 0.</summary>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="6">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.FadeIn =
Body.prototype.FadeIn =
Button.prototype.FadeIn =
Cell.prototype.FadeIn =
CheckBox.prototype.FadeIn =
DropDownList.prototype.FadeIn =
Content.prototype.FadeIn =
ContentButton.prototype.FadeIn =
Div.prototype.FadeIn =
Element.prototype.FadeIn =
FileUpload.prototype.FadeIn =
Header.prototype.FadeIn =
ImageElement.prototype.FadeIn =
Label.prototype.FadeIn =
List.prototype.FadeIn =
ListBox.prototype.FadeIn =
ListItem.prototype.FadeIn =
Password.prototype.FadeIn =
RadioButton.prototype.FadeIn =
Row.prototype.FadeIn =
Span.prototype.FadeIn =
Table.prototype.FadeIn =
TableBody.prototype.FadeIn =
TableFoot.prototype.FadeIn =
TableHead.prototype.FadeIn =
TextArea.prototype.FadeIn =
TextBox.prototype.FadeIn = function (time, frames, func) {
    ///<summary>Fades the element in by modifying the opacity from the current value to 1.</summary>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="6">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.FadeTo =
Body.prototype.FadeTo =
Button.prototype.FadeTo =
Cell.prototype.FadeTo =
CheckBox.prototype.FadeTo =
DropDownList.prototype.FadeTo =
Content.prototype.FadeTo =
ContentButton.prototype.FadeTo =
Div.prototype.FadeTo =
Element.prototype.FadeTo =
FileUpload.prototype.FadeTo =
Header.prototype.FadeTo =
ImageElement.prototype.FadeTo =
Label.prototype.FadeTo =
List.prototype.FadeTo =
ListBox.prototype.FadeTo =
ListItem.prototype.FadeTo =
Password.prototype.FadeTo =
RadioButton.prototype.FadeTo =
Row.prototype.FadeTo =
Span.prototype.FadeTo =
Table.prototype.FadeTo =
TableBody.prototype.FadeTo =
TableFoot.prototype.FadeTo =
TableHead.prototype.FadeTo =
TextArea.prototype.FadeTo =
TextBox.prototype.FadeTo = function (opacity, time, frames, func) {
    ///<summary>Fades the element in by modifying the opacity from the current value to 1.</summary>
    ///<param name="opacity" type="Number">Opacity value to fade to.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="6">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.ToggleFade =
Body.prototype.ToggleFade =
Button.prototype.ToggleFade =
Cell.prototype.ToggleFade =
CheckBox.prototype.ToggleFade =
DropDownList.prototype.ToggleFade =
Content.prototype.ToggleFade =
ContentButton.prototype.ToggleFade =
Div.prototype.ToggleFade =
Element.prototype.ToggleFade =
FileUpload.prototype.ToggleFade =
Header.prototype.ToggleFade =
ImageElement.prototype.ToggleFade =
Label.prototype.ToggleFade =
List.prototype.ToggleFade =
ListBox.prototype.ToggleFade =
ListItem.prototype.ToggleFade =
Password.prototype.ToggleFade =
RadioButton.prototype.ToggleFade =
Row.prototype.ToggleFade =
Span.prototype.ToggleFade =
Table.prototype.ToggleFade =
TableBody.prototype.ToggleFade =
TableFoot.prototype.ToggleFade =
TableHead.prototype.ToggleFade =
TextArea.prototype.ToggleFade =
TextBox.prototype.ToggleFade = function (time, frames, func) {
    ///<summary>Fades the element in or out depending on the current value of opacity. A 0 fades it in, anything else fades it out.</summary>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="6">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.ResizeTo =
Body.prototype.ResizeTo =
Button.prototype.ResizeTo =
Cell.prototype.ResizeTo =
CheckBox.prototype.ResizeTo =
DropDownList.prototype.ResizeTo =
Content.prototype.ResizeTo =
ContentButton.prototype.ResizeTo =
Div.prototype.ResizeTo =
Element.prototype.ResizeTo =
FileUpload.prototype.ResizeTo =
Header.prototype.ResizeTo =
ImageElement.prototype.ResizeTo =
Label.prototype.ResizeTo =
List.prototype.ResizeTo =
ListBox.prototype.ResizeTo =
ListItem.prototype.ResizeTo =
Password.prototype.ResizeTo =
RadioButton.prototype.ResizeTo =
Row.prototype.ResizeTo =
Span.prototype.ResizeTo =
Table.prototype.ResizeTo =
TableBody.prototype.ResizeTo =
TableFoot.prototype.ResizeTo =
TableHead.prototype.ResizeTo =
TextArea.prototype.ResizeTo =
TextBox.prototype.ResizeTo = function (size, time, frames, func) {
    ///<summary>Resizes the element in an animation.</summary>
    ///<param name="size" type="Size">The size to animate the element to.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="10">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.Shrink =
Body.prototype.Shrink =
Button.prototype.Shrink =
Cell.prototype.Shrink =
CheckBox.prototype.Shrink =
DropDownList.prototype.Shrink =
Content.prototype.Shrink =
ContentButton.prototype.Shrink =
Div.prototype.Shrink =
Element.prototype.Shrink =
FileUpload.prototype.Shrink =
Header.prototype.Shrink =
ImageElement.prototype.Shrink =
Label.prototype.Shrink =
List.prototype.Shrink =
ListBox.prototype.Shrink =
ListItem.prototype.Shrink =
Password.prototype.Shrink =
RadioButton.prototype.Shrink =
Row.prototype.Shrink =
Span.prototype.Shrink =
Table.prototype.Shrink =
TableBody.prototype.Shrink =
TableFoot.prototype.Shrink =
TableHead.prototype.Shrink =
TextArea.prototype.Shrink =
TextBox.prototype.Shrink = function (direction, time, frames, func) {
    //<summary>Resizes the element in an animation to a width of 0 and height of 0.</summary>
    ///<param name="direction" type="String" optional="true" default="Direction.Diagonl">The direction to resize the element in.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="10">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.Grow =
Body.prototype.Grow =
Button.prototype.Grow =
Cell.prototype.Grow =
CheckBox.prototype.Grow =
DropDownList.prototype.Grow =
Content.prototype.Grow =
ContentButton.prototype.Grow =
Div.prototype.Grow =
Element.prototype.Grow =
FileUpload.prototype.Grow =
Header.prototype.Grow =
ImageElement.prototype.Grow =
Label.prototype.Grow =
List.prototype.Grow =
ListBox.prototype.Grow =
ListItem.prototype.Grow =
Password.prototype.Grow =
RadioButton.prototype.Grow =
Row.prototype.Grow =
Span.prototype.Grow =
Table.prototype.Grow =
TableBody.prototype.Grow =
TableFoot.prototype.Grow =
TableHead.prototype.Grow =
TextArea.prototype.Grow =
TextBox.prototype.Grow = function (direction, time, frames, func) {
    //<summary>Resizes the element in an animation to the full size width and height.</summary>
    ///<param name="direction" type="String" optional="true" default="Direction.Diagonl">The direction to resize the element in.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="10">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
}

Anchor.prototype.ToggleSize =
Body.prototype.ToggleSize =
Button.prototype.ToggleSize =
Cell.prototype.ToggleSize =
CheckBox.prototype.ToggleSize =
DropDownList.prototype.ToggleSize =
Content.prototype.ToggleSize =
ContentButton.prototype.ToggleSize =
Div.prototype.ToggleSize =
Element.prototype.ToggleSize =
FileUpload.prototype.ToggleSize =
Header.prototype.ToggleSize =
ImageElement.prototype.ToggleSize =
Label.prototype.ToggleSize =
List.prototype.ToggleSize =
ListBox.prototype.ToggleSize =
ListItem.prototype.ToggleSize =
Password.prototype.ToggleSize =
RadioButton.prototype.ToggleSize =
Row.prototype.ToggleSize =
Span.prototype.ToggleSize =
Table.prototype.ToggleSize =
TableBody.prototype.ToggleSize =
TableFoot.prototype.ToggleSize =
TableHead.prototype.ToggleSize =
TextArea.prototype.ToggleSize =
TextBox.prototype.ToggleSize = function (direction, time, frames, func) {
    //<summary>Resizes the element in an animation to a width of 0 and height of 0.</summary>
    ///<param name="direction" type="String" optional="true" default="Direction.Diagonl">The direction to resize the element in.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="10">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.SlideTo =
Body.prototype.SlideTo =
Button.prototype.SlideTo =
Cell.prototype.SlideTo =
CheckBox.prototype.SlideTo =
DropDownList.prototype.SlideTo =
Content.prototype.SlideTo =
ContentButton.prototype.SlideTo =
Div.prototype.SlideTo =
Element.prototype.SlideTo =
FileUpload.prototype.SlideTo =
Header.prototype.SlideTo =
ImageElement.prototype.SlideTo =
Label.prototype.SlideTo =
List.prototype.SlideTo =
ListBox.prototype.SlideTo =
ListItem.prototype.SlideTo =
Password.prototype.SlideTo =
RadioButton.prototype.SlideTo =
Row.prototype.SlideTo =
Span.prototype.SlideTo =
Table.prototype.SlideTo =
TableBody.prototype.SlideTo =
TableFoot.prototype.SlideTo =
TableHead.prototype.SlideTo =
TextArea.prototype.SlideTo =
TextBox.prototype.SlideTo = function (location, time, frames, func) {
    //<summary>Resizes the element in an animation to a width of 0 and height of 0.</summary>
    ///<param name="location" type="Location">The location to move the element to.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="20">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.BlendBgTo =
Body.prototype.BlendBgTo =
Button.prototype.BlendBgTo =
Cell.prototype.BlendBgTo =
CheckBox.prototype.BlendBgTo =
DropDownList.prototype.BlendBgTo =
Content.prototype.BlendBgTo =
ContentButton.prototype.BlendBgTo =
Div.prototype.BlendBgTo =
Element.prototype.BlendBgTo =
FileUpload.prototype.BlendBgTo =
Header.prototype.BlendBgTo =
ImageElement.prototype.BlendBgTo =
Label.prototype.BlendBgTo =
List.prototype.BlendBgTo =
ListBox.prototype.BlendBgTo =
ListItem.prototype.BlendBgTo =
Password.prototype.BlendBgTo =
RadioButton.prototype.BlendBgTo =
Row.prototype.BlendBgTo =
Span.prototype.BlendBgTo =
Table.prototype.BlendBgTo =
TableBody.prototype.BlendBgTo =
TableFoot.prototype.BlendBgTo =
TableHead.prototype.BlendBgTo =
TextArea.prototype.BlendBgTo =
TextBox.prototype.BlendBgTo = function (color, time, size, func) {
    ///<summary>Blends the background color into the provided color.</summary>
    ///<param name="color" type="Color">Color to bend the background to.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="10">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

Anchor.prototype.BlendFgTo =
Body.prototype.BlendFgTo =
Button.prototype.BlendFgTo =
Cell.prototype.BlendFgTo =
CheckBox.prototype.BlendFgTo =
DropDownList.prototype.BlendFgTo =
Content.prototype.BlendFgTo =
ContentButton.prototype.BlendFgTo =
Div.prototype.BlendFgTo =
Element.prototype.BlendFgTo =
FileUpload.prototype.BlendFgTo =
Header.prototype.BlendFgTo =
ImageElement.prototype.BlendFgTo =
Label.prototype.BlendFgTo =
List.prototype.BlendFgTo =
ListBox.prototype.BlendFgTo =
ListItem.prototype.BlendFgTo =
Password.prototype.BlendFgTo =
RadioButton.prototype.BlendFgTo =
Row.prototype.BlendFgTo =
Span.prototype.BlendFgTo =
Table.prototype.BlendFgTo =
TableBody.prototype.BlendFgTo =
TableFoot.prototype.BlendFgTo =
TableHead.prototype.BlendFgTo =
TextArea.prototype.BlendFgTo =
TextBox.prototype.BlendFgTo = function (color, time, size, func) {
    ///<summary>Blends the foreground color into the provided color.</summary>
    ///<param name="color" type="Color">Color to bend the foreground to.</param>
    ///<param name="time" type="Number" optional="true" default="300">Number of milliseconds to execute the animation.</param>
    ///<param name="frames" type="Number" optional="true" default="10">Number of frames to execute the animation in.</param>
    ///<param name="func" type="Function" otpional="true">Function to execute once the animation is complete.</param>
    ///<returns type="Animation">Returns the animation object generated.</returns>
    return new Animation();
};

function Size(width, height) {
    ///<summary>Object that represents a unit of width and height in pixels.</summary>
    ///<param name="width" type="Number" optional="true">Width in pixels.</param>
    ///<param name="height" type="Number" optional="true">Height in pixels.</param>
    ///<field name="Width" type="Number">Width in pixels.</field>
    ///<field name="Height" type="Number">Height in pixels.</field>
}

Size.prototype.Width = 0;
Size.prototype.Height = 0;

function Location(x, y) {
    ///<summary>Object that represents a unit of x and y position in pixels.</summary>
    ///<param name="x" type="Number" optional="true">X in pixels.</param>
    ///<param name="y" type="Number" optional="true">Y in pixels.</param>
    ///<field name="X" type="Number">X in pixels.</field>
    ///<field name="Y" type="Number">Y in pixels.</field>
}

Location.prototype.X = 0;
Location.prototype.Y = 0;

Anchor.prototype.ToggleFade =
Body.prototype.ToggleFade =
Button.prototype.ToggleFade =
Cell.prototype.ToggleFade =
CheckBox.prototype.ToggleFade =
DropDownList.prototype.ToggleFade =
Content.prototype.ToggleFade =
ContentButton.prototype.ToggleFade =
Div.prototype.ToggleFade =
Element.prototype.ToggleFade =
FileUpload.prototype.ToggleFade =
Header.prototype.ToggleFade =
ImageElement.prototype.ToggleFade =
Label.prototype.ToggleFade =
List.prototype.ToggleFade =
ListBox.prototype.ToggleFade =
ListItem.prototype.ToggleFade =
Password.prototype.ToggleFade =
RadioButton.prototype.ToggleFade =
Row.prototype.ToggleFade =
Span.prototype.ToggleFade =
Table.prototype.ToggleFade =
TableBody.prototype.ToggleFade =
TableFoot.prototype.ToggleFade =
TableHead.prototype.ToggleFade =
TextArea.prototype.ToggleFade =
TextBox.prototype.ToggleFade = function (size) {
    ///<summary>(Property Function) Gets or sets the size of the element as a ToggleFade unit object.</summary>
    ///<param name="size" type="ToggleFade" optional="true">(Optional) The size of the object in pixels.</param>
    ///<returns type="ToggleFade">Returns the size of the element as a ToggleFade object.</returns>
    if (size === undefined) {
        return new ToggleFade();
    }

    return this;
};

Anchor.prototype.Location =
Body.prototype.Location =
Button.prototype.Location =
Cell.prototype.Location =
CheckBox.prototype.Location =
DropDownList.prototype.Location =
Content.prototype.Location =
ContentButton.prototype.Location =
Div.prototype.Location =
Element.prototype.Location =
FileUpload.prototype.Location =
Header.prototype.Location =
ImageElement.prototype.Location =
Label.prototype.Location =
List.prototype.Location =
ListBox.prototype.Location =
ListItem.prototype.Location =
Password.prototype.Location =
RadioButton.prototype.Location =
Row.prototype.Location =
Span.prototype.Location =
Table.prototype.Location =
TableBody.prototype.Location =
TableFoot.prototype.Location =
TableHead.prototype.Location =
TextArea.prototype.Location =
TextBox.prototype.Location = function (location) {
    ///<summary>(Property Function) Gets or sets the location of the element as a Location unit object.</summary>
    ///<param name="location" type="Location" optional="true">(Optional) The location of the object in pixels.</param>
    ///<returns type="Location">Returns the location of the element as a ToggleFade object.</returns>
    if (location === undefined) {
        return new Location();
    }

    return this;
};

function Bounds() {
    ///<summary>Represents the postions of each edge of an element.</summary>
    ///<field name="left" type="Number">Left edge of the element.</field>
    ///<field name="Right" type="Number">Right edge of the element.</field>
    ///<field name="Top" type="Number">Top edge of the element.</field>
    ///<field name="Bottom" type="Number">Bottom edge of the element.</field>
}

Bounds.prototype.Left = 0;
Bounds.prototype.Right = 0;
Bounds.prototype.Top = 0;
Bounds.prototype.Bottom = 0;

Bounds.prototype.Contains = function (x, y) {
    ///<summary>Determines if the bounds area contains the given x and y values.</summary>
    ///<param name="x" type="Number">X position in pixels.</param>
    ///<param name="Y" type="Number">Y position in pixels.</param>
    ///<returns type="Boolean">Returns whether the x and y position lie within the bounds.</returns>
    return true;
};

Bounds.prototype.OnEdge = function (x, y, edge, proximity) {
    ///<summary>Determines if the x and y position is on the edge of the bounds given the proximity.</summary>
    ///<param name="x" type="Number">X position.</param>
    ///<param name="y" type="Number">Y position.</param>
    ///<param name="edge" type="Edige">The edge to test.</param>
    ///<param name="proximity" type="Number" optional="true" default="1">How close to the edge the x and y position must be to return true.</param>
    ///<returns 
};

Anchor.prototype.GetBounds =
Body.prototype.GetBounds =
Button.prototype.GetBounds =
Cell.prototype.GetBounds =
CheckBox.prototype.GetBounds =
DropDownList.prototype.GetBounds =
Content.prototype.GetBounds =
ContentButton.prototype.GetBounds =
Div.prototype.GetBounds =
Element.prototype.GetBounds =
FileUpload.prototype.GetBounds =
Header.prototype.GetBounds =
ImageElement.prototype.GetBounds =
Label.prototype.GetBounds =
List.prototype.GetBounds =
ListBox.prototype.GetBounds =
ListItem.prototype.GetBounds =
Password.prototype.GetBounds =
RadioButton.prototype.GetBounds =
Row.prototype.GetBounds =
Span.prototype.GetBounds =
Table.prototype.GetBounds =
TableBody.prototype.GetBounds =
TableFoot.prototype.GetBounds =
TableHead.prototype.GetBounds =
TextArea.prototype.GetBounds =
TextBox.prototype.GetBounds = unction () {
    ///<summary>Determines the left, right, top and bottom boundaries of the element</summary>
    ///<returns type="Bounds">Returns a bounds object.</returns>
    return new Bounds();
};

Client.ElementClipped = function (element, side) {
    ///<summary>Determines if the element is currently clipped by the client's window.</summary>
    ///<param name="element" type="Element">Element to test.</param>
    ///<param name="side" type="Side">Sides to test clipping edge.</param>
    ///<returns type="Boolean">If the element is clipped on any of the sides provided.</returns>
    return true;
}

Anchor.prototype.SnapTo =
Body.prototype.SnapTo =
Button.prototype.SnapTo =
Cell.prototype.SnapTo =
CheckBox.prototype.SnapTo =
DropDownList.prototype.SnapTo =
Content.prototype.SnapTo =
ContentButton.prototype.SnapTo =
Div.prototype.SnapTo =
Element.prototype.SnapTo =
FileUpload.prototype.SnapTo =
Header.prototype.SnapTo =
ImageElement.prototype.SnapTo =
Label.prototype.SnapTo =
List.prototype.SnapTo =
ListBox.prototype.SnapTo =
ListItem.prototype.SnapTo =
Password.prototype.SnapTo =
RadioButton.prototype.SnapTo =
Row.prototype.SnapTo =
Span.prototype.SnapTo =
Table.prototype.SnapTo =
TableBody.prototype.SnapTo =
TableFoot.prototype.SnapTo =
TableHead.prototype.SnapTo =
TextArea.prototype.SnapTo =
TextBox.prototype.SnapTo = function (parentElement, side, alignment, xPad, yPad) {
    ///<summary>Moves the element to one of the sides of the parent element.</summary>
    ///<param name="parentElement" type="Element">Element to move instance to.</param>
    ///<param name="side" type="Side">Side to move the element to.</param>
    ///<param name="alignment" type="Alignment">How the element should be aligned to the parent element.</param>
    ///<param name="xPad" type="Number" optional="true" default="0">How much to offset the element on the x plane.</param>
    ///<param name="yPad" type="Number" optional="true" default="0">How much to offset the element on the y plane.</param>
    ///<returns type="Element">Returns instance.</returns>
}


Client.SnapTop = function (element, side) {
    ///<summary>Moves the outer edge of the element to align with the given edge of the client window.</summary>
    ///<param name="element" type="Element">Element to move.</param>
    ///<param name="side" type="Side">Side of the client window to move the element to.</param>
};

Anchor.prototype.ElementClipped =
Body.prototype.ElementClipped =
Cell.prototype.ElementClipped =
Content.prototype.ElementClipped =
ContentButton.prototype.ElementClipped =
Div.prototype.ElementClipped =
ListItem.prototype.ElementClipped =
Span.prototype.ElementClipped = function (element) {
  ///<summary>Determines if the element provided is clipped by the instance's bounds.</summary>
  ///<param name="element" type="Element">Element to test.</param>
  ///<returns type="Boolean">Returns whether the element is clipped by the instance's view area.</returns>
};
