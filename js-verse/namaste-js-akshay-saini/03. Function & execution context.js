// How functions work in JS (Variable environment): https://youtu.be/gSDncyuGw0s?si=xgEVXpLmV7gmks-P
// Shortest JS program (window & this keyword): https://youtu.be/QCRpVw2KXf8?si=bNvHQB3UkKKF3KrV

var x = 1;
a(); // 10
b(); // 100
console.log(x); // 1

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

/*
  ▣ Code execution

    ◉ Step 1: Global execution context (GEC) is created and memory is assigned to variables and functions point to function definition.
    ◉ Step 2: Code execution starts.
    ◉ Step 3: GEC: variable x is assigned a value of 1.
    ◉ Step 4: On reaching function call, a new execution context is created (a) with its own memory component and code component.
      ◈ Step 5: A new variable x is created and assigned the value of undefined.
      ◈ Step 6: Code execution starts, x is assigned a value of 10.
      ◈ Step 7: Value of x from local context (a) is printed i.e. x = 10.
    ◉ Step 8: Local execution context (a) is deleted and control moves to GEC.
    ◉ Step 9: On reaching function call, a new execution context is created (b) with its own memory component and code component.
      ◈ Step 10: A new variable x is created and assigned the value of undefined.
      ◈ Step 11: Code execution starts, x is assigned a value of 100.
      ◈ Step 12: Value of x from local context (b) is printed i.e. x = 100.
    ◉ Step 13: Local execution context (b) is deleted and control moves to GEC.
    ◉ Step 14: Value of x from global context (GEC) is printed i.e. x = 1.
    ◉ Step 15: GEC is deleted and program ends.
*/

/*
  ▣ Shortest program in JS
    ◉ In JS the shortest program is the empty file.
    ◉ Even though the file is empty a global execution context (memory space is setup), a global object (window) and this variable is created.

    ◉ JS runs on different browsers (chrome, mozilla, internet explorer) and servers (node) by JS engine and wherever it runs, a GEC, global object and this variable is always created.

  ▣ Global space: in browser
    ◉ Any variable (declared using var) or function, that is not declared inside any other function is in global space.
    ◉ These variables and functions are attached to the window object and can be accessed by -
      window.varName or varName or this.varName

  ▣ window object: in browsers 
    ◉ Global object is created by JS engine automatically whenever a GEC is created.
    ◉ It has a lot of pre-defined methods and variables inside it. E.g. alert()
    ◉ JS engine also creates a this keyword and at global level, this points to the window object.
      i.e. at global level, (this === window) results in true.
*/
