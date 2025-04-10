// let & const in JS (Temporal dead zone): https://youtu.be/BNC6slYCj50?si=Ov-E_LWacG_7vT1e

debugger;
console.log(num1);  // Reference error, num1 is not defined
let num1 = 10;
var num2 = 10;

/*
  ◉ Copy above code in browser, run & inspect it, we will see num1 shows <value unavailable> also, it is not attached to global object but it is present in a separate memory area. (Scope: Script)
  
  ◉ num1 is in a temporal dead zone until it gets value 10 assigned to it. Hence we cannot use the value of num1 before initializing it and we get the below error when we execute the code: Reference error, num1 is not defined.

  ◉ Here variable num2 is assigned undefined and is attached to the global object (Scope: Global) hence we can access it without initialization.
*/

/*
  ▣ What is temporal dead zone ?
  
    ◉ The time between which a variable is declared & initialized is called temporal dead zone.

    ◉ In the above example, num1 shows <value unavailable> on line 3, but it is in a different memory space. (not in global object)
    ◉ On line 5, num1 is assigned a value of 10.

    ◉ TDZ is the time since the let variable is declared and till it is initialized some value.
*/

/*
  ▣ Are let & const variables hoisted in JS ?

    ◉ let and const are hoisted (allocated memory), but they are present in the temporal dead zone, hence we cannot access them before assigning a value to them.

    ◉ If we declare a variable using var, they get associated with the global object whereas if we declare them using let or const, they are present in a separate memory area and they can only be used after a value is assigned to them.
*/

/*
  ▣ Difference between SyntaxError, ReferenceError & TypeError

  ◉ Reference error -
    ◈ If we try to use/access a variable that is not defined.
    ◈ If we try to use a variable declared using let but not assigned any value.

  ◉ Syntax error -
    ◈ If we try to redeclare a variable created using let keyword.
    ◈ If we do not initialize a const variable.
    ◈ NOTE: Not a single line of code will be executed if we have a syntax error.

  ◉ Type error -
    ◈ If we try to assign a value to a constant variable.
*/

console.log(x);   // Reference Error (x is not defined anywhere in code)
console.log(a);   // throws ReferenceError : Cannot access 'a' before initialization
console.log(b);   // Prints undefined

let a = 10;
let a = 100;    // Syntax Error (redeclaring variable created using let)

var a = 50;     // Syntax Error (redeclaring variable created using let)

var b = 50;
var b = 100;    // No Error (we can redeclare a variable created using var)

const b;        // Syntax Error (variable created using const is not assigned any value)
const c = 1000;
c = 100;        // Type Error (assigning a value to a constant variable)

/*
  ▣ Important points -

    ◉ In case of let, we can declare a variable and initialize it later in our code, but in case of const, it has to be declared and initialized in the same line.
    ◉ Always declare variables at the top, this will shrink the temporal dead zone window.
    ◉ It is always suggested to use const wherever possible, if not use let.
    ◉ Use a var variable only when required and use it consciously.
*/
