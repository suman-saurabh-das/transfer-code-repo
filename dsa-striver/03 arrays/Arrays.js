/*
  [01] Array - Fundamentals
  
  ▣ JS arrays are re-sizeable and can contain elements of same/mixed datatype.
  ▣ JS arrays are zero-indexed and elements can be accessed using non-negative integers.
    
  ▣ Length property: array.length returns size of the array.
    
    ◉ Increasing the length of an array extends the array by adding empty items without creating any new elements, not even undefined.
    ◉ Decreasing the length property does, however, delete elements.
*/

const fruits = [];

fruits.length = 3;
console.log("Array fruits having 3 empty items :", fruits);

// Overwriting the empty items.
fruits[0] = "mango";
fruits[1] = "apple";
fruits[2] = "banana";
console.log("Array fruits having 3 items :", fruits);

// Accessing array elements using for-loop.
for(let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i} : ${fruits[i]}`);
}

// Removing elements from array.
fruits.length = 1;
console.log("Array fruits having 1 item :", fruits);

// Sorting array elements
const arr2 = [2, 10, 49, 5, 13, 67];
// In order to sort numbers, we need to pass a comparator function
  // For ascending order: (a, b) => a - b
arr2.sort((a, b) => a - b);
console.log("Sorted array :", arr2);
