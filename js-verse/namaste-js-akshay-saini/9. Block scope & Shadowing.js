if (true) {
  // Compound statements
  var a = 10;
  console.log(a);
}

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);     // Accessible
console.log(b);     // No longer available
console.log(c);     // No longer available

// Shadowing

var a = 100;
{
  var a = 10;
  console.log(a); // value of a is 10
}
console.log(a);     // value of a is 10

let b = 100;
{
  let b = 10;
  console.log(b); // value of b is 10
}
console.log(b);     // value of b is 100

const c = 100;
function x() {
  const c = 50;
  console.log(c);
}
x();                // value of c is 50
console.log(c);     // value of c is 100

// Illegal shadowing

let a = 10;
{
  var a = 50; // throws error
}

var a = 10;
{
  let a = 50; // valid shadowing
}

const a = 20;
{
  const a = 40;
  {
    const a = 60;
  }
}
console.log(a);