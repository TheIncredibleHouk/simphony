///<reference path="~/scripts/NinJaScript.js" />
///<reference path="~/scripts/NinJaBinding.js" />

Div.Extensions.Add(new Extension("templatelist", TemplateList));

Type.TemplateList = "TemplateList";
$TemplateList = $Anchor;

function TemplateList(e) {
    if (this.DOM === undefined) {
        return TemplateList.Inherit(TemplateList.Extend(new Div(e).ClassName("templatelist")));
    }

    var $ = this, i;
    e = $.DOM;
    $.__Orientation = e.getAttribute("orientation") || "vertical";
    $.SelectedClass = e.getAttribute("selectedclass") || "selected";
    $.EmptyText = e.getAttribute("emptytext") || "";
    $.ItemClass = e.getAttribute("itemclass") || "item";
    var removeText = [];
    for (i = 0; i < e.childNodes.length; i++) {
        if (!e.childNodes[i].tagName) {
            removeText.push(e.childNodes[i]);
        }
    }

    for (i = 0; i < removeText.length; i++) {
        e.removeChild(removeText[i]);
    }

    $.TemplateText = $.Content();
    $.TemplateText.Type = undefined;
    $.ClearContent();
    $.TemplateTable = new Table().CellSpacing(0).CellPadding(0).Border(0);
    $.AddElement($.TemplateTable);

    $.__CachedTemplate = [];
    $.__ListContainer;
    $.__TemplateItems = new Dictionary();
    $.__Generator = new Div();

    switch ($.__Orientation) {
        case "vertical":
            $.__ListContainer = $.TemplateTable.Rows;
            $.TemplateTable.AttributeWidth("100%");
            break;

        case "horizontal":
            $.TemplateTable.Rows.Add(new Row());
            $.__ListContainer = $.TemplateTable.Rows[0].Cells;
            $.TemplateTable.AttributeHeight("100%");
            break;

        case "tile":
            $.TemplateTable.Rows.Add(new Row());
            $.__ListContainer = $.TemplateTable.Rows[0].Cells;
            break;
    }
    
    for (i= 0; i < 10; i++) {
        var c = new Cell();
        var d = new Delegate($.__ItemClick, $, [i]);
        c.OnClick.Add(d);
        c.OnContextMenu.Add(d);
        if ($.__Orientation == "vertical") {
            var r = new Row();
            r.Cells.Add(c);
            c = r;
        }

        $.__CachedTemplate.Add(c);
    }

    $.Data = new ObservableArray();
    var d = new Delegate($.__ItemsChanged, $, [Delegate.Event]);
    $.Data.OnChange.Add(d);
    
    $.SelectedData = new ObservableArray();
    d = new Delegate($.__SelectionChanged, $, [Delegate.Event]);
    $.SelectedData.OnChange.Add(d);
    $.OnSelectionChanged = new Event();
    
    $.Type = Type.TemplateList;
}

TemplateList.prototype.__SelectionChanged = function (e) {
    var me = this;
    switch (e.ModificationType) {
        case ModificationType.Add:
            e.Objects.ForEach(function (i) {
                me.__TemplateItems[i.__LC].Classes.Add(me.SelectedClass);
            });
            break;

        case ModificationType.Remove:
            e.Objects.ForEach(function (i) {
                me.__TemplateItems[i.__LC].Classes.Remove(this.SelectedClass);
            });
            break;

        case ModificationType.Clear:
            e.Objects.ForEach(function (i) {
                me.__TemplateItems[i.__LC].Classes.Remove(this.SelectedClass);
            });
            break;
    }
}

TemplateList.prototype.__ItemsChanged = function (e) {
    this.SelectedData.Updating = true;
    var me = this;
    e.Objects.ForEach(function (i) {
        if (me.SelectedData.Contains(i)) {
            me.SelectedData.Remove(i);
        }
    });

    this.SelectedData.Updating = false;
    this.Refresh();
}

TemplateList.prototype.__ItemClick = function (c) {
    if (this.Data.length == 0) { return; }
    this.SelectedData.Clear();
    this.SelectedData.Add(this.Data[c]);
    if (this.OnSelectionChanged.length > 0) {
        this.OnSelectionChanged.Fire(new EventArgs(this));
    }
}

