
var NinJaQuery={Version:"1.0"};Type.QueryClause=Type.$++;Type.Group=Type.$++;var SortOrder={};SortOrder.Ascending=0;SortOrder.Descending=1;Anchor.prototype.Query=Body.prototype.Query=Cell.prototype.Query=Content.prototype.Query=ContentButton.prototype.Query=Div.prototype.Query=Header.prototype.Query=Label.prototype.Query=List.prototype.Query=ListItem.prototype.Query=Row.prototype.Query=Span.prototype.Query=Table.prototype.Query=TableBody.prototype.Query=TableFoot.prototype.Query=TableHead.prototype.Query=TextBox.prototype.Query=function(q){var a=Array.From(this.DOM.querySelectorAll(q)),l=a.length,i;for(i=0;i<l;i++){a[i]=a[i].$||a[i];}
return a;}
Array.prototype.As=function(type){var v=type.prototype,v;for(n in v){this[n]=new CollectiveFunction(n);}
return this;};function CollectiveFunction(p){function f(){var v=[];var a=Array.From(arguments);var l=this.length;var w;for(var i=0;i<l;i++){w=this[i];v.Add(w[p].apply(w,a));}
if(arguments.length==1||p=="Style"){return this;}
return v;}
return f;}
function From(collection){return new QueryClause(collection);};function QueryClause(collection){this.WhereClause=null;if(collection.Type==Type.Array){this.Array=collection;}
else if(collection.Type==Type.Dictionary){var a=[];this.Array=a;collection.ForEach(function(i){a.Add(i);});}
else{this.Array=Array.From(collection);}
this.Type=Type.QueryClause;};QueryClause.prototype.Where=function(func){this.WhereClause=func;return this;};QueryClause.prototype.Select=function(property){var a=[];var propType;if(this.Array.length==0){return a;}
var c=this.Array;var l=c.length;var v;for(var i=0;i<l;i++){v=c[i];if(this.WhereClause){if(!this.WhereClause(v)){continue;}}
if(property){a.push(NinJa.EvalBind(property,v));}
else{a.push(v);}}
return a;};Array.prototype.Distinct=function(property){var a=[],i,l,v;var max=this.length;if(property==undefined){l=this.length;for(i=0;i<l;i++){v=this[i];if(!a.Contains(v)){a.Add(v);}}}
else{l=this.length;for(i=0;i<l;i++){v=NinJa.EvalBind(property,this[i]);if(!a.Contains(v)){a.push(v);}}}
return a;};Array.prototype.Index=function(){var l=this.length,i,p,v,k;for(i=0;i<l;i++){v=this[i];k="";for(p in v){k+=v[p].toString().toLowerCase();}
v.$Index=k;}
return this;}
Array.prototype.Filter=function(value){value=value.toLowerCase();var l=this.length,i,a=[];for(i=0;i<l;i++){v=this[i];if(v.$Index){if(v.$Index.Contains(value)){a.push(v);}}}
return a;}
Array.prototype.Sort=function(property,sortorder,ignoreCase){if(this.length==0)return;sortorder=sortorder===undefined?SortOrder.Ascending:sortorder;if(property){this.sort(function(a,b){v1=NinJa.EvalBind(property,a);v2=NinJa.EvalBind(property,b);if((v1===null||v1===undefined)||(v2===null||v2===undefined)){if((v1===null||v1===undefined)&&(v2!==null&&v2!==undefined)){return sortorder==SortOrder.Descending?-1:1;}
else if((v1!==null||v1!==undefined)&&!(v2===null||v2===undefined)){return sortorder==SortOrder.Descending?1:-1;}
return 0;}
return sortorder==SortOrder.Descending?v1.Compare(v2)*-1:v1.Compare(v2);});}
else if(ignoreCase){this.sort(function(a,b){v1=NinJa.EvalBind(property,a).toLowerCase();v2=NinJa.EvalBind(property,b).toLowerCase();if((v1===null||v1===undefined)||(v2===null||v2===undefined)){if((v1===null||v1===undefined)&&(v2!==null&&v2!==undefined)){return sortorder==SortOrder.Descending?-1:1;}
else if((v1!==null||v1!==undefined)&&!(v2===null||v2===undefined)){return sortorder==SortOrder.Descending?1:-1;}
return 0;}
return sortorder==SortOrder.Descending?v1.Compare(v2)*-1:v1.Compare(v2);});}
else{this.sort(function(a,b){var v1=a;var v2=b;if((v1===null||v1===undefined)||(v2===null||v2===undefined)){if((v1===null||v1===undefined)&&(v2!==null&&v2!==undefined)){return sortorder==SortOrder.Descending?-1:1;}
else if((v1!==null||v1!==undefined)&&!(v2===null||v2===undefined)){return sortorder==SortOrder.Descending?1:-1;}
return 0;}
return sortorder==SortOrder.Descending?v1.Compare(v2)*-1:v1.Compare(v2);});}};Array.prototype.Flatten=function(){var a=[];var v,k;var l=this.length;for(var i=0;i<l;i++){v=this[i];k=v.length;for(var j=0;j<k;j++){a.push(v[j]);}}
return a;};Array.prototype.Sum=function(){var i=0;var r=0;var isString=false;var l=this.length;var v;for(i=0;i<l;i++){v=this[i];if(v.Type==Type.String){isString=true;break;}
r+=v;}
if(isString){r="";for(i=0;i<l;i++){r+=a[i];}}
return r;}
Array.prototype.Set=function(property,value){var l=this.length;var v,w;for(var i=0;i<l;i++){v=this[i];w=v[property];if(w.Type==Type.Function){v[property](value);}
else{v[property]=value;}}}
Array.prototype.Max=function(array){return Math.max.apply(array);}
Array.prototype.Minimum=function(array){return Math.min.apply(array);}
Array.prototype.Group=function(property){var a={};var l=this.length;var v,w,i
for(i=0;i<l;i++){v=this[i];w=NinJa.EvalBind(property,v);if(!a[w]){a[w]=new Group(property,w,[]);}
a[w].Items.Add(v);};var b=[];for(i in a){b.Add(a[i]);}
return b;}
function Group(key,value,items){this.Key=key;this.Value=value;this.Items=items;this.Type=Type.Group;}