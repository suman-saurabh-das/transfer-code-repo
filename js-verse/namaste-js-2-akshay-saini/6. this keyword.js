"use strict"

// ------------------------------------------------------------------------------------------------

// this in global space
// this keyword in global space will always have value equal to global object.
// The value of global object can be different based on environments.

console.log("this in global space ↴");
console.log(this);  // globalObject
// In case of browsers, globalObject is window.

// ------------------------------------------------------------------------------------------------

// this inside a function
// The value of this keyword inside a function is undefined. But if we do not use strict mode, its value becomes equal to global object because of this substitution.

// this keyword behaves differently in strict and non-strict mode.
// In non-strict mode, this keyword has value equal to global object.
// In strict mode, this keyword has value undefined.

function myFunc() {
  // Value depends on strict and non-strict mode
  console.log("this inside a function ↴");
  console.log(this);
}
myFunc();

// ------------------------------------------------------------------------------------------------

// this in strict mode (this substitution)
// this substitution - Whenever value of this keyword is undefined or null, this keyword will be replaced with global object, only in non-strict mode.

// ------------------------------------------------------------------------------------------------

// value of this keyword depends on how the function is called (window)

myFunc();         // undefined (when we call it without any reference of an object)
window.myFunc()   // window object (when we call it with reference to an object)

// ------------------------------------------------------------------------------------------------

// this inside an object's method
// When we are inside the method, the value of this keyword becomes equal to the object, where this method is present.

const myObj = {
  value: 10,
  myMethod: function () {
    console.log("this inside a method ↴");
    console.log(this);  // object (myObj)
  }
}
myObj.myMethod();

// ------------------------------------------------------------------------------------------------

// call, apply, bind methods (used for sharing methods)
// the value of this this keyword can be modified using call, apply and bind method.

const student1 = {
  name: "Saurabh",
  printName: function() {
    console.log(this.name);
  }
}
const student2 = {
  name: "Akshay"
}
student1.printName();
// value of this becomes student2
student1.printName.call(student2);                      // call method
student1.printName.apply(student2);                     // apply method
const printName2 = student1.printName.bind(student2);   // bind method
printName2();

// ------------------------------------------------------------------------------------------------

// this inside arrow function
// Arrow functions do not have their own this keyword, they take the value of their lexical environment where they are enclosed.

const myObj2 = {
  value2: 20,
  myMethod2: () => {
    console.log("this inside a method (arrow function) ↴");
    console.log(this);  // value of this becomes global object
  }
}
myObj2.myMethod2();

// ------------------------------------------------------------------------------------------------

// this inside nested arrow function

const myObj3 = {
  value3: 30,
  outerMethod: function() {
    // Enclosing lexical context for innerMethod
    const innerMethod = () => {
      console.log("this inside nested function ↴");
      console.log(this);  // value of this becomes myObj3
    }
    innerMethod();
  }
}
myObj3.outerMethod();

// ------------------------------------------------------------------------------------------------

// this inside DOM
// The value of this keyword inside the DOM element will be equal to reference to the HTML element.
{/* <button onclick="alert(this)">Click me !</button> */}

// ------------------------------------------------------------------------------------------------
