
Type.MenuItem=Type.$++;Type.Menu=Type.$++;Type.ContextMenu=Type.$++;Type.MenuCheckItem=Type.$++;Type.MenuIcon=Type.$++;NinJa.Mapper.Add("MENU",List);List.Extensions=[new Extension("menu",Menu),new Extension("contextmenu",ContextMenu)];var MenuLayout={Vertical:"vertical",Horizontal:"horizontal"}
$MenuCheckItem=$ContextMenu=$Menu=$MenuItem=$Anchor;function Menu(e){if(this.DOM===undefined){return Menu.Inherit(Menu.Extend(new List(e).ClassName("menu")));}
var $=this;e=this.DOM;$.__ChildClass=e.getAttribute("submenuclass")||"submenu";$.__Effect=null;$.__SafeClip=e.getAttribute("safeclip");if(!$.__SafeClip){if(e.parentNode.parentNode!==null){$.__SafeClip=e.parentNode.parentNode.$.__SafeClip!==undefined?e.parentNode.parentNode.$.__SafeClip.toString():"true";}
else{$.__SafeClip="true";}}
else{$.__SafeClip="true";}
$.__SafeClip=$.__SafeClip.ToBoolean();$.Items=new ObservableArray($);$.IsRoot=!e.parentNode||e.parentNode.tagName!="LI";var isCtx=$.Classes.Contains("contextmenu");if($.IsRoot){$.__EffectTmp=e.getAttribute("effect")||"none";}
var y,z;y=e;z=e.parentNode;if(z){while(z.tagName=="MENU"||z.tagName=="LI"){y=z;z=z.parentNode;}}
$.Root=y.$;$.ParentItem=null;$.__Layout=e.getAttribute("layout")||($.IsRoot&&!isCtx?MenuLayout.Horizontal:MenuLayout.Vertical);$.Style(Style.PaddingLeft,"0px").Style(Style.Margin,"0px").Style("zoom","1").Style(Style.Display,"inline-block").Style(Style.ListStyleType,"none");$.Type=Type.Menu;$.__ShowDelegate=new Delegate($.Show,$);$.__HideDelegate=new Delegate($.Hide,$,[true]);$.__HideDelegate2=new Delegate($.__Hide,$);$.__HideDelegate3=new Delegate($.Hide,$);if(!$.IsRoot){$.NaturalDisplay="block";$.ParentItem=e.parentNode.$;$.OnMouseOut.Add($.__HideDelegate2);Page.OnClick.Add($.__HideDelegate3);$.Style(Style.ZIndex,NinJaVisuals.ZIndex++)}
else if(isCtx){$.NaturalDisplay="block";$.__Effect=new Effect($,$.Root.__EffectTmp,0,0,Speed.Fastest,Smoothness.Normal);Page.OnClick.Add($.__HideDelegate3);$.Style(Style.ZIndex,NinJaVisuals.ZIndex++)}
else{$.NaturalDisplay="inline-block";}
if(!isCtx){$.__HideTimer=new Timer(500,false);$.__ShowTimer=new Timer(500,false);$.__HideTimer.OnTrigger.Add(new Delegate($.Hide,$));$.__ShowTimer.OnTrigger.Add(new Delegate($.Show,$));}
var m,a=Array.From(e.children),v,l=a.length,i;for(i=0;i<l;i++){v=a[i];if(v.tagName=="LI"){v=v.$;if(v.Classes.Contains("check")){m=MenuCheckItem.Inherit(MenuCheckItem.Extend(v));if($.IsRoot&&!isCtx){m.Icon.Collapsed(true);}
if(!m.__Submenu){m.OnClick.Add($.__HideDelegate);}}
else if(v.Classes.Contains("separator")){m=new Separator();m.ParentMenu=$;e.replaceChild(m.DOM,v.DOM);}
else{m=MenuItem.Inherit(MenuItem.Extend(v));if($.IsRoot&&!isCtx){m.Icon.Collapsed(true);}
if(!m.__Submenu){m.OnClick.Add($.__HideDelegate);}}
v.Style("display",$.__Layout==MenuLayout.Horizontal?"inline-block":"block").Style("zoom","1");$.Items.Add(m);}}
$.Items.OnChange.Add(new Delegate($.__ItemsChanged,$,[Delegate.Event]));if(e.onselectstart!==undefined){e.onselectstart=function(e){return false;};}
else{$.OnClick.Add(function(e){e.Handled=true;e.CancelEvent=true;});}
$.OnOpening=new Event();$.OnClosing=new Event();}
Menu.prototype=new Content(null);Menu.prototype.constructor=Menu;function ContextMenu(e){if(e===undefined||e.Type==Type.String){return ContextMenu.Inhert(ContextMenu.Extend(new Element("menu",e).ClassName("contextmenu")));}
var $=this;$.DOM=e;Menu.Inherit($,e);$.__ShowDelegate.Function=$.Show;$.__HideDelegate.Function=$.__HideDelegate3.Function=$.Hide;$.__HideDelegate2.Function=$._Hide
$.Position("fixed").Style(Style.ZIndex,NinJaVisuals.ZIndex++).Collapsed(true);}
ContextMenu.__Current=null;ContextMenu.prototype.__ItemsChanged=Menu.prototype.__ItemsChanged=function(e){var d=e.Sender.Owner.DOM,o=e.Objects,l=o.length,c=Array.From(d.children),lc=c.length,a,b,p,i,v;switch(e.ModificationType){case ModificationType.Add:for(i=0;i<l;i++){v=o[i];if(e.Index>=lc){d.$ap(v.DOM);}
else{d.$ib(v.DOM,c[e.Index++]);}
v.Icon.Collapsed(this.IsRoot);v.ParentMenu=this;v.Style(Style.Display,this.__Layout!=MenuLayout.Vertical?"inline-block":"block").Style("zoom","1");if(v.Type!=Type.Separator){v.OnClick.Add(this.__HideDelegate);}}
break;case ModificationType.Remove:case ModificationType.Clear:for(i=0;i<l;i++){v=o[i];d.$rc(v.DOM);v.ParentMenu=null;if(v.Type!=Type.Separator){v.OnClick.Remove(this.__HideDelegate);}}
break;case ModificationType.Update:for(i=0;i<lc;i++){v=c[i];d.$rc(v.DOM);v.ParentMenu=null;v.Icon.Collapsed(this.IsRoot);if(v.Type!=Type.Separator){v.OnClick.Remove(this.__HideDelegate);}}
for(i=0;i<l;i++){v=o[i];d.$ap(v.DOM);v.ParentMenu=this;v.Style(Style.Display,this.__Layout!=MenuLayout.Vertical?"inline-block":"block").Style("zoom","1");if(v.Type!=Type.Separator){v.OnClick.Add(this.__HideDelegate);}}
break;case ModificationType.Swap:a=o[0].DOM;b=o[1].DOM;p=$d.createTextNode("beep");d.$ib(p,a);d.$.$rc(a);d.$ib(a,b);d.$.$rc(b);d.$ib(b,p);d.$.$rc(p);delete p;break;case ModificationType.Move:a=o[0].DOM;p=$d.createTextNode("meep");d.$ib(p,a);d.$rc(a);e.Index;if(e.Index>=lc){d.$ap(a);}
else{d.$ib(a,c[e.Index]);}
d.$rc(p);delete p;break;}}
Menu.prototype.__Show=function(){this.__ShowTimer.Stop();this.__HideTimer.Stop();if(this.ParentItem.ParentMenu){if(this.ParentItem.ParentMenu.__HideTimer){this.ParentItem.ParentMenu.__HideTimer.Stop();}}
this.__ShowTimer.Start();}
Menu.prototype.__Hide=function(){this.__HideTimer.Stop();this.__ShowTimer.Stop();this.__HideTimer.Start();}
Menu.prototype.Show=function(){if(!this.Collapsed()){return;}
if(this.ParentItem.ParentMenu.IsRoot&&this.ParentItem.ParentMenu.__Layout!="vertical"){this.X(this.ParentItem.X()).Y(this.ParentItem.Y()+this.ParentItem.LayoutHeight());}
else{this.X(this.ParentItem.X()+this.ParentItem.LayoutWidth()).Y(this.ParentItem.Y());}
if(this.OnOpening.Fire(new EventArgs(this))){this.Visible(false).Collapsed(false);if(this.__SafeClip){if(Client.ElementClipped(this,Side.Right)){Client.SnapTo(this,Side.Right);}
if(Client.ElementClipped(this,Side.Bottom)){Client.SnapTo(this,Side.Bottom);}}
this.Collapsed(true).Visible(true);this.__Effect.Play();if(!this.ParentItem.Classes.Contains("active")){this.ParentItem.Classes.Add("active");}}}
Menu.prototype.Hide=function(forced){if(this.Collapsed()||this.IsRoot){return;}
if((this.IsMouseOver||this.ParentItem.IsMouseOver)&&!forced){return;}
if(!forced){if(Menu.CheckChildren(this)){return;}}
if(this.OnClosing.Fire(new EventArgs(this))){this.__Effect.Reverse()
if(!this.ParentItem.ParentMenu.IsRoot){this.ParentItem.ParentMenu.Hide(forced);}}
this.ParentItem.Classes.Remove("active");}
Menu.CheckChildren=function(m){var a=m.Items,l=a.length,i,v;for(i=0;i<l;i++){v=a[i];if(v.__Submenu){if(v.__Submenu.IsMouseOver){return true;}
if(Menu.CheckChildren(v.__Submenu)){return true;}}}
return false;}
Menu.prototype.Layout=function(x){if(x===undefined){return this.__Layout;}
this.__Layout=x;var a=this.Items,l=a.length,i;for(i=0;i<l;i++){a[i].Style(Style.Display,x==MenuLayout.Horizontal?"inline-block":"block").Style("zoom","1");}}
ContextMenu.prototype.Show=function(){var e=NinJa.Event;this.X(Mouse.ClientX+2);this.Y(Mouse.ClientY+2);if(this.OnOpening.Fire(new EventArgs(this))){this.Visible(false).Collapsed(false);if(this.__SafeClip){if(Client.ElementClipped(this,Side.Right)){Client.SnapTo(this,Side.Right);}
if(Client.ElementClipped(this,Side.Bottom)){Client.SnapTo(this,Side.Bottom);}}
this.Visible(true).Collapsed(true);this.__Effect.Play();}
if(ContextMenu.__Current&&ContextMenu.__Current!=this){ContextMenu.__Current.Hide(true);}
ContextMenu.__Current=this;e.CancelEvent=true;e.Handled=true;}
ContextMenu.prototype.Hide=function(forced){if(this.Collapsed()){return;}
if((this.IsMouseOver||(this.ParentItem?this.ParentItem.IsMouseOver:false))&&!forced){return;}
if(!forced){if(Menu.CheckChildren(this)){return;}}
if(this.OnClosing.Fire(new EventArgs(this))){this.__Effect.Reverse()
if(this.ParentItem){this.ParentItem.ParentMenu.Hide(forced);}}
ContextMenu.__Current=null;}
ContextMenu.prototype.Bind=Menu.prototype.Bind=function(menuTree){this.Items.Clear();}
function MenuItem(e){if(this.DOM===undefined){return MenuItem.Inherit(MenuItem.Extend(new ListItem(e)));}
var $=this;e=$.DOM;var en=(e.getAttribute("enable")||"true").ToBoolean(),a,l,i,v,s=e.getAttribute("src")||"";$.Type=Type.MenuItem;$.__Href=e.getAttribute("href");$.__Submenu=null;$.__Enabled=(e.getAttribute("enable")||"true").ToBoolean();$.__MoreIcon=new Span().Text("►").Style(Style.Float,"right").Collapsed(true);if(!e.firstChild){e.appendChild(document.createTextNode(""));}
$.TextNode=e.firstChild;$.ParentMenu=e.parentNode.$;$.Icon=new MenuIcon().Source(s);$.InsertElement(0,$.Icon)
$.InsertElement(0,$.__MoreIcon);a=Array.From(e.children);l=a.length;for(i=0;i<l;i++){v=a[i];if(v.tagName=="MENU"){$.Submenu(Menu.Inherit(Menu.Extend(v.$)));}}
if(!$.__Enabled){$.Enabled(false);}
if($.__Href){$.OnClick.Add(new Delegate(Page.Location,Page,[$.__Href]));}}
MenuItem.prototype=new Content(null);MenuItem.constructor=MenuItem;MenuCheckItem.prototype=new Content(null);MenuCheckItem.constructor=MenuCheckItem;MenuCheckItem.prototype.Enabled=MenuItem.prototype.Enabled=function(e){if(e===undefined){return this.__Enabled;}
this.__Enabled=e;if(this.__Submenu){if(!this.__ParentMenu.IsRoot&&this.__ParentMenu.__Layout=="vertical"){this.__MoreIcon.Collapsed(!e);}
this.__SubmenuDel.Enabled=e;}
this.Opacity(this.__Enabled?1:.5);return this;}
MenuCheckItem.prototype.Text=MenuItem.prototype.Text=function(t){if(t===undefined){return this.TextNode;}
this.TextNode.nodeValue=t;return this;}
MenuCheckItem.prototype.Submenu=MenuItem.prototype.Submenu=function(s){var m=this.__Submenu;if(s===undefined){return this.__Submenu;}
if(m){m.Classes.Remove(m.Root.__ChildClass);this.OnClick.Remove(m.__ShowDelegate);}
if(s.ParentItem){var p=s.ParentItem;p.OnMouseOver.Remove(p.__SubmenuDel);p.OnMouseOut.Remove(s.__HideDelegate2);p.OnClick.Remove(s.__ShowDelegate);p.OnMouseOver.Remove(s.ParentItem.__SubmenuDel);}
this.__Submenu=s;if(s){if(!this.ParentMenu.IsRoot&&this.ParentMenu.__Layout=="vertical"){this.__MoreIcon.Collapsed(false);}
s.ParentItem=this;s.Position("absolute");s.Collapsed(true);s.Root=this.ParentMenu.Root;s.IsRoot=false;s.Classes.Add(s.Root.__ChildClass);s.Layout(MenuLayout.Vertical);Page.AddElement(s);this.__SubmenuDel=new Delegate(s.__Show,s)
this.OnMouseOver.Add(this.__SubmenuDel);this.OnMouseOut.Add(s.__HideDelegate2);this.OnClick.Add(s.__ShowDelegate);s.Collapsed(true);s.IsRoot=false;s.Root=this.ParentMenu.Root;s.__Effect=new Effect(s,s.Root.__EffectTmp,0,0,Speed.Fastest,Smoothness.Normal);s.Items.ForEach(function(i){if(i.Icon){i.Icon.Collapsed(false);}});}
else{this.__MoreIcon.Collapsed(true);this.OnClick.Add(this.ParentMenu.__HideDelegate);}}
function MenuCheckItem(e){if(this.DOM===undefined){return MenuCheckItem.Inherit(MenuCheckItem.Extend(new ListItem(e)));}
var $=this;e=this.DOM;MenuItem.Inherit($,e);$.__Checked=false;$.OnCheckChanged=new Event();$.OnClick.Add(new Delegate($.__Toggle,$));var c=e.getAttribute("checked");if(c){$.Checked(c.ToLower()=="true");}}
MenuCheckItem.prototype.__Toggle=function(){this.Checked(!this.__Checked);}
MenuCheckItem.prototype.Checked=function(c){if(c===undefined){return this.__Checked;}
this.__Checked=c;this.Icon.Visible(this.__Checked);this.OnCheckChanged.Fire(new EventArgs(this));return this;}
Element.prototype.ContextMenu=function(c){if(this.__CurrentContextMenu){this.OnContextMenu.Remove(this.__CurrentContextMenu.__ShowDelegate);}
this.__CurrentContextMenu=c;this.OnContextMenu.Add(this.__CurrentContextMenu.__ShowDelegate);}
function MenuIcon(e){if(this.DOM===undefined){return MenuIcon.Inherit(MenuIcon.Extend(new ImageElement(e)));}
var $=this;$.Width(16).Height(16);$.Style(Style.Padding,"2px");$.Style(Style.VerticalAlign,"middle");$.Visible(false);}
MenuIcon.prototype=new ImageElement(null);MenuIcon.constructor=MenuIcon;MenuIcon.prototype.Source=function(s){if(s==undefined){return this.src;}
this.src=s;this.Visible(!String.IsNullOrEmpty(s));return this;}
Type.Separator="Separator";function Separator(e){if(e===undefined){e=document.createElement("hr");}
var $=this;$.DOM=e;$.ParentMenu=null;$.Type=Type.Separator;}
Separator.prototype.Collpased=Element.prototype.Collapsed;Separator.prototype.Visible=Element.prototype.Visible;Separator.prototype.Style=Element.prototype.Style;