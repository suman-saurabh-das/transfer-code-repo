// Call back function
function x() {
    console.log("Hello to the World");
}
// Higher order function
function y(x) {
    x();
}
y(x);

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
}
console.log(radius.calculate(area));