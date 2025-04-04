/*

  [01] Array

  ▣ An array is a data structure that can hold a collection of values.
  ▣ Arrays can contain a mix of different data types.
    ◉ We can store strings, booleans, numbers or even objects all in the same array.
  ▣ Arrays are re-sizeable.
    ◉ We don't have to declare the size of an array before creating it.
  ▣ JS arrays are zero indexed and the insertion order is maintained.
  ▣ Arrays are iterables. They can be used with a for-of loop.

  [02] Time complexity of array methods

  ▣ insert / remove from end - O(1)
  ▣ insert / remove from beginning - O(n)
  ▣ access - O(1)
  ▣ search - O(n)  
  ▣ push / pop - O(1)
  ▣ shift / unshift / concat / slice / splice - O(n)
  ▣ forEach / map / filter / reduce - O(n)

*/

const array = ["Number array", 1, 2, 3, 4];
console.log(array, "\n");

// ▣ Accessing elements using index
console.log("Element at index 0 is :", array[0], "\n");

// ARRAY METHODS

// ▣ Searching - Iterating using a for-of loop
for (const item of array) {
  if (item === "Number array") {
    console.log("Element found :", item, "\n");
  }
}

// ▣ Array.push()
// ◉ Adding an element at the end.
// ◉ Returns the length of array.
const pushReturnVal = array.push(5);
console.log("Array.push() :", array, " | Return value :", pushReturnVal, "\n");

// ▣ Array.unshift()
// ◉ Adding an element at the start
// ◉ Returns the length of array.
const unshiftReturnVal = array.unshift(0);
console.log("Array.unshift() :", array, " | Return value :", unshiftReturnVal, "\n");

// ▣ Array.pop()
// ◉ Removing an element from the end.
// ◉ Returns the removed element.
const popReturnVal = array.pop();
console.log("Array.pop() :", array, " | Return value :", popReturnVal, "\n");

// ▣ Array.shift()
// ◉ Removing an element form the start.
// ◉ Returns the removed element.
const shiftReturnVal = array.shift();
console.log("Array.shift() :", array, " | Return value :", shiftReturnVal, "\n");

// ▣ Array.concat(arr1, arr2, arr3...)
// ◉ Joins 2 or more arrays and returns the concatenated array.
const arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3 = [7, 8, 9];
const concatenatedArray = arr1.concat(arr2, arr3);
console.log("Concatenated array :", concatenatedArray, "\n");

// NOTE - push, pop, shift & unshift modifies the original array.

// ▣ Array.slice(param1, param2)
// ◉ Returns a new sub array from an existing array.
// ◉ Original array remains unchanged.
// ◉ param 1 : start index, param 2 : last index - 1
// ◉ If param 2 is not provided, all elements till end are considered.
const slicedArray1 = array.slice(1, 3);
console.log("Sliced array :", slicedArray1);
const slicedArray2 = array.slice(2);
console.log("Sliced array :", slicedArray2, "\n");

// ▣ Array.splice(param1, param2, param3, param4...)
// ◉ Returns the removed element from the array and modifies the original array.
// ◉ It can be used to insert/delete elements from an array from any index.
// ◉ Modifies the original array.
// ◉ param1 : index, param2 : number of elements to delete including element at index param1.
// ◉ param3, param4, param5... : elements to be inserted after index param1.
const splicedArrayReturnVal1 = array.splice(0, 1);
console.log("Spliced array :", array, " | Return value :", splicedArrayReturnVal1);
const splicedArrayReturnVal2 = array.splice(0, 0, 5, 6);
console.log("Spliced array :", array, " | Return value :", splicedArrayReturnVal2, "\n");

// ▣ Array.map()
// ◉ Creates a new array from calling a function for every array element.
const squaredArray = array.map((item) => item * item);
console.log("Array.map(squareFn) :", squaredArray, "\n");

// ▣ Array.filter()
// ◉ Creates a new array filled with elements that pass a test provided by a function.
const oddNumberArray = array.filter((item) => item % 2 !== 0);
console.log("Array.filter(isOdd) :", oddNumberArray, "\n");

// ▣ Array.reduce()
// ◉ Method executes a reducer function for array element.
// ◉ Method returns a single value: the function's accumulated result.
const sumOfElements = array.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log("Array.reduce(sum) :", sumOfElements, "\n");

// NOTE - map(), filter() & reduce() does not execute the function for empty elements.
// NOTE - map(), filter() & reduce() does not modify the original array.

// ▣ Iterating using a forEach loop
array.forEach(element => {
  if(element === 5) {
    console.log("Element found :", element);
  }
});
