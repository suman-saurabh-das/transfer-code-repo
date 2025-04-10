// Closures in JS: https://youtu.be/qikxEIxsXco?si=dtbZQRn69XC_2edQ

// ▣ Closure: Function bundled (bound) together with its lexical environment forms a closure.

function p() {
  var a = 25;
  function q() {
    console.log(a);
  }
  q();
}
p();
// Here q() has variable a from p() bound together to form a closure.

// ▣ In JS we can -

// ◉ Assign functions to variables.
var v1 = function print() {
  console.log("javascript");
};

// ◉ Pass a function as a parameter.
f1(function f2() {
  console.log("function f2 passed");
});

// ◉ Return a function from a function, (returns function definition / code)
function f3() {
  var number = 25;
  function f4() {
    console.log(number);
  }
  return f4;
}
var v2 = f3();
console.log(v2);
v2(); // Returns 25 (as it remembers the lexical scope where it came from)
// Here number doesn't refer to value, it refers to the reference.

function f5() {
  var number = 25;
  return function f6() {
    console.log(number);
  };
}
var v3 = f5();
console.log(v3);
v3(); // Returns 25 (as it remembers the lexical scope where it came from)
// Here number doesn't refer to value, it refers to the reference.

/* 
  ◉ function f3() and f5() have same code just the return is placed at different location.
  ◉ When functions are returned from a function, they still maintain their lexical scope.
  ◉ When function was returned along with the code, its lexical environment was also returned i.e. a closure was returned.
*/

// ▣ Corner cases of Closures -

function x() {
  var a = 25;
  function y() {
    console.log(a);
  }
  a = 50;
  return y;
}
var z = x();
console.log(z);
// ... many more code
z(); // returns 50 (as it remembers the lexical scope where it came from)
// Here a doesn't refer to value, it refers to the reference.

/*
  ◉ References are returned along with function and not the value of the variable.
  ◉ The function remembers the reference to the variable and not the value.
*/

// ▣ Nested functions -

function outer() {
  var a = 100;
  function middle() {
    var b = 50;
    function inner() {
      console.log(a, " ", b); // 100 50
    }
    inner();
  }
  middle();
}
outer();

/*
  ◉ Function nested inside function, nested inside another function, if we try to access the variables of parent from the deepest of level, it is still possible.
  ◉ Here inner() forms a closure with its parent middle() and also with its parent's parent outer().
  ◉ And the closure has the lexical scope of both the parents.
  ◉ So if we return function inner() outside, the variables a and b would be retained and memory for them will not be garbage collected.
*/

/*
  ▣ Use cases of closures -
    ◉ Module design pattern.
    ◉ Currying.
    ◉ Functions like once.
    ◉ Memoize.
    ◉ Maintaining state in async world.
    ◉ setTimeouts.
    ◉ Iterators.
*/
