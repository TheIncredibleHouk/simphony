
var NinJaControls={Version:"1.0"};if(typeof(NinJaVisuals)=="undefined"){alert("NinJaControls requires the NinJaVisuals extensions, be prepared for errors.");}
Div.Extensions.Add(new Extension("accordion",Accordion));$Accordion=$AccordionItem=$Anchor;Type.Accordion=Type.$++;Type.AccordionItem=Type.$++;function Accordion(e){if(this.DOM===undefined){return Accordion.Inherit(Accordion.Extend(new Div(e).ClassName("accordion")));}
var $=this;e=$.DOM;$.__SelectedItem=null;$.__Effect=e.getAttribute("effect")||"none";$.__HeaderClass=e.getAttribute("headerclass")||"header";$.__SelectedClass=e.getAttribute("selectedclass")||"selected";$.__ItemClass=e.getAttribute("itemclass")||"item";$.Items=new ObservableArray($);var c=Array.From(e.children);var l=c.length;var v;for(var i=0;i<l;i++){v=c[i];if(v.tagName=="DIV"){v=v.$;AccordionItem.Extend(AccordionItem.Inherit(v));$.Items.Add(v);$.InsertElementBefore(v.Header,v);v.Classes.Add($.__ItemClass);v.Header.Classes.Add($.__HeaderClass);v.__Effect=new Effect(v,$.__Effect,1,0,Speed.Normal,Smoothness.Smoothest);}}
$.Items.OnChange.Add(new Delegate($.__ItemsChanged,$,[Delegate.Event]));$.OnSelectionChanged=new Event();$.Type=Type.Accordion;}
Accordion.prototype.__ItemsChanged=function(e){var o=e.Objects,l=o.length,v,i;switch(e.ModificationType){case ModificationType.Add:for(i=0;i<l;i++){v=o[i];this.AddElements([v.Header,v]);v.ClassName(this.__ItemClass).Header.ClassName(this.__HeaderClass);v.__Effect=new Effect(v,this.__Effect,1,0,Speed.Fastest,Smoothness.Normal);}
break;case ModificationType.Remove:case ModificationType.Clear:for(i=0;i<l;i++){v=o[i];this.ReSnapTos([v.Header,v]);}
break;case ModificationType.Move:case ModificationType.Swap:case ModificationType.Update:this.ReSnapTos(Array.From(this.DOM.children));o=this.Items;l=o.lenth;for(i=0;i<l;i++){v=o[i];this.AddElements([v.Header,v]);}
break;}}
Accordion.prototype.HeaderClass=function(c){if(c===undefined){return this.__HeaderClass;}
this.__HeaderClass=c;var i,a=this.Items,l=a.length;for(i=0;i<l;i++){a[i].Header.ClassName(c);}
return this;}
Accordion.prototype.ItemClass=function(c){if(c===undefined){return this.__ItemClass;}
this.__ItemClass=c;var i,a=this.Items,l=a.length;for(i=0;i<l;i++){a[i].ClassName(c);}
return this;}
Accordion.prototype.SelectedClass=function(c){if(c===undefined){return this.__SelectedClass;}
this.__SelectedClass=c;if(this.__SelectedItem){this.__SelectedItem.ClassName(c);}
return this;}
Accordion.prototype.SelectedItem=function(i){if(i===undefined){return this.__SelectedItem;}
if(this.__SelectedItem){this.__SelectedItem.Header.Classes.Remove(this.__SelectedClass);this.__SelectedItem.__Effect.Reverse();}
this.__SelectedItem=i;if(i!==null){this.__SelectedItem.__Effect.Play();this.__SelectedItem.Header.Classes.Add(this.__SelectedClass);}
if(this.OnSelectionChanged.length>0){this.OnSelectionChanged.Fire(new EventArgs(this));}
return this;}
Accordion.prototype.Effect=function(e){this.__Effect=e;var i,a=this.Items,l=a.length,v;for(i=0;i<l;i++){v=a[i];v.__Effect=new Effect(v,e,1,0,Speed.Fastest,Smoothness.Normal);}
return this;}
function AccordionItem(e){if(this.DOM===undefined){return AccordionItem.Inherit(AccordionItem.Extend(new Div(e)));}
var $=this;e=$.DOM;var t=e.getAttribute("header");$.Collapsed(true);$.Header=new Div().Cursor(Cursor.Pointer);if(t){$.Header.Text(t);}
t=$.ElementsByClassName("header");if(t[0]){t=$Div(t[0]);t.DOM.parentNode.removeChild(t.DOM);t.Classes.Remove("header");$.Header.AddElement(t);}
$.__Selected=(e.getAttribute("selected")||"false").ToBoolean()
$.Header.OnClick.Add(new Delegate($.Toggle,$,["Selected"]));$.__Effect=null;$.Type=Type.AccordionItem;}
AccordionItem.prototype=new Div(null);AccordionItem.prototype.constructor=AccordionItem;AccordionItem.prototype.Selected=function(s){var p=this.DOM.parentNode.$;if(s===undefined){return p.__SelectedItem==this;}
if(s===true){if(p.__SelectedItem!=this){p.SelectedItem(this);}
return this;}
if(p.__SelectedItem==this){p.SelectedItem(null);}
return this;}
Type.DatePicker=Type.$++;$DatePicker=$Anchor;TextBox.Extensions.Add(new Extension("datepicker",DatePicker));function DatePicker(e){if(this.DOM===undefined){return DatePicker.Inherit(DatePicker.Extend(new TextBox(e).ClassName("datepicker")));}
var $=this,t,a,i,v,l,b;$.Classes.Remove("datepicker");e=$.DOM;$.__Display=new Div().Position("absolute").Collapsed(true);t=$.__Table=new Table().ClassName("datepicker").CellPadding(0).CellSpacing(0).Style(Style.TableLayout,"fixed").Style(Style.ZIndex,NinJaVisuals.ZIndex++);t.SetHead(new TableHead());$.__Display.AddElement(t);$.__PadClass=e.getAttribute("padclass")||"pad";$.__PadDays=(e.getAttribute("pad")||"false").ToBoolean();$.__Selected=e.getAttribute("selectedclass")||"selected";$.__Effect=new Effect($.__Display,e.getAttribute("effect")||"none",1,0,Speed.Fastest,Smoothness.Normal);$.__CS=null;var d=$.Text();if(d&&d.IsDate()){d=new DateTime(d);}
else{d=DateTime.Now();}
$.__D=d.Date();$.__M=d.Month();$.__Y=d.Year();$.OnDateChanged=new Event($);var prev=new Anchor().Href("javascript: Null();").Text("<");var next=new Anchor().Href("javascript: Null();").Text(">");prev.DOM.tabIndex=next.DOM.tabIndex=1000000;t.Head.Rows.Add(new Row().HorizontalAlignment("center"));t.Head.Rows[0].Cells.AddRange([new Cell().AddElement(prev),new Cell().ColumnSpan(5),new Cell().AddElement(next)]);t.Rows.Add(new Row().HorizontalAlignment("center"));t.Rows[0].Cells.AddRange([new Header().Text("S"),new Header().Text("M"),new Header().Text("T"),new Header().Text("W"),new Header().Text("T"),new Header().Text("F"),new Header().Text("S")]);if(e.onselectstart!==undefined){e.onselectstart=function(e){return false;};}
else{$.OnClick.Add(function(e){e.Handled=e.CancelEvent=true;});}
b=[];d=new Delegate($.__DateSelected,$,[Delegate.Event]);for(i=0;i<6;i++){a=[new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell(),new Cell()];for(l=0;l<7;l++){a[l].OnClick.Add(d);}
v=new Row().HorizontalAlignment("center");v.Cells.AddRange(a);b.Add(v);}
t.Rows.AddRange(b);prev.OnClick.Add(new Delegate($.__ChangeMonth,$,[-1]));next.OnClick.Add(new Delegate($.__ChangeMonth,$,[1]));$.OnFocus.Add(new Delegate($.Show,$));$.OnClick.Add(new Delegate($.Show,$));$.OnBlur.Add(new Delegate($.Hide,$));$.OnKeyUp.Add(new Delegate($.Update,$));Page.OnClick.Add(new Delegate($.Hide,$));Page.AddElement($.__Display);$.Refresh();};DatePicker.prototype.__ChangeMonth=function(c){var m=this.__M+c;if(m==0){m=12;this.__Y--;}
else if(m==13){m=1;this.__Y++;}
this.__M=m;this.Refresh();};DatePicker.prototype.__DateSelected=function(e){var t=e.Sender.Tag,s=e.Sender;if(t<0){return;}
this.__D=t;if(this.__CS){this.__CS.ClassName("");}
this.__CS=s;s.ClassName(this.__Selected);this.Text(new DateTime(this.__Y,this.__M,this.__D));this.Focus();this.Hide(true);};DatePicker.prototype.Effect=function(e){this.__Effect=new Effect(this.__Display,e,1,0,Speed.Fastest,Smoothness.Normal);return this;}
DatePicker.prototype.PadDays=function(p){if(p===undefined){return this.__PadDays;}
this.__PadDays=p;this.Refresh();return this;}
DatePicker.prototype.Show=function(){if(this.__Forced){this.__Forced=false;return;}
if(!this.__Display.Collapsed()){return;}
this.__Display.X(this.X()).Y(this.Y()+this.LayoutHeight());this.__Effect.Play();return this;};DatePicker.prototype.Hide=function(f){if((this.IsFocused||this.__Display.IsMouseOver)&&!f){return;}
if(this.__Display.Collapsed()){return;}
this.__Forced=f;this.__Effect.Reverse();return this;};DatePicker.prototype.Update=function(){var t=this.Text();if(t.IsDate()){var d=t.ToDateTime();this.__D=d.Date();this.__M=d.Month();this.__Y=d.Year();this.Refresh();}
return this;};DatePicker.prototype.SelectedDate=function(d){if(d===undefined){var t=this.Text();if(t.IsDate()){return t.ToDateTime();}
return DateTime.Null;}
if(d==null){this.Text("");}
else{this.Text(d.ToString());}
this.Update();return this;}
DatePicker.prototype.Pad=function(p){if(p===undefined){return this.__PadDays;}
this.__PadDays=p;this.Refresh();return this;}
DatePicker.prototype.PadClass=function(p){if(p===undefined){return this.__PadClass;}
this.__PadClass=p;this.Refresh();return this;};DatePicker.prototype.SelectedClass=function(s){if(s===undefined){return this.__Selected;}
this.__Selected=s;this.Refresh();return this;};DatePicker.prototype.Refresh=function(){this.__Display.DOM.firstChild.$.Head.Rows[0].Cells[1].Text(DateTime.Months.GetName(this.__M)+" "+this.__Y);var tb=this.__Display.DOM.firstChild.$.Body;var r=1;var d=new DateTime(this.__Y,this.__M,1);var D=d.Date(),M=d.Month(),Y=d.Year();var Mx=DateTime.Months.GetDays(this.__M,this.__Y)+1;var cDow=DateTime.Days.Sunday,dow=d.DayOfWeek();var i,j,c=tb.Rows[r],e=1;var cD=d.Subtract(new TimeSpan(24*dow-cDow,0));for(i=0;i<dow;i++){if(this.__PadDays){c.Cells[i].Text(cD.Date()+i).ClassName(this.__PadClass).Tag=-1;}
else{c.Cells[i].Text("").ClassName(this.__PadClass).Tag=-1;}}
var brk=false;for(j=r;j<8;){c=tb.Rows[r];c.Collapsed(false);for(;i<7;i++){c.Cells[i].Text(e).ClassName(this.__D==e?this.__Selected:"").Tag=e;if(this.__D==e){this.__CS=c.Cells[i];}
e++;if(e>Mx){brk=true;break;}}
if(brk){break;}
else{i=0;j++,r++;}}
e=1;while(j<7){c=tb.Rows[r];if(i==0){c.Collapsed(true);}
else{for(;i<7;i++,e++){if(this.__PadDays){c.Cells[i].Text(e).ClassName(this.__PadClass).Tag=-1;}
else{c.Cells[i].Text("").ClassName(this.__PadClass).Tag=-1;}}}
i=0;j++;r++;}};var DialogResult=LazyEnum({Ok:0,Cancel:1,Yes:2,No:3});Div.Extensions.Add(new Extension("dialog",Dialog));var $Dialog=$Anchor;function Dialog(e){if(this.DOM===undefined){return Dialog.Inherit(Dialog.Extend(new Div(e).ClassName("dialog")));}
var $=this;e=$.DOM;$.__Effect1=new Effect(Dialog.Filter,e.getAttribute("effect")||"none",Dialog.Opacity,0,Speed.Faster,Smoothness.Smoother);$.__Effect2=new Effect(Dialog.Filter.T,e.getAttribute("effect")||"none",1,0,Speed.Faster,Smoothness.Smoother);if(e.parentNode){e.parentNode.removeChild(e);};Dialog.Dialogs.AddElement(e);$.OnDialogClose=new Event($);$.Result=null;}
Dialog.CurrentDialog=null,Dialog.Color="black",Dialog.Opacity=.5,Dialog.ZIndex=NinJaVisuals.ZIndex++,Dialog.Filter=null;Dialog.RemoveCurrent=function(data){Dialog.Filter.T.Rows[0].Cells[0].ReSnapTo(Dialog.CurrentDialog);Dialog.Dialogs.AddElement(Dialog.CurrentDialog);}
Dialog.Hide=function(data){var d=Dialog.CurrentDialog;if(d){d.Result=data;if(d.OnDialogClose.Fire(new EventArgs(d,data))!=false){d.__Effect1.Reverse(Dialog.RemoveCurrent);d.__Effect2.Reverse();Dialog.CurrentDialog=null;}}}
Dialog.prototype.Show=function(){if(Dialog.CurrentDialog){Dialog.RemoveCurrent();}
Dialog.CurrentDialog=this;Dialog.Dialogs.ReSnapTo(this);Dialog.Filter.T.Rows[0].Cells[0].AddElement(this);this.__Effect1.Play();this.__Effect2.Play();return this;};Dialog.prototype.Hide=function(data){Dialog.RemoveCurrent(data);return this;};NinJa.OnInitialization.Add(function(){Dialog.Dialogs=new Div().Collapsed(true);Page.AddElement(Dialog.Dialogs);Dialog.Filter=new Div().BackgroundColor(Dialog.Color).Width("100%").Height("100%").Position("fixed").X(0).Y(0).Collapsed(true);Dialog.Filter.T=new Table().Width("100%").Height("100%").Position("fixed").X(0).Y(0).Collapsed(true);Dialog.Filter.T.Rows.Add(new Row().Height("100%"));Dialog.Filter.T.Rows[0].Cells.Add(new Cell().HorizontalAlignment("center").VerticalAlignment("middle").Height("100%"));Dialog.Filter.AddElement(Dialog.Dialogs);Dialog.Filter.Opacity(Dialog.Opacity);Page.AddElement(Dialog.Filter);Page.AddElement(Dialog.Filter.T);});Type.FormColumn=Type.$++;Type.FormTable=Type.$++;Table.Extensions.Add(new Extension("form",FormTable));function FormTable(e){var $=this;var v,l;e=this.DOM;$.__HighlightClass=e.getAttribute("highlight")||"";if($.__HighlightClass){var inputs=Array.From($.ElementsByTagName("input")).AddRange($.ElementsByTagName("select")).AddRange($.ElementsByTagName("textarea"));l=inputs.length;for(var i=0;i<l;i++){v=inputs[i];v.OnFocus.Add(new Delegate($.__Highlight,$,[v,true]));v.OnBlur.Add(new Delegate($.__Highlight,$,[v,false]));}}
$.ColumnGroups=new ObservableArray($);var o=Array.From(e.children);l=o.length;for(var i=0;i<l;i++){v=o[i];if(v.tagName=="COLGROUP"){$.ColumnGroups.Add(new ColumnGroup(v));}}
$.__ApplyStyling();$.Type=Type.FormTable;}
function ColumnGroup(e){var $=this;$.FormColumns=new ObservableArray($);$.FormRow=null;var a=e.children;var l=a.length;for(var i=0;i<l;i++){$.FormColumns.Add(new FormColumn(a[i]));}}
FormTable.prototype.__ApplyStyling=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=this.ColumnGroups;c=this.Bodies;d=c.length;for(e=0;e<d;e++){f=c[e]
g=f.Rows;h=g.length;i=0;for(j=0;j<h;j++){k=b[i];if(k===undefined){continue;}
l=g[j].Cells;m=l.length
for(n=0;n<m;n++){o=l[n].DOM;if(o.colSpan==1){p=k.FormColumns[n];if(p){o.setAttribute("valign",p.__VAlign);o.setAttribute("align",p.__HAlign);o.setAttribute("width",p.__Width);o.setAttribute("style",p.__Style);l[n].ClassName(p.__Class);}}}}}}
FormTable.prototype.__Highlight=function(x,v){var r=x.DOM;while((r.$.Type!=Type.Row)&&r!=this.DOM){r=r.parentNode;}
if(r.$.Type!=Type.Row){return;}
r=r.$;if(v===true){if(!r.Classes.Contains(this.__HighlightClass)){r.Classes.Add(this.__HighlightClass);}}
else{r.Classes.Remove(this.__HighlightClass);}};function FormColumn(e){var $=this;$.__VAlign=e.getAttribute("valign")||"";$.__HAlign=e.getAttribute("align")||"";$.__Style=e.getAttribute("style")||"";$.__Class=e.getAttribute("class")||"";$.__Width=e.getAttribute("width")||"";$.Type=Type.FormColumn}
Div.Extensions.Add(new Extension("formtemplate",FormTemplate));Type.FormTemplate=Type.$++;$FormTemplate=$Anchor;function FormTemplate(e){if(this.DOM===undefined){return FormTemplate.Inherit(FormTemplate.Extend(new Div(e).ClassName("formtemplate")));}
this.Type=Type.FormTemplate;}
FormTemplate.prototype.Bind=function(o){var e=this.DOM;var f=Array.From(e.getElementsByTagName("input")).AddRange(e.getElementsByTagName("select")).AddRange(e.getElementsByTagName("textarea")),l=inputs.length,i,p;for(i=0;i<l;i++){p=f[i].getAttribute("bindproperty");if(p){if(o){f[i].$.Value(NinJa.EvalBind(p,o));}
else{f[i].Clear();}}}
return this;}
FormTemplate.prototype.CreatePropertyMap=function(){var d=new Dictionary(),f=Array.From(this.getElementsByTagName("input")).AddRange(f.getElementsByTagName("select")).AddRange(f.getElementsByTagName("textarea")),l=inputs.length,i,p;for(i=0;i<l;i++){p=f[i].getAttribute("mapproperty");if(p){if(f[i].$.Displayed()){d[p]=f[i].$.Value();}}}
return d;}
Div.Extensions.Add(new Extension("grid",Grid));Type.Grid="Grid";Type.GridRow="GridRow";Type.GridCell="GridCell";Type.GridMeasure="GridColumns";$Grid=$GridRow=$GridCell=$Anchor;Grid.ResizeDelay=200;function Grid(e){if(this.DOM===undefined){return Grid.Extend(Grid.Inherit(new Div(e).ClassName("grid")));}
var $=this;e=this.DOM;$.Rows=[];$.__Calculating=false;var c=e.children,l=c.length,v;for(var i=0;i<l;i++){v=c[i].$;$.Rows.Add(GridRow.Inherit(GridRow.Extend(v)));}
$.__Resize=new Timer(Grid.ResizeDelay,false);var d=new Delegate($.__CalculateRows,$);$.__Resize.OnTrigger.Add(d);Client.OnResize.Add(new Delegate($.__Resize.Stop,[$.__Resize]));Client.OnResize.Add(new Delegate($.__Resize.Start,[$.__Resize]));Page.OnLoad.Add(d);$.__NativeWidth=Element.prototype.Width;$.__NativeHeight=Element.prototype.Height;$.Width=Grid.prototype.Width;$.Height=Grid.prototype.Height;$.Type=Type.Grid;$.Style(Style.BoxSizing,"border-box");$.__PrevCWidth=Client.Width();$.__PrevCHeight=Client.Height();}
Grid.prototype.Width=function(w){if(w===undefined){return this.__NativeWidth(w);}
this.__NativeWidth(w);this.__CalculateRows();}
Grid.prototype.Height=function(h){if(h===undefined){return this.__NativeHeight(h);}
this.__NativeHeight(h);this.__CalculateRows();}
Grid.prototype.__CalculateRows=function(){this.__Calculating=true;var static=[];var relative=[];var liquid=[];var r=this.Rows;var l=r.length;var v;for(var i=0;i<l;i++){v=r[i];switch(v.__Height.ColumnsType){case GridColumnsType.Static:static.Add(v);break;case GridColumnsType.Relative:relative.Add(v);break;case GridColumnsType.Liquid:liquid.Add(v);break;}}
var fullH=totalH=this.Height();var h;l=static.length;this.Collapsed(true);for(i=0;i<l;i++){v=static[i];h=v.__Height.Value;v.__NativeHeight(h);totalH-=h;}
l=relative.length;for(i=0;i<l;i++){v=relative[i];h=fullH*(v.__Height.Value/100)
v.__NativeHeight(h);totalH-=h;};var rest=totalH/liquid.length;l=liquid.length;for(i=0;i<l;i++){v=liquid[i];v.__NativeHeight(rest);}
this.Collapsed(false);l=r.length;for(i=0;i<l;i++){r[i].__CalculateCells();}
this.__Calculating=false;}
function GridRow(e){if(this.DOM===undefined){return GridRow.Inherit(GridRow.Extend(new Div(e).ClassName("row")));}
var $=this;e=$.DOM;$.__Height=new GridMeasure("*");$.Height=GridRow.prototype.Height;$.__Calculating=false;var a=e.getAttribute("gridheight");if(a){$.__Height=new GridMeasure(a);}
$.Cells=[];var c=e.children,l=c.length,v;for(var i=0;i<l;i++){v=c[i].$;$.Cells.Add(GridCell.Inherit(GridCell.Extend(v)));}
$.__NativeHeight=Element.prototype.Height;$.Type=Type.GridRow;$.Style(Style.BoxSizing,"border-box");return e;}
GridRow.prototype.Height=function(h){if(h===undefined){return this.__NativeHeight(h);}
this.__Height=new GridMeasure(h);var e=this.DOM.parentNode.$;if(!e.__Calculating){e.__CalculateRows();}
e.__CalculateCells();}
GridRow.prototype.__CalculateCells=function(){this.__Calculating=true;var static=[];var relative=[];var liquid=[];var c=this.Cells;var l=c.length;var v;for(var i=0;v=c[i++];){switch(v.__Width.ColumnsType){case GridColumnsType.Static:static.Add(v);break;case GridColumnsType.Relative:relative.Add(v);break;case GridColumnsType.Liquid:liquid.Add(v);break;}}
var fullW=totalW=this.Width();var w;this.Visible(false);l=static.length;for(i=0;i<l;i++){v=static[i];w=v.__Width.Value;v.__NativeWidth(w);totalW-=w;}
l=relative.length;for(i=0;i<l;i++){v=relative[i];w=fullW*(v.__Width.Value/100)
v.__NativeWidth(w);totalW-=w;}
var rest=totalW/liquid.length;l=liquid.length;for(i=0;i<l;i++){v=liquid[i];v.__NativeWidth(rest);}
this.Visible(true);this.__Calculating=false;}
function GridCell(e){if(this.DOM===undefined){return GridCell.Inherit(GridCell.Extend(new Div(e).ClassName("cell")));}
var $=this;e=$.DOM;$.__Width=new GridMeasure("*");var a=e.getAttribute("gridwidth");if(a){$.__Width=new GridMeasure(a);}
$.Style("box-sizing","border-box").Style(Style.Display,"inline-block").Style(Style.Zoom,"1").Style(Style.Float,"left").Style(Style.Overflow,"hidden");$.__NativeWidth=Element.prototype.Width;$.Width=GridCell.prototype.Width;$.Type=Type.GridCell;$.Height("100%");$.Style(Style.BoxSizing,"border-box");}
GridCell.prototype.Width=function(w){if(w===undefined){return this.__NativeWidth(w);}
this.__Width=new GridMeasure(w);var e=this.DOM.parentNode.$;if(!e.__Calculating){e.__CalculateCells();}}
var GridColumnsType={Static:0,Relative:1,Liquid:2};function GridMeasure(value){this.Value=null;this.ColumnsType=GridColumnsType.Liquid;this.Type=Type.GridMeasure;switch(value.Type){case Type.String:if(value.EndsWith("%")){this.Value=value.Remove("%").ToInt();this.ColumnsType=GridColumnsType.Relative;}
else if(value=="*"){this.Value=null;this.ColumnsType=GridColumnsType.Liquid;}
else if(value.IsInt()){this.Value=value.ToInt();this.ColumnsType=GridColumnsType.Static;}
break;case Type.Number:this.Value=value;this.ColumnsType=GridColumnsType.Static;break;}}
Anchor.Extensions.Add(new Extension("oneclick",OneClickAnchor));Button.Extensions.Add(new Extension("oneclick",OneClickButton));ContentButton.Extensions.Add(new Extension("oneclick",OneClickContentButton));function OneClickAnchor(e){if(this.DOM===undefined){return OneClickAnchor.Inherit(OneClickAnchor.Extend(new Anchor(e).ClassName("oneclick")));}
var $=this;$.OnClick.Add(new Delegate($.Enabled,$,[false]));}
function OneClickButton(e){if(this.DOM===undefined){return OneClickAnchor.Inherit(OneClickAnchor.Extend(new Button(e).ClassName("oneclick")));}
var $=this;this.Enabled=Element.prototype.Enabled;$.OnClick.Add(new Delegate($.Enabled,$,[false]));}
function OneClickContentButton(e){if(this.DOM===undefined){return OneClickAnchor.Inherit(OneClickAnchor.Extend(new ContentButton(e).ClassName("oneclick")));}
var $=this;$.OnClick.Add(new Delegate($.Enabled,$,[false]));}
ImageElement.Extensions.Add(new Extension("rollover",RollOverImage));$RollOverImage=$TextBox;function RollOverImage(e){if(this.DOM===undefined){return RollOverImage.Inherit(RollOverImage.Extend(new ImageElement(e).ClassName("rollover")));}
var $=this;e=$.DOM;$.__H=e.getAttribute("hover")||"";$.__OS=ImageElement.prototype.Source;$.__MOv=new Delegate($.__OS,$,[$.__H])
$.__MOu=new Delegate($.__OS,$,[e.src])
if($.__H!=null){$.OnMouseOver.Add($.__MOv);$.OnMouseOut.Add($.__MOu);}
return e;}
RollOverImage.prototype.Source=function(s){if(s===undefined){return this.__MOu.Parameters[0];}
this.__MOu.Parameters[0]=s;if(!this.IsMouseOver){this.src=s;}
return this;}
RollOverImage.prototype.HoverSource=function(s){if(s===undefined){return this.__MOv.Parameters[0];}
this.__MOv.Parameters[0]=s;if(this.IsMouseOver){this.src=s;}
return this;}
Type.ScrollBar=Type.$++;Div.Extensions.Add(new Extension("scrollbar",ScrollBar));$ScrollBar=$TextBox;function ScrollBar(e){if(this.DOM===undefined){return ScrollBar.Inherit(ScrollBar.Extend(new Div(e).ClassName("scrollbar")));}
var $=this;e=$.DOM;$.__Orient=e.getAttribute("direction")||"vertical";$.__Width=Element.prototype.Width;$.__Height=Element.prototype.Height;$.Width=ScrollBar.prototype.Width;$.Height=ScrollBar.prototype.Height;var w,h;w=e.getAttribute("swidth")||$.__Orient=="horizontal"?"100":"15";h=e.getAttribute("sheight")||$.__Orient=="horizontal"?"15":"100";$.ClearTextNodes().Style(Style.Display,"inline-block").Style(Style.BoxSizing,"border-box").NaturalDisplay="inline-block";if(w){$.__Width(w.ToInt());}
if(h){$.__Height(h.ToInt());}
var v=$.ElementsByClassName("decrease")[0];if(!v){v=new Div();$.AddElement(v);}
$.DecreaseThumb=v.ClassName("decrease thumb").Style(Style.BoxSizing,"border-box")
v=$.ElementsByClassName("increase")[0];if(!v){v=new Div();$.AddElement(v);}
$.IncreaseThumb=v.ClassName("increase thumb")
v=$.ElementsByClassName("track")[0];if(!v){$.TrackThumb=TrackThumb.Inherit(TrackThumb.Extend(new Div()));$.TrackThumb.ClassName("track thumb");}
else
{$.TrackThumb=v.ClassName("track thumb")
$.ReSnapTo($.TrackThumb);}
$.Track=new Div().Style(Style.BoxSizing,"border-box");$.InsertElement(1,$.Track);$.Track.AddElement($.TrackThumb);$.__Value=0;if($.__Orient=="horizontal"){$.IncreaseThumb.Style(Style.Display,"inline-block");$.DecreaseThumb.Style(Style.Display,"inline-block");$.Track.Style(Style.Display,"inline-block").Height("100%");$.IncreaseThumb.Width(16).Height("100%");$.DecreaseThumb.Width(16).Height("100%");$.TrackThumb.Height("100%");}
else{$.IncreaseThumb.Width(15).Height(16);$.DecreaseThumb.Width(15).Height(16);}
var max=(e.getAttribute("maxvalue")||"10").ToInt();$.Track.OnMouseWheel.Add(new Delegate($.__HandleScroll,$,[Delegate.Event]));$.Track.OnClick.Add(new Delegate($.__HandleTrackClick,$,[Delegate.Event]));$.DecreaseThumb.OnClick.Add(new Delegate($.Decrease,$));$.IncreaseThumb.OnClick.Add(new Delegate($.Increase,$));$.__RefreshView();$.MaxValue(max);$.OnScrollChange=new Event();$.Type=Type.ScrollBar;}
ScrollBar.prototype.__HandleScroll=function(e){this.Value(this.__Value+e.Clicks);e.Handled=true;};ScrollBar.prototype.__HandleTrackClick=function(e){if(this.__Orient=="horizontal"){var x=Mouse.X-this.Track.X();if(x<this.TrackThumb.X()){this.Value(this.__Value-this.TrackThumb.LayoutWidth());}
else{this.Value(this.__Value+this.TrackThumb.LayoutWidth());}}else{var y=Mouse.Y-this.Track.Y();if(y<this.TrackThumb.Y()){this.Value(this.__Value-this.TrackThumb.LayoutHeight());}
else{this.Value(this.__Value+this.TrackThumb.LayoutHeight());}}};ScrollBar.prototype.Width=function(w){if(w===undefined){return this.__Width(w);}
this.__Width(w);this.__RefreshView();this.MaxValue(this.__MaxValue);return this;};ScrollBar.prototype.Height=function(h){if(h===undefined){return this.__Width(h);}
this.__Height(h);this.__RefreshView();this.MaxValue(this.__MaxValue);return this;};ScrollBar.prototype.MaxValue=function(m){if(m==undefined){return this.__MaxValue;}
var h;m=m<0?0:m;if(m){this.__MaxValue=m;if(this.__Orient=="horizontal"){h=this.Track.LayoutWidth()-m;if(h<8){this.TrackThumb.Width(8);this.__Step=(this.Track.LayoutWidth()-8)/m;}
else{this.TrackThumb.Width(h);this.__Step=1;}}
else{h=this.Track.LayoutHeight()-m;if(h<8){this.TrackThumb.Height(8);this.__Step=(this.Track.LayoutHeight()-8)/m;}
else{this.TrackThumb.Height(h);this.__Step=1;}}
if(this.__Value>this.__MaxValue){this.__Value=this.__MaxValue;}}
else{this.__Step=this.__Value=0;}
this.Refresh();};ScrollBar.prototype.Refresh=function(){if(this.__Orient=="horizontal"){this.TrackThumb.X(this.__Step*this.__Value);}
else{this.TrackThumb.Y(this.__Step*this.__Value);}};ScrollBar.prototype.__RefreshView=function(){if(this.__Orient=="horizontal"){this.Track.Width(this.LayoutWidth()-(this.DecreaseThumb.LayoutWidth()+this.IncreaseThumb.LayoutWidth()));}
else{this.Track.Height(this.LayoutHeight()-(this.DecreaseThumb.LayoutHeight()+this.IncreaseThumb.LayoutHeight()));}};ScrollBar.prototype.Value=function(value){if(value===undefined){return this.__Value;}
this.__Value=value>this.__MaxValue?this.__MaxValue:(value<0?0:value);this.OnScrollChange.Fire(new EventArgs(this,this.__Value));this.Refresh();return this;};ScrollBar.prototype.Decrease=function(){this.Value(this.__Value-1);return this;}
ScrollBar.prototype.Increase=function(){this.Value(this.__Value+1);return this;}
function TrackThumb(){var $=this;$.Style(Style.BoxSizing,"border-box").Position("relative");$.OnMouseDown.Add(new Delegate($.CaptureMove,$));$.TrackDelegate=new Delegate($.Move,$);$.TrackDelegate.Enabled=false;$.OnClick.Add(function(e){e.Handled=true;});Page.OnMouseMove.Add($.TrackDelegate);Page.OnMouseUp.Add(new Delegate($.LoseMove,$));}
TrackThumb.prototype.CaptureMove=function(){NinJa.Event.Handled=true;this.__X=this.X();this.__Y=this.Y();this.TrackDelegate.Enabled=true;this.Classes.Add("focus");};TrackThumb.prototype.LoseMove=function(){this.TrackDelegate.Enabled=false;this.Classes.Remove("focus");};TrackThumb.prototype.Move=function(){var s=this.DOM.parentNode.parentNode.$;if(s.__Orient=="horizontal"){var x=this.__X+=Mouse.XChange;var v=x/s.__Step;s.Value(v.Round());}
else{var y=this.__Y+=Mouse.YChange;var z=y/s.__Step;s.Value(z.Round());}};$SuggestionBox=$TextBox;TextBox.Extensions.Add(new Extension("suggestion",SuggestionBox));Type.SuggestionBox=Type.$++;function SuggestionBox(e){if(this.DOM===undefined){return SuggestionBox.Inherit(SuggestionBox.Extend(new TextBox(e).ClassName("suggestion")));}
var $=this;e=$.DOM;e.setAttribute("autocomplete","off");$.__Display=new Div().Position("absolute").Collapsed(true);$.__Class=e.getAttribute("displayclass")||"";$.__FocusClass=(e.getAttribute("focusclass")||"");$.__Source=e.getAttribute("source")||null;$.__MinLength=(e.getAttribute("minlength")||"1");$.__Text=(e.getAttribute("bindtext")||"");$.__Value=(e.getAttribute("bindvalue")||"");$.__AnchorCache=[];$.__CurrentAnchors=[];$.__CurrentAnchor=null;$.__StopShow=false;$.OnSuggestionSelected=new Event($);if($.__Source){$.__Source=window[$.__Source];}
Page.AddElement($.__Display);$.__Display.Style("overflow-y","auto");$.__Display.Style("overflow-x","hidden");$.Data=new Array(20);$.DisplayClass($.__Class);var d=new Delegate($.__HandleKeyDown,$,[Delegate.Event])
$.__Display.OnKeyDown.Add(d);$.__CheckCache();$.Data=new ObservableArray($);$.OnSuggestionSelected=new Event($);$.OnFocus.Add(new Delegate($.__HandleKeyUp,$));$.OnBlur.Add(new Delegate($.HideSuggestions,$));$.OnKeyDown.Add(d);$.OnKeyUp.Add(new Delegate($.__HandleKeyUp,$,[Delegate.Event]));$.OnClick.Add(new Delegate($.__MuffleClick,$,[Delegate.Event]));Page.OnClick.Add(new Delegate($.HideSuggestions,$));$.Type=Type.SuggestionBox;}
SuggestionBox.prototype.__MuffleClick=function(e){e.Handled=true;};SuggestionBox.prototype.__CheckCache=function(){var a;while(this.Data.length>this.__AnchorCache.length){a=new Anchor().Style(Style.Display,"block").Underline(false);a.OnClick.Add(new Delegate(this.__SelectData,this,[a]));this.__AnchorCache.Add(a);}};SuggestionBox.prototype.__HandleKeyDown=function(e){e=$KeyEventArgs(e);switch(e.Key){case Keys.Enter:case Keys.Tab:if(this.__CurrentAnchor){this.SelectedData(this.__CurrentAnchor.Tag);e.Handled=true;}
break;case Keys.DownArrow:if(this.__Display.Collapsed()){this.ShowSuggestions();}
this.__HighlightNext();break;case Keys.UpArrow:if(this.__Display.Collapsed()){this.ShowSuggestions();}
this.__HighlightPrevious();break;}};SuggestionBox.prototype.__HandleKeyUp=function(e){if(this.__StopShow){this.__StopShow=false;return;}
if(e&&(e.Key==Keys.UpArrow||e.Key==Keys.DownArrow)){return;}
if(this.Text().length>=this.__MinLength){this.Update()
if(this.Data.length>0){this.ShowSuggestions();}
else{this.HideSuggestions(true);}}else{this.Bind([]);this.HideSuggestions(true);}};SuggestionBox.prototype.__SelectData=function(a){this.SelectedData(a.Tag);}
SuggestionBox.prototype.SelectedData=function(d){if(d===undefined){return this.__SelectedData;}
this.__SelectedData=d;this.Text(NinJa.EvalBind(this.__Text,d));this.OnSuggestionSelected.Fire(new EventArgs(this,d));this.HideSuggestions(true);this.__StopShow=true;this.Update();this.FocusNext();};SuggestionBox.prototype.__HighlightNext=function(){if(this.__Display.Collapsed()){return;}
if(this.__CurrentAnchor){if(this.__FocusClass){this.__CurrentAnchor.Classes.Remove(this.__FocusClass);}
else{this.__CurrentAnchor.BackgroundColor("").ForegroundColor("");}}
var i=this.__CurrentAnchors.IndexOf(this.__CurrentAnchor);i++;if(i>=this.__CurrentAnchors.length){i=0;}
else if(i==-1){i=0;}
this.__CurrentAnchor=this.__CurrentAnchors[i];if(this.__FocusClass){this.__CurrentAnchor.Classes.Add(this.__FocusClass);}
else{this.__CurrentAnchor.BackgroundColor("#3399ff").ForegroundColor("#ffffff");}
if(this.__Display.ElementClipped(this.__CurrentAnchor)){this.__Display.VerticalScrollToElement(this.__CurrentAnchor);}};SuggestionBox.prototype.__HighlightPrevious=function(){if(this.__Display.Collapsed()){return;}
if(this.__CurrentAnchor){if(this.__FocusClass){this.__CurrentAnchor.Classes.Remove(this.__FocusClass);}
else{this.__CurrentAnchor.BackgroundColor("").ForegroundColor("");}}
var i=this.__CurrentAnchors.IndexOf(this.__CurrentAnchor);i--;if(i<0){i=this.__CurrentAnchors.length-1;}
this.__CurrentAnchor=this.__CurrentAnchors[i];if(this.__FocusClass){this.__CurrentAnchor.Classes.Add(this.__FocusClass);}
else{this.__CurrentAnchor.BackgroundColor("#3399ff").ForegroundColor("#ffffff");}
if(this.__Display.ElementClipped(this.__CurrentAnchor)){this.__Display.VerticalScrollToElement(this.__CurrentAnchor);}};SuggestionBox.prototype.DisplayClass=function(c){if(c===undefined){return this.__Display.ClassName();}
this.__Display.ClassName(c);if(!c){this.__Display.Style(Style.Border,"1px solid #000000").BackgroundColor(Colors.White).Height(200);}
else{this.__Display.Style(Style.Border,"").BackgroundColor(Colors.Empty).Style(Style.Padding,"");}
return this;}
SuggestionBox.prototype.FocusClass=function(c){if(c===undefined){return this.__FocusClass;}
this.__FocusClass=c;return this;}
SuggestionBox.prototype.Source=function(s){if(s===undefined){return ths.__Source;}
this.__Source=s;return this;}
SuggestionBox.prototype.MinLength=function(m){if(m===undefined){return this.__MinLength;}
this.__MinLength=m;return this;}
SuggestionBox.prototype.ShowSuggestions=function(){if(!this.__StopShow){if(this.Data.length>0){this.__Display.X(this.X()).Y(this.Y()+this.LayoutHeight());this.__Display.Width("").Collapsed(false).Width(this.__Display.LayoutWidth()+17);}}
return this;};SuggestionBox.prototype.HideSuggestions=function(f){if(f===undefined){if(this.__Display.IsMouseOver){return;}}
this.__Display.Collapsed(true);return this;};SuggestionBox.prototype.Update=function(){var data;if(this.__Source){data=this.__Source(this.Text());if(data){this.Bind(data);}}
if(this.__CurrentAnchor){if(this.__FocusClass){this.__CurrentAnchor.Classes.Remove(this.__FocusClass);}
else{this.__CurrentAnchor.BackgroundColor("").ForegroundColor("");}
this.__CurrentAnchor=null;}
return this;}
SuggestionBox.prototype.Bind=function(data){this.Data.BeginUpdate();this.Data.Clear();this.Data.AddRange(data);this.Data.EndUpdate();this.__CheckCache();this.Refresh();this.ShowSuggestions();return this;};SuggestionBox.prototype.BindText=function(t){if(t===undefined){return this.__Text;}
this.__Text=t;return this;}
SuggestionBox.prototype.BindValue=function(v){if(v===undefined){return this.__Value;}
this.__Value=v;return this;}
SuggestionBox.prototype.Refresh=function(){this.__Display.ClearContent();this.__CurrentAnchors.Clear();var l=this.Data.length;var d=this.Data;var a,v;var text=this.__Text;var value=this.__Value;for(var i=0;i<l;i++){v=d[i];a=this.__AnchorCache[i];a.Classes.Clear();a.Text(NinJa.EvalBind(this.__Text,v));a.Tag=v;this.__Display.AddElement(a);this.__CurrentAnchors.Add(a);}};$Template=$Anchor;Type.Template=Type.$++;Div.Extensions.Add(new Extension("template",Template));function Template(e){this.Bind(null);}
Template.prototype.Bind=function(obj){obj=obj||{};if(!this.Template){this.Template=true;this.__all=NinJaControls.__GetAllNodes(this.DOM,[]);this.__nodeValues=[];var k=this.__all.length;for(var j=0;j<k;j++){this.__nodeValues.push(this.__all[j].nodeValue);}}
var reg=/\{[A-Za-z\.]*}/i,property,a,b,k,v,w,x,y,l=this.__all.length;for(var i=0;i<l;i++){v=this.__nodeValues[i];w=this.__all[i];w.nodeValue=String.BindFormat(v,obj);}
this.Type=Type.Template;};NinJaControls.__GetAllNodes=function(e,array){var a=e.childNodes;var l=a.length;var v;for(var i=0;i<l;i++){v=a[i];if(v.nodeName!="#text"){var b=v.attributes,m=b.length;for(var j=0;j<m;j++){if(String.BindRegEx.exec(b[j].value)){array.push(b[j]);break;}}}
else{if(String.BindRegEx.exec(v.nodeValue)){array.push(v);}}
NinJaControls.__GetAllNodes(v,array);}
return array;}
TextBox.Extensions.Add(new Extension("watermark",WaterMarkTextBox));$WaterMarkTextBox=$TextBox;Type.WaterMarkTextBox=Type.$++;function WaterMarkTextBox(e){if(this.DOM===undefined){return WaterMarkTextBox.Inherit(WaterMarkTextBox.Extend(new TextBox(e).ClassName("watermark")));}
var $=this;e=$.DOM;$.__OStyle=e.getAttribute("style")|"";$.__OClass=e.className;$.__OText=$.Text;$.Text=$.__Text;$.__WaterMarkValue=e.getAttribute("watermarkvalue")||"";$.__WaterMarkClass=(e.getAttribute("watermarkclass")||"");$.__WaterMarkStyle=e.getAttribute("watermarkstyle")||"";if(!$.__WaterMarkClass&&!$.__WaterMarkStyle){$.__WaterMarkStyle="color: #c0c0c0;";}
$.OnBlur.Add(WaterMarkTextBox.prototype.__CheckValue);$.OnFocus.Add(WaterMarkTextBox.prototype.__RemoveWaterMark);$.HasValue=false;$.__CheckValue();Page.Form.OnSubmit.Add(new Delegate($.__SafeSubmit,$));$.Type=Type.WaterMarkTextBox;}
WaterMarkTextBox.prototype.__SafeSubmit=function(){if(!this.HasValue){this.DOM.value="";}};WaterMarkTextBox.prototype.__Text=function(t){if(t===undefined){t=this.__OText();return t==this.__WaterMarkValue?"":t;}
this.__OText(t);return this;}
WaterMarkTextBox.prototype.__CheckValue=function(){var e=this.DOM;if(e.value.length==0){this.HasValue=false;e.value=this.__WaterMarkValue;e.setAttribute("style",this.__WaterMarkStyle);e.className=this.__WaterMarkClass;}
else{this.HasValue=true;}}
WaterMarkTextBox.prototype.__RemoveWaterMark=function(){var e=this.DOM;if(e.value==this.__WaterMarkValue){e.value="";e.setAttribute("style",this.__OStyle);e.className=this.__OClass;}}
WaterMarkTextBox.prototype.WaterMarkValue=function(v){if(v===undefined){return this.__WaterMarkValue;}
this.__WaterMarkValue=v;this.__CheckValue();return this;}
WaterMarkTextBox.prototype.WaterMarkClass=function(c){var e=this.DOM;if(c===undefined){return this.__WaterMarkClass;}
this.__WaterMarkClass=c;if(e.value==this.__WaterMarkValue){e.value="";}
this.__CheckValue();return this;}
WaterMarkTextBox.prototype.WaterMarkStyle=function(m){if(m===undefined){return this.__WaterMarkStyle;}
this.__WaterMarkStyle=m;this.__CheckValue();return this;}
function InlineTip(e){if(this.DOM===undefined){return InlineTip.Inherit(InlineTip.Extend(new Span(e).ClassName("tip")));}}