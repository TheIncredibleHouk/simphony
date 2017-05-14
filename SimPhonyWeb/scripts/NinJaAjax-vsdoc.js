///<reference path="/scripts/NinJa.js" />

Type.AjaxRequest = "AjaxRequest";
Type.AjaxEventArgs = "AjaxEventArgs";
Type.WebServiceRequest = "WebServiceRequest";

var Verb = {
    Get: "GET",
    Post: "POST",
    Delete: "DELETE"
};

var SerializationMethod = {
    None: 0,
    Raw: 1,
    UrlEncoded: 2,
    JSON: 3
};

var PostOptions = {};
PostOptions.None = 0;
PostOptions.IncludeASPEventFields = 1;
PostOptions.IncludeASPViewState = 2;

var NinJaAjax = {};

NinJaAjax.DefaultOnError = NinJaAjax.HandleError;
NinJaAjax.DefaultOnTimeOut = NinJaAjax.HandleTimeOut;

AjaxRequest.DefaultResponseObjectProperty = "d";
AjaxRequest.DefaultSerializationMethod = SerializationMethod.UrlEncoded;
AjaxRequest.DefaultDeserializationMethod = SerializationMethod.None;
AjaxRequest.DefaultParameters = new Dictionary();
AjaxRequest.SendCookies = false;
AjaxRequest.DefaultTimeOut = new TimeSpan(0, 1);
AjaxRequest.PreventCacheCalls = true;

WebServiceRequest.DefaultSerializationMethod = SerializationMethod.JSON;
WebServiceRequest.DefaultDeserializationMethod = SerializationMethod.JSON;
WebServiceRequest.DefaultParameters = new Dictionary();
WebServiceRequest.SendCookies = false;
WebServiceRequest.ServicesDirectory = "/Services/";
WebServiceRequest.DefaultResponseObjectProperty = "d";
WebServiceRequest.DefaultTimeOut = new TimeSpan(0, 1);
WebServiceRequest.PreventCacheCalls = true;

function AjaxEventArgs(ajaxRequest) {
    ///<summary>Represents an ajax result</summary>
    ///<field name="CancelEvent" type="Boolean">Whether to cancel the further firing of this event.</field>
    ///<field name="AjaxRequest" type="AjaxRequest">The request that fired the event.</field>
    ///<field name="ResponseCode" type="Number">The response code returned from the request.</field>
    ///<field name="ResponseText" type="String">The raw text returned from the response.</field>
    ///<field name="ResponseObject" type="Object">The deserialized object from the response, if applicable.</field>
}


function $AjaxEventArgs(object) {
    ///<summary>Treats the object as a AjaxeventArgs for intellisense.</summary>
    ///<param type="Object" name="object" >Object.</param>
    return new AjaxEventArgs();
}


AjaxEventArgs.prototype.CancelEvent = false;
AjaxEventArgs.prototype.AjaxRequest = new AjaxRequest();
AjaxEventArgs.prototype.ResponseCode = 0;
AjaxEventArgs.prototype.ResponseText = "";
AjaxEventArgs.prototype.ResponseObject = {};

function AjaxRequest(url) {
    ///<summary>Represents an ajax request to be made.</summary>
    ///<param name="url" type="String" optional="true" />
};

function $AjaxRequest(object) {
    ///<summary>Treats the object as a ajaxRequest for intellisense.</summary>
    ///<param type="Object" name="object" >Object.</param>
    return new AjaxRequest();
}

AjaxRequest.prototype.XMLHttpRequest = new XMLHttpRequest();
AjaxRequest.prototype.Url = "";
AjaxRequest.prototype.Parameters = new Dictionary();
AjaxRequest.prototype.ResponseObjectProperty = "";
AjaxRequest.prototype.SerializationMethod = "";
AjaxRequest.prototype.DeserializationMethod = "";
AjaxRequest.prototype.OnAbort = new Event();
AjaxRequest.prototype.OnTimeOut = new Event();
AjaxRequest.prototype.OnSend = new Event();
AjaxRequest.prototype.OnSuccess = new Event();
AjaxRequest.prototype.OnError = new Event();
AjaxRequest.prototype.Type = 0;
AjaxRequest.prototype.Tag = {};
AjaxRequest.prototype.TimeOut = new TimeSpan();
AjaxRequest.prototype.Verb = "";

