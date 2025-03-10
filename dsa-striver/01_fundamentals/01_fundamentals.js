// const readline = require("readline");

// [01] User input/output --------------------------------------------------------------------------

// ▣ readline module is used for reading input from the terminal.
// ▣ console.log() prints output to the terminal.
// ▣ To run the above code, open terminal and run below command.
// ▣ node dsa-striver-a2z-sheet\01_fundamentals\01_fundamentals.js

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name? ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
// process.stdout.write("\n");

// [02] Data types ---------------------------------------------------------------------------------

/*
  ▣ Primitive data-types

    ◉ Number: Stores integers and floating-point numbers.
    ◉ String: Sequence of characters, enclosed in quotes.
    ◉ Boolean: Represents true or false.
    ◉ Undefined: A variable declared but not assigned a value.
    ◉ Null: Represents an intentional empty value.
    ◉ Symbol: Unique and immutable values.
    ◉ BigInt: Large integers beyond Number.MAX_SAFE_INTEGER.

  ▣ Non-Primitive data types

    ◉ Object: Stores key-value pairs.
    ◉ Array: Collection of elements (list).
    ◉ Function: A reusable block of code.
    ◉ Date: Stores date and time.
    ◉ RegExp: Stores regular expressions.

  ▣ Use typeof to check the data type. e.g. console.log(typeof true)
  ▣ Note: typeof null returns "object", which is a known bug in JS.
*/

// [03] If else statements -------------------------------------------------------------------------

/*
  Syntax

  if (true) {
    code present here will be executed
  } else {
    code present here will be executed
  }

  01. Write a program that takes an input of age and prints if you are adult or not.

  02. A school has below rules for grading system.
  Ask user to enter marks and print corresponding grade.
    a. Below 25 - F
    b. 25 to 44 - E
    c. 45 to 49 - D
    d. 50 to 59 - C
    e. 60 to 79 - B
    f. 80 to 100 - A

  03. Take the age from the user and then decide accordingly
    1. If age < 18,
    print→> not eligible for job
    2. If age >= 18 and age <= 54,
    print→> "eligible for job"
    3. If age >= 55 and age <= 57,
    print→> "eligible for job, but retirement soon."
    4. If age > 57
    print→> "retirement time"
*/

// Solution 01
const age = 21;
if (age >= 18) {
  console.log("You are an adult !");
} else {
  console.log("You are not an adult !");
}

// Solution 02
const marks = 82;
if (marks >= 80 && marks <= 100) {
  console.log("Your grade is A");
} else if (marks >= 60 && marks < 80) {
  console.log("Your grade is B");
} else if (marks >= 50 && marks < 60) {
  console.log("Your grade is C");
} else if (marks >= 45 && marks < 50) {
  console.log("Your grade is D");
} else if (marks >= 25 && marks < 45) {
  console.log("Your grade is E");
} else {
  console.log("Your grade is F");
}

// Solution 03
const userAge = 27;
if (userAge > 57) {
  console.log("Retirement time !");
} else {
  if (userAge >= 55) {
    console.log("Eligible for job, but retirement soon.");
  } else {
    if (userAge >= 18) {
      console.log("Eligible for job");
    } else {
      console.log("Not eligible for job !");
    }
  }
}
process.stdout.write("\n");

// [04] Switch statements --------------------------------------------------------------------------

/*
  Syntax

  switch(val) {
    case val1: if val === val1, code gets executed;
    break;
    case val2: if val === val2, code gets executed;
    break;
    default: if val !== val1 && val !== val2, code gets executed;
    break;
  }

  NOTE: If we do not add break, then all cases below the matching one gets executed.
*/

/*
  04. Take the day no and print the corresponding day
    for 1 print Monday,
    for 2 print Tuesday and so on for 7 print Sunday.
*/

// Solution 04
const day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid input !"); break;
}
process.stdout.write("\n");

// [05] Arrays - 1D & 2D ---------------------------------------------------------------------------

/*
  ▣ JS arrays are resizable and can contain a mix of different data types.
  ▣ Array elements are stored in continuous memory locations.
  ▣ Array index starts from 0.
  ▣ JS array-copy operations create shallow copies. 
*/

// A. Declaring an array -

// 1. Using [] notation.
const numbers = [1, 2, 3, 4, 5];

// 2. Using new keyword.
const fruits = new Array("apple", "mango", "cherry", "orange", "banana");

// B. Accessing and Modifying an Array -

// 1. Accessing elements by index.
const colors = ["red", "green", "blue"];
console.log("Element at index 0 :", colors[0]);
console.log("Element at index 1 :", colors[1]);
console.log("Element at index 2 :", colors[2]);

// 2. Modifying element.
colors[1] = "yellow";
console.log("Colors :", colors);

// 3. Finding array length
console.log("Colors array length :", colors.length);
process.stdout.write("\n");

// C. Array methods

// Adding and Removing elements -

// 1. push(): Add an element to end.
numbers.push(6); // [1, 2, 3, 4, 5, 6]
// 2. pop(): Removes an element from end.
numbers.pop(); // [1, 2, 3, 4, 5]
// 3. unshift(): Add an element to beginning.
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]
// 4. push(): Removes an element from beginning.
numbers.shift(); // [1, 2, 3, 4, 5]

// Looping through arrays -

