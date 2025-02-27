// [01] STL (Standard template library)

// Standard template library: is a collection of template classes and functions in C++ that provides generic, reusable data structures and algorithms. It is part of the C++ Standard Library and is widely used for solving common programming problems more efficiently.

// [02] Pair

// Pair: is a simple container that holds two values or objects of same or different types. It is commonly used when you need to store two related pieces of data as a single unit.
// In JS using objects, we can achieve same functionality as pairs.

let pair = { first: 10, second: 20 };
console.log("Pair :", pair, "\n");

// [03] Vector

// Vector: is a dynamic array that can grow or shrink in size and provides fast access to elements.
// In JS, the equivalent functionality is provided by the Array data structure. JS arrays are dynamic, allowing for resizing, and provide similar methods for accessing, modifying, and iterating over elements.

let vector = [];  // Initialization

vector.push(10);
vector.push(20);
vector.push(30);

// Access element using index.
console.log("Element at index 1 :", vector[0]);   // 10

// Length (size) of array. (NOTE - length is a property not a function)
console.log("Size of array :", vector.length);

// Iterate over elements.
vector.forEach((element, index) => {
  console.log("Element at index ", index, " :", element);
})

// Add element at the back.
vector.push(40);          // [10, 20, 30, 40]

// Remove element from the back.
vector.pop();             // [10, 20, 30]

// Insert element at a specific position. (Insert 15 at index 1)
vector.splice(1, 0, 15);  // [10, 15, 20, 30]

// Remove element from a specific position. (Remove 20 from index 2)
vector.splice(2, 1);      // [10, 15, 30]

// [05] List & Deque

// List: is a doubly linked list, meaning each element (node) in the list points to both its predecessor and successor. It allows efficient insertion and deletion of elements at both ends, but provides slower random access compared to arrays or vectors.

// Deque (double-ended queue): is a container that allows fast insertion and deletion at both ends. It provides random access to elements, but operations like insertion at the middle are slower.

// JavaScript Arrays can serve as an alternative for list & deque, because it allows efficient operations on both ends (push()/pop() on end/right-side and shift()/unshift() on start/left-side)

// Add element at the front.
vector.unshift(5);        // [5, 10, 15, 30]

// Remove element from the front.
vector.shift();           // [10, 15, 30]

console.log("Vector :", vector, "\n");

// [06] Stack & Queue

// Stack: Data structure that implements a LIFO (Last In, First Out) order, meaning the last element added is the first one to be removed.

// Queue: Data structure that implements a FIFO (First In, First Out) order, meaning the first element added is the first one to be removed.

// In JavaScript, we can achieve the same functionality as stack & queue using Arrays or by implementing custom classes.

// Stack implementation in JS using Arrays
// push(): Adds an element to the end of the array (top of the stack).
// pop(): Removes and returns the last element from the array (removes from the top of the stack).

// Queue implementation in JS using Array
// push(): Adds an element to the end of the array (enqueue).
// shift(): Removes and returns the first element from the array (dequeue).

// [07] Priority Queue

// Priority Queue: is a container that provides constant-time access to the largest (or smallest) element, depending on the comparison function. It operates as a heap, where elements are inserted and removed in such a way that the highest (or lowest) priority element is always at the top.

// Priority Queue implementation using Array
// Simplest approach is to use an array and manually sort it every time an element is added. But this isn't efficient for large data sets because sorting the array every time is an O(n*log(n)) operation.

// [08] Set

// In C++, set is an ordered collection of unique elements. It automatically maintains the order of elements, and no duplicate values are allowed. Insertion and removal of elements are efficient, typically with a time complexity of O(log n), because the underlying data structure is usually a balanced binary search tree (e.g., Red-Black Tree).

// In JS, a built-in object called Set offers similar functionality.
// Set stores unique elements. Any duplicate insertion is automatically handled.
// Set, are un-ordered but, it does preserve the order in which elements are inserted.
// Set is implemented using a hash table under the hood, so it supports O(1) time complexity for add, delete, and has operations.

// Creating a Set.
let idSet = new Set();

// Adding elements to a Set.
idSet.add(1);
idSet.add(2);
idSet.add(3);

// Iterating over the Set.
process.stdout.write("Elements in set are :");
idSet.forEach(value => process.stdout.write(" " + value))
process.stdout.write("\n");

// Checking if a value exists.
console.log("Set has 3 :", idSet.has(3));  // true
console.log("Set has 4 :", idSet.has(4));  // false

// Removing an element from the Set.
idSet.delete(3);  // 1 2

// Checking size of Set. (NOTE - size is a property)
console.log("Size of Set :", idSet.size); // 2

// Clearing the Set.
idSet.clear();

console.log("Set :", idSet, "\n");  // 0

// [09] Map

// In C++, map is an ordered container that stores key-value pairs, where each key is unique. It automatically maintains the order of the keys based on a comparison function (by default, keys are sorted in ascending order). Insertion, deletion & lookup of elements are efficient, typically with a time complexity of O(log n), because the underlying data structure is usually a balanced binary search tree (e.g., Red-Black Tree).

// In JavaScript, a built-in object called Map offers similar functionality.
// Map stores unique keys with their associated values.
// Map preserves the insertion order of keys and allows any value to be used as a key, including objects, arrays, and functions.
// Map is implemented using a hash table under the hood, so it supports O(1) time complexity for set, get and has operations.

// Creating a Set.
let fruitMap = new Map();

// Adding a (key, value) pair to a map.
fruitMap.set("apple", 5);
fruitMap.set("banana", 8);
fruitMap.set("orange", 3);

// Accessing values by key
console.log("Element with key banana has value :", fruitMap.get("banana")); // 8

// Iterating through the Map.
console.log("Key-value pairs in map are : ")
fruitMap.forEach((value, key) => {
  console.log(" ", key + ": " + value);
});

// Checking if a key exists.
console.log("Map has apple :",fruitMap.has("apple"));  // true
console.log("Map has grape :",fruitMap.has("grape"));  // false

// Removing a key-value pair
fruitMap.delete("orange");

// Checking size of Map. (NOTE - size is a property)
console.log("Size of Map :", fruitMap.size); // 2

// Clearing the Map.
fruitMap.clear();

console.log("Map :", fruitMap, "\n");

// [10] Algorithms

// Array.sort(): sorts the array lexicographically (as strings), which may not be the intended behavior for numbers. To sort arrays in ascending or descending order numerically, you need to provide a comparison function to the sort() method.

let numbers = [10, 30, 70, 90, 80, 40, 60, 50, 20];

// ascending order
numbers.sort((a, b) => a - b);
console.log("Numbers ascending order :", numbers);

// descending order
numbers.sort((a,b) => b - a);
console.log("Numbers descending order :", numbers);

let fruits = ['banana', 'apple', 'cherry', 'orange'];

// Sorting in ascending order (alphabetically)
fruits.sort();
console.log("Fruits ascending order :", fruits);

// Sorting in ascending order (alphabetically)
fruits.sort().reverse();
console.log("Fruits descending order :", fruits);