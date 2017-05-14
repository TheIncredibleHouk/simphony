
var NinJaValidation = { Groups: new Dictionary(), AlphaNumRegX: /^[a-zA-Z0-9]+$/, ZipRegX: /^\d{5}(\-\d{4})?$/, TaxIDRegX: /^\d{2}\-?\d\-?\d{2}\-?\d{4}$/, PhoneRegX: /^(\(\d{3}\)|\d{3}\-?)\d{3}\-?\d{4}$/, EnableValidation: true, OnValidation: new Event() }; $ValidationEventArgs = $Array; NinJaValidation.Groups.Add("default", new ValidationGroup("default")); Type.Validator = Type.$++; Page.OnLoad.Add(function () { Page.Form.OnSubmit.Add(NinJaValidation.RunValidation); }); NinJaValidation.OnValidation = new Event(); NinJaValidation.__Group = function (v, g) {
    var gr = NinJaValidation.Groups[g]; if (gr == undefined) { NinJaValidation.Groups.Add(g, new ValidationGroup(g)); gr = NinJaValidation.Groups[g]; }
    gr.Validators.Add(v);
}; function ValidationGroup(n) { this.Validators = []; this.Enabled = true; this.Name = n; this.Summary = null; }
function ValidationEventArgs(result) { this.ValidationResult = result; }
NinJaValidation.RunValidation = function (id) {
    if (!NinJaValidation.EnableValidation) { return true; }
    var e = NinJa.Event; var invalids = []; var invalid = false; var b; NinJaValidation.Groups.ForEach(function (k) {
        var a = k.Value.Validators, v, l = a.length; if (id && id.Type == Type.String) {
            for (var i = 0; i < l; i++) {
                v = a[i]; if (v.Element.id == id) {
                    if (k.Value.Enabled) { b = v.Validate(); if (b === false) { invalid = true; invalids.Add(v); } }
                    else { v.Collapsed(true); } 
                } 
            } 
        }
        else {
            for (var i = 0; i < l; i++) {
                v = a[i]; if (k.Value.Enabled) { b = v.Validate(); if (b === false) { invalid = true; invalids.Add(v); } }
                else { v.Collapsed(true); } 
            } 
        }
        if (e.Type == Type.EventArgs) { e.Handled = invalid; }
        if (k.Value.Summary) { var sum = k.Value.Summary; sum.Content(sum.Message); invalids.ForEach(function (i) { i.Anchor.Content(i.__GMessage); sum.AddElement(i.Anchor); }); sum.Collapsed(invalids.length == 0); }
        invalids.Clear();
    }); ; NinJaValidation.OnValidation.Fire(new ValidationEventArgs(!invalid)); return !invalid;
}; $Validator = $Anchor; Span.Extensions.Add(new Extension("validator", Validator)); function Validator(e) {
    if (this.DOM === undefined) { return Validator.Inherit(Validator.Extend(new Span(e).ClassName("validator"))); }
    var $ = this, t; e = $.DOM; $.Enabled = true; $.MinLength = (e.getAttribute("minlength") || (e.getAttribute("required") || "false").ToBoolean() ? "1" : "0").ToInt(); $.MaxLength = (e.getAttribute("maxlength") || "10000000").ToInt(); $.__Group = e.getAttribute("group") || "default"; t = e.getAttribute("validates"); $.Anchor = new Anchor(); if (t) { $.Validates(t); }
    else { $.Validates(prevSibling($)); }
    var f = e.getAttribute("function"), v; if (f) {
        if (f == "Date") { v = AV.Date; }
        else { v = window[f]; if (!v) { v = AV[f]; } }
        $.__Function = v;
    }
    $.__GMessage = e.getAttribute("groupmessage") || $.Text(); $.LastValidationResult = false; $.Collapsed(true); NinJaValidation.__Group($, $.__Group); $.Type = Type.Validator;
}
Validator.prototype.Function = function (f) {
    var $ = this; if (f === undefined) { return $.__Function; }
    $.__Function = f; return this;
}; Validator.prototype.Group = function (g) {
    if (g === undefined) { return this.__Group; }
    if (this.__Group && NinJaValidation.Groups[this.__Group]) { NinJaValidation.Groups[this.__Group].Validators.Remove(this); }
    this.__Group = g; NinJaValidation.__Group(this, this.__Group); return this;
}; Validator.prototype.GroupMessage = function (m) {
    if (m === undefined)
        return this.__GMessage; else { this.__GMessage = m; return this; } 
}; Validator.prototype.Validates = function (e) {
    var $ = this; if (e === undefined) { return $.Element; }
    if (!$RadioButtonGroup(e)) { $.Element = $Element(e); }
    else { $.Element = $RadioButtonGroup(e); }
    $.Anchor.OnClick.Clear(); if (e) { $.Anchor.OnClick.Add(new Delegate($.Element.Focus, $.Element)); }
    return this;
}; Validator.prototype.Validate = function () {
    var t, disp; if (this.Element.Value) {
        if (this.Element.Type == Type.RadioButtonGroup) { disp = this.Element[0].Displayed(); }
        else { disp = this.Element.Displayed ? this.Element.Displayed() : true; } 
    }
    else { disp = true; }
    if (this.Enabled && disp) {
        if (this.Element.Value) {
            t = (this.Element.Value() || "").length; if (this.Element.Type == Type.CheckBox && this.MinLength > 0) { if (!this.Element.Checked()) { this.Collapsed(false); this.LastValidationResult = false; return false; } }
            else if (t < this.MinLength || t > this.MaxLength) { this.Collapsed(false); this.LastValidationResult = false; return false; } 
        }
        if (this.__Function) { if (this.__Function.apply(window, [this.Element]) === false) { this.Collapsed(false); this.LastValidationResult = false; return false; } } 
    }
    this.Collapsed(true); this.LastValidationResult = true; return true;
}; var AV = {}; AV.RegX = function (e, regx) { var v = e.Value(); return v.match(NinJaValidation[regx + "RegX"]) != null; }; AV.Number = function (e) { return e.Value().IsFloat(); }; AV.PositiveNumber = function (e) { return e.Value().IsFloat() && e.Value().ToFloat() > 0; }; AV.Integer = function (e) { return e.Value().IsInt(); }; AV.PositiveInteger = function (e) { return e.Value().IsInt() && e.Value().ToFloat() > 0; }; AV.NonnegativeInteger = function (e) { return e.Value().IsInt() && e.Value().ToFloat() >= 0; }; AV.Date = function (e) { return e.Value().IsDate(); }; AV.Zip = function (e) { return AV.RegX(e, "Zip"); }; AV.TaxID = function (e) { return AV.RegX(e, "TaxID"); }; AV.Phone = function (e) { return AV.RegX(e, "Phone"); }; AV.AlphaNumeric = function (e) { return AV.RegX(e, "AlphaNum"); }; AV.Currency = function (e) {
    var v = e.Value(); if (v.StartsWith("$")) { v = v.Remove("$"); }
    v = v.RemoveAll(","); return v.IsFloat() && v.ToFloat() >= 0;
}
AV.FutureDate = function (e) {
    var v = e.Value(); if (v.IsDate()) { v = v.ToDateTime(); return v > DateTime.Now(); }
    return false;
}
AV.TodayOrFutureDate = function (e) {
    var v = e.Value(); if (v.IsDate()) { v = v.ToDateTime(); var n = DateTime.Now(); return v.Ticks() >= new DateTime(n.Year(), n.Month(), n.Date()).Ticks(); }
    return false;
}
Div.Extensions.Add(new Extension("validatorsummary", ValidationSummary)); function ValidationSummary(e) {
    if (this.DOM === undefined) { return ValidationSummary.Inherit(ValidationSummary.Extend(new Div(e).ClassName("validatorsummary"))); }
    var $ = this; e = $.DOM; var g = e.getAttribute("group") || "default"; if (NinJaValidation.Groups[g]) { NinJaValidation.Groups[g].Summary = $; }
    $.Message = $.Content(); $.Collapsed(true);
}
Validator.Extensions = [new Extension("validator", Validator)]; function prevSibling(e) {
    e = e.DOM; if (e.previousElementSibling) { return e.previousElementSibling.$; }
    if (e.parentNode) {
        var i, c = e.parentNode.children, i, v, l = c.length; for (i = 0; i < l; i++) {
            if (c[i] == e) {
                if (i == 0) { return null; }
                return c[i - 1].$;
            } 
        } 
    } 
}