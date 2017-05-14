function Null() {
    ///<summary>Blank function that does nothing.</summary>
    ///<returns>Returns true if the object is null or undefined.</returns>
    return true;
}
function NullOrUndefined(object) {
    ///<summary>Determines of the object is null or undefined.</summary>
    ///<param name="object" type="Object">Object to test for null or undefined.</param>
    ///<returns type="Boolean">Returns true if the object is null or undefined.</returns>
    return object === null || object === undefined;
}

var Type = {
    ///<summary>Represents the various types of objects native to either JavaScript or the NinJa framework.</summary>
    Anchor: 0,
    Array: 1,
    Button: 2,
    Body: 3,
    Cell: 4,
    CheckBox: 5,
    Array: 6,
    Color: 7,
    Cookie: 8,
    DropDownList: 9,
    Date: 10,
    DateTime: 11,
    Delegate: 12,
    Dictionary: 13,
    Div: 14,
    Event: 15,
    EventArgs: 16,
    FileUpload: 17,
    Form: 18,
    Function: 19,
    Header: 20,
    HiddenField: 21,
    Image: 22,
    Label: 23,
    ListBox: 24,
    List: 25,
    ListItem: 26,
    Number: 27,
    ObservableArray: 28,
    Object: 29,
    Option: 30,
    RadioButton: 31,
    RadioButtonGroup: 32,
    Row: 33,
    Password: 34,
    Span: 35,
    String: 36,
    Table: 37,
    TableBody: 38,
    TableHead: 39,
    TableFoot: 40,
    TextArea: 41,
    TextBox: 42,
    TimeSpan: 43,
    Timer: 44,
    UserEvent: 45,
    Window: 46
};

var GridLines = {
    ///<summary>Represents the various types grid lines available for tables.</summary>
    None: "",
    Vertical: "",
    Horizontal: "",
    Both: ""
};

var UserEventTypes = {
    ///<summary>Represents the various types of user driven events.</summary>
    OnBlur: "",
    OnChange: "",
    OnClick: "",
    OnContextMenu: "",
    OnDoubleClick: "",
    OnFocus: "",
    OnKeyDown: "",
    OnKeyPress: "",
    OnKeyUp: "",
    OnLoad: "",
    OnMouseDown: "",
    OnMouseOver: "",
    OnMouseMove: "",
    OnMouseOut: "",
    OnMouseUp: "",
    OnScroll: "",
    OnSubmit: "",
    OnUnload: ""
};

var Colors = {
    AliceBlue: new Color(),
    AntiqueWhite: new Color(),
    Aqua: new Color(),
    Aquamarine: new Color(),
    Azure: new Color(),
    Beige: new Color(),
    Bisque: new Color(),
    Black: new Color(),
    BlanchedAlmond: new Color(),
    Blue: new Color(),
    BlueViolet: new Color(),
    Brown: new Color(),
    BurlyWood: new Color(),
    CadetBlue: new Color(),
    Chartreuse: new Color(),
    Chocolate: new Color(),
    Coral: new Color(),
    CornflowerBlue: new Color(),
    Cornsilk: new Color(),
    Crimson: new Color(),
    Cyan: new Color(),
    DarkBlue: new Color(),
    DarkCyan: new Color(),
    DarkGoldenRod: new Color(),
    DarkGray: new Color(),
    DarkGreen: new Color(),
    DarkKhaki: new Color(),
    DarkMagenta: new Color(),
    DarkOliveGreen: new Color(),
    Darkorange: new Color(),
    DarkOrchid: new Color(),
    DarkRed: new Color(),
    DarkSalmon: new Color(),
    DarkSeaGreen: new Color(),
    DarkSlateBlue: new Color(),
    DarkSlateGray: new Color(),
    DarkTurquoise: new Color(),
    DarkViolet: new Color(),
    DeepPink: new Color(),
    DeepSkyBlue: new Color(),
    DimGray: new Color(),
    DodgerBlue: new Color(),
    Empty: new Color(),
    FireBrick: new Color(),
    FloralWhite: new Color(),
    ForestGreen: new Color(),
    Fuchsia: new Color(),
    Gainsboro: new Color(),
    GhostWhite: new Color(),
    Gold: new Color(),
    GoldenRod: new Color(),
    Gray: new Color(),
    Green: new Color(),
    GreenYellow: new Color(),
    HoneyDew: new Color(),
    HotPink: new Color(),
    IndianRed: new Color(),
    Indigo: new Color(),
    Ivory: new Color(),
    Khaki: new Color(),
    Lavender: new Color(),
    LavenderBlush: new Color(),
    LawnGreen: new Color(),
    LemonChiffon: new Color(),
    LightBlue: new Color(),
    LightCoral: new Color(),
    LightCyan: new Color(),
    LightGoldenRodYellow: new Color(),
    LightGray: new Color(),
    LightGreen: new Color(),
    LightPink: new Color(),
    LightSalmon: "7A",
    LightSeaGreen: new Color(),
    LightSkyBlue: new Color(),
    LightSlateGray: new Color(),
    LightSteelBlue: new Color(),
    LightYellow: new Color(),
    Lime: new Color(),
    LimeGreen: new Color(),
    Linen: new Color(),
    Magenta: new Color(),
    Maroon: new Color(),
    MediumAquaMarine: new Color(),
    MediumBlue: new Color(),
    MediumOrchid: new Color(),
    MediumPurple: new Color(),
    MediumSeaGreen: new Color(),
    MediumSlateBlue: new Color(),
    MediumSpringGreen: new Color(),
    MediumTurquoise: new Color(),
    MediumVioletRed: new Color(),
    MidnightBlue: new Color(),
    MintCream: new Color(),
    MistyRose: new Color(),
    Moccasin: new Color(),
    NavajoWhite: new Color(),
    Navy: new Color(),
    OldLace: new Color(),
    Olive: new Color(),
    OliveDrab: new Color(),
    Orange: new Color(),
    OrangeRed: new Color(),
    Orchid: new Color(),
    PaleGoldenRod: new Color(),
    PaleGreen: new Color(),
    PaleTurquoise: new Color(),
    PaleVioletRed: new Color(),
    PapayaWhip: new Color(),
    PeachPuff: new Color(),
    Peru: new Color(),
    Pink: new Color(),
    Plum: new Color(),
    PowderBlue: new Color(),
    Purple: new Color(),
    Red: new Color(),
    RosyBrown: new Color(),
    RoyalBlue: new Color(),
    SaddleBrown: new Color(),
    Salmon: new Color(),
    SandyBrown: new Color(),
    SeaGreen: new Color(),
    SeaShell: new Color(),
    Sienna: new Color(),
    Silver: new Color(),
    SkyBlue: new Color(),
    SlateBlue: new Color(),
    SlateGray: new Color(),
    Snow: new Color(),
    SpringGreen: new Color(),
    SteelBlue: new Color(),
    Tan: new Color(),
    Teal: new Color(),
    Thistle: new Color(),
    Tomato: new Color(),
    Turquoise: new Color(),
    Violet: new Color(),
    Wheat: new Color(),
    White: new Color(),
    WhiteSmoke: new Color(),
    Yellow: new Color(),
    YellowGreen: new Color()
};

var Cursor = {
    Auto: "",
    ColumnResize: "",
    CrossHair: "",
    Default: "",
    East: "",
    Inherit: "",
    Help: "",
    Move: "",
    North: "",
    NorthEast: "",
    NorthWest: "",
    Pointer: "",
    Progress: "",
    RowResize: "",
    South: "",
    SouthEast: "",
    SouthWest: "s",
    Text: "",
    West: "",
    Wait: ""
};

var ModificationType = {
    Add: 1,
    Remove: 2,
    Clear: 3,
    Update: 4,
    Swap: 5,
    Move: 6
};

var Modifiers = {
    None: 0,
    ShiftKey: 1,
    AltKey: 2,
    ControlKey: 4
};

var Keys = {
    Backspace: 8,
    Tab: 9,
    Enter: 13,
    Shift: 16,
    Control: 17,
    Alt: 18,
    CapsLock: 20,
    Escape: 20,
    Spacebar: 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    LeftArrow: 37,
    UpArrow: 38,
    RightArrow: 39,
    DownArrow: 40,
    Insert: 45,
    Delete: 46,
    Zero: 48,
    One: 49,
    Two: 50,
    Three: 51,
    Four: 52,
    Five: 53,
    Six: 54,
    Seven: 55,
    Eight: 56,
    Nine: 57,
    SemiColon: 59,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    NumPadZero: 96,
    NumPadOne: 97,
    NumPadTwo: 98,
    NumPadThree: 99,
    NumPadFour: 100,
    NumPadFive: 101,
    NumPadSix: 102,
    NumPadSeven: 103,
    NumPadEight: 104,
    NumPadNine: 105,
    NumPadeMultiply: 106,
    Equals: 107,
    Minus: 109,
    NumPadeDecimal: 110,
    NumPadDivide: 111,
    NumLock: 144,
    Comma: 188,
    Period: 190,
    BackSlash: 191,
    Tilde: 192,
    OpenSquareBracket: 219,
    ForwardSlash: 220,
    CloseSquareBracket: 221,
    Apostrophe: 222
};

var FormMethod = {
    Get: "",
    Post: ""
};

var EncodingType = {
    UrlEncoded: "",
    FormData: "",
    Text: ""
};

var BrowserType = {
    InternetExplorer: 1,
    MozillaFirefox: 2,
    GoogleChrome: 3,
    Safari: 4,
    Opera: 5,
    Android: 6,
    Unknown: -1
};

var Style = {
    Background: "",
    BackgroundAttachment: "",
    Italic: "",
    BackgroundImage: "",
    BackgroundPosition: "",
    BackgroundRepeat: "",
    Border: "",
    BorderBottom: "",
    BorderBottomColor: "",
    BorderBottomStyle: "",
    BorderBottomWidth: "",
    BorderCollapse: "",
    BorderColor: "",
    BorderLeft: "",
    BorderLeftColor: "",
    BorderLeftStyle: "",
    BorderLeftWidth: "",
    BorderRight: "",
    BorderRightColor: "",
    BorderRightStyle: "",
    BorderRightWidth: "",
    BorderStyle: "",
    BorderTop: "",
    BorderTopColor: "",
    BorderTopStyle: "",
    BorderTopWidth: "",
    BoxSizing: "",
    Bottom: "",
    Clear: "",
    Color: "",
    Cursor: "",
    Display: "",
    Filter: "",
    Font: "",
    FontFamily: "",
    FontSize: "",
    FontVariant: "",
    FontWeight: "",
    Height: "",
    Left: "",
    LetterSpacing: "",
    LineHeight: "",
    ListStyle: "",
    ListStyleImage: "",
    ListStylePosition: "",
    ListStyleType: "",
    Margin: "",
    MarginBottom: "",
    MarginLeft: "",
    MarginRight: "",
    MarginTop: "",
    Padding: "",
    PaddingBottom: "",
    PaddingLeft: "",
    PaddingRight: "",
    PaddingTop: "",
    PageBreakAfter: "",
    PageBreakBefore: "",
    Position: "",
    Right: "",
    Float: "",
    Opacity: "",
    Overflow: "",
    TableLayout: "",
    TextAlign: "",
    TextDecoration: "",
    TextIndent: "",
    TextTransform: "",
    Top: "",
    VerticalAlign: "",
    Visibility: "",
    WhiteSpace: "",
    Width: "",
    ZIndex: "",
    Zoom: ""
};

var BulletType = {
    Disc: "",
    Circle: "",
    None: "",
    Square: "",
    Decimal: "",
    LowerRoman: "",
    UpperRoman: ""
};

Array.prototype.Type = "";
Date.prototype.Type = "";
Function.prototype.Type = "";
Number.prototype.Type = "";
String.prototype.Type = "";

// javascript extensions

Boolean.prototype.ToOneZero = function () {
    ///<summary>Converts the boolean value to a 1 or 0.</summary>
    ///<returns type="Number">Returns 1 for a true value, 0 for a false value.</returns>
    return 0;
};

Boolean.prototype.ToYN = function () {
    ///<summary>Converts the boolean value to a 'y' or 'n'.</summary>
    ///<returns type="String">Returns "y" for a true value, "n" for a false value.</returns>
    return "";
};

Boolean.prototype.ToYesNo = function () {
    ///<summary>Converts the boolean value to "yes" or "no".</summary>
    ///<returns type="String">Returns "yes" for a true value, "no" for a false value.</returns>
    return "";
};

Boolean.prototype.ToOnOff = function () {
    ///<summary>Converts the boolean value to "on" or "off".</summary>
    ///<returns type="String">Returns "on" for a true value, "off" for a false value.</returns>
    return "";
};

// date
Date.prototype.ToString = function (withTime) {
    ///<summary>Returns a string representation of the date.</summary>
    ///<param name="withTime" type="Boolean" optional="true" default="false">(Optional) Include the time portion of the date.</param>
    ///<returns type="String">The date in the format MM/DD/YYYY. If withTime is true, includes time in HH:MM:SS PP (P is am/pm).</returns>
    return "";
}

// number
Number.prototype.ToString = function (base, pad) {
    ///<summary>Converts a number to a string representation.</summary>
    ///<param name="base" type="Number" optional="true" default="10">(Optional) The base to display the number as.</param>
    ///<param name="pad" type="Number" optional="true" default="0">(Optional) The number of 0s to pad in front of the number if the length does not meet the pad amount.</param>
    ///<returns type="String">The date in the format MM/DD/YYYY. If withTime is true, includes time in HH:MM:SS PP (P is am/pm).</returns>
    return "";
};

Number.Compare = function (a, b) {
    ///<summary>Returns a comparison value between two numbers.</summary>
    ///<param name="a" type="Number">Number to compare.</param>
    ///<param name="b" type="Number">Number to compare the first number to.</param>
    ///<returns type="Number">If a &gt; b, returns 1. If a &lt; b, returns -1. If a == b, returns 0.</returns>
    return 0;
}

Number.prototype.Between = function (a, b, inclusive) {
    ///<summary>Determines if the instance is between two numbers.</summary>
    ///<param name="a" type="Number">First edge case to check.</param>
    ///<param name="b" type="Number">Second edge case to check.</param>
    ///<param name="inclusive" type="Boolean" otional="true" default="false">(Optional) If true, a number falling on the edge returns false.</param>
    ///<returns type="Boolean">Returns whether the instance is between numbers a and b.</returns>
    return false;
}

Number.prototype.Compare = function (b) {
    ///<summary>Returns a comparison value between the instance and the provided number.</summary>
    ///<param name="b" type="Number">Number to compare the instance to.</param>
    ///<returns type="Number">If instance &gt; b, returns 1. If instance &lt; b, returns -1. If instance == b, returns 0.</returns>
    return 0;
}


Number.prototype.Round = function (significance) {
    ///<summary>Rounds a number to the the significant digits. This is determined by taking the 10 to the power of the significance.</summary>
    ///<param name="significance" type="Number" optional="true" default="0">(Optional)</param>
    ///<returns type="Number">The number rounded to 10^signifance.</returns>
    return 0;
};

Number.prototype.Floor = function () {
    ///<summary>Truncates the decimal portion of the number.</summary>
    ///<returns type="Number">The number stripped of its decimal portion.</returns>
    return 0;
};

Number.prototype.Ceil = function () {
    ///<summary>Truncates the decimal portion of the number and rounds up.</summary>
    ///<returns type="Number">The number stripped of its decimal portion and rounded up.</returns>
    return 0;
};

String.prototype.Contains = function (token, ignoreCase) {
    ///<summary>Determines if the token appears in the instance.</summary>
    ///<param name="token" type="String">The string to check for.</param>
    ///<param name="ignoreCase" type="String" optional="true" default="false">(Optional) Ignore case sensitivity.</param>
    ///<returns type="Boolean">Returns whether the token appears in the string instance.</returns>
    return true;
};

String.prototype.Decode = function () {
    ///<summary>Returns a decoded string from the url encoded instance.</summary>
    ///<returns type="String">A new instance of the string without url encoding.</returns>
    return "";
};

String.prototype.Encode = function () {
    ///<summary>Returns the string with url encoding.</summary>
    ///<returns type="String">A new instance of the string with url encoding.</returns>
    return "";
};

String.prototype.FormatPlural = function (value) {
    ///<summary>Pluralizes the string given the value. If the value is one, the original 
    /// string is returned. Anything that is not one will return a pluralized version of the word given
    /// generic English rules.</summary>
    ///<param name="value" type="Number">The number that determines if the string is pluralized.</param>
    ///<returns type="String">A copy of the instance of the string with the ending reflecting the value of the number provided.</returns>
    return "";
};

String.prototype.FilterAlpha = function () {
    ///<summary>Filters non-alphabetical characters</summary>
    ///<returns type="String">A copy of the instance with only alphabetical characters.</returns>
    return "";
};

String.prototype.FilterNumeric = function () {
    ///<summary>Filters non-numeric characters.</summary>
    ///<returns type="String">A copy of the instance with only numeric characters.</returns>
    return "";
};

String.prototype.FormatPhone = function () {
    ///<summary>Formats the string as a 7 or 10 digit phone number.</summary>
    ///<returns type="String">A copy of the instance with standard US telephone formatting applied.</returns>
}

String.prototype.FormatTaxID = function (type) {
    ///<summary>Formats the string as a 9 digit tax id.</summary>
    ///<param name="type" type="String" optional="true" default="S">(Optional)If set to "B", returns a business tax id type format.</param>
};

String.prototype.FormatCurrency = function () {
    ///<summary>Formats the string as a USD currency to 2 decimal places.</summary>
}

String.prototype.IndexOf = function (token, start) {
    ///<summary>Returns the index of the first instance of the string.</summary>
    ///<param name="token" type="String">The string to cechk for.</param>
    ///<param name="start" type="Number" optional="true" default="0">(Optional) The index to begin the search.</param>
    ///<returns type="Number">Returns the index of the first occurs of the token starting at the provided start index. If the token is not found, -1 is returned.</returns>
    return 0;
};

String.prototype.Insert = function (index, string) {
    ///<summary>Inserts the given string at the given index.</summary>
    ///<param name="index" type="Number">The index to insert at.</param>
    ///<param name="string" type="String">The string to insert.</param>
    ///<returns type="String">A copy of the instance with the given string inserted at the index of the instance.</returns>
    return "";
};

String.prototype.IsDate = function () {
    ///<summary>Determines whether the string represents a valid Date.</summary>
    ///<returns type="Boolean">True if the string represents a valid Date.</returns>
    return true;
};

String.prototype.IsDateTime = function () {
    ///<summary>Determines whether the string represents a valid DateTime.</summary>
    ///<returns type="Boolean">True if the string represents a valid DateTime.</returns>
    return true;
};

String.prototype.IsTime = function () {
    ///<summary>Determines whether the string represents a valid TimeSpan.</summary>
    ///<returns type="Boolean">True if the string represents a valid TimeSpan.</returns>
    return true;
};

String.prototype.IsFloat = function () {
    ///<summary>Determines whether the string represents a valid floating point number.</summary>
    ///<returns type="Boolean">True if the string represents a valid floating point number.</returns>
    return true;
};

String.prototype.IsInt = function () {
    ///<summary>Determines whether the string represents a valid integer number.</summary>
    ///<returns type="Boolean">True if the string represents a valid integer number.</returns>
    return 0;
};

String.prototype.LastIndexOf = function (token, start) {
    ///<summary>Determines the index of the last appearance of the string.</summary>
    ///<param name="token" type="String">The string to check for.</param>
    ///<param name="start" type="Number" optional="true" default="Length fo the string minus 1.">(Optional) Number characters to the left of the end of the string to begin the search.</param>
    ///<returns type="Number">Returns the index of the last occurence of the token. If the token is not found, -1 is returned.</returns>
    return 0;
};

String.prototype.MakeLinks = function (target) {
    ///<summary>Changes any parts of the string that contain http or https into anchors.</summary>
    ///<param name="target" type="String" optional="true" defeault="">(Optional)The target of the links.</param>
    ///<returns type="String">Returns a copy of the instance with valid urls as anchor tags.</returns>
};

String.prototype.PadLeft = function (num, char) {
    ///<summary>Pads the string to the left by the number of characters with the provided character. If the string is already
    /// longer than the provided number, the original string is returned.</summary>
    ///<param name="num" type="Number">Number of characters to pad.</param>
    ///<param name="char" type="String" optional="true" default="space character">(Optional) The character to pad the string with.</param>
    ///<returns type="String">Returns a copy of the instance of the length provided by num with the padded character to the left if needed to meet the length.</returns>
}

String.prototype.PadRight = function (num, char) {
    ///<summary>Pads the string to the right by the number of characters with the provided character. If the string is already
    ///longer than the provided number, the original string is returned.</summary>
    ///<param name="num" type="Number">Number of characters to pad.</param>
    ///<param name="char" type="String" optional="true" default="space character">(Optional) The character to pad the string with.</param>
    ///<returns type="String">Returns a copy of the instance of the length provided by num with the padded character to the right if needed to meet the length.</returns>
}

String.prototype.Remove = function (token) {
    ///<summary>Removes the first instance of the given token from the string.</summary>
    ///<param name="token" type="String">The string to remove.</param>
    ///<returns type="String">Returns a copy of the instance with the first instance of the token removed.</returns>
    return "";
};

String.prototype.RemoveAll = function (token) {
    ///<summary>Removes all instances of the given token from the string.</summary>
    ///<param name="token" type="String">The string to remove.</param>
    ///<returns type="String">Returns a copy of the instance with all instances of the token removed.</returns>
    return "";
};

String.prototype.RemoveSubstring = function (start, end) {
    ///<summary>Removes a portion of the string from the given start and end indices.</summary>
    ///<param name="start" type="Number">The starting index.</param>
    ///<param name="end" type="Number" optional="true" default="Length of the string minus 1">(Optional) The ending index.</param>
    ///<returns type="String">Returns a copy of the instance with the section between the start and end incides removed. The start and index is removed, the end index is not.</returns>
    return "";
};

String.prototype.Replace = function (token, replace, ignoreCase) {
    ///<summary>Replaces all instances of the given token with the string.</summary>
    ///<param name="token" type="String">The string to check for.</param>
    ///<param name="replace" type="String">The string to replace the token instances with.</param>
    ///<param anme="ignoreCase" type="Boolean" optional="true" default="false">(Optional) Ignore case of all string comparisons.</param>
    ///<returns type="String">Returns a copy of the instance with the tokens found in the instance replaced with the provided replacement string.</returns>
    return "";
};

String.prototype.Split = function (token) {
    ///<summary>Divides the instance on the given token and returns an Array of each individual section.</summary>
    ///<param name="token" type="String">The string to check for.</param>
    ///<returns type="Array">Returns an Array of strings divided on the given token. Empty entries found on either end of the array are ommitted.</returns>
    return ["", "", "", "", ""];
};

String.prototype.StartsWith = function (string, ignoreCase) {
    ///<summary>Determines whether the instance begins with the given string.</summary>
    ///<param name="string" type="String">The string to check for.</param>
    ///<param name="ignoreCase" type="Boolean" optional="true" default="false">(Optional) Ignore case of all string comparisons.</param>
    ///<returns type="Boolean">Returns whether the instance begins with the provided string.</returns>
    return true;
};

String.prototype.EndsWith = function (string, ignoreCase) {
    ///<summary>Determines whether the instance ends with the given string.</summary>
    ///<param name="string" type="String">The string to check for.</param>
    ///<param name="ignoreCase" type="Boolean" optional="true" default="false">(Optional)  Ignore case of all string comparisons.</param>
    ///<returns type="Boolean">Returns whether the instance ends with the provided string.</returns>
    return true;
};

String.prototype.Substring = function (start, end) {
    ///<summary>Returns a portion of the string from the start index to the end index. If end is greater than the length, up to the length is returned.</summary>
    ///<param name="start" type="Number">Start index of the string.</param>
    ///<param name="end" type="Number" optional="true" default="Length of the string">(Optional) End index of the string to return.</param>
    ///<returns type="String">A copy of the instance from the start index, including the start, to the end index, not including the end character.</returns>
    return "";
};

String.prototype.ToColor = function () {
    ///<summary>Converts the string into a color object.</summary>
    ///<returns type="Color">Returns a color object represented by the string.</returns>
    return new Color();
}

String.prototype.ToInt = function (base) {
    ///<summary>Converts the instance into an integer.</summary>
    ///<param name="base" type="Number" optional="true" default="10">(Optional)The base to convert the value to.</param>
    ///<returns type="Number">Returns the integer representation of the instance.</returns>
    return 0;
};

String.prototype.ToFloat = function () {
    ///<summary>Converts the instance into an floating point number.</summary>
    ///<returns type="Number">Returns the floating point number representation of the instance.</returns>
    return 0;
};

String.prototype.ToBoolean = function () {
    ///<summary>Converts the string into a boolean.</summary>
    ///<returns type="Boolean">Returns true if the instance is one of the following: "t", "true, "yes", "on", "1", or 1, case insenstive. All other values return false.</returns>
    return true;
};

String.prototype.ToDateTime = function () {
    ///<summary>Converts the string into a DateTime.</summary>
    ///<returns type="DateTime">Returns the DateTime representation of the instance.</returns>
    return new DateTime();
};

String.prototype.ToLower = function () {
    ///<summary>Returns the string as a lowercase version.</summary>
    ///<returns type="String">Returns a copy of the instance with all characters in lower case.</returns>
    return "";
};


