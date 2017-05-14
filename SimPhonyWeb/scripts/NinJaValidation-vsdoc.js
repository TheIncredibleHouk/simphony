///<reference path="~/scripts/NinJa.js" />

var NinJaValidation = {
    Groups: new Dictionary(),
    EnableValidation: true
};

NinJaValidation.OnValidation = new Event();

function $ValidationEventArgs(id) {
    return new ValidationEventArgs();
}

function ValidationEventArgs() {
    this.ValidationResult = true;
}

NinJaValidation.RunValidation = function (id) {
    ///<summary>Run either a single set of validators or all validators, returning the validation result.</summary>
    ///<param name="id" type="String">&lt;Optional&gt; If provided, runs the validators of the specified element, otherwise runs all validators.</param>
    return true;
}



function Validator(element, funcDel) {
    ///<summary>Creates a new validator applied to the given element.</summary>
    ///<param name="element" type="Input">Input element to be validated.</param>
    ///<param name="funcDel" type="Function/Delegate">Function or delegate to execute for validation.</param>
    ///<field name="Enabled" type="Boolean">If true, allows the validator to run.</field>
    ///<field name="Class" type="String">Class applied to the message displayed if invalid.</field>
    ///<field name="Element" type="Input">Element to validate.</field>
    ///<field name="Function" type="Function/Delegate">Function or delegate used to validate the input field.</field>
    var s = new Span();
    s.Function = function () { };
    s.MinLength = 0;
    s.MaxLength = 0;
    s.LastValidationResult = false;
    return s;
}

Validator.prototype.Validate = function () {
    ///<summary>Runs the validator, returning false if invalid, true or undefined if valid.</summary>
    return true;
}

var AV = {};

AV.Required = function (e) {
    ///<summary>Validator that requires an input or selection.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.Number = function (e) {
    ///<summary>Validates a numerical input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredNumber = function (e) {
    ///<summary>Validates required numerical input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.Integer = function (e) {
    ///<summary>Validates integer input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredInteger = function (e) {
    ///<summary>Validates required integer input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.PositiveNumber = function (e) {
    ///<summary>Validates positive numerical input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredPositiveNumber = function (e) {
    ///<summary>Validates required positive numerical input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.PositiveInteger = function (e) {
    ///<summary>Validates positive integer input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredPositiveInteger = function (e) {
    ///<summary>Validates required positive integer input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.Date = function (e) {
    ///<summary>Validates date input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredDate = function (e) {
    ///<summary>Validates required date input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.Zip = function (e) {
    ///<summary>Validates zip code input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredZip = function (e) {
    ///<summary>Validates required zip code input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.TaxID = function (e) {
    ///<summary>Validates tax id input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredTaxID = function (e) {
    ///<summary>Validates required tax id input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.Phone = function (e) {
    ///<summary>Validates phone number input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredPhone = function (e) {
    ///<summary>Validates required phone number input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.Email = function (e) {
    ///<summary>Validates email input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

AV.RequiredEmail = function () {
    ///<summary>Validates required email input.</summary>
    ///<param name="e" type="Element">&lt;Optional&gt;Specific input to test.</param>
    return true;
};

Validator.Extensions = [];