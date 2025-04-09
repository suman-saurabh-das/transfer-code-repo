// undefined & not-defined in JS: https://youtu.be/B7iF6G3EyIk?si=4pPTPnJ8tpkaqjlf

/*
  ▣ Undefined -
    ◉ undefined: is a keyword that is used as a placeholder to initialize variables until they are assigned a value. (During memory allocation phase, memory is assigned to variables using undefined)
    ◉ undefined doesn't mean that it is null ir empty, it takes up some space in memory.
    ◉ NOTE: It is not a good practice to assign any variable with undefined.

  ▣ Not defined -
    ◉ not-defined is a variable or function that has not been defined in any part of the whole code.
    ◉ It means that memory has not been allocated.
*/

var a;
if (a === undefined) {
  // returns true.
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}

/*
  ▣ JS is a loosely typed language: It doesn't attaches the variable with any specific datatype.
    ◉ So we can create a variable "x" and store numbers, string or boolean inside it.
    ◉ It is also known as a weakly typed language.
*/

var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
x = "hello world";
console.log(x); // hello world
