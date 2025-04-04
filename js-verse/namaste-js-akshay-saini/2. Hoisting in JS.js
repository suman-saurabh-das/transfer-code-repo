// Hoisting in JavaScript - https://youtu.be/Fnlnw8uY6jo?si=r0lzc-FIZTi13nY1

// Hoisting is the phenomenon in JS which allows us to access the variables and functions even before initializing them. e.g. code below -

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

/*
  In JS, global execution context is created first and inside it memory creation occurs first, so that the program first scans for all the variables and functions. For variables (declared using var), it allocates memory & initializes them with undefined. For functions, whole function definition (code) is stored in the memory.

  But in case of function expression & arrow function, since we are declaring them using var variables, the variables get created and are initialized with undefined rather than the function definition being copied, hence they cannot be called/invoked before declaration.
*/
