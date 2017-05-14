///<reference path="~/scripts/NinJa.js" />

var NinJaQuery = {};
Type.QueryClause = "QueryClause";
Type.Group = "Group";

var SortOrder = {};

SortOrder.Ascending = 0;
SortOrder.Descending = 1;

Anchor.prototype.Query =
Body.prototype.Query =
Cell.prototype.Query =
Content.prototype.Query =
ContentButton.prototype.Query =
Div.prototype.Query =
Header.prototype.Query =
Label.prototype.Query =
List.prototype.Query =
ListItem.prototype.Query =
Row.prototype.Query =
Span.prototype.Query =
Table.prototype.Query =
TableBody.prototype.Query =
TableFoot.prototype.Query =
TableHead.prototype.Query =
TextBox.prototype.Query = function (queryString) {
    ///<summary>Query's the element for the specified elements determined by the query string.</summary>
    ///<param name="queryString" type="String">Query string used to pull elements from the DOM.</param>
    return [];
};

Array.prototype.As = function (type) {
    ///<summary>Allows you to treat the entire instance as a single object, calling a function for each item in the array.</summary>
    ///<param type="type" type="Function">Type to treat each element in the array as.</param>
    for (var n in type.prototype) {
        this[n] = type.prototype[n];
    }

    return this;
};

function From(collection) {
    ///<summary>Starts a query clause on the collection to operate on.</summary>
    ///<param name="collection" type="Object/Array">Any object with a length property.</param>
    return new QueryClause(collection);
};

function QueryClause() {
};

QueryClause.prototype.Where = function (func) {
    ///<summary>Provides a conditional function to test each object in the query against.</summary>
    ///<param name="func" type="Function">Function that tests an object. Each object in the collection is passed as the first parameter.</param>
    delete this.Where;
    delete this.And;
    return this;
};

QueryClause.prototype.Select = function (property) {
    ///<summary>Calls the query, selecting all objects that meet the requirements provided to the query claue.</summary>
    ///<param name="property" type="String">&lt;Optional&gt;A specific field or property function to return as the array set, otherwise the entire object is returned.</param>
    return [];
};

Array.prototype.Distinct = function (property) {
    ///<summary>Returns all values that occur for the property provided.</summary>
    ///<param type="String" name="property">The property function or field to retrieve the value of.</param>
    return [];
};

Array.prototype.Index = function () {
    ///<summary>Creates a summary of all properties of all items in the array for quick searching in the Filter function.</summary>

    return this;
}

Array.prototype.Filter = function (value) {
    ///<summary>Returns all items in the array that has the value Contains any property in the object, case insensitive.</summary>
    ///<param name="value" type="String">The value to search for.</param>
}

Array.prototype.Sort = function (property, sortorder, ignoreCase) {
    ///<summary>Sorts the array in place (modifies the calling array) by the given property, if provided. A new array of the order the indices were arranged into is returned.</summary>
    ///<param name="property" type="String">&lt;Optional&gt;If provided, sorts the array based on the property or field value.</param>
    ///<param name="sortorder" type="SortOrder">&lt;Optional/Default: SortOrder.Ascending&gt;The order to sort the array by.</param>
    ///<param name="ignoreCase" type="Boolean">&lt;Optional/Default: false&gt;For string comparisons, setting this to true will ignore case when sorting.</param>
};

Array.prototype.Flatten = function () {
    ///<summary>Flattens an array of arrays into a single array.</summary>
    return [];
};

Array.prototype.Group = function (property) {
    ///<summary>Groups items of the array into a dictionary with the property value as the key.</summary>
    ///<param name="property" type="String">Property to group on.</param>
    return [new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", []), new Group("", "", [])];
}

Array.prototype.Sum = function () {
    ///<summary>If the array contains all numbers, the total sum of the numbers. Otherwise a string with all the objects concatenated together is returned.</summary>
    for (var i = 0; i < this.length; i++) {
        if (this[i].Type != Type.Number) {
            return "";
        }
    }

    return 0;
}

Array.prototype.RemoveRange = function (array) {
    ///<summary>Adds elements in the array to this array.</summary>
    ///<param name="array" type="Array">Array to add.</param>
}


Array.prototype.RemoveRange = function (array) {
    ///<summary>Removes elements in the array from this array.</summary>
    ///<param name="array" type="Array">Array to add.</param>
}

Array.prototype.Max = function () {
    ///<summary>Returns the highest value found in the array.</summary>
    return 0;
}

Array.prototype.Minimum = function () {
    ///<summary>Returns the  lowest value found in the array.</summary>
    return 0;
}


function Group(key, value, items) {
    this.Key = key;
    this.Value = value;
    this.Items = items;
}
