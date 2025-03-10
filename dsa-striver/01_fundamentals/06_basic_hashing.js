/*
  [01] Hashing: is a technique to map data to a fixed-size value (hash) using a hash function.

  Array hashing (pre-calculation/fetching) -
    pre-calculation: Using a loop, storing the frequency of numbers at the index in a hash array.
    fetching: Fetch the required frequency of a number using hash array index.
    Disadvantage: Collisions occur when different keys map to the same index.

  Map hashing: Storing the frequency of numbers using a map. <key: number | value: frequency>
    Advantage: Handles collisions automatically.

  [02] Hashing methods

    Division method
    Folding method
    Mid Square method

    Collision: A collision occurs when two different keys get mapped to the same hash value.
      Chaining can be used to prevent collision (Chaining stores multiple values at the same index.

). e.g. Use a linked list at each index.

*/

// [01] Count the occurrences of a number in the array. --------------------------------------------

// Time complexity: O(n) | Space complexity: O(1)
function frequencyCountNum_hashArr(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
  }
  return count;
}
let arr1 = [1, 2, 3, 2, 1, 2];
console.log("1 appears " + frequencyCountNum_hashArr(arr1, 1) + " times.");
console.log("2 appears " + frequencyCountNum_hashArr(arr1, 2) + " times.");
console.log("3 appears " + frequencyCountNum_hashArr(arr1, 3) + " times.");
process.stdout.write("\n");

// Time complexity: O(1) | Space complexity: O(n)
function frequencyCountNum_map(arr, n) {
  let frequencyMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], 1);
    } else {
      let count = frequencyMap.get(arr[i]);
      frequencyMap.set(arr[i], ++count);
    }
  }
  return frequencyMap.get(n);
}
let arr2 = [1, 2, 3, 2, 1, 2];
console.log("1 appears " + frequencyCountNum_map(arr2, 1) + " times.");
console.log("2 appears " + frequencyCountNum_map(arr2, 2) + " times.");
console.log("3 appears " + frequencyCountNum_map(arr2, 3) + " times.");
process.stdout.write("\n");

// [02] Print the occurrences of each number in the array. -----------------------------------------

// Time complexity: O(n) | Space complexity: O(max(arr[i]))
function printFrequencyCountNum(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  let hashArr = new Array(maxValue + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArr[arr[i]]++;
  }
  return hashArr;
}
console.log("Freq count arr :", printFrequencyCountNum([2, 3, 2, 3, 5]));
console.log("Freq count arr :", printFrequencyCountNum([3, 3, 3, 3]));
process.stdout.write("\n");

// [03] Print the occurrences of each character in the string. -------------------------------------

// Time complexity: O(n) | Space complexity: O(1)
// Here space complexity is 1 because the hashArr created is not dependent on input size as the count of unique characters is 256 and hashArr.length cannot exceed 256.
// In below solution we are assuming string to contain only lowercase alphabets.
function frequencyCountChar(str, char) {
  let charHashMap = new Array(26).fill(0);
  for (i = 0; i < str.length; i++) {
    charHashMap[str.charAt(i).charCodeAt(0) - 97]++;
  }
  return charHashMap[char.charCodeAt(0) - 97];
}
let str1 = "aabacacbc";
console.log("Char 'a' occurs " + frequencyCountChar(str1, "a") + " times.");
console.log("Char 'b' occurs " + frequencyCountChar(str1, "b") + " times.");
console.log("Char 'c' occurs " + frequencyCountChar(str1, "c") + " times.");
process.stdout.write("\n");

/*
  [04] Frequencies in a Limited Array.--------------------------------------------------------------
  
  https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0

  Input: [2, 3, 2, 3, 5] | Output: [0, 2, 2, 0, 1]
  Input: [3, 3, 3, 3] | Output: [0, 0, 4, 0]
*/

// Using a hash array.
// Time complexity: O(n) | Space complexity: O(n)
function frequencyCountNumbers(arr) {
  let hashArr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArr[arr[i] - 1]++;
  }
  return hashArr;
}
console.log("Frequency count arr :", frequencyCountNumbers([2, 3, 2, 3, 5]));
console.log("Frequency count arr :", frequencyCountNumbers([3, 3, 3, 3]));
process.stdout.write("\n");

/*
  [05] Find the highest/lowest frequency element. --------------------------------------------------

  Given an array of size N. Find the highest and lowest frequency element.
  https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/

  Input: [10, 5, 10, 15, 10, 5] | Output: 10 15
  Input: [2, 2, 3, 4, 4, 2] | Output: 2 3
*/

// Time complexity: O(n) | Space complexity: O(n)
function freqOfHighestAndLowest(arr) {
  let maxVal = Number.MIN_VALUE,
    minVal = Number.MAX_VALUE;
  let maxElement = -1,
    minElement = -1;
  let freqMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!freqMap.has(arr[i])) {
      freqMap.set(arr[i], 1);
    } else {
      let count = freqMap.get(arr[i]);
      freqMap.set(arr[i], ++count);
    }
  }
  freqMap.forEach((value, key) => {
    if (value > maxVal) {
      maxVal = value;
      maxElement = key;
    }
    if (value < minVal) {
      minVal = value;
      minElement = key;
    }
  });
  console.log(maxElement + " " + minElement);
}
process.stdout.write("Highest & Lowest : ");
freqOfHighestAndLowest([10, 5, 10, 15, 10, 5]);
process.stdout.write("Highest & Lowest : ");
freqOfHighestAndLowest([2, 2, 3, 4, 4, 2]);

// -------------------------------------------------------------------------------------------------