AjaxRequest.prototype.Send = function (synchronous) {
    ///<summary>Calls the ajax request.</summary>
    ///<param name="synchronous" type="Boolean">&lt;Optional&gt;If true, the request is synchronous and the the response is returned to the caller.</field>
    if (synchronous) {
        return new AjaxEventArgs();
    }
};

function WebServiceRequest(service, funcName) {
    ///<summary>Represents an ajax request to be made.</summary>
    ///<param name="service" type="String" optional="true" />
    ///<param name="funcName" type="String" optional="true" />
    this.XMLHttpRequest = null;
    this.ResponseObjectProperty = WebServiceRequest.DefaultResponseObjectProperty;
    this.SerializationMethod = WebServiceRequest.DefaultSerializationMethod;
    this.DeserializationMethod = WebServiceRequest.DefaultDeserializationMethod;
    this.Url = "";
    this.Parameters = new Dictionary();
    this.Service = service;
    this.Function = funcName;
    this.OnAbort = new Event();
    this.OnSend = new Event();
    this.OnSuccess = new Event();
    this.OnError = new Event();
    this.OnTimeOut = new Event();
    this.Type = Type.WebServiceRequest;
    this.Tag = null;
    this.TimeOut = new TimeSpan();
    this.Verb = Verb.Post;
};

function $WebServiceRequest(object) {
    ///<summary>Treats the object as a WebServiceRequest for intellisense.</summary>
    ///<param type="Object" name="object" >Object.</param>
    return new WebServiceRequest;
}

WebServiceRequest.prototype.Send = function (synchronous) {
    ///<summary>Calls the web service request.</summary>
    ///<param name="synchronous" type="Boolean">&lt;Optional&gt;If true, the request is synchronous and the the response is returned to the caller.</field>
    if (synchronous) {
        return new AjaxEventArgs();
    }
};


AjaxRequest.prototype.Abort =
WebServiceRequest.prototype.Abort = function () {
    ///<summary>Aborts an Ajax call.</summary>
};

AjaxRequest.prototype.Post = function(element, postOptions){
    ///<summary>Send an ajax request with form fields to simulate a form post.</summary>
    ///<param name="element" type="Element" />
    ///<param name="postOptions" type="PostOptions" optional="true" />
};

NinJaAjax.JSONEncode = function (dictionary) {
    ///<summary>Converts the dictionary into a JSON encoded string.</summary>
    ///<param name="dictionary" type="Dictionary">The dictionary to convert.</param>
    return "";
};


NinJaAjax.UrlEncode = function (dictionary) {
    ///<summary>Converts the dictionary into a url encoded string.</summary>
    ///<param name="dictionary" type="Dictionary">The dictionary to convert.</param>
    return "";
};

WebServiceRequest.GenerateServiceReference = function (service) {
    ///<summary>Generates a reference to a service that can be reused.</summary>
    ///<param name="service" type="String">The name of the service."</param>
    window[service] = new ServiceReference();
};

function ServiceReference(service) {
    this.Service = service;
}

ServiceReference.prototype.AddCall = function (funcName, returnType, parameters) {
    ///<summary>Adds a call that can be made to the service.</summary>
    ///<param name="funcName" type="String">Name of the function on the serivce.</param>
    ///<param name="returnType" type="String">The type of objec returned by the service.</param>
    ///<param name="parameters" type="">All named arguments to the service.</param>
    var l = arguments.length;
    var a = [];
    for (var i = 2; i < l; i++) {
        a.push(arguments[i]);
    }

    a.push("onSuccess");
    a.push("onFail");
    a.push("return;");
    this[funcName + "Async"] = Function.constructor.apply(null, a);
    a.pop();
    a.pop();
    a.pop();
    if (returnType) {
        a.push("return new " + returnType + "();");
    }
    this[funcName] = Function.constructor.apply(null, a);
};