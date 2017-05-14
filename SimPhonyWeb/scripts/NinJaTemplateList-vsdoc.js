///<reference path="~/scripts/NinJaScript.js" />
///<reference path="~/scripts/NinJaBinding.js" />


function $TemplateList(id) {
    ///<summary>Returns the template list with the given id.</summary>
    ///<param type="String" name="id">Id of the template list.</summary>
    return new TemplateList();
}

function TemplateList(id) {
    ///<summary>Creates a new templated list with the given id.</summary>
    ///<param name="id" type="String">Id of the template list.</param>
    ///<field name="SelectedClass" type="String">The class to set selected template items to.</field>
    ///<field name="ItemClass" type="String">The class to set each template item to.</field>
    ///<field name="TemplateText" type="String">Templated text used to create items.</field>
    ///<field name="Data" type="ObservableArray">Array of data bound to the template list.</field>
    ///<field name="SelectedData" type="ObservableArray">Array of selected data.</field>
    ///<field name="EmptyText" type="String">Text to display when the data is empty.</field>
    ////<field name="Type" type="String">Returns Type.TemplateList</field>
    ///<field name="OnSelectionChanged" type="Event">&lt;Event&gt;Fired when the selected data changes.</field>

    Element(this);
    Content(this);

    this.SelectedClass = "";
    this.ItemClass = "";
    this.TemplateText = "";
    this.Data = new ObservableArray();
    this.SelectedData = new ObservableArray();
    this.EmptyText = "";
    this.Type = "";
    this.OnSelectionChanged = new Event();
    
}

TemplateList.prototype.Orientation = function (orientation) {
    ///<summary>&lt;Property Function&gt;Gets or sets the orientation of the template list. Values are "horizontal" and "vertical"</summary>
    ///<param name="orientation" type="String">&lt;Optional/Default: "vertical"&gt;The orientation of the items listed.</param>
    if (orientation === undefined) { return ""; }
    return this;
}

TemplateList.prototype.Bind = function (data) {
    ///<summary>Binds the data to the template list.</summary>
    ///<param name="data" type="Array">Array of data to bind to the template list.</param>
}

TemplateList.prototype.Refresh = function () {
    ///<summary>Refreshes the full display of the template list.</summary>
}