String.prototype.ToUpper = function () {
    ///<summary>Returns the string as an uppecase version.</summary>
    ///<returns type="String">Returns a copy of the instance with all characters in upper case.</returns>
    return "";
};

String.prototype.Trim = function () {
    ///<summary>Removes all the leading and trailing white space from the string.</summary>
    ///<returns type="String">Returns a copy of the instance without leading or trailing whitespace.</returns>
    return "";
}

String.prototype.TrimLeft = function () {
    ///<summary>Removes all the leading white space from the string.</summary>
    ///<returns type="String">Returns a copy of the instance without leading whitespace.</returns>
    return "";
}

String.prototype.TrimRight = function () {
    ///<summary>Removes all the trailing white space from the string.</summary>
    ///<returns type="String">Returns a copy of the instance without trailing whitespace.</returns>
    return "";
}

String.prototype.Truncate = function (maxLength, str) {
    ///<summary>Truncates the string to the length provided.</summary>
    ///<param name="maxLength" type="Number">Maximum number of characters allowed.</param>
    ///<param name="str" type="String" optional="true" default="...">(Optional)String to append to the trunctated string to indicate there are more characters.</param>
    ///<returns type="String">Returns a copy of the instance truncated at the maxLength. If str is provided and length of the string is larger than maxLength, the str is appended to the copy.</returns>
}

String.BindFormat = function (string, objects) {
    ///<summary>Creates a new string drawing values from the object using binding strings.</summary>
    ///<param name="string" type="String">String with binding placeholders.</param>
    ///<param name="objects" type="Array">Array of objects to pull values from.</param>
    ///<returns type="String">Returns a copy of the instance with placeholders replaced with the values derived from the object.</returns>

}
String.Format = function (string, variadicParams) {
    ///<summary>Replaces the given place holders indicated with {#} where # is the index number of the the provided parameters.</summary>
    ///<param name="string" type="String">String with placeholders.</param>
    ///<param name="variadicParams" type="Variadic">(Variadic) Any number of values that corresponds with number of placeholders.</param>
    ///<returns type="String">Returns a copy of the instance with placeholders replaced with values from the provided parmeters.</returns>
    return "";
};

String.IsNullOrEmpty = function (string) {
    ///<summary>Determines if the string is null, undefined or empty.</summary>
    ///<param name="string" type="String">The string to test.</param>
    ///<returns type="String">Returns true if the string is null, undefined or empty.</returns>
    return true;
};

String.Compare = function (string1, string2) {
    ///<summary>Compares two strings using value comparison.</summary>
    ///<param name="string1" type="String">First string to compare.</param>
    ///<param name="string2" type="String">Second string to compare.</param>
    ///<returns type="Number">If string1 &gt; string2, 1. If string1 == string2, 0. If string1 &lt; string2, -1.</returns>
    return 0;
};

String.prototype.Compare = function (string) {
    ///<summary>Compares the instance to string using value comparison.</summary>
    ///<param name="string" type="String"/>
    ///<returns type="Number">If instance &gt; string, 1. If instance == string, 0. If instance &lt; string, -1.</returns>
    return 0;
};

// Core objects

function Delegate(func, caller, parameters) {
    ///<summary>A specialized function that calls the provided function with the provided caller and with the provided parameters passed in.</summary>
    ///<param name="func" type="Function">Function to execute.</param>
    ///<param name="caller" type="Object">The caller of the function, or what "this" will be when function is executed. This can be set to null if caller does not matter.</param>
    ///<param name="parameters" type="Array" optional="true">(Optional) An Array of objects to pass as parameters to the function.</param>
    ///<field name="Function" type="Function">Function to execute.</field>
    ///<field name="Caller" type="Object">Caller of the function.</field>
    ///<field name="Parameters" type="Array">List of parameters to pass to the function.</field>
    ///<field name="Enabled" type="Boolean">If set to false, the delegate will not execute during events.</field>
    ///<field name="Type" type="String">Returns Type.Delegate.</field>
}

Delegate.prototype.Function = function () { };
Delegate.prototype.Caller = {};
Delegate.prototype.Enabled = false;
Delegate.prototype.Parameters = [];
Delegate.prototype.Type = "";

Delegate.Event = "";

// Arrays
function ObservableArray(owner) {
    ///<summary>Creates a Array class with modification events. These events do not fire on native JavaScript array manipulation.</summary>
    ///<param name="owner" type="Object" optional="true">(Optional) The owner of the ObservableArray.</param>
    ///<field name="OnChange" type="Event">(Event) Fired when the array has changed.</field>
    ///<field name="length" type="Number">Number of objects in the array.</field>
    ///<field name="Updating" type="Boolean">When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = owner;
};

ObservableArray.prototype.Owner = {};
ObservableArray.prototype.Type = "";
ObservableArray.prototype.OnChange = new Event();
ObservableArray.prototype.length = 0;
ObservableArray.prototype.Updating = false;

Array.From = function (object) {
    ///<summary>Converts any object with a length property and numeric indexer into an Array.</summary>
    ///<param name="object" type="Object">Any object with a length property and numeric indexer.</param>
    ///<returns type="Array">Returns a copy of the instance with all members in the indexer as items in an Array.</returns>
    return [];
}

Array.prototype.Add =
ObservableArray.prototype.Add = function (object) {
    ///<summary>Adds the object to the end of instance.</summary>
    ///<param name="object" type="Object">Object to add to the instance.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};


Array.prototype.AddRange =
ObservableArray.prototype.AddRange = function (array) {
    ///<summary>Adds the Array of objects to the end of the instance.</summary>
    ///<param name="array" type="Array">Array of objects to add to the end of instance.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.Clear =
ObservableArray.prototype.Clear = function () {
    ///<summary>Removes all objects from the instance.</summary>
    ///<returns type="Array">Returns the isntance.</returns>
    return this;
};

Array.prototype.Contains =
ObservableArray.prototype.Contains = function (object) {
    ///<summary>Determines if the object is in the instance.</summary>
    ///<param name="object" type="Object">Object to search for.</param>
    ///<returns type="Boolean">Returns true if the object is found in the instance.</returns>
    return true;
};

Array.prototype.Copy = function () {
    ///<summary>Creates a copy of the instance.</summary>
    ///<returns type="Array">Returns a copy of the instance as a new Array.</returns>
    return [];
}

ObservableArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the array.</summary>
    ///<returns type="ObservableArray">Returns a copy of the instance as a new ObservableArray.</returns>
    return new ObservableArray();
}

Array.prototype.Insert =
ObservableArray.prototype.Insert = function (index, object) {
    ///<summary>Inserts the object into the instance at the given index.</summary>
    ///<param name="index" type="Number">Index to insert object at.</param>
    ///<param name="object" type="Object">Object to insert.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.Last =
ObservableArray.prototype.Last = function () {
    ///<summary>Returns the last object in the instance.</summary>
    ///<returns type="Object">Returns the last object in the instance. If there are no objects, null is returned.</returns>
    return {};
};

Array.prototype.Find =
ObservableArray.prototype.Find = function (func) {
    ///<summary>Finds the first object that returns true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: an item in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Object">Returns the first object for which func returns true for. If func never returns true, null is returned.</returns>
    return {};
};
Array.prototype.FindAll =
ObservableArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all objects that return true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: an item in the array and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Array">Returns an Array with all all objects for which func returns true for. If func never returns true, an empty Array is returned.</returns>
    return [];
};


Array.prototype.ForEach =
ObservableArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each item as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the item as the first parameter.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};


Array.prototype.ForEachReversed =
ObservableArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each item, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the item as the first parameter.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.IndexOf =
ObservableArray.prototype.IndexOf = function (object) {
    ///<summary>Returns the index of the first occurrence of the object in the instance.</summary>
    ///<param name="object" type="Object">Object to check for.</param>
    ///<returns type="Number">Returns the index of the first occurance of the object. If the object was not found, returns -1.</returns>
    return 0;
};

Array.prototype.Move =
ObservableArray.prototype.Move = function (object, index) {
    ///<summary>Moves the object to the given index of the instance, shifting other objects to the left.</summary>
    ///<param name="object" type="Object">Object to move.</param>
    ///<param name="index" type="Number">Index to move the object to.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};


Array.prototype.Remove =
ObservableArray.prototype.Remove = function (object) {
    ///<summary>Removes the all occurences of the object from the instance.</summary>
    ///<param name="object" type="Object">Object to remove.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.RemoveAt =
ObservableArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the object from the instance at the given index.</summary>
    ///<param name="index" type="Number">Index of the object to remove.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.RemoveRange =
ObservableArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the Array of objects from the instance.</summary>
    ///<param name="array" type="Array">An Array of objects to be removed from the instance.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.Swap =
ObservableArray.prototype.Swap = function (object1, object2) {
    ///<summary>Swaps the positions of the two objects in the instance.</summary>
    ///<param name="object1" type="Object">First object to swap.</param>
    ///<param name="object2" type="Object">Second object to swap.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.ShiftLeft =
ObservableArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed object to the left in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.ShiftRight =
ObservableArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed object to the right in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

Array.prototype.ToString =
ObservableArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each object in the instance.</summary>
    ///<param name="delimiter" type="String" optional="true" default=",">The string to use to separate object string versions.</param>
    ///<returns type="String">Returns a string with each object string representation divided by the delimiter.</returns>
    return "";
};


function CellArray() {
    ///<summary>A specialized ObservableArray containing only Cells.</summary>
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="Updating" type="Boolean">When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray.</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new Cell();
};

CellArray.prototype.Owner = {};
CellArray.prototype.Type = "";
CellArray.prototype.OnChange = new Event();
CellArray.prototype.length = 0;
CellArray.prototype.Updating = false;

CellArray.prototype.Add = function (cell) {
    ///<summary>Adds the cell to the end of instance.</summary>
    ///<param name="cell" type="Cell">Cell to add to the instance.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
    return this;
};

CellArray.prototype.AddRange = function (array) {
    ///<summary>Adds the Array of cells to the end of the instance.</summary>
    ///<param name="array" type="Array">Array of cells to add to the end of instance.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};


CellArray.prototype.Clear = function () {
    ///<summary>Removes all objects from the instance.</summary>
    ///<returns type="CellArray">Returns the isntance.</returns>
    return this;
};

CellArray.prototype.Contains = function (cell) {
    ///<summary>Determines if the cell is in the instance.</summary>
    ///<param name="object" type="Cell">Cell to search for.</param>
    ///<returns type="Boolean">Returns true if the cell is found in the instance.</returns>
    return true;
};

CellArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the instance.</summary>
    ///<returns type="Array">Returns a copy of the instance as a new CellArray.</returns>
    return new CellArray();
}

CellArray.prototype.Insert = function (index, cell) {
    ///<summary>Inserts the cell into the instance at the given index.</summary>
    ///<param name="index" type="Number">Index to insert object at.</param>
    ///<param name="cell" type="Cell">Cell to insert.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.Find = function (func) {
    ///<summary>Finds the first cell that returns true for the function provided. Function is given each cell as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a cell in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Cell">Returns the first cell for which func returns true for. If func never returns true, null is returned.</returns>
    return new Cell();
};

CellArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all cells that return true for the function provided. Function is given each cell as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a cell in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Array">Returns an Array with all all cells for which func returns true for. If func never returns true, an empty Array is returned.</returns>
    var c = new Cell();
    return [c, c, c, c, c];
};


CellArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each cell as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the cell as the first parameter.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};


CellArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each cell, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the cell as the first parameter.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.IndexOf = function (cell) {
    ///<summary>Returns the index of the first occurrence of the cell in the instance.</summary>
    ///<param name="cell" type="Cell">Cell to check for.</param>
    ///<returns type="Number">Returns the index of the first occurance of the cell. If the cell was not found, returns -1.</returns>
    return this;
};

CellArray.prototype.Move = function (cell, index) {
    ///<summary>Moves the cell to the given index of the instance, shifting other cells to the left.</summary>
    ///<param name="cell" type="Cell">Cell to move.</param>
    ///<param name="index" type="Number">Index to move the cell to.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.Remove = function (cell) {
    ///<summary>Removes the all occurences of the cell from the instance.</summary>
    ///<param name="cell" type="Cell">Cell to remove.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the cell from the instance at the given index.</summary>
    ///<param name="index" type="Number">Index of the cell to remove.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the Array of cells from the instance.</summary>
    ///<param name="array" type="Array">An Array of cells to be removed from the instance.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

CellArray.prototype.Swap = function (cell1, cell2) {
    ///<summary>Swaps the positions of the two cells in the instance.</summary>
    ///<param name="cell1" type="Cell">First cell to swap.</param>
    ///<param name="cell2" type="Cell">Second cell to swap.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed cell to the left in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed cell to the right in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="CellArray">Returns the instance.</returns>
    return this;
};

CellArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each cell in the instance.</summary>
    ///<param name="delimiter" type="String" optional="true" default=",">The string to use to separate cell' string versions.</param>
    ///<returns type="String">Returns a string with each cell string representation divided by the delimiter.</returns>
    return "";
};

function ClassArray() {
    ///<summary>A specialized ObservableArray containing only strings of class names.</summary>
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="Updating" type="Boolean">When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray.</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new classString();
};

ClassArray.prototype.Owner = {};
ClassArray.prototype.Type = "";
ClassArray.prototype.OnChange = new Event();
ClassArray.prototype.length = 0;
ClassArray.prototype.Updating = false;

ClassArray.prototype.Add = function (classString) {
    ///<summary>Adds the class string to the end of instance.</summary>
    ///<param name="classString" type="String">classString to add to the instance.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
    return this;
};

ClassArray.prototype.AddRange = function (array) {
    ///<summary>Adds the Array of classStrings to the end of the instance.</summary>
    ///<param name="array" type="ClassArray">Array of classStrings to add to the end of instance.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};


ClassArray.prototype.Clear = function () {
    ///<summary>Removes all objects from the instance.</summary>
    ///<returns type="ClassArray">Returns the isntance.</returns>
    return this;
};

ClassArray.prototype.Contains = function (classString) {
    ///<summary>Determines if the class string is in the instance.</summary>
    ///<param name="object" type="String">classString to search for.</param>
    ///<returns type="Boolean">Returns true if the class string is found in the instance.</returns>
    return true;
};

ClassArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the instance.</summary>
    ///<returns type="ClassArray">Returns a copy of the instance as a new ClassArray.</returns>
    return new ClassArray();
}

ClassArray.prototype.Insert = function (index, classString) {
    ///<summary>Inserts the class string into the instance at the given index.</summary>
    ///<param name="index" type="Number">Index to insert object at.</param>
    ///<param name="classString" type="String">classString to insert.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.Find = function (func) {
    ///<summary>Finds the first class string that returns true for the function provided. Function is given each class string as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a class string in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="String">Returns the first class string for which func returns true for. If func never returns true, null is returned.</returns>
    return new classString();
};

ClassArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all classStrings that return true for the function provided. Function is given each class string as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a class string in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="ClassArray">Returns an Array with all all classStrings for which func returns true for. If func never returns true, an empty Array is returned.</returns>
    var c = new classString();
    return [c, c, c, c, c];
};


ClassArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each class string as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the class string as the first parameter.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};


ClassArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each classString, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the class string as the first parameter.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.IndexOf = function (classString) {
    ///<summary>Returns the index of the first occurrence of the class string in the instance.</summary>
    ///<param name="classString" type="String">classString to check for.</param>
    ///<returns type="Number">Returns the index of the first occurance of the classString. If the class string was not found, returns -1.</returns>
    return this;
};

ClassArray.prototype.Move = function (classString, index) {
    ///<summary>Moves the class string to the given index of the instance, shifting other classStrings to the left.</summary>
    ///<param name="classString" type="String">classString to move.</param>
    ///<param name="index" type="Number">Index to move the class string to.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.Remove = function (classString) {
    ///<summary>Removes the all occurences of the class string from the instance.</summary>
    ///<param name="classString" type="String">classString to remove.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the class string from the instance at the given index.</summary>
    ///<param name="index" type="Number">Index of the class string to remove.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the Array of classStrings from the instance.</summary>
    ///<param name="array" type="ClassArray">An Array of classStrings to be removed from the instance.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.Swap = function (classString1, classString2) {
    ///<summary>Swaps the positions of the two classStrings in the instance.</summary>
    ///<param name="classString1" type="String">First class string to swap.</param>
    ///<param name="classString2" type="String">Second class string to swap.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed class string to the left in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed class string to the right in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="ClassArray">Returns the instance.</returns>
    return this;
};

ClassArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each class string in the instance.</summary>
    ///<param name="delimiter" type="String" optional="true" default=",">The string to use to separate class string versions.</param>
    ///<returns type="String">Returns a string with each cell string representation divided by the delimiter.</returns>
    return "";
};


function CookieArray() {
    ///<summary>A specialized ObservableArray containing only Cookies.</summary>
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="Updating" type="Boolean">When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray.</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new Cookie();
};

CookieArray.prototype.Owner = {};
CookieArray.prototype.Type = "";
CookieArray.prototype.OnChange = new Event();
CookieArray.prototype.length = 0;
CookieArray.prototype.Updating = false;

CookieArray.prototype.Add = function (cookie) {
    ///<summary>Adds the cookie to the end of instance.</summary>
    ///<param name="cookie" type="Cookie">Cookie to add to the instance.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
    return this;
};

CookieArray.prototype.AddRange = function (array) {
    ///<summary>Adds the Array of cookies to the end of the instance.</summary>
    ///<param name="array" type="Array">Array of cookies to add to the end of instance.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};


CookieArray.prototype.Clear = function () {
    ///<summary>Removes all objects from the instance.</summary>
    ///<returns type="CookieArray">Returns the isntance.</returns>
    return this;
};

CookieArray.prototype.Contains = function (cookie) {
    ///<summary>Determines if the cookie is in the instance.</summary>
    ///<param name="object" type="Cookie">Cookie to search for.</param>
    ///<returns type="Boolean">Returns true if the cookie is found in the instance.</returns>
    return true;
};

CookieArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the instance.</summary>
    ///<returns type="Array">Returns a copy of the instance as a new CookieArray.</returns>
    return new CookieArray();
}

CookieArray.prototype.Insert = function (index, cookie) {
    ///<summary>Inserts the cookie into the instance at the given index.</summary>
    ///<param name="index" type="Number">Index to insert object at.</param>
    ///<param name="cookie" type="Cookie">Cookie to insert.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.Find = function (func) {
    ///<summary>Finds the first cookie that returns true for the function provided. Function is given each cookie as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a cookie in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Cookie">Returns the first cookie for which func returns true for. If func never returns true, null is returned.</returns>
    return new Cookie();
};

CookieArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all cookies that return true for the function provided. Function is given each cookie as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a cookie in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Array">Returns an Array with all all cookies for which func returns true for. If func never returns true, an empty Array is returned.</returns>
    var c = new Cookie();
    return [c, c, c, c, c];
};


CookieArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each cookie as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the cookie as the first parameter.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};


CookieArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each cookie, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the cookie as the first parameter.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.IndexOf = function (cookie) {
    ///<summary>Returns the index of the first occurrence of the cookie in the instance.</summary>
    ///<param name="cookie" type="Cookie">Cookie to check for.</param>
    ///<returns type="Number">Returns the index of the first occurance of the cookie. If the cookie was not found, returns -1.</returns>
    return this;
};

CookieArray.prototype.Move = function (cookie, index) {
    ///<summary>Moves the cookie to the given index of the instance, shifting other cookies to the left.</summary>
    ///<param name="cookie" type="Cookie">Cookie to move.</param>
    ///<param name="index" type="Number">Index to move the cookie to.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.Remove = function (cookie) {
    ///<summary>Removes the all occurences of the cookie from the instance.</summary>
    ///<param name="cookie" type="Cookie">Cookie to remove.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the cookie from the instance at the given index.</summary>
    ///<param name="index" type="Number">Index of the cookie to remove.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the Array of cookies from the instance.</summary>
    ///<param name="array" type="Array">An Array of cookies to be removed from the instance.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.Swap = function (cookie1, cookie2) {
    ///<summary>Swaps the positions of the two cookies in the instance.</summary>
    ///<param name="cookie1" type="Cookie">First cookie to swap.</param>
    ///<param name="cookie2" type="Cookie">Second cookie to swap.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed cookie to the left in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed cookie to the right in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="CookieArray">Returns the instance.</returns>
    return this;
};

CookieArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each cookie in the instance.</summary>
    ///<param name="delimiter" type="String" optional="true" default=",">The string to use to separate cookie string versions.</param>
    ///<returns type="String">Returns a string with each cookie string representation divided by the delimiter.</returns>
    return "";
};

function ListItemArray() {
    ///<summary>A specialized ObservableArray containing only ListItems.</summary>
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="Updating" type="Boolean">When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray.</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new ListItem();
};

ListItemArray.prototype.Owner = {};
ListItemArray.prototype.Type = "";
ListItemArray.prototype.OnChange = new Event();
ListItemArray.prototype.length = 0;
ListItemArray.prototype.Updating = false;

ListItemArray.prototype.Add = function (listItem) {
    ///<summary>Adds the list item to the end of instance.</summary>
    ///<param name="listItem" type="ListItem">ListItem to add to the instance.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
    return this;
};

ListItemArray.prototype.AddRange = function (array) {
    ///<summary>Adds the Array of list items to the end of the instance.</summary>
    ///<param name="array" type="Array">Array of list items to add to the end of instance.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};


ListItemArray.prototype.Clear = function () {
    ///<summary>Removes all objects from the instance.</summary>
    ///<returns type="ListItemArray">Returns the isntance.</returns>
    return this;
};

ListItemArray.prototype.Contains = function (listItem) {
    ///<summary>Determines if the list item is in the instance.</summary>
    ///<param name="object" type="ListItem">ListItem to search for.</param>
    ///<returns type="Boolean">Returns true if the list item is found in the instance.</returns>
    return true;
};

ListItemArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the instance.</summary>
    ///<returns type="Array">Returns a copy of the instance as a new ListItemArray.</returns>
    return new ListItemArray();
}

ListItemArray.prototype.Insert = function (index, listItem) {
    ///<summary>Inserts the list item into the instance at the given index.</summary>
    ///<param name="index" type="Number">Index to insert object at.</param>
    ///<param name="listItem" type="ListItem">ListItem to insert.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.Find = function (func) {
    ///<summary>Finds the first list item that returns true for the function provided. Function is given each list item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a list item in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="ListItem">Returns the first list item for which func returns true for. If func never returns true, null is returned.</returns>
    return new ListItem();
};

ListItemArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all list items that return true for the function provided. Function is given each list item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting two arguments: a list item in the instance and an IterationEventArgs and returns true or false.</param>
    ///<returns type="Array">Returns an Array with all all list items for which func returns true for. If func never returns true, an empty Array is returned.</returns>
    var c = new ListItem();
    return [c, c, c, c, c];
};


ListItemArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each list item as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the list item as the first parameter.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};


ListItemArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each listItem, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" type="Function">Function taking the list item as the first parameter.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.IndexOf = function (listItem) {
    ///<summary>Returns the index of the first occurrence of the list item in the instance.</summary>
    ///<param name="listItem" type="ListItem">ListItem to check for.</param>
    ///<returns type="Number">Returns the index of the first occurance of the listItem. If the list item was not found, returns -1.</returns>
    return this;
};

ListItemArray.prototype.Move = function (listItem, index) {
    ///<summary>Moves the list item to the given index of the instance, shifting other list items to the left.</summary>
    ///<param name="listItem" type="ListItem">ListItem to move.</param>
    ///<param name="index" type="Number">Index to move the list item to.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.Remove = function (listItem) {
    ///<summary>Removes the all occurences of the list item from the instance.</summary>
    ///<param name="listItem" type="ListItem">ListItem to remove.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the list item from the instance at the given index.</summary>
    ///<param name="index" type="Number">Index of the list item to remove.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the Array of list items from the instance.</summary>
    ///<param name="array" type="Array">An Array of list items to be removed from the instance.</param>
    ///<returns type="Array">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.Swap = function (listItem1, listItem2) {
    ///<summary>Swaps the positions of the two list items in the instance.</summary>
    ///<param name="listItem1" type="ListItem">First list item to swap.</param>
    ///<param name="listItem2" type="ListItem">Second list item to swap.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed list item to the left in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed list item to the right in the instance.</summary>
    ///<param name="index" type="Number">Index to move.</param>
    ///<returns type="ListItemArray">Returns the instance.</returns>
    return this;
};

ListItemArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each list item in the instance.</summary>
    ///<param name="delimiter" type="String" optional="true" default=",">The string to use to separate list item string versions.</param>
    ///<returns type="String">Returns a string with each list item string representation divided by the delimiter.</returns>
    return "";
};


function OptionArray() {
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="length" type="Number">Number of objects in the array.</field>
    ///<field name="Updating" type="Boolean">&lt;Default: false&gt; When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new Option();
};

OptionArray.prototype.Owner = {};
OptionArray.prototype.Type = "";
OptionArray.prototype.OnChange = new Event();
OptionArray.prototype.length = 0;
OptionArray.prototype.Updating = false;


