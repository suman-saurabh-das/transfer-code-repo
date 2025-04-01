console.log(a);     // throws ReferenceError : Cannot access 'a' before initialization
console.log(b);     // Prints undefined

let a = 10;
let a = 100;    // Syntax Error

var a = 50;     // Syntax Error

var b = 50;
var b = 100;    // No Error

const b;        // Syntax Error
const c = 1000;
c = 100;        // Type Error

console.log(x); // Reference Error