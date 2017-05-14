///<reference path="~/scripts/NinJa.js" />

var NinJaTesting = {};
function UnitTest(name, setup, funcArray, teardown) {
    ///<summary>Creates an individual unit test.</summary>
    ///<param name="name" type="String">Name of the test.</param>
    ///<param name="setup" type="Function">Function to call to set up an environment.</param>
    ///<param name="funcArray" type="Array">Array of functions to call for the single test.</param>
    ///<param name="teardown" type="Function">Function to call to clean up an environment.</param>
    ///<field name="SetUp" type="Function">Function to call to set up an environment.</param>
    ///<field name="Tests" type="Array">Array of individual functions to call for the test.</param>
    ///<field name="TearDown" type="Function">Function to call to clean up an environment.</param>
    ///<field name="Name" type="String">Name of the test.</field>
    this.SetUp = function () { };
    this.Tests = [function () { }, function () { }, function () { } ];
    this.TearDown = function () { };
    this.Name = "";
}

NinJaTesting.FindFunctionName = function (func) {
    ///<summary>Retrieves the name of a function (if named).</summary>
    ///<param name="func" type="Function">Named function.</param>
    return "";
}

var Assert = {};
Assert.IsTrue = function (result, message) {
    ///<summary>Result must be true.</summary>
    ///<param name="result" type="Boolean">Result to test.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

Assert.IsFalse = function (result, message) {
    ///<summary>Result must be false.</summary>
    ///<param name="result" type="Boolean">Result to test.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

Assert.AreValueEqual = function (value1, value2, message) {
    ///<summary>Values of objects most be equal..</summary>
    ///<param name="value1" type="Object">First value to test.</param>
    ///<param name="value2" type="Object">Second value ot test.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

Assert.AreReferenceEqual = function (ref1, ref2, message) {
    ///<summary>References must be to exact same object.</summary>
    ///<param name="ref1" type="Object">First reference to test.</param>
    ///<param name="ref2" type="Object">Second reference to test.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

Assert.IsNotNullOrUndefined = function (value, message) {
    ///<summary>Result must not be null or undefined.</summary>
    ///<param name="value" type="Object">Result to test.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

Assert.IsNullOrUndefined = function (value, message) {
    ///<summary>Result must be null or undefined.</summary>
    ///<param name="value" type="Object">Result to test.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

Assert.IsOfType = function (object, type, message) {
    ///<summary>Object must be of given type.</summary>
    ///<param name="object" type="Object">Object to test.</param>
    ///<param name="type" type="Type">Type to test for.</param>
    ///<param name="message" type="String">Message to display if test failes.</param>
}

function AsyncFunction(func, delay) {
    ///<summary>A function that must be tested asyncronously for user input or ajax calls. After 5 failed attempts, entire test fails.</summary>
    ///<param name="func" type="Function">Function to test.</param>
    ///<param name="delay type="Number">Number of milliseconds to delay between each test.</param>
}