OptionArray.prototype.Add = function (option) {
    ///<summary>Adds the option to the array.</summary>
    ///<param name="option" type="Option">Option to add to the array.</param>
    return this;
};

OptionArray.prototype.AddRange = function (array) {
    ///<summary>Adds the array of options to the array.</summary>
    ///<param name="array" type="Array">Array of options to add to the array.</param>
    return this;
};


OptionArray.prototype.Clear = function () {
    ///<summary>Removes all options from the array.</summary>
    return this;
};

OptionArray.prototype.Contains = function (option) {
    ///<summary>Determines if the option is in the array.</summary>
    ///<param name="option" type="Option">Option to search for.</param>
    return true;
};

OptionArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the array.</summary>
    return new OptionArray();
}

OptionArray.prototype.Insert = function (index, option) {
    ///<summary>Inserts the option into the array at the given index.</summary>
    ///<param name="index" type="Number">Index to insert option at.</param>
    ///<param name="option" type="Option">Option to insert.</param>
    return this;
};

OptionArray.prototype.Find = function (func) {
    ///<summary>Finds the first option that returns true for the function provided. Function is given each option as the first parameter.</summary>
    ///<param name="func" type="Function">A callback function accepting one argument and returning true/false.</param>
    return new Option();
};

OptionArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all options that return true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting one argument and returning true or false.</param>
    var c = new Option();
    return [c, c, c, c, c];
};


OptionArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each item as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
    return this;
};


OptionArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each item, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
    return this;
};

OptionArray.prototype.IndexOf = function (option) {
    ///<summary>Returns the index of the first occurrence of the option if it exists, otherwise -1.</summary>
    ///<param name="object" type="Object">Option to check for.</param>
    return 0;
};

OptionArray.prototype.Move = function (option, index) {
    ///<summary>Moves the option to the given index.</summary>
    ///<param name="option" type="Option">Option to move.</param>
    ///<param name="index" type="Number">Index to move the object to.</param>
    return this;
};

OptionArray.prototype.Remove = function (option) {
    ///<summary>Removes the option from the array.</summary>
    ///<param name="option" type="Option">Option to remove.</param>
    return this;
};

OptionArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the option from the array at the given index.</summary>
    ///<param name="index" type="Number">Index of the option to remove.</param>
    return this;
};

OptionArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the array of options from the array.</summary>
    ///<param name="array" type="Array">An array of options to be removed from the array.</param>
    return this;
};

OptionArray.prototype.Swap = function (option1, option2) {
    ///<summary>Swaps the positions of the two options.</summary>
    ///<param name="option1" type="Option">First option to swap.</param>
    ///<param name="option2" type="Option">Second option to swap.</param>
    return this;
};

OptionArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed object to the left in the array.</summary>
    ///<param name="index" type="Number">Index to move</param>
    return this;
};

OptionArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed object to the right in the array.</summary>
    ///<param name="index" type="Number">Index to move</param>
    return this;
};

OptionArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each object in the array seperated by the delimiter</summary>
    ///<param name="delimiter" type="String">The string to use to separate objects' string versions.</param>
    return "";
}

function RadioButtonGroup() {
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="OnRemove" type="Event">(Event) Fired when an object is removed using Remove or RemoveAt.</field>
    ///<field name="OnClear" type="Event">(Event) Fired when Clear() is called.</field>
    ///<field name="OnUpdate" type="Event">(Event) Fired when EndUpdate() is called.</field>
    ///<field name="length" type="Number">Number of objects in the array.</field>
    ///<field name="Updating" type="Boolean">&lt;Default: false&gt; When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new RadioButton();
};

RadioButtonGroup.prototype.Owner = {};
RadioButtonGroup.prototype.Type = "";
RadioButtonGroup.prototype.OnChange = new Event();
RadioButtonGroup.prototype.length = 0;
RadioButtonGroup.prototype.Updating = false;
RadioButtonGroup.prototype.OnSelectionChanged = new Event();

RadioButtonGroup.prototype.Clear = function () {
    ///<summary>Clears the selected value of the radio button group.</summary>
    return this;
};

RadioButtonGroup.prototype.SelectedValue = function (value) {
    ///<summary>(Property Function)Gets or sets the radio button with the given value.</summary>
    ///<param name="value" type="String" >(Optional)The value of the radio button to select.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

RadioButtonGroup.prototype.Add = function (cell) {
    ///<summary>Adds the cell to the array.</summary>
    ///<param name="cell" type="RadioButton">RadioButton to add to the array.</param>
    return this;
};

RadioButtonGroup.prototype.AddRange = function (array) {
    ///<summary>Adds the array of cells to the array.</summary>
    ///<param name="array" type="Array">Array of cells to add to the array.</param>
    return this;
};


RadioButtonGroup.prototype.Clear = function () {
    ///<summary>Removes all cells from the array.</summary>
    return this;
};

RadioButtonGroup.prototype.Contains = function (cell) {
    ///<summary>Determines if the cell is in the array.</summary>
    ///<param name="cell" type="RadioButton">RadioButton to search for.</param>
    return true;
};

RadioButtonGroup.prototype.Copy = function () {
    ///<summary>Creates a copy of the array.</summary>
    return new RadioButtonGroup();
}

RadioButtonGroup.prototype.Insert = function (index, cell) {
    ///<summary>Inserts the cell into the array at the given index.</summary>
    ///<param name="index" type="Number">Index to insert cell at.</param>
    ///<param name="cell" type="RadioButton">RadioButton to insert.</param>
    return this;
};

RadioButtonGroup.prototype.Find = function (func) {
    ///<summary>Finds the first cell that returns true for the function provided. Function is given each cell as the first parameter.</summary>
    ///<param name="func" type="Function">A callback function accepting one argument and returning true/false.</param>
    return new RadioButton();
};

RadioButtonGroup.prototype.FindAll = function (func) {
    ///<summary>Finds the all cells that return true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting one argument and returning true or false.</param>
    var c = new RadioButton();
    return [c, c, c, c, c];
};


RadioButtonGroup.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each item as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
    return this;
};


RadioButtonGroup.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each item, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
    return this;
};

RadioButtonGroup.prototype.IndexOf = function (cell) {
    ///<summary>Returns the index of the first occurrence of the cell if it exists, otherwise -1.</summary>
    ///<param name="object" type="Object">RadioButton to check for.</param>
    return this;
};

RadioButtonGroup.prototype.Move = function (cell, index) {
    ///<summary>Moves the cell to the given index.</summary>
    ///<param name="cell" type="RadioButton">RadioButton to move.</param>
    ///<param name="index" type="Number">Index to move the object to.</param>
    return this;
};

RadioButtonGroup.prototype.Remove = function (cell) {
    ///<summary>Removes the cell from the array.</summary>
    ///<param name="cell" type="RadioButton">RadioButton to remove.</param>
    return this;
};

RadioButtonGroup.prototype.RemoveAt = function (index) {
    ///<summary>Removes the cell from the array at the given index.</summary>
    ///<param name="index" type="Number">Index of the cell to remove.</param>
    return this;
};

RadioButtonGroup.prototype.RemoveRange = function (array) {
    ///<summary>Removes the array of cells from the array.</summary>
    ///<param name="array" type="Array">An array of cells to be removed from the array.</param>
    return this;
};

RadioButtonGroup.prototype.Swap = function (cell1, cell2) {
    ///<summary>Swaps the positions of the two cells.</summary>
    ///<param name="cell1" type="RadioButton">First cell to swap.</param>
    ///<param name="cell2" type="RadioButton">Second cell to swap.</param>
    return this;
};

RadioButtonGroup.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed object to the left in the array.</summary>
    ///<param name="index" type="Number">Index to move</param>
    return this;
};

RadioButtonGroup.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed object to the right in the array.</summary>
    ///<param name="index" type="Number">Index to move</param>
    return this;
};

RadioButtonGroup.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each object in the array seperated by the delimiter</summary>
    ///<param name="delimiter" type="String">The string to use to separate objects' string versions.</param>
    return "";
}

function RowArray() {
    ///<field name="OnChange" type="Event">(Event) Fired when an object is added or removed.</field>
    ///<field name="OnRemove" type="Event">(Event) Fired when an object is removed using Remove or RemoveAt.</field>
    ///<field name="OnClear" type="Event">(Event) Fired when Clear() is called.</field>
    ///<field name="OnUpdate" type="Event">(Event) Fired when EndUpdate() is called.</field>
    ///<field name="length" type="Number">Number of objects in the array.</field>
    ///<field name="Updating" type="Boolean">When set to true, events do not fire for any modification.</field>
    ///<field name="Type" type="String">Returns Type.ObservableArray</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = new Row();
};

RowArray.prototype.Owner = {};
RowArray.prototype.Type = "";
RowArray.prototype.OnChange = new Event();
RowArray.prototype.length = 0;
RowArray.prototype.Updating = false;

RowArray.prototype.Add = function (row) {
    ///<summary>Adds the row to the array.</summary>
    ///<param name="row" type="Row">Row to add to the array.</param>
    return this;
};

RowArray.prototype.AddRange = function (array) {
    ///<summary>Adds the array of rows to the array.</summary>
    ///<param name="array" type="Array">Array of rows to add to the array.</param>
    return this;
};


RowArray.prototype.Clear = function () {
    ///<summary>Removes all rows from the array.</summary>
    return this;
};

RowArray.prototype.Contains = function (row) {
    ///<summary>Determines if the row is in the array.</summary>
    ///<param name="row" type="Row">Row to search for.</param>
    return true;
};

RowArray.prototype.Copy = function () {
    ///<summary>Creates a copy of the array.</summary>
    return new RowArray();
}

RowArray.prototype.Insert = function (index, row) {
    ///<summary>Inserts the row into the array at the given index.</summary>
    ///<param name="index" type="Number">Index to insert row at.</param>
    ///<param name="row" type="Row">Row to insert.</param>
    return this;
};

RowArray.prototype.Find = function (func) {
    ///<summary>Finds the first row that returns true for the function provided. Function is given each row as the first parameter.</summary>
    ///<param name="func" type="Function">A callback function accepting one argument and returning true/false.</param>
    return new Row();
};

RowArray.prototype.FindAll = function (func) {
    ///<summary>Finds the all rows that return true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting one argument and returning true or false.</param>
    var c = new Row();
    return [c, c, c, c, c];
};


RowArray.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each item as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
    return this;
};


RowArray.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each item, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
    return this;
};

RowArray.prototype.IndexOf = function (row) {
    ///<summary>Returns the index of the first occurrence of the row if it exists, otherwise -1.</summary>
    ///<param name="object" type="Object">Row to check for.</param>
    return 0;
};

RowArray.prototype.Move = function (row, index) {
    ///<summary>Moves the row to the given index.</summary>
    ///<param name="row" type="Row">Row to move.</param>
    ///<param name="index" type="Number">Index to move the object to.</param>
    return this;
};

RowArray.prototype.Remove = function (row) {
    ///<summary>Removes the row from the array.</summary>
    ///<param name="row" type="Row">Row to remove.</param>
    return this;
};

RowArray.prototype.RemoveAt = function (index) {
    ///<summary>Removes the row from the array at the given index.</summary>
    ///<param name="index" type="Number">Index of the row to remove.</param>
    return this;
};

RowArray.prototype.RemoveRange = function (array) {
    ///<summary>Removes the array of rows from the array.</summary>
    ///<param name="array" type="Array">An array of rows to be removed from the array.</param>
    return this;
};

RowArray.prototype.Swap = function (row1, row2) {
    ///<summary>Swaps the positions of the two rows.</summary>
    ///<param name="row1" type="Row">First row to swap.</param>
    ///<param name="row2" type="Row">Second row to swap.</param>
    return this;
};

RowArray.prototype.ShiftLeft = function (index) {
    ///<summary>Shifts the indexed object to the left in the array.</summary>
    ///<param name="index" type="Number">Index to move</param>
    return this;
};

RowArray.prototype.ShiftRight = function (index) {
    ///<summary>Shifts the indexed object to the right in the array.</summary>
    ///<param name="index" type="Number">Index to move</param>
    return this;
};

RowArray.prototype.ToString = function (delimiter) {
    ///<summary>Returns a string version of each object in the array seperated by the delimiter</summary>
    ///<param name="delimiter" type="String">The string to use to separate objects' string versions.</param>
    return "";
}

CellArray.prototype.BeginUpdate =
ClassArray.prototype.BeginUpdate =
CookieArray.prototype.BeginUpdate =
ListItemArray.prototype.BeginUpdate =
ObservableArray.prototype.BeginUpdate =
OptionArray.prototype.BeginUpdate =
RadioButtonGroup.prototype.BeginUpdate =
RowArray.prototype.BeginUpdate = function () {
    ///<summary>Begins an update to the array where events are not thrown.</summary>
    return this;
}

CellArray.prototype.EndUpdate =
ClassArray.prototype.EndUpdate =
CookieArray.prototype.EndUpdate =
ListItemArray.prototype.EndUpdate =
ObservableArray.prototype.EndUpdate =
OptionArray.prototype.EndUpdate =
RadioButtonGroup.prototype.EndUpdate =
RowArray.prototype.EndUpdate = function () {
    ///<summary>ends an update to the array where the OnUpdate event is fired.</summary<
    return this;
};


function Dictionary() {
    ///<summary>Creates an object that keeps a list of key value pairs.</summary>
}

// Dictionary
Dictionary.FromObject = function (object) {
    ///<summary>Creates a dictionary from the object using its properties as keys.</summary>
    ///<param name="object" type="Object">Object to convert to a dictionary.</param>
    return new Dictionary();
};

Dictionary.FromString = function (string, itemDelimeter, kvDelimeter) {
    ///<summary>Creates a dictionary from the string given the item and key delimiters.</summary>
    ///<param name="string" type="String">The string to operate on.</param>
    ///<param name="itemDelimter" type="String">The string that separates each item.</param>
    ///<param name="kvDelimter" type="String">The string that separates each key value pair in each item.</param>
    return new Dictionary();
};

Dictionary.prototype.Type = "";

Dictionary.prototype.Add = function (key, value) {
    ///<summary>Adds a key/value pair to the dictionary.</summary>
    ///<param name="key" type="String/Number">String or number to represent the value.</param>
    ///<param name="value" type="Object">Object that the key represents.</param>

    this[key] = value;
};

Dictionary.prototype.Clear = function () {
    ///<summary>Clears the dictionary of all key/value pairs.</summary>
};


Dictionary.prototype.ContainsKey = function (key) {
    ///<summary>Determines if the key provided exists in the dictionary.</summary>
    ///<param name="key" type="String/Number">The key to search for.</param>

    return true;
};

Dictionary.prototype.Copy = function () {
    ///<summary>Creates a copy of the dictionary.</summary>

    return new Dictionary();
}

Dictionary.prototype.ContainsValue = function (value) {
    ///<summary>Determines if the value provided exists in the dictionary.</summary>
    ///<param name="key" type="Object">The value to search for.</param>

    return true;
};

Dictionary.prototype.Count = function () {
    return 0;
};

Dictionary.prototype.ForEach = function (_func) {
    ///<summary>Loops through the dictionary that calls the provided the function with each key/value pair in the dictionary being the caller or "this" of type KeyValuePair. The
    ///function is provided a single parameter of IterationEventArgs.</summary>
    ///<param name="func" optional="false" type="Function">Function accepting one argument.</param>
};

Dictionary.prototype.Keys = function () {
    ///<summary>Returns an array of all the values in the dictionary.</summary>
    return [];
};
Dictionary.prototype.GetValue = function (key) {
    ///<summary>Returns the value associated with the given key.</summary>
    ///<param name="key" type="String/Number">The key to obtain the value of.</param>

    return this[key];
};


Dictionary.prototype.Remove = function (key) {
    ///<summary>Removes the key/value pair represented by the key.</summary>
    ///<param name="key" type="Object" optional="false" />
};

Dictionary.prototype.SetValue = function (key, value) {
    ///<summary>Adds or sets the value provided for the key.</summary>
    ///<param name="key" type="String/Number">The key to represent the value.</param>
    ///<param name="value" type="Object">The object the key will represent.</param>

};

Dictionary.prototype.ToString = function (itemDelimeter, valueDelimeter) {
    ///<summary>Creates a string that separates each entry by the itemDelimter and the keys and values are separated by the valueDelimeter.</summary>
    ///<param name="itemDelimeter" type="String">The string to separate items by.</param>
    ///<param name="valueDelimeter" type="String">The string to separate keys and value by.</param>
    return "";
}


Dictionary.prototype.Values = function () {
    ///<summary>Returns an array of all the values in the dictionary.</summary>
    return [];
};

function KeyValuePair() {
    ///<summary>Represents a key value pair of a Dictionary.</summary>
    ///<field name="Key" type="String">Key portion of the pair.</field>
    ///<field name="Value" type="Object">Value portion of the pair.</field>
}

KeyValuePair.prototype.Key = "";
KeyValuePair.prototype.Value = {};

function Event(owner) {
    ///<summary>Creates a list of function and delegate calls to call once the event is fired.</summary>
    ///<param name="owner" type="Object">Owner of the event.</param>
    ///<field name="length" type="Number">Number of attachments to the event.</field>
    ///<field name="Owner" type="Object">Owner of the Event.</field>
    ///<field name="Type" type="String">Returns Type.Event.</field>
    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = function () { };
}

Event.prototype.Owner = {};
Event.prototype.Type = "";
Event.prototype.length = 0;

Event.prototype.Add = function (func) {
    ///<summary>Adds the event handler to the event.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to add to the event.</param>
    return 0;
};

Event.prototype.AddRange = function (event) {
    ///<summary>Adds the array of event handlers to the event.</summary>
    ///<param name="event" type="Array">Array of event handlers to add to the event.</param>
    return 0;
};


Event.prototype.Clear = function () {
    ///<summary>Removes all event handlers from the event.</summary>
};

Event.prototype.Contains = function (func) {
    ///<summary>Determines if the event handler is in the event.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to search for.</param>
    return true;
};


Event.prototype.Insert = function (index, func) {
    ///<summary>Inserts the event handler into the event at the given index.</summary>
    ///<param name="index" type="Number">Index to insert func at.</param>
    ///<param name="func" type="Function/Delgate">Function or Delegate to insert.</param>
};

Event.prototype.Find = function (func) {
    ///<summary>Finds the first event handler that returns true for the function provided. The function is given each event handler as the first parameter.</summary>
    ///<param name="func" type="Function">A callback function accepting one argument and returning true/false.</param>
    return new Function();
};

Event.prototype.FindAll = function (func) {
    ///<summary>Finds the all event handlers that return true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting one argument and returning true or false.</param>
    var c = function () { };
    return [c, c, c, c, c];
};


Event.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each item as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
};


Event.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each item, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
};

Event.prototype.IndexOf = function (func) {
    ///<summary>Returns the index of the first occurrence of the event handler if it exists, otherwise -1.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to check for.</param>
};

Event.prototype.Move = function (func, index) {
    ///<summary>Moves the event handler to the given index.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to move.</param>
    ///<param name="index" type="Number">Index to move the event handler to.</param>
};

Event.prototype.Remove = function (func) {
    ///<summary>Removes the event handler from the event.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to remove.</param>
};

Event.prototype.RemoveAt = function (index) {
    ///<summary>Removes the event handler from the event at the given index.</summary>
    ///<param name="index" type="Number">Index of the event handler to remove.</param>
};

Event.prototype.RemoveRange = function (array) {
    ///<summary>Removes the array of funcs from the event.</summary>
    ///<param name="event" type="Array">An event of event handlers to be removed from the event.</param>
};

Event.prototype.Swap = function (func1, func2) {
    ///<summary>Swaps the positions of the two funcs.</summary>
    ///<param name="func1" type="Function/Delegate">First event handler to swap.</param>
    ///<param name="func2" type="Function/Delegate">Second event handler to swap.</param>
};

Event.prototype.Fire = function (eventArgs) {
    ///<summary>Signifies an even occurred and calls all functions and delegates.</summary>
    ///<param name="eventArgs" type="EventArgs">EventArgs object provided with information about the event.</field>
};

function UserEvent(owner, type) {
    ///<field name="Count" type="Number">Number of attachments to the event.</field>
    ///<field name="Owner" type="Object">Owner of the Event.</field>
    ///<field name="Type" type="String">Returns Type.UserEvent.</field>
    ///<field name="EventType" type="String">Returns the type of event being fired.</field>

    this[0] =
    this[1] =
    this[2] =
    this[3] =
    this[4] =
    this[5] =
    this[6] =
    this[7] =
    this[8] =
    this[9] = function () { };
}

UserEvent.prototype.Owner = {};
UserEvent.prototype.Type = "";
UserEvent.prototype.OnChange = new Event();
UserEvent.prototype.length = 0;
UserEvent.prototype.Updating = false;

UserEvent.prototype.Add = function (func) {
    ///<summary>Adds the event handler to the event.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to add to the event.</param>
    return 0;
};

UserEvent.prototype.AddRange = function (event) {
    ///<summary>Adds the array of event handlers to the event.</summary>
    ///<param name="event" type="Array">Array of event handlers to add to the event.</param>
    return 0;
};

UserEvent.prototype.Clear = function () {
    ///<summary>Removes all event handlers from the event.</summary>
};

UserEvent.prototype.Contains = function (func) {
    ///<summary>Determines if the event handler is in the event.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to search for.</param>
    return true;
};


UserEvent.prototype.Insert = function (index, func) {
    ///<summary>Inserts the event handler into the event at the given index.</summary>
    ///<param name="index" type="Number">Index to insert func at.</param>
    ///<param name="func" type="Function/Delgate">Function or Delegate to insert.</param>
};

UserEvent.prototype.Find = function (func) {
    ///<summary>Finds the first event handler that returns true for the function provided. The function is given each event handler as the first parameter.</summary>
    ///<param name="func" type="Function">A callback function accepting one argument and returning true/false.</param>
    return new Function();
};

UserEvent.prototype.FindAll = function (func) {
    ///<summary>Finds the all event handlers that return true for the function provided. Function is given each item as the first parameter.</summary>
    ///<param name="func" type="Function">A function accepting one argument and returning true or false.</param>
    var c = function () { };
    return [c, c, c, c, c];
};


UserEvent.prototype.ForEach = function (func) {
    ///<summary>Calls the function giving each item as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
};


UserEvent.prototype.ForEachReversed = function (func) {
    ///<summary>Calls the function giving each item, in reverse order, as the first parameter to the function.</summary>
    ///<param name="func" optional="false" type="Function">Function taking the item as the first parameter.</param>
};

UserEvent.prototype.IndexOf = function (func) {
    ///<summary>Returns the index of the first occurrence of the event handler if it exists, otherwise -1.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to check for.</param>
};

UserEvent.prototype.Move = function (func, index) {
    ///<summary>Moves the event handler to the given index.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to move.</param>
    ///<param name="index" type="Number">Index to move the event handler to.</param>
};

UserEvent.prototype.Remove = function (func) {
    ///<summary>Removes the event handler from the event.</summary>
    ///<param name="func" type="Function/Delegate">Function or Delegate to remove.</param>
};

UserEvent.prototype.RemoveAt = function (index) {
    ///<summary>Removes the event handler from the event at the given index.</summary>
    ///<param name="index" type="Number">Index of the event handler to remove.</param>
};

UserEvent.prototype.RemoveRange = function (array) {
    ///<summary>Removes the array of funcs from the event.</summary>
    ///<param name="event" type="Array">An event of event handlers to be removed from the event.</param>
};

UserEvent.prototype.Swap = function (func1, func2) {
    ///<summary>Swaps the positions of the two funcs.</summary>
    ///<param name="func1" type="Function/Delegate">First event handler to swap.</param>
    ///<param name="func2" type="Function/Delegate">Second event handler to swap.</param>
};

UserEvent.prototype.Fire = function (eventArgs) {
    ///<summary>Signifies an even occurred and calls all functions and delegates.</summary>
    ///<param name="eventArgs" type="UserEventArgs">UserEventArgs object provided with information about the event.</field>
};


UserEvent.prototype.Fire = function (event) {
    ///<summary>Signifies an even occurred and calls all functions and delegates.</summary>
    ///<param name="event" type="DOMEvent">Original called event. Use FauxEventArgs if calling directly.</param>
};

function EventArgs(sender, data) {
    ///<summary>Contains generic information about an event.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
    ///<field name="Data" type="Object">Any information to be sent to the handlers.</field>

}

EventArgs.prototype.Sender = {};
EventArgs.prototype.CancelEvent = false;
EventArgs.prototype.Type = "";
EventArgs.prototype.Data = {};

function UserEventArgs(event, sender) {
    ///<summary>Contains generic information about a user event.</summary>
    ///<param name="event" type="DOMEvent">Original event object.</param>
    ///<param name="sender" type="Element">Sender of the user event.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="EventType" type="String">Type of event fired.</field>
    ///<field name="Handled" type="Boolean">If set to true, the default handling of the event is canceled.</field>
    ///<field name="RawEvent" type="DOMEvent">Raw dom event object passed with user events.</field>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
}

UserEventArgs.prototype.Handled = false;
UserEventArgs.prototype.Sender = {};
UserEventArgs.prototype.RawEvent = {};
UserEventArgs.prototype.CancelEvent = false;
UserEventArgs.prototype.EventType = "";
UserEventArgs.prototype.Type = "";

