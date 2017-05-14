
$Tab=$TabItem=$TextBox;Type.Tab=Type.$++;Type.TabHeader=Type.$++;Type.TabItem=Type.$++;Div.Extensions.Add(new Extension("tab",Tab));var TabLayout={Top:"top",Bottom:"bottom",Left:"left",Right:"right"};function Tab(e){if(this.DOM===undefined){return Tab.Inherit(Tab.Extend(new Div(e).ClassName("tab")));}
var $=this;e=$.DOM;$.__SelectedItem=null;$.Container=new Div().ClassName("container").Height("100%");$.Header=new Div().ClassName("headerpanel");$.TabItems=new ObservableArray(e);var c=Array.From(e.children),i,v,l=c.length,s,t;for(i=0;i<l;i++){v=c[i];if(v.tagName=="DIV"){v=TabItem.Inherit(TabItem.Extend(v.$));$.TabItems.Add(v);if(v.DOM.parentNode){v.DOM.parentNode.removeChild(v.DOM);}
if(v.Header.DOM.parentNode){v.Header.DOM.parentNode.removeChild(v.Header.DOM);}
$.Header.AddElement(v.Header);$.Container.AddElement(v);}}
$.__TabLocation=(e.getAttribute("tablocation")||"top").toLowerCase();$.AddElements([$.Header,$.Container]);$.TabLocation($.__TabLocation);$.OnSelectionChanged=new Event();$.SelectedItem($.TabItems[0]);$.TabItems.OnChange.Add(new Delegate($.Update,$,[Delegate.Event]));}
Tab.prototype.Update=function(e){}
Tab.prototype.SelectedItem=function(t){if(t===undefined){return this.__SelectedItem;}
if(t==this.__SelectedItem){return;}
if(this.__SelectedItem){this.__SelectedItem.Header.Classes.Remove("selected");this.__SelectedItem.Header.Classes.Add("header");this.__SelectedItem.Collapsed(true);}
this.__SelectedItem=t;this.__SelectedItem.Header.Classes.Remove("header");this.__SelectedItem.Header.Classes.Add("selected");this.__SelectedItem.Collapsed(false);if(this.OnSelectionChanged.length>0){this.OnSelectionChanged.Fire(new EventArgs(this,this.__SelectedItem));}
return this;};Tab.prototype.TabLocation=function(l){if(l===undefined){return this.__TabLocation;}
this.__TabLocation=l;this.ReSnapTos([this.Header,this.Container]);var s;switch(l){case"top":this.Header.Style(Style.Display,"block");this.Container.Style(Style.Display,"block").Style(Style.Float,"");this.AddElements([this.Header,this.Container]).NaturalDisplay="block";s="inline-block";break;case"bottom":this.Header.Style(Style.Display,"block");this.Container.Style(Style.Display,"block").Style(Style.Float,"");this.AddElements([this.Container,this.Header]).NaturalDisplay="block";s="inline-block";break;case"left":this.Header.Style(Style.Display,"inline-block");this.Container.Style(Style.Display,"inline-block").NaturalDisplay="inline-block";this.AddElements([this.Header,this.Container]);s="block";break;case"right":this.Header.Style(Style.Display,"inline-block");this.Container.Style(Style.Display,"inline-block").NaturalDisplay="inline-block";this.AddElements([this.Container,this.Header]);s="block";break;}
var a=this.TabItems,l=a.length,i;for(i=0;i<l;i++){a[i].Header.Style(Style.Display,s).NaturalDisplay=s;}};function TabItem(e){if(this.DOM===undefined){return TabItem.Inherit(TabItem.Extend(new Div(e).ClassName("item")));}
var $=this;e=$.DOM;$.Style("zoom","1");$.Header=$.ElementsByClassName("header")[0];if(!$.Header){$.Header=new TabHeader().Text(e.getAttribute("header")||"");}
else{TabHeader.Inherit(TabHeader.Extend($.Header));}
$.__OEnabled=Element.prototype.Enabled;$.Header.OnClick.Add(new Delegate($.Selected,$,[true]));$.Collapsed(true);}
TabItem.prototype.Enabled=function(e){if(e===undefined){return this.__Enabled;}
this.__OEnabled(e);this.Header.Enabled(e);}
TabItem.prototype.Selected=function(s){var p=this.DOM.parentNode.parentNode.$;if(!p){return;}
if(s===undefined){return this==p.__SelectedItem;}
if(s===true){if(p.__SelectedItem!=this){p.SelectedItem(this);}}
else{if(p.__SelectedItem==this){p.SelectedItem(null);}}};TabItem.prototype.Shown=function(s){if(s===undefined){return!this.Header.Collapsed();}
if(this.Selected()){this.Collapsed(!s);}
this.Header.Collapsed(!s);return this;}
function TabHeader(e){if(this.DOM===undefined){return TabHeader.Inherit(TabHeader.Extend(new Div(e).ClassName("header")));}}