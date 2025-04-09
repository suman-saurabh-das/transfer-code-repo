// First class functions: https://youtu.be/SHINoHxvTso?si=p3Y-O_xgxdbIkEwu

/* 
  ▣ Function statement or Function declaration -
    ◉ Functions declared using the function keyword.
    ◉ Function statements are hoisted.
*/
function a() {
  console.log("a called");
}
a();

/*
  ▣ Function expression -
    ◉ Functions assigned to a variable. (initializing a variable with a function)
    ◉ Function expression are not hoisted.
*/
var b = function () {
  console.log("b called");
};
b();

/*
  ▣ Anonymous function -
    ◉ Function with no name.
    ◉ These are used when we need to use functions as values. e.g. assigning functions to variables.
    ◉ If we try to write anonymous function as a function statement, we get an error.
    ◉ It is a rule in ES6 that function statement must have a name.
        function () {} -> throws SyntaxError
*/

/*
  ▣ Named function expression -
    ◉ Named function assigned to a variable.
    ◉ In this case the named function is not created in the outer scope. (i.e. d is not available in global scope)
    ◉ But it is created as a local variable, i.e. we can access this function inside the scope of d.
*/
var c = function d() {
  console.log("c called");
};
c(); // function calling
d(); // throws reference error as d is not defined in global scope

/*
  Difference between Arguments & Parameters -
    ◉ Arguments are actual values passed to the function.
    ◉ parameter1 & parameter2 are local variables inside the function.
*/
function x(parameter1, parameter2) {
  console.log(parameter1, parameter2);
}
x("argument1", "argument2");

/*
  First class functions
    ◉ Ability to use functions as values (send a function as parameter/argument or return a function from a function) is known as first class functions.
      ◈ Functions can be passed into another function as a parameter.
      ◈ Functions can also return a function.
*/

// Function taking function as an input parameter.
var z = function inFunc() {
  console.log("I am inner function");
};
function outFunc(param) {
  param();
}
outFunc(z);

// Function returning a function.
function returnFunc() {
  return function () {
    console.log("empty function returned");
  };
}

console.log(returnFunc());