// 1. Using for loop
for (let i = 0; i < fruits.length; i++) {
  process.stdout.write(fruits[i] + " ");
}
process.stdout.write("\n");
// 2. Using forEach()
fruits.forEach((fruit) => process.stdout.write(fruit + " "));
process.stdout.write("\n");
// 3. Using map()
// map() method returns a new array.
let upperCaseFruits = fruits.map((item) => item.toUpperCase());
console.log(upperCaseFruits);
process.stdout.write("\n");

// Finding & Filtering elements -

// 1. indexOf(): Find index of an element.
console.log("Index of 4 is :", numbers.indexOf(4)); // 3
// 2. includes(): Check if element exists in the array.
console.log("Element 6 is present in numbers :", numbers.includes(6)); // false
// 3. find(): Returns the first element satisfying the condition.
console.log(
  "Element greater than 3 :",
  numbers.find((element) => element > 3)
); // 4
// 4. filter(): Returns all elements satisfying the condition.
// filter() method returns a new array.
console.log(
  "All elements greater than 3 :",
  numbers.filter((element) => element > 3)
); // [4, 5]
process.stdout.write("\n");

// Sorting & Reversing -

// sort() method sorts the array elements lexicographically. (i.e. by comparing ascii values)
let letters = ["B", "b", "a", "C", "c", "A"];
letters.sort(); // ["A", "B", "C", "a", "b", "c"]
console.log("Sorted letters :", letters);

// reverse() method reverses the elements in the array.
letters.reverse(); // ["c", "b", "a", "C", "B", "A"]
console.log("Reverse sorted letters :", letters);

// NOTE: In order to sort numbers, we must pass a comparator function.
let numArr = [9, 13, 11, 17, 5, 2, 22, 8, 30];
numArr.sort((a, b) => a - b); // Sorts in ascending order.
console.log("Sorted numbers :", numArr);
process.stdout.write("\n");

// Joining & Splitting -

let words = ["Hello", "Javascript"];
let sentence = words.join("_");
// join() method joins the array elements using the argument and returns a string.
console.log("Sentence :"); // Hello_Javascript

words = sentence.split(" ");
// split() method splits the string based on the argument passed.
console.log(words); // [Hello, Javascript]
process.stdout.write("\n");

// Merging -

let arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
// concat() method is used to merge 2 or more arrays.
let concatMerge = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
console.log("Concat merge arrays :", concatMerge);
// spread operator can also be used to merge 2 or more arrays.
let spreadMerge = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log("Spread merge arrays :", spreadMerge);
process.stdout.write("\n");

// Removing elements -

// slice(startIndex, endIndex) returns a part of array. Original array is unchanged.
// (including element at startIndex & excluding element at endIndex).
let slicedArr = numbers.slice(1, 3); // [2, 3]
console.log("Sliced array :", slicedArr);
// splice(startIndex, deleteCount, newElement1, newElement2...)
// splice() method modifies the original array.
numbers.splice(1, 2, 10, 20, 30); // [1, 10, 20, 30, 4, 5]
console.log("Spliced array :", numbers);
process.stdout.write("\n");

// [06] Strings ------------------------------------------------------------------------------------

/*
  ▣ Strings: 
  ▣ Characters in a string can be accessed using index. e.g. "javascript"[1] -> a
  ▣ 
*/

// [07] for loop -----------------------------------------------------------------------------------

/*
  Syntax

  for (initialization; condition; increment/decrement) {
    code present here will be executed until condition becomes false.
  }
*/

// [08] while loop & do-while loop -----------------------------------------------------------------

/*
  Syntax

  initialization;
  while (condition;) {
    code present here will be executed until condition becomes false.
    increment/decrement;
  }

  initialization;
  do {
    code present here will be executed at least once.
    increment/decrement;
  }
  while (condition;)
*/

// [09] Functions ----------------------------------------------------------------------------------

/*
  ▣ Functions are set of code which performs something. e.g. sum of 2 numbers.
  ▣ Functions are used to modularize code.
  ▣ Functions are used to increase readability.
  ▣ Functions are used to use same code multiple times.
  ▣ Types of functions -
    ◉ void: doesn't return anything.
    ◉ return: returns some value.
    ◉ parameterized: accepts arguments during function call.
    ◉ non-parameterized: no arguments are passed.

  ▣ Pass by value -
    ◉ Primitive types (Number, String, Boolean, Undefined, Null, Symbol, BigInt) are passed by value in JavaScript.
    ◉ This means that a copy of the value is passed to the function, and changes inside the function do not affect the original variable.

  ▣ Pass by reference -
    ◉ Non-primitive types (Objects, Arrays, Functions) are passed by reference in JavaScript.
    ◉ This means the reference (memory address) of the original object is passed, not a copy. So, changes inside the function will affect the original object.
*/

// [10] Time complexity & Space complexity ---------------------------------------------------------

/*
  ▣ Time complexity: Rate at which the time taken to execute a program increases with respect to the input size. It is measured using Big-Oh notation. e.g. O(n)
    ◉ Time complexity should be always measured for worst-case scenario.
    ◉ Ignore constants & smaller values.

  ▣ Space complexity: Rate at which the memory space taken to execute a program increases with respect to the input size. It is measured using Big-Oh notation. e.g. O(n)
    Space complexity = Auxiliary space + Input space
      ◉ Auxiliary space: Space taken to solve the problem.
      ◉ Input space: Space taken to store the input.
  ▣ NOTE: Do not modify the input to save space (bad practice).
*/

// -------------------------------------------------------------------------------------------------
