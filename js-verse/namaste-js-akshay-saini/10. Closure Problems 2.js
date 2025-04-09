// Closure interview questions: https://youtu.be/t1nFAMws5FI?si=4DRlb0rtmR-QIDsU

// ▣ Closure: A function bundled together with its outer environment (lexical environment) forms a closure. i.e. Each and every function in JS has access to the variables and functions of its parents. Even when this function is executed in some other scope (e.g. When we return the function and call it somewhere else in the code), it still remembers its outer lexical environment where it was originally present.

// Closure basic example.
function outerFunc1() {
  var a = 10;
  function innerFunc1() {
    console.log("Basic example of closure:", a);
  }
  innerFunc1();
}
outerFunc1();

// Here instead of var even if we use let, the closure will behave in the same way and print 10 even though let is block scoped, this is because the value of a will be retained in the memory and it will not be garbage collected.

// ▣ Accessing the closure in some other part of code.
function outerFunc2() {
  var a = 10;
  function innerFunc2() {
    console.log("Accessing closure in some other part of code:", a);
  }
  return innerFunc2;
}
// Here outerFunc2 returns the innerFunc2 and the second () calls the innerFunc2.
outerFunc2()();
// The below 2 lines are same as writing outerFunc2()()
var closure = outerFunc2();
closure();

// ▣ Passing a parameter to outer function: If we pass a parameter "b" to outer function, it will still form a closure and we can pass a value to outer parameter "b" while calling the outerFunc().
function outerFunc3(b) {
  var a = 10;
  function innerFunc3() {
    console.log("Passing a parameter to outer function:", a, b);
  }
  return innerFunc3;
}
outerFunc3("alex")();

// ▣ Nested closure: We can have any level of nesting, but closures will still behave the same.
function outermostFunc() {
  var c = 20;
  function outerFunc(b) {
    var a = 10;
    function innerFunc() {
      console.log("Nested closure:", a, b, c);
    }
    return innerFunc;
  }
  return outerFunc;
}
outermostFunc()("alex")();

// ◉ If a variable with conflicting name is present in the global & local scope (considering it is defined using let which has block scope), the function will use the variable in the local scope as it is pointing to that reference.
// ◉ If a variable is not present in the function, JS will try to search for it in the scope chain and if it is not present in the scope chain also, it will throw a reference error.

// ▣ Use case of closure - Creating a counter.
function counter() {
  let count = 0;
  function incrementCounter() {
    count++;
    console.log("Count is :", count);
  }
  return incrementCounter;
}

let myCounter1 = counter();
myCounter1();
myCounter1();
myCounter1();

// ▣ Scalable counter using constructor function.
function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log("Incremented count :", count);
  };
  this.decrementCounter = function () {
    count--;
    console.log("Decremented count :", count);
  };
}

let myCounter = new Counter();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.decrementCounter();

/*
  ▣ Advantages of closure -
    ◉ Used in module design pattern.
    ◉ Used in higher order functions like once & memoize.
    ◉ Used in function currying.
    ◉ Used in data hiding & encapsulation.
      ◉ e.g. We can take advantage of closure to have data privacy over variables (we can control which functions should access that variable) so that other functions or other part of code cannot access it.

  ▣ Disadvantages of closure -
    ◉ Every time a closure is formed there is memory consumption.
    ◉ There can be over consumption of memory as the variables are not garbage collected.
*/

/*
  ▣ Garbage collector: In JS, it is used to free up the unutilized memory.
    ◉ Garbage collector checks for the variables which are no longer in use and frees up the memory. Smart garbage collection by chromes v8 engine, if there are unused variables inside the closure, the they are garbage collected but the variables which are being used are not.
*/

// ▣ Garbage collector example.
function a() {
  let x = 10,
    z = 20;
  return function b() {
    console.log("Garbage collection:", x);
  };
}

let c = a();
c();