TemplateList.prototype.__CheckCache = function () {
    if (this.__CachedTemplate.length < this.Data.length) {
        for (var i = this.__CachedTemplate.length; i < this.Data.length; i++) {
            var c = new Cell();
            c.OnClick.Add(new Delegate(this.__ItemClick, this, [i]));
            if (this.__Orientation == "vertical") {
                var r = new Row();
                r.Cells.Add(c);
                c = r;
            }

            this.__CachedTemplate.Add(c);
        }
    }
}

TemplateList.prototype.Orientation = function (orientation) {
    if (orientation === undefined) { return this.__Orientation; }
    this.__Orientation = orientation;
    if (this.__Orientation == "vertical") {
        this.TemplateTable.Rows[0].Cells.Clear();
        this.__ListContainer = this.TemplateTable.Rows;
        this.TemplateTable.AttributeWidth("100%");
        this.TemplateTable.AttributeHeight("");
    }
    else {
        this.TemplateTable.Rows.Clear();
        this.TemplateTable.Rows.Add(new Row());
        this.__ListContainer = e.TemplateTable.Rows[0].Cells;
        this.TemplateTable.AttributeWidth("");
        this.TemplateTable.AttributeHeight("100%");
    }

    this.Bind(this.Data);
}

TemplateList.prototype.Bind = function (data) {
    var me = this;
    this.Data.Updating = true;
    this.Data.Clear();

    if (data) {
        data.ForEach(function (i) {
            me.Data.Add(i);
        });
    }

    this.Data.Updating = false;
    this.SelectedData.Updating = true;
    this.SelectedData.Clear();
    this.SelectedData.Updating = false;
    this.Refresh();
}

TemplateList.Tracker = 0;

TemplateList.prototype.Refresh = function () {
    var me = this;
    var ge;
    this.__ListContainer.Clear();
    this.__CheckCache();
    this.__TemplateItems.Clear();

    if (this.Data.length == 0) {
        if (this.__Orientation == "vertical") {
            this.__CachedTemplate[0].Cells[0].ClearContent().AddElement(this.EmptyText);
        }
        else {
            this.__CachedTemplate[0].ClearContent().AddElement(this.EmptyText);
        }
        this.__ListContainer.Add(this.__CachedTemplate[0]);
        return;
    }

    this.Data.ForEach(function (i, e) {
        if(!i.__LC){ i.__LC = TemplateList.Tracker++; }
        ge = me.GenerateItem(i);
        ge.Classes.Add(me.ItemClass);
        if (me.__Orientation == "vertical") {
            me.__CachedTemplate[e.Index].Cells[0].ClearContent().AddElement(ge);
        }
        else {
            me.__CachedTemplate[e.Index].ClearContent().AddElement(ge);
        }

        me.__ListContainer.Add(me.__CachedTemplate[e.Index]);
        me.__TemplateItems.Add(i.__LC, ge);

        if (me.SelectedData.Contains(i)) {
            me.__TemplateItems[i.__LC].Classes.Add(me.SelectedData);
        }
    });
}

TemplateList.prototype.GenerateItem = function (item) {

    var text = this.TemplateText;
    if (item == null) {
        text = text.replace(/\{[^\{\r\n]*\}/i, "");
    }
    else {
        var reg = /\{[A-Za-z\.]*}/i;
        var property = reg.exec(text);


        while (property != null) {
            var p = property[0].Remove("{").Remove("}").Split(".");
            var v = item;
            p.ForEach(function (i) {
                if (v[i]) {
                    if (v[i].Type != Type.Function) {
                        v = v[i];
                    }
                    else {
                        v = v[i]();
                    }
                }
                else {
                    v = v[i];
                }
            });

            text = text.Replace(property, v);
            property = reg.exec(text);
        }
    }

    this.__Generator.Content(text);
    var e = $Element(this.__Generator.children[0]);
    this.__Generator.ReSnapTo(e);
    e.style.cursor = "pointer";
    return e;
}