function ExceptionEventArgs(message, u, line) {
    ///<summary>Contains information about an exception event.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="Message" type="String">Exception message.</field>
    ///<field name="LineNumber" type="Number">Line number of the exception thrown.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
}

ExceptionEventArgs.prototype.CancelEvent = false;
ExceptionEventArgs.prototype.Type = "";
ExceptionEventArgs.prototype.Message = "";
ExceptionEventArgs.prototype.LineNumber = 1;

function ArrayEventArgs(obj, type, index, sender) {
    ///<summary>Contains information about a array modification event.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="Index" type="Number">Index of the object modifcation.</field>
    ///<field name="ModificationType" type="ModificationType">Indicates the type of modification: Add, Remove or Clear.</field>
    ///<field name="Objects" type="Array">Objects affected by the array modification.</field>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
}

ArrayEventArgs.prototype.CancelEvent = false;
ArrayEventArgs.prototype.Sender = {};
ArrayEventArgs.prototype.Type = Type.EventArgs;
ArrayEventArgs.prototype.Index = 1;
ArrayEventArgs.prototype.ModificationType = ModificationType.Add;
ArrayEventArgs.prototype.Objects = [{}, {}, {}, {}, {}, {}, {}, {}];

function IterationEventArgs(obj, index, sender) {
    ///<summary>Contains information about a array iteration event from calling ForEach or ForEachReversed.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, ForEach loop stops.</field>
    ///<field name="Index" type="Number">Current index of the iteration.</field>
    ///<field name="Object" type="Object">Current object of the array.</field>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="Navigate" type="Number">Used to control looping. Changing this will affect the next iteration. A postive number means skipping the number of elements. A negative number means going back to already touched elements. After each iteration, Navigate is set back to 0.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
}

IterationEventArgs.prototype.CancelEvent = false;
IterationEventArgs.prototype.Sender = {};
IterationEventArgs.prototype.Type = Type.EventArgs;
IterationEventArgs.prototype.Object = {};
IterationEventArgs.prototype.Index = 1;
IterationEventArgs.prototype.Navigate = 1;

function KeyEventArgs(event, sender) {
    ///<summary>Contains generic information about a keydown or keyup user event.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="EventType" type="String"></field>
    ///<field name="Handled" type="Boolean">If set to true, the default handling of the event is canceled.</field>
    ///<field name="RawEvent" type="DOMEvent">Raw dom event object passed with user events.</field>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
    ///<field name="Character" type="String">The character produced from the key press.</field>
    ///<field name="Key" type="Keys">Value of the key code pressed.</field>
    ///<field name="Modifiers" type="Modifiers">Contains a flag of Modifiers type that are held down.</field>
}

KeyEventArgs.prototype.Sender = {};
KeyEventArgs.prototype.RawEvent = {};
KeyEventArgs.prototype.CancelEvent = false;
KeyEventArgs.prototype.EventType = "";
KeyEventArgs.prototype.Type = Type.EventArgs;
KeyEventArgs.prototype.Character = '';
KeyEventArgs.prototype.Key = Keys.A;
KeyEventArgs.prototype.Handled = false;
KeyEventArgs.prototype.Modifiers = Modifiers.ShiftKey;

function MouseWheelEventArgs(event, sender) {
    ///<summary>Contains generic information about a mouse wheel user event.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="EventType" type="String"></field>
    ///<field name="Handled" type="Boolean">If set to true, the default handling of the event is canceled.</field>
    ///<field name="RawEvent" type="DOMEvent">Raw dom event object passed with user events.</field>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
    ///<field name="Clicks" type="Number">Number of clicks the wheel was turned. A negative click is a wheel push forward (up), a postive click is a wheel push back (down).</field>
}

MouseWheelEventArgs.prototype.Handled = false;
MouseWheelEventArgs.prototype.Sender = {};
MouseWheelEventArgs.prototype.RawEvent = {};
MouseWheelEventArgs.prototype.CancelEvent = false;
MouseWheelEventArgs.prototype.EventType = "";
MouseWheelEventArgs.prototype.Type = Type.EventArgs;
MouseWheelEventArgs.prototype.Clicks = 0;

function ScrollEventArgs(event, sender) {
    ///<summary>Contains generic information about a scrolling user event.</summary>
    ///<param name="sender" type="Object">The object sending the event.</param>
    ///<param name="data" type="Object">(Optional)Any data to send to the handlers.</param>
    ///<field name="CancelEvent" type="Boolean">If set to true, no other handlers will be executed.</field>
    ///<field name="EventType" type="String"></field>
    ///<field name="Handled" type="Boolean">If set to true, the default handling of the event is canceled.</field>
    ///<field name="RawEvent" type="DOMEvent">Raw dom event object passed with user events.</field>
    ///<field name="Sender" type="Object">The object that sent the event.</field>
    ///<field name="Type" type="String">Returns Type.EventArgs</field>
    ///<field name="HScrollPosition" type="Number">Current horizontal scroll position.</field>
    ///<field name="VScrollPosition" type="Number">Current vertical scroll position.</field>
}

ScrollEventArgs.prototype.Handled = false;
ScrollEventArgs.prototype.Sender = {};
ScrollEventArgs.prototype.RawEvent = {};
ScrollEventArgs.prototype.CancelEvent = false;
ScrollEventArgs.prototype.EventType = "";
ScrollEventArgs.prototype.Type = Type.EventArgs;
ScrollEventArgs.prototype.HScrollPosition = 0;
ScrollEventArgs.prototype.VScrollPosition = 0;


// DateTime

function DateTime(yearDateString, month, day) {
    ///<summary>Represents a date and time.</summary>
    ///<param name="yearDateString" type="Number/Date/String" >As a number, treated as the year. As a date, the DateTime wraps the native Date object. As a string, the date is pulled from the string.</param>
    ///<param name="month" type="Number">(Optional) Month portion of the date.</param>
    ///<param name="day" type="Number">(Optional) Day portion of the date.</param>
    ///<field name="Object" type="date">The native Date object representation.</field>
    ///<field name="Type" type="String">Returns Type.DateTime</field>
}

DateTime.prototype.Type = "";

DateTime.Now = function () {
    ///<summary>Returns the current date and time.</summary>

    return new DateTime();
};

DateTime.prototype.Add = function (timeSpan) {
    ///<summary>Returns a copy of the DateTime with the time span added to it.</summary>
    ///<param name="timeSpan" type="TimeSpan">Amount of time to add to the DateTime.</param>
    return new DateTime();
};

DateTime.Compare = function (dateTime1, dateTime2) {
    ///<summary>Compares two dates and returns: dateTime1 &gt; dateTime2: 1, dateTime1 == dateTime2: 0, dateTime1 &lt; dateTime2: -1.</summary>
    ///<param name="dateTime1" type="DateTime">First DateTime to compare.</param>
    ///<param name="dateTime2" type="DateTime">Second DateTime to compare.</param>
    return 0;
}

DateTime.prototype.Compare = function (dateTime) {
    ///<summary>Compares to the dateTimes and returns: this &gt; dateTime: 1, this == dateTime: 0, this &lt; dateTime: -1.</summary>
    ///<param name="dateTime" type="DateTime">DateTime to compare.</param>
    return 0;
}

DateTime.prototype.Date = function (value) {
    ///<summary>(Property Function) Gets or sets the date portion of the DateTime.</summary>
    ///<param name="value" type="Number">(Optional)The date portion of the DateTime.</param>
    if (value === undefined) { return 0; }
    return this;
};

DateTime.prototype.DayOfWeek = function () {
    ///<summary>Gets the day of week portion of the date.</summary>

    return DateTime.Days.Sunday;
};

DateTime.prototype.Hour = function (value) {
    ///<summary>(Property Function) Gets or sets the hour portion of the DateTime.</summary>
    ///<param name="value" type="Number">(Optional)The hour portion of the DateTime.</param>
    if (value === undefined) { return 0; }
    return this;
};

DateTime.prototype.GetTime = function () {
    ///<summary>Returns the time portion of the DateTime as a TimeSpan.</summary>
    return new TimeSpan();
};

DateTime.prototype.Minute = function (value) {
    ///<summary>(Property Function)Gets or sets the minute portion of the DateTime.</summary>
    ///<param name="value" type="Number">(Optional)The minute portion of the DateTime.</param>
    if (value === undefined) { return 0; }
    return this;
};

DateTime.prototype.Month = function (value) {
    ///<summary>(Property Function)Gets or sets the month portion of the DateTime.</summary>
    ///<param name="value" type="Number">(Optional)The month portion of the DateTime.</param>
    if (value === undefined) { return 0; }
    return this;
};

DateTime.prototype.Second = function (value) {
    ///<summary>(Property Function)Gets or sets the second portion of the date.</summary>
    ///<param name="value" type="Number">(Optional)The second portion of the DateTime.</param>
    if (value === undefined) { return 0; }
    return this;
};

DateTime.prototype.Subtract = function (timespan) {
    ///<summary>Returns a copy of the DateTime with the time span subtracted from it.</summary>
    ///<param name="timeSpan" type="TimeSpan">Amount of time to subtract from the DateTime.</param>
    return new DateTime();
};

DateTime.prototype.Ticks = function (value) {
    ///<summary>(Property Function)Gets or sets the numerical value of the DateTime.</summary>
    ///<param name="value" type="Number">(Optional)Numerical value of the DateTime.</param>
    if (value === undefined) { return 0; }
    return this;
};


DateTime.prototype.ToGMTString = function () {
    ///<summary>Gets the GMT string representation of the date.</summary>
    return "";
};

DateTime.Null = new DateTime(1, 1, 1900);

DateTime.prototype.ToString = function (withTime) {
    ///<summary>Returns a string representation of the DateTime.</summary>
    ///<param name="withTime" type="Boolean">&lt;Optional/Default: false&gt;When true, the time portion is included in the string.</param>
    return "";
}

Date.prototype.Equals =
DateTime.prototype.Equals = function (dateTime) {
    ///<summary>Determines if this is equal to the dateTime.</summary>
    ///<param name="dateTime" type="DateTime">The DateTime to compare this to.</param>
    return true;
}

Date.Compare = function (date1, date2) {
    ///<summary>Compares two dates and returns: date1 &gt; date2: 1, date1 == date2: 0, date1 &lt; date2: -1.</summary>
    ///<param name="date1" type="Date">First Date to compare.</param>
    ///<param name="date2" type="Date">Second Date to compare.</param>
    return 0;
}

Date.prototype.Compare = function (date) {
    ///<summary>Compares to the dates and returns: this &gt; date: 1, this == date: 0, this &lt; date: -1.</summary>
    ///<param name="date" type="Date">Date to compare.</param>
    return 0;
}

Date.prototype.ToString = function (withTime) {
    ///<summary>Returns a string representation of the Date.</summary>
    ///<param name="withTime" type="Boolean">&lt;Optional/Default: false&gt;When true, the time portion is included in the string.</param>
    return "";
}

DateTime.prototype.Year = function (value) {
    ///<summary>(Property Function)Gets or sets the year portion of the DateTime.</summary>
    ///<param name="value" type="Number">(Optional)The year portion of the DateTime.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

DateTime.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the Object portion of the DateTime.</summary>
    ///<param name="value" type="Date">(Optional)The Object portion of the DateTime.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : new Date(); }
    return this;
};

DateTime.Months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
};

DateTime.Months.GetName = function (value) {
    ///<summary>Returns the name of the given month indexed by 1 (1 = January).</summary>
    ///<param name="value" type="Number">The 1 base indexed value of the month.</param>
    return "";
};

DateTime.Months.GetDays = function (month, year) {
    ///<summary>Returns the number of days in a month. Year is required for February.</summary>
    ///<param name="month" type="Number">The month to get the number of days of.</param>
    ///<param name="year" type="Number">(Optional) Required for February to determine leap years.</param>
    return 0;
};

DateTime.Days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
};

DateTime.Days.GetName = function (value) {
    ///<summary>Returns the name of the given day indexed by 0 (0 = Sunday).</summary>
    ///<param name="value" type="Number" >The day to get the name of.</param>
    return "";
}

// TimeSpan
function TimeSpan(hours, minutes, seconds, milliseconds) {
    ///<summary>Represents a portion of time.</summary>
    ///<param name="hours" type="Number">If hours is the only provided parameter, this is treated as milliseconds, otherwise the hours portion of the TimeSpan.</param>
    ///<param name="minutes" type="Number">&lt;Optional/Default: 0&gt;The minutes portion of the Timespan.</param>
    ///<param name="seconds" type="Number">&lt;Optional/Default: 0&gt;The seconds portion of the Timespan.</param>
    ///<param name="milliseconds" type="Number">&lt;Optional/Default: 0&gt;The millliseconds portion of the Timespan.</param>
    ///<field name="Days" type="Number">The days portion of the TimeSpan.</field>
    ///<field name="Hours" type="Number">The hours portion of the TimeSpan.</field>
    ///<field name="Milliseconds" type="Number">The milliseconds portion of the TimeSpan.</field>
    ///<field name="Minutes" type="Number">The minutes portion of the TimeSpan.</field>
    ///<field name="Seconds" type="Number">The seconds portion of the TimeSpan.</field>
    ///<field name="Type" type="Number">Returns Type.TimeSpan</field>
}

TimeSpan.prototype.Days = 0;
TimeSpan.prototype.Hours = 0;
TimeSpan.prototype.Milliseconds = 0;
TimeSpan.prototype.Minutes = 0;
TimeSpan.prototype.Seconds = 0;
TimeSpan.prototype.Type = Type.TimeSpan;

TimeSpan.FromDays = function (days) {
    ///<summary>Creates a time span from the provided days.</summary>
    ///<param name="days" type="Number">Number of days in the TimeSpan.</param>
    return new TimeSpan();
};

TimeSpan.FromHours = function (hours) {
    ///<summary>Creates a time span from the provided hours.</summary>
    ///<param name="hours" type="Number">Number of hours in the TimeSpan.</param>
    return new TimeSpan();
};

TimeSpan.FromMilliseconds = function (milliseconds) {
    ///<summary>Creates a time span from the provided milliseconds.</summary>
    ///<param name="days" type="Number">Number of milliseconds in the TimeSpan.</param>
    return new TimeSpan();
};

TimeSpan.FromMinutes = function (minutes) {
    ///<summary>Creates a time span from the provided minutes.</summary>
    ///<param name="days" type="Number">Number of minutes in the TimeSpan.</param>
    return new TimeSpan();
};

TimeSpan.FromSeconds = function (seconds) {
    ///<summary>Creates a time span from the provided seconds.</summary>
    ///<param name="days" type="Number">Number of seconds in the TimeSpan.</param>
    return new TimeSpan();
};

TimeSpan.prototype.Add = function (hoursTimeSpan, minutes, seconds, milliseconds) {
    ///<summary>Returns a copy of the TimeSpan with the added values.</summary>
    ///<param name="hoursTimeSpan" type="Number/Timespan">If hoursTimesSpan is the only provided parameter, this is treated as a TimeSpan, otherwise the hours portion of the TimeSpan.</param>
    ///<param name="minutes" type="Number">&lt;Optional/Default: 0&gt;The minutes portion of the Timespan.</param>
    ///<param name="seconds" type="Number">&lt;Optional/Default: 0&gt;The seconds portion of the Timespan.</param>
    ///<param name="milliseconds" type="Number">&lt;Optional/Default: 0&gt;The millliseconds portion of the Timespan.</param>

    return new TimeSpan();
};

TimeSpan.prototype.Subtract = function (hoursTimeSpan, minutes, seconds, milliseconds) {
    ///<summary>Returns a copy of the TimeSpan with the added values.</summary>
    ///<param name="hoursTimeSpan" type="Number/Timespan">If hoursTimesSpan is the only provided parameter, this is treated as a TimeSpan, otherwise the hours portion of the TimeSpan.</param>
    ///<param name="minutes" type="Number">&lt;Optional/Default: 0&gt;The minutes portion of the Timespan.</param>
    ///<param name="seconds" type="Number">&lt;Optional/Default: 0&gt;The seconds portion of the Timespan.</param>
    ///<param name="milliseconds" type="Number">&lt;Optional/Default: 0&gt;The millliseconds portion of the Timespan.</param>

    return new TimeSpan();
};

TimeSpan.prototype.ToMilliseconds = function () {
    ///<summary>Returns the total amount of milliseconds represented by the TimeSpan.</summary>
    return 0;
};

TimeSpan.prototype.ToString = function () {
    ///<summary>Returns a string representation of the TimeSpan.</summary>
    return "";
};

// Timer
function Timer(millisecondsTimeSpan, loop) {
    ///<summary>Creates a timer that fires a trigger after each period.</summary>
    ///<param name="millisecondsTimeSpan" type="Number/TimeSpan">If a number, treated as total milliseconds that each period lasts. If a TimeSpan, the amount of time for a period to last.</param>
    ///<param name="loop" type="Boolean">&lt;Optional/Default:false&gt;If true, once the period happens, the timer will execute again.</param>
    ///<field name="Loop" type="Boolean">&lt;Default: false&gt;If set to true, the timer will continue to run. If set to false, the timer will stop running after the next trigger.</field>
    ///<field name="OnTrigger" type="Event">(Event)Event that is called each time a the period passes.</field>
    ///<field name="Running" type="Boolean">Tells if the timer is currently active.</field>
    ///<field name="Tag" type="Object">Any object for the timer to hold.</field>
    ///<field name="Type" type="String">Returns Type.Timer.</field>
}

Timer.prototype.OnTrigger = new Event();
Timer.prototype.Running = false;
Timer.prototype.Tag = {};
Timer.prototype.Type = "";

Timer.prototype.Start = function () {
    ///<summary>Starts the timer.</summary>
};

Timer.prototype.Stop = function () {
    ///<summary>Stops the timer.</summary>
};

Timer.prototype.Reset = function () {
    ///<summary>Resets the timer.</summary>
};


// NinJa

var NinJa = new function () {
    ///<field name="Mapper" type="Dictionary">A mapping of elements to wrapper objects.</field>
    ///<field name="DeobfuscateIds" type="Boolean">&lt;Default: true&gt;When set to true, unobfuscated references to ASP.NET ids are created.</field>
    ///<field name="Event" type="UserEventArgs">Current event args that is being handled.</field>
    ///<field name="Initiated" type="Boolean">Tells whether the NinJa object has been initiated.</field>
    ///<field name="ObfuscationCharacter" type="String">&lt;Default: '_'&gt;The character used to obfuscate ids in ASP.NET controls.</field>
    ///<field name="OnInitialization" type="Event">Event fired when NinJa.Initialize() is called.</field>
    ///<field name="OnExceptionThrown" type="Event">Event fired when exceptions are not handled.</field>
    ///<field name="Version" type="String">Current version of the script.</field>

    this.Mapper = new Dictionary;
    this.DeobfuscateIds = true;
    this.Event = new UserEventArgs();
    this.Initiated = false;
    this.ObfuscationCharacter = '_';
    this.OnInitialization = new Event();
    this.OnExceptionThrown = new Event();
    this.Version = "0.98.2";
}


NinJa.EvalBind = function (property, object) {
    ///<summary>Runs a reverse binding on the object with the given binding string.</summary>
    ///<param name="property" type="String">Binding string to use.</param>
    ///<param name="object" type="Object">Object to pull values from.</param>
    return {};
}

NinJa.ForEach = function (object, func) {
    ///<summary>Loops through all the indexed elements of the object. Object must have a length property.</summary>
    ///<param name="object" type="Object">Any object with a length property.</param>
    ///<param name="func" type="Function">Function to call for each element. 'this' refers to the current element.</param>
    return [];
}

NinJa.Extend = function (object, type) {
    ///<summary>Makes the object inherit the functions in the given type.</summary>
    ///<field name="object" type="Object">The object to extend.</param>
    ///<field name="type" type="Constructor">The constructor of the object type to extend.</param>

    if (object) {
        for (var n in type.prototype) {
            if (n) {
                object[n] = type.prototype[n];
            }
        }
    }
}

// Mouse

var Mouse = new function () {
    ///<field name="X" type="Number">Current x position of the mouse relative to the page.</field>
    ///<field name="Y" type="Number">Current y position of the mouse relative to the page.</field>
    ///<field name="ClientX" type="Number">Current x position of the mouse relative to the client window.</field>
    ///<field name="ClientY" type="Number">Current y position of the mouse relative to the client window.</field>
    ///<field name="XChange" type="Number">Amount of x position change between the mouse movement.</field>
    ///<field name="YChange" type="Number">Amount of y position change between the mouse movement.</field>
    ///<field name="OnMove" type="Number">(Event)Event fired on mouse movement.</field>
    ///<field name="OnMouseDown" type="Number">(Event)Event fired when the left mouse button is pressed.</field>
    ///<field name="OnMouseUp" type="Number">(Event)Event fired when the left mouse button is released.</field>

    this.X = 0;
    this.Y = 0;
    this.ClientX = 0;
    this.ClientY = 0;
    this.XChange = 0;
    this.YChange = 0;
    this.OnMove = new Event();
    this.OnMouseUp = new Event();
    this.OnMouseDown = new Event();
};

var Keyboard = new function () {
    ///<field name="ShiftKey" type="Boolean">Determines if a shift key is being held down.</field>
    ///<field name="ControlKey" type="Boolean">Determines if a control key is being held down.</field>
    ///<field name="AltKey" type="Boolean">Determines if a alt key is being held down.</field>
    ///<field name="CapsLock" type="Boolean">Determines if the capslock is currently on.</field>

    this.ShiftKey = false;
    this.ControlKey = false;
    this.AltKey = false;
    this.CapsLock = false;
};


// Client
var Client = new function () {
    ///<field name="Cookies" type="CookieArray">The cookies provided from the browser.</field>
    ///<field name="Browser" type="Browser">Information about the client browser.</field>
    ///<field name="OnResize" type="Event">(Event)Fired when the client window is resized.</field>
    ///<field name="Storage" type="StorageManager">Provides local storage to the client.</field>
    this.Cookies = new CookieArray();
    this.Browser = new Browser();
    this.OnResize = new Event(this);
    this.Storage = new StorageManager();
};

function StorageManager() {
    ///<summary>Provides methods to store and retrieve data locally to the client.</summary>
    ///<field name="Session" type="Storage">Provides storage for the current session.</field>
    ///<field name="Local" type="Storage">Provides storage for the domain.</field>
    this.Local = new Storage();
    this.Session = new Storage();
}

function Storage() {
    ///<summary>Handles client side storage.</summary>
}

Storage.prototype.SetItem = function (key, value) {
    ///<summary>Stores the item of the given value with the given key.</summary>
    ///<param name="key" type="String">The key associated with the value.</param>
    ///<param name="value" type="Object">The object or value of the key.</param>
    return this;
};

Storage.prototype.GetItem = function (key) {
    ///<summary>Retrieves the item with the given key.</summary>
    ///<param name="key" type="String">The key of th item to retrieve.</param>
    return {};
};

Storage.prototype.RemoveItem = function (key) {
    ///<summary>Removes the item from storage.</summary>
    ///<param name="key" type="String">The key of the item to remove.</param>
    return this;
};

Storage.prototype.RemoveAll = function () {
    ///<summary>Removes all the items from storage.</summary>
    return this;
};

Storage.prototype.Keys = function () {
    ///<summary>Returns all the keys for all items in local storage.</summary>

    return ["", "", "", "", "", "", "", "", "", ""];
};

Storage.prototype.Values = function () {
    ///<summary>Returns all the values in local storage.</summary>
    return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
}

Storage.prototype.Items = function () {
    ///<summary>Returns all items as key value pairs in local storage.</summary>

    return [new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair(), new KeyValuePair()];
};

Storage.prototype.BytesFree = function () {
    ///<summary>Returns the number of bytes free for storage.</summary>

    return 0;
};

Client.Height = function () {
    ///<summary>Returns the height of the client window.</summary>
    return 0;
};

Client.Popup = function (url, width, height) {
    ///<summary>Shortcut function to create a pop up window. Returns a reference to the created window.</summary>
    ///<param name="url" type="String">Url of the page to load in the window.</param>
    ///<param name="width" type="Number">&lt;Optional/Default: 500&gt;Width of the window.</param>
    ///<param name="height" type="Number">&lt;Optional/Default: 500&gt;Height of the window.</param>

    return new Window();
};


Client.Width = function () {
    ///<summary>Returns the width of the client window.</summary>
    return 0;
};

Client.HorizontalScrollPosition = function (position) {
    ///<summary>(Property Function)Gets or sets the horizontal scroll position of the client.</summary>
    ///<param name="position" type="Number">(Optional)The vertical scroll position.</param>
    if (position === undefined) { return 0; }
    return this;
};

Client.VerticalScrollPosition = function (position) {
    ///<summary>(Property Function)Gets or sets the vertical scroll position of the client.</summary>
    ///<param name="position" type="Number">(Optional)The vertical scroll position.</param>
    if (position === undefined) { return 0; }
    return this;
};

// Browser
function Browser() {
    ///<summary>Represents browser information about the client.</summary>
    ///<field name="Type" type="BrowserType">Enumerated browser type.</field>
    ///<field name="FullVersion" type="String">Full version with all portions.</field>
    ///<field name="Version" type="Number">Version represented as a floating point number.</field>
    ///<field name="Name" type="String">Name of the browser.</field>
}

Browser.prototype.Type = BrowserType.GoogleChrome;
Browser.prototype.FullVersion = "";
Browser.prototype.Version = 1.0;
Browser.prototype.Name = "";

