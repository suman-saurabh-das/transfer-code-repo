// Higher order functions: https://youtu.be/HkWxvB1RJq0?si=yTAFeAKHt5I_wPyR

// ▣ Higher order function: A function which takes another function as a parameter/argument OR returns another function is known as higher order function.

// Call back function
function x() {
  console.log("Hello to the World");
}
// Higher order function
function y(x) {
  x();
}
y(x);
// Here x() is the callback function and y() is the higher order function.

// ▣ Functional programming

const radius = [3, 1, 4, 2];

function area(radius) {
  return Math.PI * radius * radius;
}
function circumference(radius) {
  return 2 * Math.PI * radius;
}
function diameter(radius) {
  return 2 * radius;
}

function calculate(array, logic) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logic(array[i]));
  }
  return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

/*
  ◉ Optimizing the code: DRY (Don't Repeat Yourself)
  ◉ Code modularity: Breaking the program as small reusable functions.
  ◉ Code reusability: Reusing the function with different parameters.
*/

// ▣ Polyfill for map method

function area(radius) {
  return Math.PI * radius * radius;
}
// Polyfill for map() method
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.calculate(area));

/*
  ◉ Here we have used Array.prototype to add the calculate function to all the arrays.
  ◉ i.e. We are modifying the in-built array to have this calculate function.
  ◉ And we can access the array using the this keyword.
*/
