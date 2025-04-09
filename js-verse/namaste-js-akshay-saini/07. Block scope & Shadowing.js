// Block scope & Shadowing in JS: https://youtu.be/lW_erSjyMeM?si=jF9uv5-SC0Fn8B71

/*
  ▣ Block -
    ◉ A block is defined by {}
    ◉ It is also known as compound statement.
    ◉ It is used to group together multiple JS statements.
    ◉ Blocks / Groups are used when we want to execute multiple statements in a place where JS is expecting a single statement. E.g. if (condition) {...}
    ◉ In if condition, it expects a single statement, but by using a block we can group together multiple statements.
*/

if (true) {
  // Compound statements
  var a = 10;
  console.log(a);
}

/*
  Block Scope -
    ◉ Whatever variables and functions we can access inside the block.

    ◉ In below example, variable a is attached to the global object, hence it is accessible anywhere in our code, but variables b and c have a block level scope and cannot be accessed outside the block.
    ◉ On reaching line 36, variables b and c are no longer present as the block has ended and the memory for b and c is cleared. But variable a is attached to the global object and gets printed.
    ◉ If we try to access b and c outside the block, we get a reference error.
*/

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); // Accessible
console.log(b); // No longer available
console.log(c); // No longer available

// Shadowing: refers to the situation where a variable declared in an inner scope (such as a function, block, or loop) has the same name as a variable declared in an outer scope. The inner variable "shadows" or "hides" the outer variable within its scope, meaning that when the inner variable is accessed, the outer variable is not visible.

// ◉ If we have a variable a declared using var keyword in global scope as well as inside a block, then the variable initialization which comes later (block level in this case) gets assigned to the variable a.

var a = 100;
{
  var a = 10;
  console.log(a); // value of a is 10 (shadowing)
}
console.log(a); // value of a is 10
// Here variable a is in global and block scope, & both a point to the same memory location.

// ◉ If we have a variable b declared using let or const keyword in global scope as well as inside a block, then both the variables are stored in different memory location.

let b = 100;
{
  let b = 10;
  console.log(b); // value of b is 10 (shadowing)
}
console.log(b); // value of b is 100
// Here variable b is in a separate memory location in GEC and variable b inside the block is in a different memory location. But inside the block, b = 10 shadows the value of b = 100.

// Shadowing is also applicable to functions -

const c = 100;
function x() {
  const c = 50;
  console.log(c);
}
x(); // value of c is 50 (shadowing)
console.log(c); // value of c is 100

// Illegal shadowing

let a = 10;
{
  var a = 50; // throws error
}
// Here we are trying to cross the boundary of the scope as var has function level scope.

var a = 10;
{
  let a = 50; // valid shadowing
}
// Here var a is declared but in global scope and so we can redeclare a using let which will be created in a separate memory space and we are in the boundary of the block.

const a = 20;
{
  const a = 40;
  {
    const a = 60;
  }
}
console.log(a);
// Lexical scope also works for block.
