
var $AjaxRequest=$WebServiceRequest=$AjaxEventArgs=$Array;var NinJaAjax={Version:"1.1"};var Verb={Get:"GET",Post:"POST",Delete:"DELETE"}
Type.Request="AjaxRequest";Type.AjaxEventArgs="AjaxEventArgs";Type.WebServiceRequest="WebServiceRequest";NinJaAjax.CreateHttpObject=function(){xmlHttp=null;try{xmlHttp=new XMLHttpRequest();}
catch(e){try{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e){xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}}
xmlHttp.ID=AjaxRequest.__IDManager++;return xmlHttp;};NinJaAjax.JSONEncode=function(d){var o={};d.ForEach(function(i){o[i.Key]=i.Value;});return JSON.stringify(o);};NinJaAjax.UrlEncode=function(d){var output="";var first=true;d.ForEach(function(i){if(first){output+=i.Key.Encode()+"="+i.Value.Encode();first=false;}
else{output+="&"+i.Key.Encode()+"="+i.Value.Encode();}});return output;};NinJaAjax.HandleResponse=function(xrq,request,sync){var Ajax=request;if(Ajax.__Abort==true){return;}
if(xrq.readyState==4&&xrq.status>0){if(Ajax.__TimeOutObject){Ajax.__TimeOutObject.Stop();}
var ajArgs=new AjaxEventArgs(Ajax);ajArgs.ResponseText=xrq.responseText;if(xrq.status==200){switch(Ajax.DeserializationMethod){case SerializationMethod.Raw:ajArgs.ResponseObject=eval(ajArgs.ResponseText);break;case SerializationMethod.None:ajArgs.ResponseObject=null;break;case SerializationMethod.JSON:if(!xrq.responseText){ajArgs.ResponseObject=null;}
else{try{ajArgs.ResponseObject=JSON.parse(xrq.responseText);}
catch(e){if(Ajax.OnError.length>0){Ajax.OnError.Fire(ajArgs);}
else{NinJaAjax.DefaultOnError(ajArgs);}}}
if(ajArgs.ResponseObject!=null){if(Ajax.ResponseObjectProperty!=null){if(ajArgs.ResponseObject[Ajax.ResponseObjectProperty]!==undefined){ajArgs.ResponseObject=ajArgs.ResponseObject[Ajax.ResponseObjectProperty];NinJaAjax.ConvertDates(ajArgs.ResponseObject);}}
else{NinJaAjax.ConvertDates(ajArgs.ResponseObject);}}
break;}}
ajArgs.ResponseCode=xrq.status;if(xrq.status!=200){if(Ajax.OnError.length>0){Ajax.OnError.Fire(ajArgs);}
else{NinJaAjax.DefaultOnError(ajArgs);}}
else if(!sync){Ajax.OnSuccess.Fire(ajArgs);}
return ajArgs;}};NinJaAjax.HandleError=function(e){if(confirm("An error has occurred during your web request. Would you like to see detailed information?")){alert(e.ResponseText);}};NinJaAjax.HandleTimeOut=function(e){alert("The request to "+e.Request.Url+" timed out. Please try again.");};NinJaAjax.DefaultOnError=NinJaAjax.HandleError;NinJaAjax.DefaultOnTimeOut=NinJaAjax.HandleTimeOut;var SerializationMethod={None:0,Raw:1,UrlEncoded:2,JSON:3};AjaxRequest.DefaultResponseObjectProperty="d";AjaxRequest.DefaultSerializationMethod=SerializationMethod.UrlEncoded;AjaxRequest.DefaultDeserializationMethod=SerializationMethod.None;AjaxRequest.DefaultParameters=new Dictionary();AjaxRequest.SendCookies=false;AjaxRequest.DefaultTimeOut=new TimeSpan(0,1);AjaxRequest.PreventCacheCalls=true;var PostOptions={};PostOptions.None=0;PostOptions.IncludeASPEventFields=1;PostOptions.IncludeASPViewState=2;WebServiceRequest.DefaultSerializationMethod=SerializationMethod.JSON;WebServiceRequest.DefaultDeserializationMethod=SerializationMethod.JSON;WebServiceRequest.DefaultParameters=new Dictionary();WebServiceRequest.SendCookies=false;WebServiceRequest.ServicesDirectory="/Services/";WebServiceRequest.DefaultResponseObjectProperty="d";WebServiceRequest.DefaultTimeOut=new TimeSpan(0,1);WebServiceRequest.PreventCacheCalls=true;function AjaxEventArgs(ajaxRequest){this.CancelEvent=false;this.Type=Type.AjaxEventArgs;this.Request=ajaxRequest;this.ResponseCode=0;this.ResponseText=null;this.ResponseObject=null;}
function AjaxRequest(url){this.__Abort=false;this.XMLHttpRequest=null;this.Url=url==undefined?Page.Url:url;this.Parameters=new Dictionary();this.ResponseObjectProperty=AjaxRequest.DefaultResponseObjectProperty;this.SerializationMethod=AjaxRequest.DefaultSerializationMethod;this.DeserializationMethod=AjaxRequest.DefaultDeserializationMethod;this.OnAbort=new Event(this);this.OnError=new Event(this);this.OnSend=new Event(this);this.OnSuccess=new Event(this);this.OnTimeOut=new Event(this);this.PreventCacheCalls=AjaxRequest.PreventCacheCalls;this.Type=Type.AjaxRequest;this.Tag=null;this.TimeOut=AjaxRequest.DefaultTimeOut;this.Synchronous=false;this.Verb=Verb.Get;this.__TimeOutObject=null;};AjaxRequest.prototype.Send=function(synchronous){synchronous=synchronous||false;this.__Abort=false;this.XMLHttpRequest=NinJaAjax.CreateHttpObject();var me=this;AjaxRequest.DefaultParameters.ForEach(function(i){me.Parameters.Add(i.Key,i.Value);});var url=this.Url;if(this.PreventCacheCalls==true){if(!url.EndsWith("?")){url+="?";}
url+="&rgk="+DateTime.Now().Ticks();}
if(this.Verb==Verb.Get){if(!url.EndsWith("?")){url+="?";}
url+="&"+NinJaAjax.UrlEncode(this.Parameters);}
if(!synchronous){this.XMLHttpRequest.onreadystatechange=new Delegate(NinJaAjax.HandleResponse,null,[this.XMLHttpRequest,this]);}
this.XMLHttpRequest.open(this.Verb,url,!synchronous);if(NinJaAjax.SendCookies){if(document.cookie.length>0){this.XMLHttpRequest.setRequestHeader("Cookie",document.cookie);}}
this.XMLHttpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");switch(this.SerializationMethod){case SerializationMethod.JSON:this.XMLHttpRequest.setRequestHeader("Content-Type","application/json; charset=utf-8");this.XMLHttpRequest.send(NinJaAjax.JSONEncode(this.Parameters));break;case SerializationMethod.UrlEncoded:this.XMLHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");if(this.Verb==Verb.Post){this.XMLHttpRequest.send(NinJaAjax.UrlEncode(this.Parameters));}
else{this.XMLHttpRequest.send();}
break;}
if(synchronous){return NinJaAjax.HandleResponse(this.XMLHttpRequest,this,true);}
else{this.__TimeOutObject=Timer.Delay(this.TimeOut,new Delegate(this.__TimeOut,this));this.OnSend.Fire();}};function WebServiceRequest(service,funcName){this.__Abort=false;this.XMLHttpRequest=null;this.ResponseObjectProperty=WebServiceRequest.DefaultResponseObjectProperty;this.SerializationMethod=WebServiceRequest.DefaultSerializationMethod;this.DeserializationMethod=WebServiceRequest.DefaultDeserializationMethod;this.Url="";this.Parameters=new Dictionary();this.Service=service;this.Function=funcName;this.OnTimeOut=new Event(this);this.OnAbort=new Event(this);this.OnSend=new Event(this);this.OnSuccess=new Event(this);this.OnError=new Event(this);this.PreventCacheCalls=WebServiceRequest.PreventCacheCalls;this.Type=Type.WebServiceRequest;this.Tag=null;this.TimeOut=AjaxRequest.DefaultTimeOut;this.Verb=Verb.Post;this.Synchronous=false;};WebServiceRequest.prototype.Send=function(synchronous){synchronous=synchronous||false;this.__Abort=false;this.XMLHttpRequest=NinJaAjax.CreateHttpObject();if(!synchronous){this.XMLHttpRequest.onreadystatechange=new Delegate(NinJaAjax.HandleResponse,this.XMLHttpRequest,[this.XMLHttpRequest,this]);}
var s=WebServiceRequest.ServicesDirectory;if(!s.StartsWith("/")){s="/"+s;}
if(!s.EndsWith("/")){s+="/";}
this.Url=s+this.Service+".asmx/"+this.Function;var url=this.Url;if(this.PreventCacheCalls==true){if(!url.EndsWith("?")){url+="?";}
url+="&rgk="+DateTime.Now().Ticks();}
this.XMLHttpRequest.open(this.Verb,url,!synchronous);if(NinJaAjax.SendCookies){if(document.cookie.length>0){this.XMLHttpRequest.setRequestHeader("Cookie",document.cookie);}}
this.XMLHttpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");switch(this.SerializationMethod){case SerializationMethod.JSON:this.XMLHttpRequest.setRequestHeader("Content-Type","application/json; charset=utf-8");this.XMLHttpRequest.send(NinJaAjax.JSONEncode(this.Parameters));break;case SerializationMethod.UrlEncoded:this.XMLHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");this.XMLHttpRequest.send(NinJaAjax.UrlEncode(this.Parameters));break;}
if(synchronous){return NinJaAjax.HandleResponse(this.XMLHttpRequest,this,true);}
else{this.__TimeOutObject=Timer.Delay(this.TimeOut,new Delegate(this.__TimeOut,this));this.OnSend.Fire();}};AjaxRequest.prototype.Abort=WebServiceRequest.prototype.Abort=function(){this.__Abort=true;if(this.XMLHttpRequest){try{if(this.XMLHttpRequest.abort){this.XMLHttpRequest.abort();}}
catch(e){}
delete this.XMLHttpRequest;if(this.__TimeOutObject){this.__TimeOutObject.Stop();}}
if(this.OnAbort.length>0){this.OnAbort.Fire(new AjaxEventArgs(this));}};AjaxRequest.prototype.__TimeOut=WebServiceRequest.prototype.__TimeOut=function(){if(this.XMLHttpRequest!==null){try{this.XMLHttpRequest.abort();}
catch(e){}
delete this.XMLRequestRequest;}
if(this.OnTimeOut.length>0){this.OnTimeOut.Fire(new AjaxEventArgs(this));}
else{NinJaAjax.DefaultOnTimeOut(new AjaxEventArgs(this));}};AjaxRequest.prototype.Post=function(el,options){var element=el.Element||el;options=options||PostOptions.None;var current;var o=element.getElementsByTagName("input")
var l=o.length;var v,i;for(i=0;i<0;i++){v=o[i].$;switch(v.Type){case Type.TextBox:case Type.TextArea:this.Parameters.Add(v.Name(),v.Text());break;case Type.CheckBox:if(v.Checked()){this.Parameters.Add(v.Name(),"on");}
break;case Type.HiddenField:this.Parameters.Add(v.Name(),v.Value());break;}}
if(options.IsFlagged(PostOptions.IncludeASPEventFields)){if(!this.Parameters.ContainsKey("__EVENTTARGET")){this.Parameters.Add("__EVENTTARGET",$HiddenField("__EVENTTARGET").Value());}
if(!this.Parameters.ContainsKey("__EVENTARGUMENT")){this.Parameters.Add("__EVENTARGUMENT",$HiddenField("__EVENTARGUMENT").Value());}}
if(options.IsFlagged(PostOptions.IncludeASPViewState)){if(!this.Parameters.ContainsKey("__VIEWSTATE")){this.Parameters.Add("__VIEWSTATE",$HiddenField("__VIEWSTATE").Value());}}
o=element.getElementsByTagName("select");l=o.length;for(i=0;i<l;i++){v=o[i].$;this.Parameters.Add(v.Name(),v.SelectedValue());}
this.Send();};NinJaAjax.ConvertDates=function(object){if(!object){return;}
if(object.Type==Type.Array){var l=object.length;for(var i=0;i<l;i++){NinJaAjax.ConvertDates(object[i]);}}
for(var n in object){if(object[n]!==null){if(object[n]===undefined){object[n]="";}
else if(object[n].Type==Type.Array){NinJaAjax.ConvertDates(object[n]);}
else if(object[n].Type==Type.String){var a=object[n].match(/\/Date\((-?\d+)\)\//);if(a){object[n]=new DateTime(parseInt(a[1],10));}}}}}
WebServiceRequest.GenerateServiceReference=function(service){window[service]=new ServiceReference(service);};function ServiceReference(service){this.Service=service;}
ServiceReference.prototype.AddCall=function(func,parameters){var a=Array.From(arguments);a.RemoveAt(0);a.RemoveAt(0);this[func+"Async"]=new ServiceCall(this.Service,func,false,a);this[func]=new ServiceCall(this.Service,func,true,a);};function ServiceCall(service,func,sync,parameters){this.Parameters=parameters;this.Sync=sync;this.ServiceRequest=new WebServiceRequest(service,func);var f=function(){var v=arguments.callee.Service;var a=Array.From(arguments);var p=v.Parameters;var srp=v.ServiceRequest.Parameters;var l=a.length;var s=a[l-2];var f=a[l-1];v.ServiceRequest.OnSuccess.Clear();v.ServiceRequest.OnError.Clear();v.ServiceRequest.Abort();if(s||f){if(s&&(s.Type==Type.Function||s.Type==Type.Delegate)){v.ServiceRequest.OnSuccess.Add(s);v.ServiceRequest.OnError.Add(f);a.pop();a.pop();}
else if(f.Type==Type.Function||f.Type==Type.Delegate){v.ServiceRequest.OnSuccess.Add(f);a.pop();}}
var i;if(a.length>0&&a[0].Type==Type.Dictionary){v.ServiceRequest.Parameters=a[0];}
else{l=a.length;for(i=0;i<l;i++){srp[p[i]]=a[i];}}
if(v.Sync){return v.ServiceRequest.Send(v.Sync).ResponseObject;}
v.ServiceRequest.Send();};f.Service=this;return f;};