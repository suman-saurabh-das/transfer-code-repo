// Function statement or Function declaration
function a () {
    console.log("a called");
}
a();

// Function Expression
var b = function () {
    console.log("b called");
}
b();

// Anonymous Function
// Function without a name (must be assigned to a variable in order to use it)
// function () {}

// Named Function expression
var c = function d() {
    console.log("c called");
}
c();    // function calling
d();    // throws reference error as d is not defined in global scope

// Arguments vs Parameters
function x (parameter1, parameter2) {
    console.log(parameter1, parameter2);
}
x('argument1', 'argument2');

// First Class functions

// Function taking function as an input parameter
var z = function inFunc () {
    console.log("I am inner function");
}
function outFunc (param) {
    param();
}
outFunc(z);

// Function returning a function
function returnFunc () {
    return function () {
        console.log('empty function returned');
    }
}

console.log(returnFunc());