// Cookie
function Cookie(name, value, time) {
    ///<summary>Represents a cookie. In order to save the cookie, it must be added to Client.Cookies.</summary>
    ///<param name="name" type="String">The name of the cookie.</param>
    ///<param name="value" type="String">(Optional)The value of the cookie.</param>
    ///<param name="time" type="DateTime/TimeSpan">(Optional)If a DateTime, this sets the expiration date of the cookie. If a TimeSpan, DateTime.Now() adds the TimeSpan for the expiration date.</param>
}

Cookie.prototype.Name = function (name) {
    ///<summary>(Property Function)Gets or sets the name of the cookie.</summary>
    ///<param name="name" type="String">(Optional)The name of the cookie.</param>
    if (name === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
}

Cookie.prototype.Expires = function (dateTime) {
    ///<summary>(Property Function)Gets or sets the expiration date of the cookie.</summary>
    ///<param name="time" type="DateTime/TimeSpan">(Optional)If a DateTime, this sets the expiration date of the cookie. If a TimeSpan, DateTime.Now() adds the TimeSpan for the expiration date.</param>
    if (!dateTime) { return this.Type == Type.Array ? [] : new DateTime(); }
    return this;
};

Cookie.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the value of the cookie.</summary>
    ///<param name="value" type="String">The value of the cookie.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};


function JSONCookie(name, value, time) {
    ///<summary>Represents a cookie with a value that's serialized as JSON..</summary>
    ///<param name="name" type="String">The name of the cookie.</param>
    ///<param name="value" type="Object">(Optional)The value of the cookie.</param>
    ///<param name="time" type="DateTime/TimeSpan">(Optional)If a DateTime, this sets the expiration date of the cookie. If a TimeSpan, DateTime.Now() adds the TimeSpan for the expiration date.</param>
}

JSONCookie.prototype.Name = function (name) {
    ///<summary>(Property Function)Gets or sets the name of the cookie.</summary>
    ///<param name="name" type="String">(Optional)The name of the cookie.</param>
    if (name === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
}

JSONCookie.prototype.Expires = function (dateTime) {
    ///<summary>(Property Function)Gets or sets the expiration date of the cookie.</summary>
    ///<param name="time" type="DateTime/TimeSpan">(Optional)If a DateTime, this sets the expiration date of the cookie. If a TimeSpan, DateTime.Now() adds the TimeSpan for the expiration date.</param>
    if (!dateTime) { return this.Type == Type.Array ? [] : new DateTime(); }
    return this;
};

JSONCookie.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the value of the cookie.</summary>
    ///<param name="value" type="Object">The value of the cookie.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : {}; }
    return this;
};
// Color
function Color(r, g, b, a) {
    ///<summary>Represents a color that can be used when setting color style values.</summary>
    ///<param name="r" type="Number/String/Colors">If a number, represents the red portion of the Color. If a String, treated as a hexadecimal #rrggbb value of the color. If a Colors enumeration value, created as the represented color.</param>
    ///<param name="g" type="Number">(Optional)The green porton of the color.</param>
    ///<param name="b" type="Number">(Optional)The blue portion of the color.</param>
    ///<param name="a" type="Number">(Optional)Alpha transparency portion of the color represented as a value from 0 (opaque) to 1 (transparent). Not supported on all browsers.</param>
    ///<field name="Red" type="Number">Red component.</field>
    ///<field name="Green" type="Number">Green component.</field>
    ///<field name="Blue" type="Number">Blue component.</field>
    ///<field name="Alpha" type="Number">Alpha component.</field>
    ///<field name="Type" type="String">Returns Type.Color</field>

}

Color.prototype.Red = 0;
Color.prototype.Green = 0;
Color.prototype.Blue = 0;
Color.prototype.Alpha = 0;

Color.prototype.toString =
Color.prototype.ToString = function () {
    ///<summary>Returns a hexadecimal value of the color.</summary>
    return "";
};

Color.FromRGB = function (r, g, b) {
    ///<summary>Returns a hexadecimal representation of rgb colors.</summary>
    ///<param name="r" type="Number">Red portion of the color.</param>
    ///<param name="g" type="Number">Green portion of the color.</param>
    ///<param name="b" type="Number">Blue portion of the color.</param>
    return new Color();
};

Color.FromRGB = function (r, g, b, a) {
    ///<summary>Returns a hexadecimal representation of rgba colors.</summary>
    ///<param name="r" type="Number">Red portion of the color.</param>
    ///<param name="g" type="Number">Green portion of the color.</param>
    ///<param name="b" type="Number">Blue portion of the color.</param>
    ///<param name="a" type="Number">Alpha transparency portion of the color as a value from 0 (opaque) to 1 (transparent).</param>
    return new Color();
};

// various functions

Timer.Delay = function (millisecondsTimeSpan, funcDel) {
    ///<summary>Executes function or code after the given time.</summary>
    ///<param name="millisecondTimespan" type="Number/TimeSpan">If a number, treated as number of milliseconds to wait until the function or delegate is executed. If a TimeSpan, treated as the time to wait until the function
    ///or delegate is executed.</param>
    ///<param name="funcDel" type="Function/Delegate">Function or delegate to execute once the time has expired.</param>
    return new Timer();
}

//element wrappers
function $Anchor(id) {
    ///<summary>Retrieves the anchor with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Anchor();
};


function $Button(id) {
    ///<summary>Retrieves the button with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Button();
};

function $Cell(id) {
    ///<summary>Returns the td element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Cell();
};

function $CheckBox(id) {
    ///<summary>Returns the checkbox with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new CheckBox();
};

function $DropDownList(id) {
    ///<summary>Returns the select element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new DropDownList();
};

function $Content(id) {
    ///<summary>Retrieves the element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Content();
}

function $ContentButton(id) {
    ///<summary>Retrieves the content button with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new ContentButton();
}

function $Div(id) {
    ///<summary>Retrieves the div with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Div();
};

function $Element(id) {
    ///<summary>Retrieves the element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Element();
}

function $FileUpload(id) {
    ///<summary>Retrieves the file upload with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new FileUpload();
};

function $Form(id) {
    ///<summary>Retrieves the form with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Form();
}

function $Header(id) {
    ///<summary>Retrieves the table header with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Header();
}

function $HiddenField(id) {
    ///<summary>Retrieves the hidden field with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new HiddenField();
}

function $Image(id) {
    ///<summary>Returns the image with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new ImageElement();
}

function $Input(id) {
    ///<summary>Retrieves the element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Input();
}

function $Label(id) {
    ///<summary>Returns the label with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Label();
};

function $ListBox(id) {
    ///<summary>Returns the select element with multiple enabled with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new ListBox();
};

function $ListItem(id) {
    ///<summary>Returns the select element with multiple enabled with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new ListItem();
};

function $List(id) {
    ///<summary>Returns the list with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new List();
}

function $Password(id) {
    ///<summary>Retrieves the password field with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Password();
}

function $RadioButton(id) {
    ///<summary>Retrieves the button with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new RadioButton();
}


function $Span(id) {
    ///<summary>Retrieves the span with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Span();
}

function $Row(id) {
    ///<summary>Returns the table row element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Row();
}

function $Table(id) {
    ///<summary>Returns the table element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new Table();
}

function $TableBody(id) {
    ///<summary>Returns the tbody element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new TableBody();
}

function $TableFoot(id) {
    ///<summary>Returns the tfoot element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new TableHead();
}

function $TableHead(id) {
    ///<summary>Returns the thead element with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new TableFoot();
}

function $TextArea(id) {
    ///<summary>Retrieves the TextArea with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new TextArea();
}

function $TextBox(id) {
    ///<summary>Retrieves the TextBox with the given id.</summary>
    ///<param name="id" type="String">Id of the element.</param>
    return new TextBox();
}

function $RadioButtonGroup(name) {
    ///<summary>Retrieves the radio button group with the given name.</summary>
    ///<param name="id" type="String">Id of the group name.</param>
    return new RadioButtonGroup();
}

function $Window(id) {
    ///<summary>Obtains a reference to the pop up window.</summary>
    ///<param name="id" type="String">Id of the window.</param>
    return new Window();
}

function $Array(object) {
    ///<summary>Treats the object as an Array for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return [];
}

function $ArrayEventArgs(object) {
    ///<summary>Treats the object as an ArrayEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new ArrayEventArgs();
}

function $Boolean(object) {
    ///<summary>Treats the object as a Boolean for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return false;
}

function $Color(object) {
    ///<summary>Treats the object as a Color for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new Color();
}

function $Cookie(object) {
    ///<summary>Treats the object as a Cookie for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new Cookie();
}
function $Date(object) {
    ///<summary>Treats the object as a Date for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new Date();
}

function $DateTime(object) {
    ///<summary>Treats the object as an DateTime for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new DateTime();
}

function $Delegate(object) {
    ///<summary>Treats the object as a Delegate for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new Delegate();
}

function $Dictionary(object) {
    ///<summary>Treats the object as a Dictionary for intellisense.</summary>
    ////<param name="object" type="Object">Object.</param>
    return new Dictionary();
}

function $DictionaryEventArgs(object) {
    ///<summary>Treats the object as an DictionaryEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new DictionaryEventArgs();
}

function $Event(object) {
    ///<summary>Treats the object as an Event for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new Event();
}

function $EventArgs(object) {
    ///<summary>Treats the object as an EventArgs for intellisense.</summary>
    ///<param type="Object" name="object" />
    return new EventArgs();
}

function $ExceptionEventArgs(object) {
    ///<summary>Treats the object as an ExceptionEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new ExceptionEventArgs();
}

function $IterationEventArgs(object) {
    ///<summary>Treats the object as an IterationEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new IterationEventArgs();
}

function $KeyEventArgs(object) {
    ///<summary>Treats the object as a KeyEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new KeyEventArgs();
}

function $Number(object) {
    ///<summary>Treats the object as a Number for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return 1;
}

function $ObervableArray(object) {
    ///<summary>Treats the object as an ObservableArray for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new ObservableArray();
}

function $ScrollEventArgs(object) {
    ///<summary>Treats the object as a ScrollEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new ScrollEventArgs();
}

function $String(object) {
    ///<summary>Treats the object as a String for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return "";
}

function $TimeSpan(object) {
    ///<summary>Treats the object as a TimeSpan for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new TimeSpan();
}

function $Timer(object) {
    ///<summary>Treats the object as a Timer for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new Timer();
}

function $UserEvent(object) {
    ///<summary>Treats the object as a UserEvent for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new UserEvent();
}

function $UserEventArgs(object) {
    ///<summary>Treats the object as a UserEventArgs for intellisense.</summary>
    ///<param name="object" type="Object">Object.</param>
    return new UserEventArgs();
}

function Element(tag, id) {
    ///<summary>Creates a new element with the given tag and id..</summary>
    ///<param name="tag" type="String">Tag name representing the elemenet.</param>
    ///<param name="id" type="String">Id of the element.</param>
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
}

Element.prototype.Classes = new ClassArray();
Element.prototype.IsMouseOver = false;
Element.prototype.OnClick = new UserEvent();
Element.prototype.OnDoubleClick = new UserEvent();
Element.prototype.OnMouseOut = new UserEvent();
Element.prototype.OnMouseOver = new UserEvent();
Element.prototype.OnMouseMove = new UserEvent();
Element.prototype.OnMouseDown = new UserEvent();
Element.prototype.OnMouseUp = new UserEvent();
Element.prototype.OnKeyDown = new UserEvent();
Element.prototype.OnKeyUp = new UserEvent();
Element.prototype.OnKeyPress = new UserEvent();
Element.prototype.OnContextMenu = new UserEvent();
Element.prototype.OnMouseWheel = new UserEvent();
Element.prototype.Tag = {};
Element.prototype.Type = "";

function Content(tag, id) {
    ///<summary>Creates a new element that will contain children or content with the given tag and id.</summary>
    ///<param name="tag" type="String">Tag name representing the elemenet.</param>
    ///<param name="id" type="String">Id of the element.</param>
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

Content.prototype.Classes = new ClassArray();
Content.prototype.IsMouseOver = false;
Content.prototype.OnClick = new UserEvent();
Content.prototype.OnDoubleClick = new UserEvent();
Content.prototype.OnMouseOut = new UserEvent();
Content.prototype.OnMouseOver = new UserEvent();
Content.prototype.OnMouseMove = new UserEvent();
Content.prototype.OnMouseDown = new UserEvent();
Content.prototype.OnMouseUp = new UserEvent();
Content.prototype.OnKeyDown = new UserEvent();
Content.prototype.OnKeyUp = new UserEvent();
Content.prototype.OnKeyPress = new UserEvent();
Content.prototype.OnContextMenu = new UserEvent();
Content.prototype.OnMouseWheel = new UserEvent();
Content.prototype.OnScroll = new UserEvent();
Content.prototype.Type = "";
Content.prototype.Tag = {};

function Input(e) {
    ///<summary>Represents an element that takes user input. Cannot create a new element with this constructor.</summary>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
}

Input.prototype.Classes = new ClassArray();
Input.prototype.IsMouseOver = false;
Input.prototype.OnClick = new UserEvent();
Input.prototype.OnDoubleClick = new UserEvent();
Input.prototype.OnMouseOut = new UserEvent();
Input.prototype.OnMouseOver = new UserEvent();
Input.prototype.OnMouseMove = new UserEvent();
Input.prototype.OnMouseDown = new UserEvent();
Input.prototype.OnMouseUp = new UserEvent();
Input.prototype.OnKeyDown = new UserEvent();
Input.prototype.OnKeyUp = new UserEvent();
Input.prototype.OnKeyPress = new UserEvent();
Input.prototype.OnContextMenu = new UserEvent();
Input.prototype.OnMouseWheel = new UserEvent();
Input.prototype.IsFocused = false;
Input.prototype.OnBlur = new UserEvent();
Input.prototype.OnFocus = new UserEvent();
Input.prototype.Type = "";
Input.prototype.Tag = {};

function LineBreak() {
    ///<summary>Creates a br tag to indicate a line break in element flow.</summary>
}

// Anchor
function Anchor(id) {
    ///<summary>Creates a new anchor with the given id.</summary>
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
    ///<field name="IsFocused" type="Boolean">If the anchor has focus, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the anchor loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the anchor obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.Anchor.</field>
};

Anchor.prototype.Classes = new ClassArray();
Anchor.prototype.IsMouseOver = false;
Anchor.prototype.OnClick = new UserEvent();
Anchor.prototype.OnDoubleClick = new UserEvent();
Anchor.prototype.OnMouseOut = new UserEvent();
Anchor.prototype.OnMouseOver = new UserEvent();
Anchor.prototype.OnMouseMove = new UserEvent();
Anchor.prototype.OnMouseDown = new UserEvent();
Anchor.prototype.OnMouseUp = new UserEvent();
Anchor.prototype.OnKeyDown = new UserEvent();
Anchor.prototype.OnKeyUp = new UserEvent();
Anchor.prototype.OnKeyPress = new UserEvent();
Anchor.prototype.OnContextMenu = new UserEvent();
Anchor.prototype.OnMouseWheel = new UserEvent();
Anchor.prototype.OnScroll = new UserEvent();
Anchor.prototype.OnFocus = new UserEvent();
Anchor.prototype.OnBlur = new UserEvent();
Anchor.prototype.IsFocused = true;
Anchor.prototype.Tag = {};
Anchor.prototype.Type = "";

Anchor.prototype.Enabled = function (enabled) {
    ///<summary>(Property Function)Gets or sets if the anchor is enabled.</summary>
    ///<param name="enabled" type="Boolean">(Optional)Whether the anchor is enabled.</param>

    if (enabled === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Anchor.prototype.Href = function (href) {
    ///<summary>(Property Function)Gets or sets href of the anchor.</summary>
    ///<param name="href" type="String">(Optional)Href of the anchor.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.Target = function (target) {
    ///<summary>(Property Function)Gets or sets target of the anchor.</summary>
    ///<param name="target" type="String">(Optional)Target of the anchor.</param>
    if (target === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

//Body
function Body() {
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
    ///<field name="Form" type="Form">Reference to the first form of the page.</field>
    ///<field name="Forms" type="Array">Reference to the all forms of the page.</field>
    ///<field name="OnClose" type="UserEvent">&lt;UserEvent&gt;Fired when the user navigates away from the page.</field>
    ///<field name="OnLoad" type="UserEvent">&lt;UserEvent&gt;Fired when the document is ready for display.</field>
    ///<field name="Type" type="String">Returns Type.Page.</field>
}

Body.prototype.Classes = new ClassArray();
Body.prototype.IsMouseOver = false;
Body.prototype.OnClick = new UserEvent();
Body.prototype.OnDoubleClick = new UserEvent();
Body.prototype.OnMouseOut = new UserEvent();
Body.prototype.OnMouseOver = new UserEvent();
Body.prototype.OnMouseMove = new UserEvent();
Body.prototype.OnMouseDown = new UserEvent();
Body.prototype.OnMouseUp = new UserEvent();
Body.prototype.OnKeyDown = new UserEvent();
Body.prototype.OnKeyUp = new UserEvent();
Body.prototype.OnKeyPress = new UserEvent();
Body.prototype.OnContextMenu = new UserEvent();
Body.prototype.OnMouseWheel = new UserEvent();
Body.prototype.OnScroll = new UserEvent();
Body.prototype.Form = new Form();
Body.prototype.OnClose = new UserEvent();
Body.prototype.OnLoad = new UserEvent();
Body.prototype.Tag = {};
Body.prototype.Type = "";

Body.prototype.Close = function () {
    ///<summary>Closes the page.</summary>
    return this;
};

Body.prototype.Location = function (location) {
    ///<summary>(Property Function)Gets or sets the current page's location</summary>
    ///<param name="location" type="String">(Optional)Setting this will change the current page entirely,.</param>
    if (location === undefined) {
        return "";
    }
};

Body.prototype.Refresh = function () {
    ///<summary>Refreshes the page.</summary>
}

Body.prototype.Status = function (status) {
    ///<summary>(Property Function)Gets or sets the status bar text.</summary>
    ///<param  name="status" type="String">(Optional)Text to be put into the status bar.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Body.prototype.Parent = function () {
    ///<summary>Returns the parent window's Page object if it is using NinJa.</summary>
    return new Body();
};

Body.prototype.Title = function (title) {
    ///<summary>(Property Function)Gets or sets the title of the web page.</summary>
    ///<param name="title" type="String">(Optional)Text to change the title to.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

//Button
function Button(id) {
    ///<summary>Creates a new button input with the given id.</summary>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.Button.</field>
}

Button.prototype.Classes = new ClassArray();
Button.prototype.IsMouseOver = false;
Button.prototype.OnClick = new UserEvent();
Button.prototype.OnDoubleClick = new UserEvent();
Button.prototype.OnMouseOut = new UserEvent();
Button.prototype.OnMouseOver = new UserEvent();
Button.prototype.OnMouseMove = new UserEvent();
Button.prototype.OnMouseDown = new UserEvent();
Button.prototype.OnMouseUp = new UserEvent();
Button.prototype.OnKeyDown = new UserEvent();
Button.prototype.OnKeyUp = new UserEvent();
Button.prototype.OnKeyPress = new UserEvent();
Button.prototype.OnContextMenu = new UserEvent();
Button.prototype.OnMouseWheel = new UserEvent();
Button.prototype.IsFocused = false;
Button.prototype.OnBlur = new UserEvent();
Button.prototype.OnFocus = new UserEvent();
Button.prototype.Tag = {};
Button.prototype.Type = Type.Button;

function ContentButton(id) {
    ///<summary>Creates a new button element that can have child elements with the given id.</summary>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.Button.</field>
}

ContentButton.prototype.Classes = new ClassArray();
ContentButton.prototype.IsMouseOver = false;
ContentButton.prototype.OnClick = new UserEvent();
ContentButton.prototype.OnDoubleClick = new UserEvent();
ContentButton.prototype.OnMouseOut = new UserEvent();
ContentButton.prototype.OnMouseOver = new UserEvent();
ContentButton.prototype.OnMouseMove = new UserEvent();
ContentButton.prototype.OnMouseDown = new UserEvent();
ContentButton.prototype.OnMouseUp = new UserEvent();
ContentButton.prototype.OnKeyDown = new UserEvent();
ContentButton.prototype.OnKeyUp = new UserEvent();
ContentButton.prototype.OnKeyPress = new UserEvent();
ContentButton.prototype.OnContextMenu = new UserEvent();
ContentButton.prototype.OnMouseWheel = new UserEvent();
ContentButton.prototype.IsFocused = false;
ContentButton.prototype.OnBlur = new UserEvent();
ContentButton.prototype.OnFocus = new UserEvent();
ContentButton.prototype.OnScroll = new UserEvent();
ContentButton.prototype.Tag = {};
ContentButton.prototype.Type = Type.ContentButton;

Button.Type = {};
Button.Type.Submit = "submit";
Button.Type.Reset = "reset";
Button.Type.Button = "button";

Button.prototype.ButtonType =
ContentButton.prototype.ButtonType = function (buttonType) {
    ///<summary>(Property Function)Gets or sets the type of the button.</summary>
    ///<param name="buttonType" type="Button.Type">(Optional)The type of button the button will respond as.</param>
    if (buttonType === undefined) {
        return this.Type == Type.Array ? [] : Button.Type.Button;
    }

    return this;
}

function Cell(id) {
    ///<summary>Creates a new table cell with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Cell.</field>
}

Cell.prototype.Classes = new ClassArray();
Cell.prototype.IsMouseOver = false;
Cell.prototype.OnClick = new UserEvent();
Cell.prototype.OnDoubleClick = new UserEvent();
Cell.prototype.OnMouseOut = new UserEvent();
Cell.prototype.OnMouseOver = new UserEvent();
Cell.prototype.OnMouseMove = new UserEvent();
Cell.prototype.OnMouseDown = new UserEvent();
Cell.prototype.OnMouseUp = new UserEvent();
Cell.prototype.OnKeyDown = new UserEvent();
Cell.prototype.OnKeyUp = new UserEvent();
Cell.prototype.OnKeyPress = new UserEvent();
Cell.prototype.OnContextMenu = new UserEvent();
Cell.prototype.OnMouseWheel = new UserEvent();
Cell.prototype.Tag = {};
Cell.prototype.Type = "";

Cell.prototype.ColumnSpan = function (colSpan) {
    ///<summary>(Property Function)Gets or sets colspan of a table cell.</summary>
    ///<param name="colSpan" type="Number">(Optional)The column span amount.</param>
    if (colSpan === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Cell.prototype.RowSpan = function (rowSpan) {
    ///<summary>(Property Function)Gets or sets rowspan of a table cell.</summary>
    ///<param name="rowSpan" type="Number">(Optional)The row span amount.</param>
    if (rowSpan === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

// CheckBox

function CheckBox(id) {
    ///<summary>Creates a new checkbox input with the given id.</summary>
    ///<param name="id" type="String">Id to apply to the element.</param>
    ///<field name="Classes" type="ClassArray">Collection of classes applied to the element.</field>
    ///<field name="IsMouseOver" type="Boolean">Set to true if the mouse is over the element.</field>
    ///<field name="OnCheckChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the checked state on the element has changed.</field>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>" />
    ///<field name="Type" type="String">Returns Type.CheckBox.</field>
}

CheckBox.prototype.Classes = new ClassArray();
CheckBox.prototype.IsMouseOver = false;
CheckBox.prototype.OnClick = new UserEvent();
CheckBox.prototype.OnDoubleClick = new UserEvent();
CheckBox.prototype.OnMouseOut = new UserEvent();
CheckBox.prototype.OnMouseOver = new UserEvent();
CheckBox.prototype.OnMouseMove = new UserEvent();
CheckBox.prototype.OnMouseDown = new UserEvent();
CheckBox.prototype.OnMouseUp = new UserEvent();
CheckBox.prototype.OnKeyDown = new UserEvent();
CheckBox.prototype.OnKeyUp = new UserEvent();
CheckBox.prototype.OnKeyPress = new UserEvent();
CheckBox.prototype.OnContextMenu = new UserEvent();
CheckBox.prototype.OnMouseWheel = new UserEvent();
CheckBox.prototype.IsFocused = false;
CheckBox.prototype.OnBlur = new UserEvent();
CheckBox.prototype.OnFocus = new UserEvent();
CheckBox.prototype.OnCheckChanged = new UserEvent();
CheckBox.prototype.Type = "";

CheckBox.prototype.OnCheckChanged = new UserEvent();

CheckBox.prototype.Checked = function (checked) {
    ///<summary>(Property Function)Gets or sets the checked state of the checkbox.</summary>
    ///<param name="checked" type="Boolean">(Optional)The checked state of the checkbox</param>
    if (checked === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

CheckBox.prototype.Clear = function () {
    ///<summary>Clears the checked state of the checkbox.</summary>
    return this;
};

//DropDownList
function DropDownList(id) {
    ///<summary>Creates a new select input with the given id.</summary>
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
    ///<field name="OnSelectionChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the selection changes.</field>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Options" type="OptionArray">Array of options in the select element.</field>
    ///<field name="Type" type="String">Returns Type.DropDownList.</field>
}

DropDownList.prototype.Classes = new ClassArray();
DropDownList.prototype.IsMouseOver = false;
DropDownList.prototype.OnClick = new UserEvent();
DropDownList.prototype.OnDoubleClick = new UserEvent();
DropDownList.prototype.OnMouseOut = new UserEvent();
DropDownList.prototype.OnMouseOver = new UserEvent();
DropDownList.prototype.OnMouseMove = new UserEvent();
DropDownList.prototype.OnMouseDown = new UserEvent();
DropDownList.prototype.OnMouseUp = new UserEvent();
DropDownList.prototype.OnKeyDown = new UserEvent();
DropDownList.prototype.OnKeyUp = new UserEvent();
DropDownList.prototype.OnKeyPress = new UserEvent();
DropDownList.prototype.OnContextMenu = new UserEvent();
DropDownList.prototype.OnMouseWheel = new UserEvent();
DropDownList.prototype.IsFocused = false;
DropDownList.prototype.OnBlur = new UserEvent();
DropDownList.prototype.OnFocus = new UserEvent();
DropDownList.prototype.Options = new OptionArray(this);
DropDownList.prototype.OnSelectionChanged = new UserEvent();
DropDownList.prototype.Type = "";

DropDownList.prototype.BindTag = function (bindTag) {
    ///<summary>(Property Function)Gets or sets whether during binding, the object being bound to an Option should
    ///be set to each Option's "Tag" value.</summary>
    ///<param name="bindTag" type="Boolean">(Optional)Whether to bind an object to an Option's Tag value.</param>
    if (bindTag === undefined) { return true; }
    return this;
}

DropDownList.prototype.BindText = function (text) {
    ///<summary>(Property Function)Gets or sets the text used to display in an Option during binding.</summary>
    ///<param name="text" type="String">&lt;Optiona&gt;The text used to display in an Option from it's bound object.</param>
    if (text === undefined) return "";
    return this;
}

DropDownList.prototype.BindValue = function (value) {
    ///<summary>(Property Function)Gets or sets the value used to attach to an Option during binding.</summary>
    ///<param name="value" type="String">&lt;Optiona&gt;The value used to atach an Option from it's bound object.</param>
    if (value === undefined) return "";
    return this;
}

DropDownList.prototype.Bind = function (array) {
    ///<summary>Given an array or dictionary, all options are cleared and generated from the array or dictionary. Options will
    ///have their text and value given by values from the BindText and BindValues (if set). If these are not set, the toSring()
    ///function will be called and assigned. For Dictionary objects, the key is set to the text and value is set to value.</summary>
    return this;
}

DropDownList.prototype.Clear = function () {
    ///<summary>Clears the selected value of the DropDownList.</summary>
    return this;
};

DropDownList.prototype.SelectedIndex = function (index) {
    ///<summary>(Property Function)Gets or sets the selected index of the select element.</summary>
    ///<param name="index" type="Number">(Optional)Index to be selected.</param>
    if (index === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

DropDownList.prototype.SelectedOption = function (option) {
    ///<summary>(Property Function)Gets or sets the selected option of the select element.</summary>
    ///<param name="option" type="Option">(Optional)The option to be selected.</param>
    if (option === undefined) { return this.Type == Type.Array ? [] : new Option(); }
    return this;
};

DropDownList.prototype.SelectedText = function (text) {
    ///<summary>(Property Function)Gets or sets the selected text of the select element</summary>
    ///<param name="text" type="String">(Optional)The text to be selected.</param>
    if (text === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};


DropDownList.prototype.SelectedValue = function (value) {
    ///<summary>(Property Function)Gets or sets the selected value  of the select element</summary>
    ///<param name="value" type="String" optional="true" />
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

// Div
function Div(id) {
    ///<summary>Creates a new div with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Div.</field>
    this.Content = Content.prototype.Content;
}

Div.prototype.Classes = new ClassArray();
Div.prototype.IsMouseOver = false;
Div.prototype.OnClick = new UserEvent();
Div.prototype.OnDoubleClick = new UserEvent();
Div.prototype.OnMouseOut = new UserEvent();
Div.prototype.OnMouseOver = new UserEvent();
Div.prototype.OnMouseMove = new UserEvent();
Div.prototype.OnMouseDown = new UserEvent();
Div.prototype.OnMouseUp = new UserEvent();
Div.prototype.OnKeyDown = new UserEvent();
Div.prototype.OnKeyUp = new UserEvent();
Div.prototype.OnKeyPress = new UserEvent();
Div.prototype.OnContextMenu = new UserEvent();
Div.prototype.OnMouseWheel = new UserEvent();
Div.prototype.OnScroll = new UserEvent();
Div.prototype.Type = Type.Div;
Div.prototype.Tag = {};

// FileUpload
function FileUpload(id) {
    ///<summary>Creates a new file upload input with the given id.</summary>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.FileUpload.</field>
    ///<field name="Acceptions" type="ObservableArray">A collection of case insensitve file types accepted by the file upload.</field>
}

FileUpload.prototype.Classes = new ClassArray();
FileUpload.prototype.IsMouseOver = false;
FileUpload.prototype.OnClick = new UserEvent();
FileUpload.prototype.OnDoubleClick = new UserEvent();
FileUpload.prototype.OnMouseOut = new UserEvent();
FileUpload.prototype.OnMouseOver = new UserEvent();
FileUpload.prototype.OnMouseMove = new UserEvent();
FileUpload.prototype.OnMouseDown = new UserEvent();
FileUpload.prototype.OnMouseUp = new UserEvent();
FileUpload.prototype.OnKeyDown = new UserEvent();
FileUpload.prototype.OnKeyUp = new UserEvent();
FileUpload.prototype.OnKeyPress = new UserEvent();
FileUpload.prototype.OnContextMenu = new UserEvent();
FileUpload.prototype.OnMouseWheel = new UserEvent();
FileUpload.prototype.IsFocused = false;
FileUpload.prototype.OnBlur = new UserEvent();
FileUpload.prototype.OnFocus = new UserEvent();
FileUpload.prototype.OnChange = new UserEvent();
FileUpload.prototype.Type = Type.Form;
FileUpload.prototype.Tag = {};
FileUpload.prototype.Accepts = new ObservableArray(this, String);

FileUpload.prototype.Value = function () {
    ///<summary>Gets the file name in the file upload input.</summary>
    return "";
};

// Form
function Form(id) {
    ///<summary>Creates a new form with the given id.</summary>
    ///<param name="id" type="String">Id to apply to the element.</param>
    ///<field name="OnSubmit" type="UserEvent">&lt;UserEvent&gt;Fired when the form is submitted.</field>
}

Form.prototype.OnSubmit = new UserEvent();

Form.prototype.Action = function (action) {
    ///<summary>(Property Function)Gets or sets the url to send a form submission to.</summary>
    ///<param name="action" type="String">(Optional)The url of the page to submit the form to.</param>
    if (action === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Form.prototype.Encoding = function (encodingType) {
    ///<summary>(Property Function)Gets or sets the encoding type.</summary>
    ///<param name="encodingType" type="EncodingType">(Optional)The EncodingType to use when submitting the form.</param>
    if (encodingType === undefined) { return this.Type == Type.Array ? [] : EncodingType.FormData; }
    return this;
};

Form.prototype.Method = function (method) {
    ///<summary>(Property Function)Gets or set the form method.</summary>
    ///<param name="method" type="FormMethod">(Optional)The method used to submit the form.</param>
    if (method === undefined) { return this.Type == Type.Array ? [] : FormMethod.Get; }
    return this;
};

Form.prototype.Reset = function () {
    ///<summary>Resets all form fields.</summary>
    return this;
};

Form.prototype.Target = function (target) {
    ///<summary>(Property Function)Gets or sets the target of the form.</summary>
    ///<param name="target" type="String">(Optional)The target of the form submission.</param>
    if (target === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Form.prototype.Submit = function () {
    ///<summary>Submits the form.</summary>
    return this;
};
// Header
function Header(id) {
    ///<summary>Creates a new table header cell the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Header.</field>
}

Header.prototype.Classes = new ClassArray();
Header.prototype.IsMouseOver = false;
Header.prototype.OnClick = new UserEvent();
Header.prototype.OnDoubleClick = new UserEvent();
Header.prototype.OnMouseOut = new UserEvent();
Header.prototype.OnMouseOver = new UserEvent();
Header.prototype.OnMouseMove = new UserEvent();
Header.prototype.OnMouseDown = new UserEvent();
Header.prototype.OnMouseUp = new UserEvent();
Header.prototype.OnKeyDown = new UserEvent();
Header.prototype.OnKeyUp = new UserEvent();
Header.prototype.OnKeyPress = new UserEvent();
Header.prototype.OnContextMenu = new UserEvent();
Header.prototype.OnMouseWheel = new UserEvent();
Header.prototype.OnScroll = new UserEvent();
Header.prototype.Type = Type.Header;

Header.prototype.ColumnSpan = function (colSpan) {
    ///<summary>(Property Function)Gets or sets colspan of a table header cell.</summary>
    ///<param name="colSpan" type="Number">(Optional)The column span amount.</param>
    if (colSpan === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Header.prototype.RowSpan = function (rowSpan) {
    ///<summary>(Property Function)Gets or sets rowspan of a table header cell.</summary>
    ///<param name="rowSpan" type="Number">(Optional)The row span amount.</param>
    if (rowspan === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

// HiddenField
function HiddenField(id) {
    ///<summary>Creates a new hidden field the given id.</summary>
    ///<param name="id" type="String">Id to apply to the element.</param>
    ///<field name="OnChange" type="UserEvent">&lt;UserEvent&gt;Fired when the value of the element changes.</field>
    ///<field name="Type" type="String">Returns Type.HiddenField.</field>
};

HiddenField.prototype.OnChange = new UserEvent();
HiddenField.prototype.Type = Type.HiddenField;

HiddenField.prototype.Clear = function () {
    ///<summary>Clears the value of the hidden field.</summary>
    return this;
};

HiddenField.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the value of the hidden field.</summary>
    ///<param name="text" type="String">(Optional)The value to give to the hidden field.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

// ImageElement
function ImageElement(id) {
    ///<summary>Creates a new image element with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.ImageElement.</field>
};

ImageElement.prototype.Classes = new ClassArray();
ImageElement.prototype.IsMouseOver = false;
ImageElement.prototype.OnClick = new UserEvent();
ImageElement.prototype.OnDoubleClick = new UserEvent();
ImageElement.prototype.OnMouseOut = new UserEvent();
ImageElement.prototype.OnMouseOver = new UserEvent();
ImageElement.prototype.OnMouseMove = new UserEvent();
ImageElement.prototype.OnMouseDown = new UserEvent();
ImageElement.prototype.OnMouseUp = new UserEvent();
ImageElement.prototype.OnKeyDown = new UserEvent();
ImageElement.prototype.OnKeyUp = new UserEvent();
ImageElement.prototype.OnKeyPress = new UserEvent();
ImageElement.prototype.OnContextMenu = new UserEvent();
ImageElement.prototype.OnMouseWheel = new UserEvent();
ImageElement.prototype.Tag = {};

ImageElement.prototype.Source = function (source) {
    ///<summary>(Property Function)Gets or sets the source of the image.</summary>
    ///<param name="source" type="String">(Optional)The url of the image.</param>
    if (source === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};


function Label(id) {
    ///<summary>Creates a new label with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Label.</field>
}

List.prototype.Classes = new ClassArray();
List.prototype.IsMouseOver = false;
List.prototype.OnClick = new UserEvent();
List.prototype.OnDoubleClick = new UserEvent();
List.prototype.OnMouseOut = new UserEvent();
List.prototype.OnMouseOver = new UserEvent();
List.prototype.OnMouseMove = new UserEvent();
List.prototype.OnMouseDown = new UserEvent();
List.prototype.OnMouseUp = new UserEvent();
List.prototype.OnKeyDown = new UserEvent();
List.prototype.OnKeyUp = new UserEvent();
List.prototype.OnKeyPress = new UserEvent();
List.prototype.OnContextMenu = new UserEvent();
List.prototype.OnMouseWheel = new UserEvent();
List.prototype.Tag = {};
List.prototype.Type = "";

Label.prototype.For = function (id) {
    ///<summary>(Property Function)Sets input element in which the label refers to.</summary>
    ///<param name="id" type="String/Input">(Optional)Id of the input element or the input element itself.</param>
    if (id === undefined) {
        return this.Type == Type.Array ? [] : "";
    }

    return this;
};

function ListBox(id) {
    ///<summary>Creates a new select input with multiple selections with the given id.</summary>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.ListBox.</field>
    ///<field name="Options" type="OptionArray">Array of options available to the ListBox.</field>
    ///<field name="OnSelectionChanged" type="UserEvent">&lt;UserEvent&gt;Fired once a selection has changed for the element.</field>
    ///<field name="SelectedOptions" type="ObservableArray">Array of options that selected.</field>
    ///<field name="SelectedIndices" type="ObservableArray">Array of selected indices.</field>
    ///<field name="SelectedValues" type="ObservableArray">Array of selected values.</field>
};

ListBox.prototype.Classes = new ClassArray();
ListBox.prototype.IsMouseOver = false;
ListBox.prototype.OnClick = new UserEvent();
ListBox.prototype.OnDoubleClick = new UserEvent();
ListBox.prototype.OnMouseOut = new UserEvent();
ListBox.prototype.OnMouseOver = new UserEvent();
ListBox.prototype.OnMouseMove = new UserEvent();
ListBox.prototype.OnMouseDown = new UserEvent();
ListBox.prototype.OnMouseUp = new UserEvent();
ListBox.prototype.OnKeyDown = new UserEvent();
ListBox.prototype.OnKeyUp = new UserEvent();
ListBox.prototype.OnKeyPress = new UserEvent();
ListBox.prototype.OnContextMenu = new UserEvent();
ListBox.prototype.OnMouseWheel = new UserEvent();
ListBox.prototype.IsFocused = false;
ListBox.prototype.OnBlur = new UserEvent();
ListBox.prototype.OnFocus = new UserEvent();
ListBox.prototype.Type = Type.Button;
ListBox.prototype.Options = new OptionArray(this);
ListBox.prototype.OnSelectionChanged = new UserEvent();
ListBox.prototype.SelectedOptions = new ObservableArray(this, Option);
ListBox.prototype.SelectedIndices = new ObservableArray(this, Number);
ListBox.prototype.SelectedValues = new ObservableArray(this, String);

ListBox.prototype.Clear = function () {
    ///<summary>Clears the selected values of the list box.</summary>
    return new ListBox();
};

function List(id) {
    ///<summary>Creates a new unordered list with the given id. To make the list orderd, set the BulletType to BulletType.Decimal.</summary>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.List.</field>
    ///<field name="Items" type="ListItemsArray">Array of ListItems in the list.</field>
}

List.prototype.Classes = new ClassArray();
List.prototype.IsMouseOver = false;
List.prototype.OnClick = new UserEvent();
List.prototype.OnDoubleClick = new UserEvent();
List.prototype.OnMouseOut = new UserEvent();
List.prototype.OnMouseOver = new UserEvent();
List.prototype.OnMouseMove = new UserEvent();
List.prototype.OnMouseDown = new UserEvent();
List.prototype.OnMouseUp = new UserEvent();
List.prototype.OnKeyDown = new UserEvent();
List.prototype.OnKeyUp = new UserEvent();
List.prototype.OnKeyPress = new UserEvent();
List.prototype.OnContextMenu = new UserEvent();
List.prototype.OnMouseWheel = new UserEvent();
List.prototype.Tag = {};
List.prototype.Type = Type.List;
List.prototype.Items = new ListItemArray();

List.prototype.BulletType = function (bulletType) {
    ///<summary>(Property Function)Gets or sets the bullet type of the items in the list.</summary>
    ///<param name="bulletType" type="BulletType">(Optional)Type of bullet to display.</param>
    if (bulletType === undefined) { return this.Type == Type.Array ? [] : BulletType; }
    return this;
};

function ListItem(id) {
    ///<summary>Creates a new list item with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.ListItem.</field>
}

ListItem.prototype.Classes = new ClassArray();
ListItem.prototype.IsMouseOver = false;
ListItem.prototype.OnClick = new UserEvent();
ListItem.prototype.OnDoubleClick = new UserEvent();
ListItem.prototype.OnMouseOut = new UserEvent();
ListItem.prototype.OnMouseOver = new UserEvent();
ListItem.prototype.OnMouseMove = new UserEvent();
ListItem.prototype.OnMouseDown = new UserEvent();
ListItem.prototype.OnMouseUp = new UserEvent();
ListItem.prototype.OnKeyDown = new UserEvent();
ListItem.prototype.OnKeyUp = new UserEvent();
ListItem.prototype.OnKeyPress = new UserEvent();
ListItem.prototype.OnContextMenu = new UserEvent();
ListItem.prototype.OnMouseWheel = new UserEvent();
ListItem.prototype.OnScroll = new UserEvent();
ListItem.prototype.Type = "";
ListItem.prototype.Tag = {};

// Option
function Option(text, value) {
    ///<summary>Represents an option element with the text and value.</summary>
    ///<param name="text" type="String">Text to display in the option.</param>
    ///<param name="value" type="String">Value to give to the option.</param>
    ///<field name="Type" type="String">Returns Type.Option</field>
    ///<field name="Tag" type="Object">Any object to attack to the option.</field>
};

Option.prototype.Type = Type.Option;
Option.prototype.Tag = {};

Option.prototype.Selected = function (selected) {
    ///<summary>(Property Function)Gets or sets whether the option is selected.</summary>
    ///<param name="selected" type="Boolean">(Optional)Whether the option is selected.</param>
    if (selected === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Option.prototype.Text = function (text) {
    ///<summary>(Property Function)Gets or sets displayed text of the option.</summary>
    ///<param name="text" type="String">(Optional)Displayed text of the option.</param>
    if (text === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Option.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the value of the option.</summary>
    ///<param name="value" type="String">(Optional)Value to give to the option.</param>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

// Password
function Password(id) {
    ///<summary>Creates a new password input with the given id.</summary>
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
    ///<field name="OnEnterKey" type="Event">(Event)Fired when the user hits the enter key.</field>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.Password.</field>
    ///<field name="OnTextChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the text of the element is modified.</field>
}

Password.prototype.Classes = new ClassArray();
Password.prototype.IsMouseOver = false;
Password.prototype.OnClick = new UserEvent();
Password.prototype.OnDoubleClick = new UserEvent();
Password.prototype.OnMouseOut = new UserEvent();
Password.prototype.OnMouseOver = new UserEvent();
Password.prototype.OnMouseMove = new UserEvent();
Password.prototype.OnMouseDown = new UserEvent();
Password.prototype.OnMouseUp = new UserEvent();
Password.prototype.OnKeyDown = new UserEvent();
Password.prototype.OnKeyUp = new UserEvent();
Password.prototype.OnKeyPress = new UserEvent();
Password.prototype.OnContextMenu = new UserEvent();
Password.prototype.OnMouseWheel = new UserEvent();
Password.prototype.IsFocused = false;
Password.prototype.OnBlur = new UserEvent();
Password.prototype.OnFocus = new UserEvent();
Password.prototype.Type = "";
Password.prototype.Tag = {};
Password.prototype.OnEnterKey = new Event();
Password.prototype.OnTextChanged = new UserEvent();

// RadioButton
function RadioButton(id) {
    ///<summary>Creates a new radiobutton input with the given id.</summary>
    ///<param name="id" type="String">Id to apply to the element.</param>
    ///<field name="Classes" type="ClassArray">Collection of classes applied to the element.</field>
    ///<field name="IsMouseOver" type="Boolean">Set to true if the mouse is over the element.</field>
    ///<field name="OnCheckChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the checked state on the element has changed.</field>
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
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>" />
    ///<field name="Type" type="String">Returns Type.RadioButton.</field>
};

RadioButton.prototype.Classes = new ClassArray();
RadioButton.prototype.IsMouseOver = false;
RadioButton.prototype.OnClick = new UserEvent();
RadioButton.prototype.OnDoubleClick = new UserEvent();
RadioButton.prototype.OnMouseOut = new UserEvent();
RadioButton.prototype.OnMouseOver = new UserEvent();
RadioButton.prototype.OnMouseMove = new UserEvent();
RadioButton.prototype.OnMouseDown = new UserEvent();
RadioButton.prototype.OnMouseUp = new UserEvent();
RadioButton.prototype.OnKeyDown = new UserEvent();
RadioButton.prototype.OnKeyUp = new UserEvent();
RadioButton.prototype.OnKeyPress = new UserEvent();
RadioButton.prototype.OnContextMenu = new UserEvent();
RadioButton.prototype.OnMouseWheel = new UserEvent();
RadioButton.prototype.IsFocused = false;
RadioButton.prototype.OnBlur = new UserEvent();
RadioButton.prototype.OnFocus = new UserEvent();
RadioButton.prototype.Type = "";
RadioButton.prototype.Tag = {};
RadioButton.prototype.OnCheckChanged = new UserEvent();

RadioButton.prototype.Checked = function (checked) {
    ///<summary>(Property Function)Gets or sets the checked state of the radio button.</summary>
    ///<param name="checked" type="Boolean">(Optional)The checked state of the radio button.</param>
    if (checked === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

RadioButton.prototype.Clear = function () {
    ///<summary>Clears the checked state of the radio button.</summary>
    return this;
}

RadioButton.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the value of the radio button.</summary>
    ///<param name="value">(Optional)The value of the radio button.</summary>
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
}

// Row
function Row(id) {
    ///<summary>Creates a new table row with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Row.</field>
    ///<field name="Cells" type="CellArray">Array of cells in the row.</field>
}

Row.prototype.Classes = new ClassArray();
Row.prototype.IsMouseOver = false;
Row.prototype.OnClick = new UserEvent();
Row.prototype.OnDoubleClick = new UserEvent();
Row.prototype.OnMouseOut = new UserEvent();
Row.prototype.OnMouseOver = new UserEvent();
Row.prototype.OnMouseMove = new UserEvent();
Row.prototype.OnMouseDown = new UserEvent();
Row.prototype.OnMouseUp = new UserEvent();
Row.prototype.OnKeyDown = new UserEvent();
Row.prototype.OnKeyUp = new UserEvent();
Row.prototype.OnKeyPress = new UserEvent();
Row.prototype.OnContextMenu = new UserEvent();
Row.prototype.OnMouseWheel = new UserEvent();
Row.prototype.Tag = {};
Row.prototype.Type = "";
Row.prototype.Cells = new CellArray();

// Span
function Span(id) {
    ///<summary>Creates a new span with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Span.</field>
};

Span.prototype.Classes = new ClassArray();
Span.prototype.IsMouseOver = false;
Span.prototype.OnClick = new UserEvent();
Span.prototype.OnDoubleClick = new UserEvent();
Span.prototype.OnMouseOut = new UserEvent();
Span.prototype.OnMouseOver = new UserEvent();
Span.prototype.OnMouseMove = new UserEvent();
Span.prototype.OnMouseDown = new UserEvent();
Span.prototype.OnMouseUp = new UserEvent();
Span.prototype.OnKeyDown = new UserEvent();
Span.prototype.OnKeyUp = new UserEvent();
Span.prototype.OnKeyPress = new UserEvent();
Span.prototype.OnContextMenu = new UserEvent();
Span.prototype.OnMouseWheel = new UserEvent();
Span.prototype.OnScroll = new UserEvent();
Span.prototype.Type = "";
Span.prototype.Tag = {};

// Table
function Table(id) {
    ///<summary>Creates a new table with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.Table.</field>
    ///<field name="Rows" type="RowArray">Array of rows in the table body.</field>
    ///<field name="Head" type="TableHead">The thead of the table.</field>
    ///<field name="Foot" type="TableFoot">The tfoot of the table.</field>
    ///<field name="Body" type="TableBody">The first tbody of the table.</field>
};

Table.prototype.Classes = new ClassArray();
Table.prototype.IsMouseOver = false;
Table.prototype.OnClick = new UserEvent();
Table.prototype.OnDoubleClick = new UserEvent();
Table.prototype.OnMouseOut = new UserEvent();
Table.prototype.OnMouseOver = new UserEvent();
Table.prototype.OnMouseMove = new UserEvent();
Table.prototype.OnMouseDown = new UserEvent();
Table.prototype.OnMouseUp = new UserEvent();
Table.prototype.OnKeyDown = new UserEvent();
Table.prototype.OnKeyUp = new UserEvent();
Table.prototype.OnKeyPress = new UserEvent();
Table.prototype.OnContextMenu = new UserEvent();
Table.prototype.OnMouseWheel = new UserEvent();
Table.prototype.Type = "";
Table.prototype.Tag = {};
Table.prototype.Body = new TableBody();
Table.prototype.Rows = new RowArray();
Table.prototype.Type = "";

Table.prototype.Border = function (border) {
    ///<summary>(Property Function)Gets or sets the border for the table.</summary>
    ///<param name="border" type="Number">(Optional)The size of the border.</param>
    if (border === undefined) {
        return this.Type == Type.Array ? [] : 0;
    }

    return this;
}

Table.prototype.CellSpacing = function (cellSpacing) {
    ///<summary>(Property Function)Gets or sets the cell spacing for the table.</summary>
    ///<param name="cellSpacing" type="Number">(Optional)The amount of cell spacing for the table.</param>
    if (cellSpacing === undefined) {
        return 0;
    }

    return this;
}

Table.prototype.CellPadding = function (cellPadding) {
    ///<summary>(Property Function)Gets or sets the cell padding for the table.</summary>
    ///<param name="cellPadding" type="Number">(Optional)The amount of cell padding for the table.</param>
    if (cellPadding === undefined) {
        return 0;
    }
    return this;
}


Table.prototype.GridLines = function (gridLines) {
    ///<summary>(Property Function)Gets or sets the grid line visibility for the table.</summary>
    ///<param name="gridLines" type="GridLines">(Optional)The GridLine style for the table.</param>
    if (gridLines === undefined) { return this.Type == Type.Array ? [] : GridLines.Both; }
    return this;
};

function TableBody() {
    ///<summary>Represents the body of a table.</summary>
    ///<field name="Type" type="String">Returns Type.TableBody.</field>
    ///<field name="Rows" type="RowArray">Array of rows in the table body.</field>
}

TableBody.prototype.Classes = new ClassArray();
TableBody.prototype.IsMouseOver = false;
TableBody.prototype.OnClick = new UserEvent();
TableBody.prototype.OnDoubleClick = new UserEvent();
TableBody.prototype.OnMouseOut = new UserEvent();
TableBody.prototype.OnMouseOver = new UserEvent();
TableBody.prototype.OnMouseMove = new UserEvent();
TableBody.prototype.OnMouseDown = new UserEvent();
TableBody.prototype.OnMouseUp = new UserEvent();
TableBody.prototype.OnKeyDown = new UserEvent();
TableBody.prototype.OnKeyUp = new UserEvent();
TableBody.prototype.OnKeyPress = new UserEvent();
TableBody.prototype.OnContextMenu = new UserEvent();
TableBody.prototype.OnMouseWheel = new UserEvent();
TableBody.prototype.Type = "";
TableBody.prototype.Tag = {};
TableBody.prototype.Rows = new RowArray();
TableBody.prototype.Type = "";

function TableHead(id) {
    ///<summary>Creates a new table thead with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.TableHead.</field>
    ///<field name="Rows" type="RowArray">Array of rows in the table head.</field>
};

TableHead.prototype.Classes = new ClassArray();
TableHead.prototype.IsMouseOver = false;
TableHead.prototype.OnClick = new UserEvent();
TableHead.prototype.OnDoubleClick = new UserEvent();
TableHead.prototype.OnMouseOut = new UserEvent();
TableHead.prototype.OnMouseOver = new UserEvent();
TableHead.prototype.OnMouseMove = new UserEvent();
TableHead.prototype.OnMouseDown = new UserEvent();
TableHead.prototype.OnMouseUp = new UserEvent();
TableHead.prototype.OnKeyDown = new UserEvent();
TableHead.prototype.OnKeyUp = new UserEvent();
TableHead.prototype.OnKeyPress = new UserEvent();
TableHead.prototype.OnContextMenu = new UserEvent();
TableHead.prototype.OnMouseWheel = new UserEvent();
TableHead.prototype.Type = "";
TableHead.prototype.Tag = {};
TableHead.prototype.Rows = new RowArray();
TableHead.prototype.Type = "";

function TableFoot(id) {
    ///<summary>Creates a new table tfoot with the given id.</summary>
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
    ///<field name="Type" type="String">Returns Type.TableHead.</field>
    ///<field name="Rows" type="RowArray">Array of rows in the table foot.</field>
};

TableFoot.prototype.Classes = new ClassArray();
TableFoot.prototype.IsMouseOver = false;
TableFoot.prototype.OnClick = new UserEvent();
TableFoot.prototype.OnDoubleClick = new UserEvent();
TableFoot.prototype.OnMouseOut = new UserEvent();
TableFoot.prototype.OnMouseOver = new UserEvent();
TableFoot.prototype.OnMouseMove = new UserEvent();
TableFoot.prototype.OnMouseDown = new UserEvent();
TableFoot.prototype.OnMouseUp = new UserEvent();
TableFoot.prototype.OnKeyDown = new UserEvent();
TableFoot.prototype.OnKeyUp = new UserEvent();
TableFoot.prototype.OnKeyPress = new UserEvent();
TableFoot.prototype.OnContextMenu = new UserEvent();
TableFoot.prototype.OnMouseWheel = new UserEvent();
TableFoot.prototype.Type = "";
TableFoot.prototype.Tag = {};
TableFoot.prototype.Rows = new RowArray();
TableFoot.prototype.Type = "";

// TextArea
function TextArea(id) {
    ///<summary>Creates a new textarea input with the given id.</summary>
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
    ///<field name="OnTextChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the text of the element changes.</field>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.TextArea.</field>
};

TextArea.prototype.Classes = new ClassArray();
TextArea.prototype.IsMouseOver = false;
TextArea.prototype.OnClick = new UserEvent();
TextArea.prototype.OnDoubleClick = new UserEvent();
TextArea.prototype.OnMouseOut = new UserEvent();
TextArea.prototype.OnMouseOver = new UserEvent();
TextArea.prototype.OnMouseMove = new UserEvent();
TextArea.prototype.OnMouseDown = new UserEvent();
TextArea.prototype.OnMouseUp = new UserEvent();
TextArea.prototype.OnKeyDown = new UserEvent();
TextArea.prototype.OnKeyUp = new UserEvent();
TextArea.prototype.OnKeyPress = new UserEvent();
TextArea.prototype.OnContextMenu = new UserEvent();
TextArea.prototype.OnMouseWheel = new UserEvent();
TextArea.prototype.IsFocused = false;
TextArea.prototype.OnBlur = new UserEvent();
TextArea.prototype.OnFocus = new UserEvent();
TextArea.prototype.Type = "";
TextArea.prototype.Tag = {};
TextArea.prototype.OnTextChanged = new UserEvent();

TextArea.prototype.Columns = function (columns) {
    ///<summary>(Property Function)Gets or sets the columns of the textarea.</summary>
    ///<param name="columns" type="Number">(Optional)The amount of columns to display.</param>
    if (columns === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

TextArea.prototype.Rows = function (rows) {
    ///<summary>(Property Function)Gets or sets the rows of the textarea.</summary>
    ///<param name="rows" type="Number">(Optional)The amount of rows to display.</param>
    if (rows === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

// TextBox

function TextBox(id) {
    ///<summary>Creates a new textarea input with the given id.</summary>
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
    ///<field name="OnTextChanged" type="UserEvent">&lt;UserEvent&gt;Fired when the text of the element changes.</field>
    ///<field name="OnEnterKey" type="Event">(Event)Fired when the user hits the enter key.</field>
    ///<field name="IsFocused" type="Boolean">If the input has focus for user input, this is true.</field>
    ///<field name="OnBlur" type="UserEvent">&lt;UserEvent&gt;Fired when the input loses focus.</field>
    ///<field name="OnFocus" type="UserEvent">&lt;UserEvent&gt;Fired when the input obtains focus.</field>
    ///<field name="Type" type="String">Returns Type.TextBox.</field>
}

TextBox.prototype.Classes = new ClassArray();
TextBox.prototype.IsMouseOver = false;
TextBox.prototype.OnClick = new UserEvent();
TextBox.prototype.OnDoubleClick = new UserEvent();
TextBox.prototype.OnMouseOut = new UserEvent();
TextBox.prototype.OnMouseOver = new UserEvent();
TextBox.prototype.OnMouseMove = new UserEvent();
TextBox.prototype.OnMouseDown = new UserEvent();
TextBox.prototype.OnMouseUp = new UserEvent();
TextBox.prototype.OnKeyDown = new UserEvent();
TextBox.prototype.OnKeyUp = new UserEvent();
TextBox.prototype.OnKeyPress = new UserEvent();
TextBox.prototype.OnContextMenu = new UserEvent();
TextBox.prototype.OnMouseWheel = new UserEvent();
TextBox.prototype.IsFocused = false;
TextBox.prototype.OnBlur = new UserEvent();
TextBox.prototype.OnFocus = new UserEvent();
TextBox.prototype.Type = "";
TextBox.prototype.Tag = {};
TextBox.prototype.OnTextChanged = new UserEvent();
TextBox.prototype.OnEnterKey = new Event();


Password.prototype.MaxLength =
TextBox.prototype.MaxLength =
TextArea.prototype.MaxLength = function (max) {
    ///<summary>(Property Function)Sets the maximum length.</summary>
    ///<param name="max" type="Number">&lt;Optional;gt;Maximum length of the text field.</param>
    if (max === undefined) { return 0; }
    return this;
}

Password.prototype.Columns =
TextBox.prototype.Columns = function (columns) {
    ///<summary>(Property Function)Sets the size.</summary>
    ///<param name="size" type="Number">&lt;Optional;gt;Size of the text field.</param>
    if (columns === undefined) { return 0; }
    return this;
}

function Window(id) {
    ///<summary>Represents a pop up window. All fields must be set before displaying the window.</summary>
    ///<param name="id" type="String">Id to assign to the window.</param>
    ///<field name="ID" type="String">Id of the window</field>
    ///<field name="Width" type="Number">&lt;Default: 500&gt;Width of the window.</field>
    ///<field name="Height" type="Number">&lt;Default: 300&gt;Height of the window.</field>
    ///<field name="ShowMenuBar" type="Boolean">&lt;Default: false&gt;Hide or show the menu bar.</field>
    ///<field name="ShowAddressBar" type="Boolean">&lt;Default: false&gt;Hide or show the address bar.</field>
    ///<field name="ShowToolBar" type="Boolean">&lt;Default: false&gt;Hide or show the tool bar.</field>
    ///<field name="ShowStatusBar" type="Boolean">&lt;Default: false&gt;Hide or show the status bar.</field>
    ///<field name="ShowTitleBar" type="Boolean">&lt;Default: false&gt;Hide or show the title bar.</field>
    ///<field name="ShowScrollBars" type="Boolean">&lt;Default: false&gt;Hide or show the scroll bars.</field>
    ///<field name="X" type="Number">The x position to display the window.</field>
    ///<field name="Y" type="Number">The y position to display the window.</field>
    ///<field name="Type" type="String">Returns Type.Window</field>
    ///<field name="Object" type="DOMWindow">References to the window object.</field>
}

Window.prototype.ID = "";
Window.prototype.Width = 500;
Window.prototype.Height = 300;
Window.prototype.ShowMenuBar = false;
Window.prototype.ShowAddressBar = false;
Window.prototype.ShowToolBar = false;
Window.prototype.ShowScrollBars = true;
Window.prototype.ShowStatusBar = true;
Window.prototype.ShowTitleBar = true;
Window.prototype.Resizable = true;
Window.prototype.X = 0;
Window.prototype.Y = 0;
Window.prototype.Object = null;
Window.prototype.Type = Type.Window;

Window.prototype.Close = function () {
    ///<summary>Closes the pop up window.</summary>
    return this;
};

Window.prototype.Location = function (url) {
    ///<summary>(Property Function)Gets or sets the url location of the window.</summary>
    ///<param name="url" Type="String">(Optional)The url to set the window to.</param>
    if (url === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
}

Window.prototype.Show = function (url) {
    ///<summary>Shows the pop up window.</summary>
    ///<param name="url" type="String">(Optional)If provided, sets the url of the window after it has been shown.</param>
};

// Shared prototypes
Anchor.prototype.AddElement =
Body.prototype.AddElement =
Cell.prototype.AddElement =
Content.prototype.AddElement =
ContentButton.prototype.AddElement =
Div.prototype.AddElement =
ListItem.prototype.AddElement =
Span.prototype.AddElement = function (element) {
    ///<summary>Adds the element as a child of this.</summary>
    ///<param name="element" type="Element">Element to add.</param>
    return this;
};

Anchor.prototype.AddElements =
Body.prototype.AddElements =
Cell.prototype.AddElements =
Content.prototype.AddElements =
ContentButton.prototype.AddElements =
Div.prototype.AddElements =
ListItem.prototype.AddElements =
Span.prototype.AddElements = function (elements) {
    ///<summary>Adds the array of elements as children to this.</summary>
    ///<param name="element" type="Array">Array of elements to add.</param>
    return this;
};

Cell.prototype.AttributeHeight =
Header.prototype.AttributeHeight =
Table.prototype.AttributeHeight = function (height) {
    ///<summary>(Property Function)Gets or sets the height attribute of the table cell.</summary>
    ///<param name="height" type="Number">(Optional)The height to set the attribute height to.</param>
    if (height === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;

};

Cell.prototype.AttributeWidth =
Header.prototype.AttributeWidth =
Table.prototype.AttributeWidth = function (width) {
    ///<summary>(Property Function)Gets or sets the width attribute of the table cell.</summary>
    ///<param name="height" type="Number">(Optional)The width to set the attribute height to.</param>
    if (width === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Anchor.prototype.BackgroundColor =
Body.prototype.BackgroundColor =
Button.prototype.BackgroundColor =
Cell.prototype.BackgroundColor =
CheckBox.prototype.BackgroundColor =
DropDownList.prototype.BackgroundColor =
Content.prototype.BackgroundColor =
ContentButton.prototype.BackgroundColor =
Div.prototype.BackgroundColor =
Element.prototype.BackgroundColor =
FileUpload.prototype.BackgroundColor =
Header.prototype.BackgroundColor =
ImageElement.prototype.BackgroundColor =
Label.prototype.BackgroundColor =
List.prototype.BackgroundColor =
ListBox.prototype.BackgroundColor =
ListItem.prototype.BackgroundColor =
Password.prototype.BackgroundColor =
RadioButton.prototype.BackgroundColor =
Row.prototype.BackgroundColor =
Span.prototype.BackgroundColor =
Table.prototype.BackgroundColor =
TableBody.prototype.BackgroundColor =
TableFoot.prototype.BackgroundColor =
TableHead.prototype.BackgroundColor =
TextArea.prototype.BackgroundColor =
TextBox.prototype.BackgroundColor = function (color) {
    ///<summary>(Property Function)Gets or sets the background color.</summary>
    ///<param name="color" Type="String/Color/Colors">(Optional)The string, color object or Colors enumeration value to set the background color to.</param>
    if (color === undefined) { return this.Type == Type.Array ? [] : new Color(); }
    return this;
};

Anchor.prototype.Blur =
Button.prototype.Blur =
CheckBox.prototype.Blur =
DropDownList.prototype.Blur =
ContentButton.prototype.Blur =
FileUpload.prototype.Blur =
Input.prototype.Blur =
Password.prototype.Blur =
RadioButton.prototype.Blur =
TextArea.prototype.Blur =
TextBox.prototype.Blur = function () {
    ///<summary>Removes focus from the element.</summary>
    return this;
};

Anchor.prototype.Bold =
Body.prototype.Bold =
Button.prototype.Bold =
Cell.prototype.Bold =
CheckBox.prototype.Bold =
DropDownList.prototype.Bold =
Content.prototype.Bold =
ContentButton.prototype.Bold =
Div.prototype.Bold =
Element.prototype.Bold =
FileUpload.prototype.Bold =
Header.prototype.Bold =
ImageElement.prototype.Bold =
Label.prototype.Bold =
List.prototype.Bold =
ListBox.prototype.Bold =
ListItem.prototype.Bold =
Password.prototype.Bold =
RadioButton.prototype.Bold =
Row.prototype.Bold =
Span.prototype.Bold =
Table.prototype.Bold =
TableBody.prototype.Bold =
TableFoot.prototype.Bold =
TableHead.prototype.Bold =
TextArea.prototype.Bold =
TextBox.prototype.Bold = function (bold) {
    ///<summary>(Property Function)Gets or sets whether the element is bold.</summary>
    ///<param name="bold" type="Boolean">(Optional)Whether to bold the element.</param>
    if (bold === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Anchor.prototype.ClassName =
Body.prototype.ClassName =
Button.prototype.ClassName =
Cell.prototype.ClassName =
CheckBox.prototype.ClassName =
DropDownList.prototype.ClassName =
Content.prototype.ClassName =
ContentButton.prototype.ClassName =
Div.prototype.ClassName =
Element.prototype.ClassName =
FileUpload.prototype.ClassName =
Header.prototype.ClassName =
ImageElement.prototype.ClassName =
Label.prototype.ClassName =
List.prototype.ClassName =
ListBox.prototype.ClassName =
ListItem.prototype.ClassName =
Password.prototype.ClassName =
RadioButton.prototype.ClassName =
Row.prototype.ClassName =
Span.prototype.ClassName =
Table.prototype.ClassName =
TableBody.prototype.ClassName =
TableFoot.prototype.ClassName =
TableHead.prototype.ClassName =
TextArea.prototype.ClassName =
TextBox.prototype.ClassName = function (className) {
    ///<summary>(Property Function)Get or sets the class value for the element.</summary>
    ///<param name="className" type="String">(Optional)The class name to set the element to.</param>
    if (className === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

TextArea.prototype.Clear =
TextBox.prototype.Clear =
Password.prototype.Clear = function () {
    ///<summary>Clears the text from the input element.</summary>
    return this;
};

Anchor.prototype.ClearContent =
Body.prototype.ClearContent =
Cell.prototype.ClearContent =
Content.prototype.ClearContent =
ContentButton.prototype.ClearContent =
Div.prototype.ClearContent =
ListItem.prototype.ClearContent =
Span.prototype.ClearContent = function () {
    ///<summary>Removes all of the inner content.</summary>
    return this;
};

Anchor.prototype.Click =
Button.prototype.Click =
ContentButton.prototype.Click = function () {
    ///<summary>Simulates a user click on the element.</summary>
    return this;
};

Anchor.prototype.Collapsed =
Body.prototype.Collapsed =
Button.prototype.Collapsed =
Cell.prototype.Collapsed =
CheckBox.prototype.Collapsed =
DropDownList.prototype.Collapsed =
Content.prototype.Collapsed =
ContentButton.prototype.Collapsed =
Div.prototype.Collapsed =
Element.prototype.Collapsed =
FileUpload.prototype.Collapsed =
Header.prototype.Collapsed =
ImageElement.prototype.Collapsed =
Label.prototype.Collapsed =
List.prototype.Collapsed =
ListBox.prototype.Collapsed =
ListItem.prototype.Collapsed =
Password.prototype.Collapsed =
RadioButton.prototype.Collapsed =
Row.prototype.Collapsed =
Span.prototype.Collapsed =
Table.prototype.Collapsed =
TableBody.prototype.Collapsed =
TableFoot.prototype.Collapsed =
TableHead.prototype.Collapsed =
TextArea.prototype.Collapsed =
TextBox.prototype.Collapsed = function (collapsed) {
    ///<summary>(Property Function)Get or sets the collapsed state for the element. A collapsed element is neither visible nor takes up space.</summary>
    ///<param name="collapsed" type="Boolean">
    if (collapsed === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};



Anchor.prototype.Content =
Body.prototype.Content =
Cell.prototype.Content =
Content.prototype.Content =
ContentButton.prototype.Content =
ListItem.prototype.Content =
Span.prototype.Content = function (content) {
    ///<summary>(Property Function)Gets or sets the inner text/HTML of the element.</summary>
    ///<param name="text" type="String">(Optional)The inner HTML to give to the element.</param>

    if (content === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
}

Anchor.prototype.Cursor =
Body.prototype.Cursor =
Button.prototype.Cursor =
Cell.prototype.Cursor =
CheckBox.prototype.Cursor =
DropDownList.prototype.Cursor =
Content.prototype.Cursor =
ContentButton.prototype.Cursor =
Div.prototype.Cursor =
Element.prototype.Cursor =
FileUpload.prototype.Cursor =
Header.prototype.Cursor =
ImageElement.prototype.Cursor =
Label.prototype.Cursor =
List.prototype.Cursor =
ListBox.prototype.Cursor =
ListItem.prototype.Cursor =
Password.prototype.Cursor =
RadioButton.prototype.Cursor =
Row.prototype.Cursor =
Span.prototype.Cursor =
Table.prototype.Cursor =
TableBody.prototype.Cursor =
TableFoot.prototype.Cursor =
TableHead.prototype.Cursor =
TextArea.prototype.Cursor =
TextBox.prototype.Cursor = function (cursor) {
    ///<summary>(Property Function)Get or sets the cursor for the element.</summary>
    ///<param name="cursor" type="Cursor/String">(Optional)Cursor to set the style to.</param>
    if (cursor === undefined) { return this.Type == Type.Array ? [] : Cursor.Default; }
    return this;
};

Anchor.prototype.Displayed =
Body.prototype.Displayed =
Button.prototype.Displayed =
Cell.prototype.Displayed =
CheckBox.prototype.Displayed =
DropDownList.prototype.Displayed =
Content.prototype.Displayed =
ContentButton.prototype.Displayed =
Div.prototype.Displayed =
Element.prototype.Displayed =
FileUpload.prototype.Displayed =
Header.prototype.Displayed =
ImageElement.prototype.Displayed =
Label.prototype.Displayed =
List.prototype.Displayed =
ListBox.prototype.Displayed =
ListItem.prototype.Displayed =
Password.prototype.Displayed =
RadioButton.prototype.Displayed =
Row.prototype.Displayed =
Span.prototype.Displayed =
Table.prototype.Displayed =
TableBody.prototype.Displayed =
TableFoot.prototype.Displayed =
TableHead.prototype.Displayed =
TextArea.prototype.Displayed =
TextBox.prototype.Displayed = function () {
    ///<summary>Determines if the element is visible on the client at all..</summary>
    return this;
};

Anchor.prototype.ElementsByClassName =
Body.prototype.ElementsByClassName =
Cell.prototype.ElementsByClassName =
Content.prototype.ElementsByClassName =
ContentButton.prototype.ElementsByClassName =
Div.prototype.ElementsByClassName =
ListItem.prototype.ElementsByClassName =
Span.prototype.ElementsByClassName = function (className) {
    ///<summary>Returns child elements with the given class name.</summary>
    ///<param name="className" type="String">The class name to search form.</param>

    return [];
};

Anchor.prototype.Enabled =
Body.prototype.Enabled =
Cell.prototype.Enabled =
Content.prototype.Enabled =
Div.prototype.Enabled =
Element.prototype.Enabled =
Header.prototype.Enabled =
ImageElement.prototype.Enabled =
Label.prototype.Enabled =
List.prototype.Enabled =
ListBox.prototype.Enabled =
ListItem.prototype.Enabled =
Row.prototype.Enabled =
Span.prototype.Enabled =
Table.prototype.Enabled =
TableBody.prototype.Enabled =
TableFoot.prototype.Enabled =
TableHead.prototype.Enabled = function (enabled) {
    ///<summary>(Property Function)Gets or sets if the element is enabled.</summary>
    ///<param name="enabled" type="Boolean">(Optional)Whether the element is enabled.</param>

    if (enabled === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Button.prototype.Enabled =
CheckBox.prototype.Enabled =
DropDownList.prototype.Enabled =
ContentButton.prototype.Enabled =
FileUpload.prototype.Enabled =
Input.prototype.Enabled =
Password.prototype.Enabled =
RadioButton.prototype.Enabled =
TextBox.prototype.Enabled =
TextArea.prototype.Enabled = function (enabled) {
    ///<summary>(Property Function)Gets or sets the enabled state of the element.</summary>
    ///<param name="enabled" type="Boolean">(Optional)Whether the input element is enabled.</param>
    if (enabled === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Anchor.prototype.Focus =
Button.prototype.Focus =
CheckBox.prototype.Focus =
DropDownList.prototype.Focus =
ContentButton.prototype.Focus =
FileUpload.prototype.Focus =
Input.prototype.Focus =
Password.prototype.Focus =
RadioButton.prototype.Focus =
TextArea.prototype.Focus =
TextBox.prototype.Focus = function () {
    ///<summary>Places input focus on the element.</summary>
    return this;
};

Input.prototype.FocusNext = function () {
    ///<summary>Sets focus to the next form input element.</summary>
}

Input.prototype.FocusPrevious = function () {
    ///<summary>Sets focus to the previous form input element.</summary>
}

Anchor.prototype.ForegroundColor =
Body.prototype.ForegroundColor =
Button.prototype.ForegroundColor =
Cell.prototype.ForegroundColor =
CheckBox.prototype.ForegroundColor =
DropDownList.prototype.ForegroundColor =
Content.prototype.ForegroundColor =
ContentButton.prototype.ForegroundColor =
Div.prototype.ForegroundColor =
Element.prototype.ForegroundColor =
FileUpload.prototype.ForegroundColor =
Header.prototype.ForegroundColor =
ImageElement.prototype.ForegroundColor =
Label.prototype.ForegroundColor =
List.prototype.ForegroundColor =
ListBox.prototype.ForegroundColor =
ListItem.prototype.ForegroundColor =
Password.prototype.ForegroundColor =
RadioButton.prototype.ForegroundColor =
Row.prototype.ForegroundColor =
Span.prototype.ForegroundColor =
Table.prototype.ForegroundColor =
TableBody.prototype.ForegroundColor =
TableFoot.prototype.ForegroundColor =
TableHead.prototype.ForegroundColor =
TextArea.prototype.ForegroundColor =
TextBox.prototype.ForegroundColor = function (color) {
    ///<summary>(Property Function)Gets or sets the foreground color.</summary>
    ///<param name="value" Type="String/Color/Colors">(Optional)The string, color object or Colors enumeration value to set the foreground color to.</param>
    if (color === undefined) { return this.Type == Type.Array ? [] : new Color(); }
    return this;
};

Anchor.prototype.Height =
Body.prototype.Height =
Button.prototype.Height =
Cell.prototype.Height =
CheckBox.prototype.Height =
DropDownList.prototype.Height =
Content.prototype.Height =
ContentButton.prototype.Height =
Div.prototype.Height =
Element.prototype.Height =
FileUpload.prototype.Height =
Header.prototype.Height =
ImageElement.prototype.Height =
Label.prototype.Height =
List.prototype.Height =
ListBox.prototype.Height =
ListItem.prototype.Height =
Password.prototype.Height =
RadioButton.prototype.Height =
Row.prototype.Height =
Span.prototype.Height =
Table.prototype.Height =
TableBody.prototype.Height =
TableFoot.prototype.Height =
TableHead.prototype.Height =
TextArea.prototype.Height =
TextBox.prototype.Height = function (height) {
    ///<summary>(Property Function)Gets or sets the height of the element, obeying normal css style rules. If no height is set, returns the height of the element without padding, borders and marign.</summary>
    ///<param name="height" Type="Number/String">(Optional)As a number, sets the height in pixels. As a string, sets the height to the given value.</param>
    if (height === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Cell.prototype.HorizontalAlignment =
Header.prototype.HorizontalAlignment =
Row.prototype.HorizontalAlignment = function (hAlignment) {
    ///<summary>(Property Function)Gets or sets horizontal alignment of a table element.</summary>
    ///<param name="hAlignment" type="String">(Optional)The horizontal alignment of the table element.</param>
    if (hAlignment === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.HorizontalScrollPosition =
Body.prototype.HorizontalScrollPosition =
Cell.prototype.HorizontalScrollPosition =
Content.prototype.HorizontalScrollPosition =
ContentButton.prototype.HorizontalScrollPosition =
Div.prototype.HorizontalScrollPosition =
ListItem.prototype.HorizontalScrollPosition =
Span.prototype.HorizontalScrollPosition = function (position) {
    ///<summary>(Property Function)Gets or sets the horizontal scroll position of the element.</summary>
    ///<param name="position" type="Number">(Optional)The horizontal scroll position.</param>
    if (position === undefined) { return 0; }
    return this;
};

Anchor.prototype.HorizontalScrollToElement =
Body.prototype.HorizontalScrollToElement =
Cell.prototype.HorizontalScrollToElement =
Content.prototype.HorizontalScrollToElement =
ContentButton.prototype.HorizontalScrollToElement =
Div.prototype.HorizontalScrollToElement =
ListItem.prototype.HorizontalScrollToElement =
Span.prototype.HorizontalScrollToElement = function (element) {
    ///<summary>Horizontally scrolls to the child element.</summary>
    ///<param name="element" type="Element">The child element to scroll to.</param>
    return this;
};

Anchor.prototype.InsertElement =
Body.prototype.InsertElement =
Cell.prototype.InsertElement =
Content.prototype.InsertElement =
ContentButton.prototype.InsertElement =
Div.prototype.InsertElement =
ListItem.prototype.InsertElement =
Span.prototype.InsertElement = function (index, childElement) {
    ///<summary>Inserts the element at the specified index of child nodes.</summary>
    ///<param name="index" type="Number">Index of element to insert.</param>
    ///<param name="childElement" type="Element">Child element to insert.</param>

};

Anchor.prototype.InsertElementAfter =
Body.prototype.InsertElementAfter =
Cell.prototype.InsertElementAfter =
Content.prototype.InsertElementAfter =
ContentButton.prototype.InsertElementAfter =
Div.prototype.InsertElementAfter =
ListItem.prototype.InsertElementAfter =
Span.prototype.InsertElementAfter = function (element, childElement) {
    ///<summary>Inserts the element after the specified child element.</summary>
    ///<param name="element" type="Element">Element to insert.</param>
    ///<param name="childElement" type="Element">Child element to insert after.</param>

};

Anchor.prototype.InsertElementBefore =
Body.prototype.InsertElementBefore =
Cell.prototype.InsertElementBefore =
Content.prototype.InsertElementBefore =
ContentButton.prototype.InsertElementBefore =
Div.prototype.InsertElementBefore =
ListItem.prototype.InsertElementBefore =
Span.prototype.InsertElementBefore = function (element, childElement) {
    ///<summary>Inserts the element before the specified child element.</summary>
    ///<param name="element" type="Element">Element to insert.</param>
    ///<param name="childElement" type="Element">Child element to insert before.</param>

};

Anchor.prototype.Italic =
Body.prototype.Italic =
Button.prototype.Italic =
Cell.prototype.Italic =
CheckBox.prototype.Italic =
DropDownList.prototype.Italic =
Content.prototype.Italic =
ContentButton.prototype.Italic =
Div.prototype.Italic =
Element.prototype.Italic =
FileUpload.prototype.Italic =
Header.prototype.Italic =
ImageElement.prototype.Italic =
Label.prototype.Italic =
List.prototype.Italic =
ListBox.prototype.Italic =
ListItem.prototype.Italic =
Password.prototype.Italic =
RadioButton.prototype.Italic =
Row.prototype.Italic =
Span.prototype.Italic =
Table.prototype.Italic =
TableBody.prototype.Italic =
TableFoot.prototype.Italic =
TableHead.prototype.Italic =
TextArea.prototype.Italic =
TextBox.prototype.Italic = function (italic) {
    ///<summary>(Property Function)Gets or sets whether the element is italicized.</summary>
    ///<param name="italic" type="Boolean">(Optional)Whether to italicize the element.</param>
    if (italic === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Anchor.prototype.LayoutHeight =
Body.prototype.LayoutHeight =
Button.prototype.LayoutHeight =
Cell.prototype.LayoutHeight =
CheckBox.prototype.LayoutHeight =
DropDownList.prototype.LayoutHeight =
Content.prototype.LayoutHeight =
ContentButton.prototype.LayoutHeight =
Div.prototype.LayoutHeight =
Element.prototype.LayoutHeight =
FileUpload.prototype.LayoutHeight =
Header.prototype.LayoutHeight =
ImageElement.prototype.LayoutHeight =
Label.prototype.LayoutHeight =
List.prototype.LayoutHeight =
ListBox.prototype.LayoutHeight =
ListItem.prototype.LayoutHeight =
Password.prototype.LayoutHeight =
RadioButton.prototype.LayoutHeight =
Row.prototype.LayoutHeight =
Span.prototype.LayoutHeight =
Table.prototype.LayoutHeight =
TableBody.prototype.LayoutHeight =
TableFoot.prototype.LayoutHeight =
TableHead.prototype.LayoutHeight =
TextArea.prototype.LayoutHeight =
TextBox.prototype.LayoutHeight = function () {
    ///<summary>Returns the calculated layout height of the element including margins, padding and borders.</summary>
    return this.Type == Type.Array ? [] : 0;
};

Anchor.prototype.LayoutWidth =
Body.prototype.LayoutWidth =
Button.prototype.LayoutWidth =
Cell.prototype.LayoutWidth =
CheckBox.prototype.LayoutWidth =
DropDownList.prototype.LayoutWidth =
Content.prototype.LayoutWidth =
ContentButton.prototype.LayoutWidth =
Div.prototype.LayoutWidth =
Element.prototype.LayoutWidth =
FileUpload.prototype.LayoutWidth =
Header.prototype.LayoutWidth =
ImageElement.prototype.LayoutWidth =
Label.prototype.LayoutWidth =
List.prototype.LayoutWidth =
ListBox.prototype.LayoutWidth =
ListItem.prototype.LayoutWidth =
Password.prototype.LayoutWidth =
RadioButton.prototype.LayoutWidth =
Row.prototype.LayoutWidth =
Span.prototype.LayoutWidth =
Table.prototype.LayoutWidth =
TableBody.prototype.LayoutWidth =
TableFoot.prototype.LayoutWidth =
TableHead.prototype.LayoutWidth =
TextArea.prototype.LayoutWidth =
TextBox.prototype.LayoutWidth = function () {
    ///<summary>Returns the calculated layout width of the element including margins, padding and borders.</summary>
    return this.Type == Type.Array ? [] : 0;
};


Anchor.prototype.SnapTosTo =
Body.prototype.SnapTosTo =
Cell.prototype.SnapTosTo =
Content.prototype.SnapTosTo =
ContentButton.prototype.SnapTosTo =
Div.prototype.SnapTosTo =
ListItem.prototype.SnapTosTo =
Span.prototype.SnapTosTo = function (element) {
    ///<summary>Removes all the element's children and moves them to the given element.</summary>
    ///<param name="element" type="Element">The element to move this element's children to.</param>
    return this;
};

Anchor.prototype.Opacity =
Body.prototype.Opacity =
Button.prototype.Opacity =
Cell.prototype.Opacity =
CheckBox.prototype.Opacity =
DropDownList.prototype.Opacity =
Content.prototype.Opacity =
ContentButton.prototype.Opacity =
Div.prototype.Opacity =
Element.prototype.Opacity =
FileUpload.prototype.Opacity =
Header.prototype.Opacity =
ImageElement.prototype.Opacity =
Label.prototype.Opacity =
List.prototype.Opacity =
ListBox.prototype.Opacity =
ListItem.prototype.Opacity =
Password.prototype.Opacity =
RadioButton.prototype.Opacity =
Row.prototype.Opacity =
Span.prototype.Opacity =
Table.prototype.Opacity =
TableBody.prototype.Opacity =
TableFoot.prototype.Opacity =
TableHead.prototype.Opacity =
TextArea.prototype.Opacity =
TextBox.prototype.Opacity = function (opacity) {
    ///<summary>(Property Function)Gets or sets the opacity (0 to 1) of the element.</summary>
    ///<param name="opacity" type="Number">(Optional)The opacity level to set the element to.</param>
    if (opacity === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Anchor.prototype.Position =
Body.prototype.Position =
Button.prototype.Position =
Cell.prototype.Position =
CheckBox.prototype.Position =
DropDownList.prototype.Position =
Content.prototype.Position =
ContentButton.prototype.Position =
Div.prototype.Position =
Element.prototype.Position =
FileUpload.prototype.Position =
Header.prototype.Position =
ImageElement.prototype.Position =
Label.prototype.Position =
List.prototype.Position =
ListBox.prototype.Position =
ListItem.prototype.Position =
Password.prototype.Position =
RadioButton.prototype.Position =
Row.prototype.Position =
Span.prototype.Position =
Table.prototype.Position =
TableBody.prototype.Position =
TableFoot.prototype.Position =
TableHead.prototype.Position =
TextArea.prototype.Position =
TextBox.prototype.Position = function (position) {
    ///<summary>(Property Function)Gets or sets the position style of the element.</summary>
    ///<param name="position" type="String">(Optional)The position style to set the element to.</param>
    if (position === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.ReSnapTo =
Body.prototype.ReSnapTo =
Cell.prototype.ReSnapTo =
Content.prototype.ReSnapTo =
ContentButton.prototype.ReSnapTo =
Div.prototype.ReSnapTo =
ListItem.prototype.ReSnapTo =
Span.prototype.ReSnapTo = function (element) {
    ///<summary>Removes the child element from the parent.</summary>
    ///<param name="element" type="Element">Element to remove.</param>
    return this;
};

Anchor.prototype.ReSnapTos =
Body.prototype.ReSnapTos =
Cell.prototype.ReSnapTos =
Content.prototype.ReSnapTos =
ContentButton.prototype.ReSnapTos =
Div.prototype.ReSnapTos =
ListItem.prototype.ReSnapTos =
Span.prototype.ReSnapTos = function (elements) {
    ///<summary>Removes the child elements from the parent.</summary>
    ///<param name="elements" type="Array">Array of elements to remove.</param>
    return this;
};

Anchor.prototype.Style =
Body.prototype.Style =
Button.prototype.Style =
Cell.prototype.Style =
CheckBox.prototype.Style =
DropDownList.prototype.Style =
Content.prototype.Style =
ContentButton.prototype.Style =
Div.prototype.Style =
Element.prototype.Style =
FileUpload.prototype.Style =
Header.prototype.Style =
ImageElement.prototype.Style =
Label.prototype.Style =
List.prototype.Style =
ListBox.prototype.Style =
ListItem.prototype.Style =
Password.prototype.Style =
RadioButton.prototype.Style =
Row.prototype.Style =
Span.prototype.Style =
Table.prototype.Style =
TableBody.prototype.Style =
TableFoot.prototype.Style =
TableHead.prototype.Style =
TextArea.prototype.Style =
TextBox.prototype.Style = function (style, value) {
    ///<summary>(Property Function)Gets or sets a style of the element.</summary>
    ///<param name="style" type="Style/String">The style to get or set the value of.</param>
    ///<param name="value" type="String">(Optional)The value to set the style to.</param>
    if (style === undefined) return;
    if (value === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.SwapElements =
Body.prototype.SwapElements =
Cell.prototype.SwapElements =
Content.prototype.SwapElements =
ContentButton.prototype.SwapElements =
Div.prototype.SwapElements =
ListItem.prototype.SwapElements =
Span.prototype.SwapElements = function (element1, element2) {
    ///<summary>Swaps the position of the two child elements.</summary>
    ///<param name="element1" type="Element">First element to swap.</param>
    ///<param name="element2" type="Element">Second element to swap.</param>
};

Button.prototype.Text =
Password.prototype.Text =
TextArea.prototype.Text =
TextBox.prototype.Text = function (text) {
    ///<summary>(Property Function)Gets or sets the text of the element.</summary>
    ///<param name="text" type="String">(Optional)The text to set the element to.</param>
    if (text === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.Text =
Body.prototype.Text =
Cell.prototype.Text =
Content.prototype.Text =
ContentButton.prototype.Text =
Div.prototype.Text =
ListItem.prototype.Text =
Span.prototype.Text = function (text) {
    ///<summary>(Property Function)Gets or sets the raw text (HTML ignore) of the element.</summary>
    ///<param name="text" type="String">(Optional)The text to display in the elementt.</param>

    if (text === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.Toggle =
Body.prototype.Toggle =
Button.prototype.Toggle =
Cell.prototype.Toggle =
CheckBox.prototype.Toggle =
DropDownList.prototype.Toggle =
Content.prototype.Toggle =
ContentButton.prototype.Toggle =
Div.prototype.Toggle =
Element.prototype.Toggle =
FileUpload.prototype.Toggle =
Header.prototype.Toggle =
ImageElement.prototype.Toggle =
Label.prototype.Toggle =
List.prototype.Toggle =
ListBox.prototype.Toggle =
ListItem.prototype.Toggle =
Password.prototype.Toggle =
RadioButton.prototype.Toggle =
Row.prototype.Toggle =
Span.prototype.Toggle =
Table.prototype.Toggle =
TableBody.prototype.Toggle =
TableFoot.prototype.Toggle =
TableHead.prototype.Toggle =
TextArea.prototype.Toggle =
TextBox.prototype.Toggle = function (property, values) {
    ///<summary>Toggles the value of a property.</summary>
    ///<param name="property" type="String">&lt;Default: Collapsed&gt; The property to toggle. If value1 and value2 are left out, it assumes true and false values.</param>
    ///<param name="values" type="Object">(Optional)The array of values to toggle on.</param>
    return this;
}

Anchor.prototype.ToolTip =
Body.prototype.ToolTip =
Button.prototype.ToolTip =
Cell.prototype.ToolTip =
CheckBox.prototype.ToolTip =
DropDownList.prototype.ToolTip =
Content.prototype.ToolTip =
ContentButton.prototype.ToolTip =
Div.prototype.ToolTip =
Element.prototype.ToolTip =
FileUpload.prototype.ToolTip =
Header.prototype.ToolTip =
ImageElement.prototype.ToolTip =
Label.prototype.ToolTip =
List.prototype.ToolTip =
ListBox.prototype.ToolTip =
ListItem.prototype.ToolTip =
Password.prototype.ToolTip =
RadioButton.prototype.ToolTip =
Row.prototype.ToolTip =
Span.prototype.ToolTip =
Table.prototype.ToolTip =
TableBody.prototype.ToolTip =
TableFoot.prototype.ToolTip =
TableHead.prototype.ToolTip =
TextArea.prototype.ToolTip =
TextBox.prototype.ToolTip = function (text) {
    ///<summary>(Property Function)Gets or sets the tooltip of the element.</summary>
    ///<param name="text" type="String">(Optional)The text to display for the tool tip.</param>
    if (text === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Button.prototype.Clear =
CheckBox.prototype.Clear =
DropDownList.prototype.Clear =
ContentButton.prototype.Clear =
FileUpload.prototype.Clear =
Input.prototype.Clear =
Password.prototype.Clear =
RadioButton.prototype.Clear =
TextBox.prototype.Clear = function () {
    ///<summary>Clears the input of its value.</summary>
    return this;
}


Button.prototype.Value =
CheckBox.prototype.Value =
DropDownList.prototype.Value =
ContentButton.prototype.Value =
Input.prototype.Value =
Password.prototype.Value =
RadioButton.prototype.Value =
TextArea.prototype.Value =
TextBox.prototype.Value =
Input.prototype.Value = function (value) {
    ///<summary>(Property Function)Gets or sets the value property of the form field.</summary>
    ///<param name="value" type="String">(Optional)The value to set the form field to.</param>
    if (value === undefined) {
        return this.Type == Type.Array ? [] : "";
    }

    return this;
}

Cell.prototype.VerticalAlignment =
Header.prototype.VerticalAlignment =
Row.prototype.VerticalAlignment = function (vAlignment) {
    ///<summary>(Property Function)Gets or sets vertical alignment of a table element.</summary>
    ///<param name="hAlignment" type="String">(Optional)The vertical alignment of the table element.</param>
    if (vAlignment === undefined) { return this.Type == Type.Array ? [] : ""; }
    return this;
};

Anchor.prototype.VerticalScrollPosition =
Body.prototype.VerticalScrollPosition =
Cell.prototype.VerticalScrollPosition =
Content.prototype.VerticalScrollPosition =
ContentButton.prototype.VerticalScrollPosition =
Div.prototype.VerticalScrollPosition =
ListItem.prototype.VerticalScrollPosition =
Span.prototype.VerticalScrollPosition = function (position) {
    ///<summary>(Property Function)Gets or sets the vertical scroll position of the element.</summary>
    ///<param name="position" type="Number">(Optional)The vertical scroll position.</param>
    if (position === undefined) { return 0; }
    return this;
};

Anchor.prototype.VerticalScrollToElement =
Body.prototype.VerticalScrollToElement =
Cell.prototype.VerticalScrollToElement =
Content.prototype.VerticalScrollToElement =
ContentButton.prototype.VerticalScrollToElement =
Div.prototype.VerticalScrollToElement =
ListItem.prototype.VerticalScrollToElement =
Span.prototype.VerticalScrollToElement = function (element) {
    ///<summary>Vertically scrolls to the child element.</summary>
    ///<param name="element" type="Element">The child element to scroll to.</param>
    return this;
};


Anchor.prototype.Visible =
Body.prototype.Visible =
Button.prototype.Visible =
Cell.prototype.Visible =
CheckBox.prototype.Visible =
DropDownList.prototype.Visible =
Content.prototype.Visible =
ContentButton.prototype.Visible =
Div.prototype.Visible =
Element.prototype.Visible =
FileUpload.prototype.Visible =
Header.prototype.Visible =
ImageElement.prototype.Visible =
Label.prototype.Visible =
List.prototype.Visible =
ListBox.prototype.Visible =
ListItem.prototype.Visible =
Password.prototype.Visible =
RadioButton.prototype.Visible =
Row.prototype.Visible =
Span.prototype.Visible =
Table.prototype.Visible =
TableBody.prototype.Visible =
TableFoot.prototype.Visible =
TableHead.prototype.Visible =
TextArea.prototype.Visible =
TextBox.prototype.Visible = function (visible) {
    ///<summary>(Property Function)Gets or sets the visible state of the element. Not visible means the element isn't seen, but still takes up space.</summary>
    ///<param name="value" type="Boolean">(Optional)The visible state of the element.</param>
    if (visible === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};


Anchor.prototype.Width =
Body.prototype.Width =
Button.prototype.Width =
Cell.prototype.Width =
CheckBox.prototype.Width =
DropDownList.prototype.Width =
Content.prototype.Width =
ContentButton.prototype.Width =
Div.prototype.Width =
Element.prototype.Width =
FileUpload.prototype.Width =
Header.prototype.Width =
ImageElement.prototype.Width =
Label.prototype.Width =
List.prototype.Width =
ListBox.prototype.Width =
ListItem.prototype.Width =
Password.prototype.Width =
RadioButton.prototype.Width =
Row.prototype.Width =
Span.prototype.Width =
Table.prototype.Width =
TableBody.prototype.Width =
TableFoot.prototype.Width =
TableHead.prototype.Width =
TextArea.prototype.Width =
TextBox.prototype.Width = function (width) {
    ///<summary>(Property Function)Gets or sets the width of the element, obeying normal css style rules. If no width is set, returns the width of the element without padding, borders and marign.</summary>
    ///<param name="width" Type="Number/String">(Optional)As a number, sets the height in pixels. As a string, sets the width to the given value.</param>
    if (width === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Anchor.prototype.X =
Body.prototype.X =
Button.prototype.X =
Cell.prototype.X =
CheckBox.prototype.X =
DropDownList.prototype.X =
Content.prototype.X =
ContentButton.prototype.X =
Div.prototype.X =
Element.prototype.X =
FileUpload.prototype.X =
Header.prototype.X =
ImageElement.prototype.X =
Label.prototype.X =
List.prototype.X =
ListBox.prototype.X =
ListItem.prototype.X =
Password.prototype.X =
RadioButton.prototype.X =
Row.prototype.X =
Span.prototype.X =
Table.prototype.X =
TableBody.prototype.X =
TableFoot.prototype.X =
TableHead.prototype.X =
TextArea.prototype.X =
TextBox.prototype.X = function (x) {
    ///<summary>(Property Function)Gets or sets the x position of the element obeying css rules.</summary>
    ///<param name="x" type="Number">(Optional)X position in pixels.</param>
    if (x === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Anchor.prototype.Y =
Body.prototype.Y =
Button.prototype.Y =
Cell.prototype.Y =
CheckBox.prototype.Y =
DropDownList.prototype.Y =
Content.prototype.Y =
ContentButton.prototype.Y =
Div.prototype.Y =
Element.prototype.Y =
FileUpload.prototype.Y =
Header.prototype.Y =
ImageElement.prototype.Y =
Label.prototype.Y =
List.prototype.Y =
ListBox.prototype.Y =
ListItem.prototype.Y =
Password.prototype.Y =
RadioButton.prototype.Y =
Row.prototype.Y =
Span.prototype.Y =
Table.prototype.Y =
TableBody.prototype.Y =
TableFoot.prototype.Y =
TableHead.prototype.Y =
TextArea.prototype.Y =
TextBox.prototype.Y = function (y) {
    ///<summary>(Property Function)Gets or sets the y position of the element obeying css rules.</summary>
    ///<param name="y" type="Number">(Optional)Y position in pixels.</param>
    if (y === undefined) { return this.Type == Type.Array ? [] : 0; }
    return this;
};

Anchor.prototype.Underline =
Body.prototype.Underline =
Button.prototype.Underline =
Cell.prototype.Underline =
CheckBox.prototype.Underline =
DropDownList.prototype.Underline =
Content.prototype.Underline =
ContentButton.prototype.Underline =
Div.prototype.Underline =
Element.prototype.Underline =
FileUpload.prototype.Underline =
Header.prototype.Underline =
ImageElement.prototype.Underline =
Label.prototype.Underline =
List.prototype.Underline =
ListBox.prototype.Underline =
ListItem.prototype.Underline =
Password.prototype.Underline =
RadioButton.prototype.Underline =
Row.prototype.Underline =
Span.prototype.Underline =
Table.prototype.Underline =
TableBody.prototype.Underline =
TableFoot.prototype.Underline =
TableHead.prototype.Underline =
TextArea.prototype.Underline =
TextBox.prototype.Underline = function (underline) {
    ///<summary>(Property Function)Gets or sets whether the element is underlined.</summary>
    ///<param name="underline" type="Boolean">(Optional)Whether to underline the element.</param>
    if (underline === undefined) { return this.Type == Type.Array ? [] : true; }
    return this;
};

Anchor.Extensions = [];
Body.Extensions = [];
Button.Extensions = [];
Cell.Extensions = [];
CheckBox.Extensions = [];
DropDownList.Extensions = [];
ContentButton.Extensions = [];
Div.Extensions = [];
Element.Extensions = [];
FileUpload.Extensions = [];
Form.Extensions = [];
HiddenField.Extensions = [];
Header.Extensions = [];
ImageElement.Extensions = [];
Label.Extensions = [];
List.Extensions = [];
ListBox.Extensions = [];
ListItem.Extensions = [];
Password.Extensions = [];
RadioButton.Extensions = [];
Row.Extensions = [];
Span.Extensions = [];
Table.Extensions = [];
TextArea.Extensions = [];
TextBox.Extensions = [];

var Page = new Body();

function Extension(className, prototypeFunction) {
    ///<summary>Creates an extension to be applied to elements of the provided class name.</summary>
    ///<param name="className" type="String">The class to search for when applying extensions.</param>
    ///<param name="prototypeFunction">Function to be called to extend the element.</param>
}

$Array([]).c