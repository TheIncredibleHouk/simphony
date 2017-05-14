
if(typeof(NinJaVisuals)=="undefined"){alert("NinJaVisuals required for the GridView");}
if(typeof(NinJaControls)=="undefined"){alert("NinJaControls required for the GridView");}
if(typeof(NinJaQuery)=="undefined"){alert("NinJaQuery required for the GridView");}
Type.GridView=Type.$++;Type.GridView=Type.$++;Type.GridViewColumn=Type.$++;Type.GridViewRow=Type.$++;Type.GridViewGroupRow=Type.$++;Type.GridColumnSize=Type.$++;GridView.AscSortIcon="▲";GridView.DescSortIcon="▼";Table.Extensions.Add(new Extension("gridview",GridView));var $GridView=$Anchor;var $RowBoundEventArgs=$Array;function GridView(e){if(this.DOM===undefined){return GridView.Inherit(GridView.Extend(new Table(e).ClassName("gridview")));}
var $=this;e=$.DOM;$.__Display=(e.getAttribute("display")||"10").ToInt();$.Columns=new ObservableArray($);var c,v,i,l,g,d;c=$.Head.Rows[0].Cells;g=e.getElementsByTagName("col");l=c.length;for(i=0;i<l;i++){v=c[i];$.Columns.Add(GridViewColumn.Inherit(GridViewColumn.Extend(v),g[i]));}
$.__Focus=new Anchor().Position("fixed").X(-100).Y(10).Text("rawr").Href("javascript: Null()");$.__Multiple=(e.getAttribute("multiple")||"false").ToBoolean();$.__Sortable=(e.getAttribute("sortable")||"true").ToBoolean();$.__Selectable=(e.getAttribute("selectable")||"true").ToBoolean();$.__SelectClass=(e.getAttribute("selectclass")||"selected");$.__SortClass=(e.getAttribute("sortclass")||"sorted");$.__ASortClass=(e.getAttribute("ascsortclass")||"");$.__DSortClass=(e.getAttribute("descsortclass")||"");$.__RowHeight=(e.getAttribute("rowheight")||"");$.__Loading=false;Page.AddElement($.__Focus);$.__LastIndex=-1;$.__LastRow=null;$.OnClick.Add(new Delegate($.__Focus.Focus,$.__Focus));$.Style(Style.TableLayout,"fixed").NaturalDisplay="inline-block";$.Data=new ObservableArray($);$.SelectedData=new ObservableArray($);$.Container=new Div().Width($.AttributeWidth());$.Container.Style(Style.WhiteSpace,"nowrap");e.parentNode.replaceChild($.Container.DOM,e);$.ScrollBar=new ScrollBar();$.ScrollBar.Style(Style.Float,"right");$.Holder=new Div().Style(Style.Display,"inline-block");$.Holder.AddElement($);$.Container.AddElements([$.ScrollBar,$.Holder]);$.Style(Style.BorderCollapse,"separate");$.AscSortIcon=GridView.AscSortIcon;$.DescSortIcon=GridView.DescSortIcon;$.SortIcon=new Span().Style(Style.Float,"right");$.OnSelectionChanged=$.SelectedData.OnChange;$.OnRowBound=new Event($);$.MessageRow=new Row();$.MessageRow.Cells.Add(new Cell());$.__Focus.OnKeyDown.Add(new Delegate($.HandleKey,$,[Delegate.Event]));$.ScrollBar.OnScrollChange.Add(new Delegate($.Refresh,$));$.OnMouseWheel.Add(new Delegate($.HandleScroll,$,[Delegate.Event]));v=$.Container.Style(Style.Width);if(v.Type==Type.String){if(v.Contains("%")){Client.OnResize.Add(new Delegate($.RefreshWidth,$));}}
$.RefreshRows();$.RefreshWidth();$.Data.OnChange.Add(new Delegate($.RefreshData,$));$.RefreshData();$.SelectedData.OnChange.Add(new Delegate($.Refresh,$));if($.Container.onselectstart!==undefined){$.Container.onselectstart=function(){return false;};}
else{$.Container.OnMouseDown.Add(function(e){e.Handled=true;e.CancelEvent=true;});}
if($.__Sortable){$.__Order=SortOrder.Ascending;c=$.Columns,l=c.length;d=new Delegate($.Sort,$,[Delegate.Event]);for(i=0;i<l;i++){if(c[i].__Sort){c[i].OnClick.Add(d);}}}
e.__Sort=null;e.Type=Type.GridView;if(Client.Storage.Local){i=Client.Storage.Local.GetItem(Page.Location().pathname+":"+this.DOM.id);if(i){this.Sort(i.s,i.o);}}
return e;}
GridView.prototype.Sort=function(e,o){var s,p;if(e===undefined){this.Data.Sort(this.__Sort,this.__Order);return;}
if(this.SortIcon.DOM.parentNode){this.SortIcon.DOM.parentNode.$.ClassName("");}
if(e.Sender){s=e.Sender,p=s.__Data;}
else{p=e;}
if(!p){this.__Order=SortOrder.Ascending;this.__Sort=null;if(this.SortIcon.DOM.parentNode){this.SortIcon.DOM.parentNode.$.ReSnapTo(this.SortIcon).ClassName("");}
return;}
if(p==this.__Sort){this.__Order=this.__Order==SortOrder.Ascending?SortOrder.Descending:SortOrder.Ascending;}
else{this.__Order=o||SortOrder.Ascending;var a=this.Columns,l=a.length,v,i;for(i=0;i<l;i++){v=a[i];if(v.__Data==p){v.InsertElement(0,this.SortIcon);break;}}}
this.SortIcon.Text(this.__Order==SortOrder.Ascending?this.AscSortIcon:this.DescSortIcon);if(this.SortIcon.DOM.parentNode){this.SortIcon.DOM.parentNode.$.ClassName(this.__SortClass||(this.__Order==SortOrder.Ascending?this.__ASortClass:this.__DSortClass)||"");}
this.__Sort=p;this.Data.Sort(p,this.__Order);this.Refresh();if(Client.Storage.Local){Client.Storage.Local.SetItem(Page.Location().pathname+":"+this.DOM.id,{s:this.__Sort,o:this.__Order});}
return this;};GridView.prototype.Bind=function(data){var v=this.ScrollBar.Value();this.Data.BeginUpdate();this.Data.Clear();if(data){this.Data.AddRange(data);}
if(this.Data.length==0){this.MessageRow.Cells[0].Text("No items");}
this.__LastIndex=-1;this.__LastRow=null;this.__Loading=false;this.Data.EndUpdate();this.Refresh()
this.ScrollBar.Value(v);this.SelectedData.Clear();};GridView.prototype.Loading=function(txt){this.Data.Clear();txt=txt||"Loading...";this.__Loading=true;this.MessageRow.Cells[0].Text(txt);return this;};GridView.prototype.Refresh=function(){if(this.__Loading){return;}
var r=this.Rows,l=r.length,v,u,i,c,s;this.__LastRow=-1;var o=document.createElement("TBODY");this.Body.DOM.parentNode.replaceChild(o,this.Body.DOM);for(i=1,j=this.ScrollBar.Value();i<l;i++,j++){v=this.Data[j];u=r[i];s=this.SelectedData.Contains(v);c=s?this.__SelectClass:"";u.Bind(v).ClassName(c);if(this.OnRowBound.length>0){this.OnRowBound.Fire(new RowBoundEventArgs(this,u,v));}
if(s){this.__LastRow=i;}
u.Index=j;}
if(this.Data.length>0){this.Rows[0].Collapsed(true);this.Rows[1].Collapsed(false);}
else{this.Rows[0].Collapsed(false).Cells[0].Text("No items.").ColumnSpan(this.Columns.length);this.Rows[1].Collapsed(true);}
o.parentNode.replaceChild(this.Body.DOM,o);delete o;return this;};GridView.prototype.RefreshData=function(){if(this.__Sort){this.Sort();}
var i,c=this.Columns,l=c.length,j,d=this.Data,k=d.length;for(j=0;j<k;j++){d[j].__P=new Array();for(i=0;i<l;i++){d[j].__P[i]=c[i].__Premutate(d[j]);}}
if(this.Data.length<=this.__Display){this.ScrollBar.Collapsed(true);this.ScrollBar.MaxValue(0);this.Refresh();this.RefreshWidth();return;}
else{this.ScrollBar.Collapsed(false);this.RefreshWidth();this.ScrollBar.Height(this.LayoutHeight()).__RefreshView();this.ScrollBar.MaxValue(this.Data.length-this.__Display);this.Refresh();}};GridView.prototype.ScrollToItem=function(item){if(item){var index=this.Data.IndexOf(item),a=this.ScrollBar.Value(),b=this.__Display,c=b+a;if(index>=a&&index<c){return;}
else if(index>=c){this.ScrollBar.Value(index-b+1);}
else if(index<a){this.ScrollBar.Value(index);}}};GridView.prototype.RowHeight=function(v){if(v===undefined){return this.__RowHeight;}
this.__RowHeight=v;this.RefreshRows();this.Refresh();}
GridView.prototype.DisplayRows=function(d){if(d===undefined){return this.__Display;}
if(this.__Display!=d){this.__Display=d;this.RefreshRows();this.Refresh();}
return this;}
GridView.prototype.RefreshRows=function(){this.Rows.BeginUpdate();this.Rows.Clear();var i,r=[],v,l=this.__Display;var d=new Delegate(this.HandleClick,this,[Delegate.Event]);r.Add(this.MessageRow.Collapsed(true));this.MessageRow.Cells[0].AttributeHeight(this.__RowHeight);for(i=0;i<l;i++){v=new GridViewRow();v.RefreshColumns(this.Columns);v.Bind(null);if(this.__Selectable){v.OnClick.Add(d);v.OnContextMenu.Add(d);}
if(this.__RowHeight){v.Cells[0].AttributeHeight(this.__RowHeight);}
r.Add(v);}
this.Rows.AddRange(r);this.Rows.EndUpdate();};GridView.prototype.HandleClick=function(e){if(e.Sender.Tag){if(this.SelectedData.Contains(e.Sender.Tag)){return;}
this.SelectedData.BeginUpdate();this.SelectedData.Clear();this.SelectedData.Add(e.Sender.Tag);this.__LastIndex=e.Sender.Index;this.SelectedData.EndUpdate();}};GridView.prototype.HandleScroll=function(e){if(this.ScrollBar.Collapsed()){return;}
this.ScrollBar.Value(this.ScrollBar.Value()+e.Clicks);e.Handled=true;};GridView.prototype.HandleKey=function(e){var i=this.__LastIndex,d=this.Data,sd=this.SelectedData;if(d.length==0){return;}
e.Handled=true;switch(e.Key){case Keys.DownArrow:sd.BeginUpdate();if(false){}
else{i++;if(i>=d.length){i=d.length-1;}
if(this.__LastIndex==i){d.Updating=false;return;}
this.__LastIndex=i;sd.Clear();sd.Add(d[i]);if(this.__LastRow==this.__Display){this.ScrollBar.Value(this.ScrollBar.Value()+1);d.Updating=false;return;}}
sd.EndUpdate();break;case Keys.UpArrow:sd.BeginUpdate();if(false){}
else{i--;if(i<0){i=0;}
if(this.__LastIndex==i){d.Updating=false;return;}
this.__LastIndex=i;sd.Clear();sd.Add(d[i]);if(this.__LastRow==1){this.ScrollBar.Value(this.ScrollBar.Value()-1);sd.Updating=false;return;}}
sd.EndUpdate();break;case Keys.Home:sd.BeginUpdate();if(false){}
else{this.__LastIndex=0;sd.Clear();sd.Add(d[0]);this.ScrollBar.Value(0);sd.Updating=false;}
sd.EndUpdate();break;case Keys.End:sd.BeginUpdate();if(false){}
else{i=d.length-1;this.__LastIndex=i;sd.Clear();sd.Add(d[i]);this.ScrollBar.Value(i);sd.Updating=false;}
sd.EndUpdate();break;case Keys.PageUp:sd.BeginUpdate();if(false){}
else{i=i-10;if(i<0){i=0;}
this.__LastIndex=i;sd.Clear();sd.Add(d[i]);this.ScrollBar.Value(this.ScrollBar.Value()-this.__Display);sd.Updating=false;}
sd.EndUpdate();break;case Keys.PageDown:sd.BeginUpdate();if(false){}
else{i=i+10;if(i>=d.length){i=d.length-1;}
this.__LastIndex=i;sd.Clear();sd.Add(d[i]);this.ScrollBar.Value(this.ScrollBar.Value()+this.__Display);sd.Updating=false;}
sd.EndUpdate();break;}};GridView.prototype.RefreshWidth=function(){var a=this.Columns,l=a.length,v,w,u,i,o;o=document.createElement("THEAD");this.AttributeWidth(0);var total=this.Container.LayoutWidth()-this.ScrollBar.LayoutWidth();this.AttributeWidth(total);this.Head.DOM.parentNode.replaceChild(o,this.Head.DOM);var lq=[];for(i=0;i<l;i++){w=this.Columns[i];v=w.__Width;switch(v.Type){case GridColumnSizeType.Static:w.Width(w.Value);total-=w.Value;break;case GridColumnSizeType.Relative:u=total*v.Value;w.Width(u);total-=u;break;case GridColumnSizeType.Liquid:lq.Add(w);break;}}
l=lq.length;u=(total/lq.length).Round();for(i=0;i<l;i++){lq[i].Width(u);}
o.parentNode.replaceChild(this.Head.DOM,o);delete o;return this;};function GridViewColumn(c){if(this.DOM===undefined){return GridViewColumn.Inherit(GridViewColumn.Extend(new Header()));}
var $=this;var e=$.DOM;$.Style(Style.Overflow,"hidden").Style(Style.WhiteSpace,"nowrap").Position("relative");if(c){$.__HAlign=c.getAttribute("align")||"left";$.__VAlign=c.getAttribute("valign")||"top";$.__Style=c.getAttribute("style")||"";$.__Class=c.getAttribute("class")||"";}
else{$.__HAlign="left";$.__VAlign="top";$.__Style="";$.__Class="";}
$.__Type=e.getAttribute("type")||"text";$.__HTML=(e.getAttribute("html")||"false").ToBoolean();$.__Sort=(e.getAttribute("sortable")||"true").ToBoolean();$.__Width=new GridColumnSize(e.getAttribute("width")||"*");$.__Display=e.getAttribute("display")||"";$.__Data=e.getAttribute("data")||"";if(!$.__Display){$.__Display="{"+$.__Data+"}";}
$.OnColumnBound=new Event($);var o=e.getAttribute("onbound");if(o){$.OnColumnBound.Add(window[o]);}
$.Type=Type.GridViewColumn;}
GridViewColumn.prototype.__Premutate=function(d){return{__T:String.BindFormat(this.__Display,d),__D:NinJa.EvalBind(this.__Data,d)};};function GridViewRow(e){return GridViewRow.Extend(new Row());}
GridViewRow.prototype.Bind=function(d){this.Tag=d;this.Index=0;var a=this.Cells,l=a.length,i,v,w,u,t,ev=new ColumnBoundEventArgs();for(i=0;i<l;i++){v=a[i];w=v.__Col;ev.Cancel=false;if(!NullOrUndefined(d)&&w.OnColumnBound.length>0){ev.Column=w;ev.Item=d;ev.Sender=v;w.OnColumnBound.Fire(ev);}
if(!d||ev.Cancel){switch(w.__Type){case GridViewColumnType.Text:v.Text(" ");break;case GridViewColumnType.Link:v.__A.Collapsed(true);break;case GridViewColumnType.Image:v.__I.Collapsed(true);break;}}
else{t=d.__P[i].__T;u=d.__P[i].__D;switch(w.__Type){case GridViewColumnType.Text:if(NullOrUndefined(t)){v.Text("&nbsp;");}
else{if(w.__HTML){v.Content(t);}
else{v.Text(t);}}
break;case GridViewColumnType.Anchor:v.__A.Text(t).Href(u).Collapsed(false);break;case GridViewColumnType.Image:v.__I.Source(t).Collapsed(false);break;}}}
return this;};GridViewRow.prototype.RefreshColumns=function(columns){this.Cells.BeginUpdate();this.Cells.Clear();var a=columns;var l=a.length;var i,v,c=[],b,u,h,w,s,x;for(i=0;i<l;i++){v=a[i];b=new Cell().ClassName(v.__Class).HorizontalAlignment(v.__HAlign).VerticalAlignment(v.__VAlign);b.DOM.setAttribute("style",v.__Style);b.Style(Style.Overflow,"hidden").Style(Style.WhiteSpace,"nowrap");b.__Col=v;switch(v.__Type){case GridViewColumnType.Link:x=new Anchor();b._A=x;b.AddElement(x);break;case GridViewColumnType.Image:x=new ImageElement();b.__I=x;b.AddElement(x);break;}
c.Add(b);}
this.Cells.AddRange(c);this.Cells.EndUpdate();};var GridViewColumnType={Text:"text",Image:"image",Link:"link"};var GridColumnSizeType={Static:0,Relative:1,Liquid:2};function GridColumnSize(value){this.Value=null;this.ColumnsType=GridColumnSizeType.Liquid;this.Type=Type.GridColumnSize;switch(value.Type){case Type.String:if(value.EndsWith("%")){this.Value=value.Remove("%").ToFloat()/100;this.ColumnsType=GridColumnSizeType.Relative;}
else if(value=="*"){this.Value=null;this.ColumnsType=GridColumnSizeType.Liquid;}
else if(value.IsInt()){this.Value=value.ToInt();this.ColumnsType=GridColumnSizeType.Static;}
break;case Type.Number:this.Value=value;this.ColumnsType=GridColumnSizeType.Static;break;}}
function RowBoundEventArgs(sender,row,item){this.Sender=sender;this.Row=row;this.Item=item;this.Cancel=false;}
function ColumnBoundEventArgs(sender,col,item){this.Sender=sender;this.Column=col;this.Item=item;this.Cancel=false;}