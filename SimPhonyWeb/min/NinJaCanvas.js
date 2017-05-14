
NinJa.Mapper.Add("CANVAS",Canvas);$Canvas=$Anchor;Type.Canvas="Canvas";Type.Brush="Brush";function Canvas(e){if(e===undefined||e.Type==Type.String){e=NinJa.CreateElement(e,"canvas");}
var $=this;$.DOM=e;e.$=$;$.Context=e.getContext('2d');$.Type=Type.Canvas;}
Canvas.Extensions=[];Canvas.prototype.Width=Element.prototype.Width;Canvas.prototype.Height=Element.prototype.Height;Canvas.prototype.Fill=function(brush){this.Context.fillStyle=brush.Normalize(this.Context);this.Context.fillRect(0,0,this.Width(),this.Height());return this;}
Canvas.prototype.FillCircle=function(brush,x,y,radius){this.Context.fillStyle=brush.Normalize(this.Context);this.Context.beginPath();this.Context.arc(x,y,radius,0,Math.PI*2,true);this.Context.closePath();this.Context.fill();return this;};Canvas.prototype.FillRectangle=function(brush,rectangle){this.Context.fillStyle=brush.Normalize(this.Context);this.Context.fillRect(rectangle.X,rectangle.Y,rectangle.Width,rectangle.Height);return this;}
Canvas.prototype.DrawRectangle=function(pen,rectangle){this.Context.strokeStyle=pen.Color.Normalize();this.Context.lineWidth=pen.Thickness;this.Context.strokeRect(rectangle.X,rectangle.Y,rectangle.Width,rectangle.Height);return this;}
Canvas.prototype.DrawImage=function(image,x,y){this.Context.drawImage(image,x,y);return this;}
Canvas.prototype.DrawImageScale=function(image,x,y,scale){this.Context.drawImage(image,x,y,image.Width()/scale,image.Height()/scale);return this;}
Canvas.prototype.DrawImageStretch=function(image,sourceReg,destReg){this.Context.drawImage(image,sourceReg.X,sourceReg.Y,sourceReg.Width,sourceReg.Height,destReg.X,destReg.Y,destReg.Width,destReg.Height);return this;}
Canvas.prototype.FillImage=function(image){this.Context.drawImage(image,0,0,image.Width(),image.Height(),0,0,this.Width(),this.Height());return this;}
function Rectangle(x,y,width,height){this.X=x;this.Y=y;this.Width=width;this.Height=height;}
Color.prototype.Normalize=function(context){if(this.Alpha>0){return"rgba("+this.Red+", "+this.Green+", "+this.Blue+", "+this.Alpha+")";}
return"rgb("+this.Red+", "+this.Green+", "+this.Blue+")";};function SolidBrush(color){this.Color=color.Type==Type.String?new Color(color):color;}
SolidBrush.prototype.Normalize=function(){return this.Color.Normalize();}
SolidBrush.FromRGB=function(r,g,b){return new SolidBrush(new Color(r,g,b));};SolidBrush.FromRGBA=function(r,g,b,a){return new SolidBrush(new Color(r,g,b,a));};SolidBrush.FromPredefined=function(name){return new SolidBrush(name);}
var GradientType={Linear:0,Radial:1};function LinearGradientBrush(startX,startY,endX,endY){this.StartX=startX;this.StartY=startY;this.EndX=endX;this.EndY=endY;this.Stops=[];this.GradientType=GradientType.Linear;}
LinearGradientBrush.prototype.Normalize=function(context){var a;switch(this.GradientType){case GradientType.Linear:a=context.createLinearGradient(this.StartX,this.StartY,this.EndX,this.EndY);break;}
this.Stops.ForEach(function(i){a.addColorStop(i.Offset,i.Color.Normalize());});return a;}
function GradientStop(offset,color){this.Offset=offset;this.Color=color.Is==Type.String?new Color(color):color;}
function Pen(color,thickness){this.Color=color;this.Thickness=thickness==undefined?1:thickness;}
Pen.FromRGB=function(r,g,b){return new Pen(new Color(r,g,b));};Pen.FromRGBA=function(r,g,b,a){return new Pen(new Color(r,g,b,a));};Pen.FromPredefined=function(name){return new Pen(name);}
function Rectangle(x,y,width,height){this.X=x;this.Y=y;this.Width=width;this.Height=height;}