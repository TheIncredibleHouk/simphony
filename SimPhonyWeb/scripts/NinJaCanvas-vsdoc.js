///<reference path="~/scripts/NinJa.js" />

function Canvas(id) {
    ///<summary>Creates a new canvas with the given id.</summary>
    ///<param name="id" type="String">&lt;Optional&gt;The id of the canvas tag.</param>
}

Canvas.prototype.Fill = function (brush) {
    ///<summary>Fills the canvas with the provided color.</summary>
    ///<param name="brush" type="Brush">The brush to fill the canvas with.</param>
}

Canvas.prototype.FillCircle = function (brush, x, y, radius) {
    ///<summary>Filles a circle in the canvas.</summary>
    ///<param name="brush" type="Brush">The brush to draw with.</param>
    ///<param name="x" type="Number">X position of the center.</param>
    ///<param name="y" type="Number">Y position of the center.</param>
    ///<param name="radius" type="Number">Radius of the circle.</param>
    return this;
};

Canvas.prototype.FillRectangle = function (brush, rectangle) {
    ///<summary>Fills a rectangle in the canvas.</summary>
    ///<param name="brush" type="Brush">The brush to draw with.</param>
    ///<param name="rectangle" type="Rectangle">The rectangle to draw the to.</param>
    return this;
}

Canvas.prototype.DrawRectangle = function (draw, rectangle) {
    ///<summary>Draws a rectangle in the canvas.</summary>
    ///<param name="pen" type="Pen">The pen to draw with.</param>
    ///<param name="rectangle" type="Rectangle">The rectangle to draw the to.</param>
    return this;
}

Canvas.prototype.DrawImage = function (image, x, y) {
    ///<summary>Draws an image to the canvas tag, unscaled.</summary>
    ///<param name="image" type="ImageElement/Image">The image to draw.</param>
    ///<param name="x" type="Number">The x position to draw the image.</param>
    ///<param name="y" type="Number">The y position to draw the image.</param>
    return this;
}

Canvas.prototype.DrawImageScale = function (image, x, y, scale) {
    ///<summary>Draws an image to the canvas tag, scaled.</summary>
    ///<param name="image" type="ImageElement/Image">The image to draw.</param>
    ///<param name="x" type="Number">The x position to draw the image.</param>
    ///<param name="y" type="Number">The y position to draw the image.</param>
    ///<param name="scale" type="Number">The scale to use to draw the image.</param>
    return this;
}

Canvas.prototype.DrawImageStretch = function (image, sourceReg, destReg) {
    ///<summary>Draws an image to the canvas tag, scaled.</summary>
    ///<param name="image" type="ImageElement/Image">The image to draw.</param>
    ///<param name="sourceSect" type="Section">The section of the image to draw.</param>
    ///<param name="destSect" type="Section">The desintation area of the canvas to draw to.</param>
    return this;
}

Canvas.prototype.FillImage = function (image) {
    ///<summary>Draws the image to fill the entire canvas tag.</summary>
    ///<param name="image" type="Image">The image to draw.</param>
    return this;
}

function Rectangle(x, y, width, height) {
    ///<summary>Represents a section of a drawing rectangle.</summary>
    ///<field name="x" type="Number">X point of the rectangle.</field>
    ///<field name="y" type="Number">Y point of the rectangle.</field>
    ///<field name="width" type="Number">Width of the rectangle.</field>
    ///<field name="height" type="Number">Height of the rectangle.</field>
    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
}

function SolidBrush(color) {
    this.Color = new Color();
}

SolidBrush.FromRGB = function (r, g, b) {
    return new SolidBrush();
};

SolidBrush.FromRGBA = function (r, g, b, a) {
    return new SolidBrush();
};

SolidBrush.FromPredefined = function (color) {
    ///<summary>Creates a color object from the predefined list from Colors.</summary>
    ///<param name="color" type="Colors">The predefined Colors enumeration value.</param>
    return new SolidBrush();
}

function Color(r, g, b, a) {
    this.Red = 0;
    this.Green = 0;
    this.Blue = 0;
    this.Alpha = 0;
}

Color.FromRGB = function (r, g, b) {
    return new Color();
};

Color.FromRGBA = function (r, g, b, a) {
    return new Color();
};

Color.FromPredefined = function (name) {
    return new Color();
};

function LinearGradientBrush(startX, startY, endX, endY) {
    this.StartX = 0;
    this.StartY = 0;
    this.EndX = 0;
    this.EndY = 0;
    this.Stops = [];
    this.GradientType = GradientType;
    NinJa.Extend(this, Gradient);
}

var GradientType = {
    Linear: 0
};

function GradientStop(offset, color) {
    this.Offset = 0;
    this.Color = new Color();
}

function Pen(color, thickness) {
    this.Color = color;
    this.Thickness = 0;
}


Pen.FromRGB = function (r, g, b) {
    return new Pen();
};

Pen.FromRGBA = function (r, g, b, a) {
    return new Pen();
};

Pen.FromPredefined = function (name) {
    return new Pen();
}

$Canvas = function (id) {
    ///<summary>Gets the canvas with the given id.</summary>
    ///<param name="id" type="String">The id of the canvas.</parma>
    return new Canvas();
}