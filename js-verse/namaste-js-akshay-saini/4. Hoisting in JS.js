console.log(x);                 // undefined
console.log(printFunction1);    // prints whole function
printFunction1();               // function call

console.log(printFunction2);    // undefined
printFunction2();               // error

console.log(printFunction3);    // undefined
printFunction3();               // error

var x = 2;

// Function Declaration
function printFunction1() {
  console.log("function hoisting happens");
}

// Function Expression
var printFunction2 = function () {
  console.log("function hoisting will not happen");
}

// Arrow function
var printFunction3 = () => {
  console.log("function hoisting will not happen");
}
