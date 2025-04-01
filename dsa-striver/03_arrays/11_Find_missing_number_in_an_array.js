/*
  [11] Find the missing number in an array.

  Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

  Input: [1, 2, 4, 5] | Output: 3
  Input: [2, 3] | Output: 1
*/

// Brute force solution: Using nested loops.
// Time complexity: O(n²) | Space complexity: O(1)
function findMissingNumber_BF(arr) {
  for (let i = 1; i <= arr.length + 1; i++) {
    isFound = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      return i;
    }
  }
}

// Better solution: Hashing.
// Time complexity: O(2*n) | Space complexity: O(n)
function findMissingNumber_BS(arr) {
  // Create a hash array of length (arr.length + 1) with all 0.
  let hashArray = new Array(arr.length + 1).fill(0);
  // For every element that exists in array, set the value as 1.
  for (let i = 0; i < arr.length; i++) {
    hashArray[arr[i]] = 1;
  }
  // console.log(hashArray);
  // Loop through hash array to find the missing element. (value as 0)
  for (let i = 1; i <= hashArray.length; i++) {
    if (hashArray[i] === 0) {
      return i;
    }
  }
  // If the last number is missing.
  return hashArray.length;
}

// Optimal solution 1: Using sum.
// Time complexity: O(n) | Space complexity: O(1)
function findMissingNumber_OS1(arr) {
  let sum = 0,
    n = arr.length + 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  const sumOfN = Math.floor((n * (n + 1)) / 2);
  // Missing number = sum of n natural numbers - sum of all numbers in array
  return sumOfN - sum;
}

// Optimal solution 2: Using XOR.
// Property 1: a ^ 0 = a | Property 2: a ^ a = 0
// Time complexity: O(n) | Space complexity: O(1)
function findMissingNumber_OS2(arr) {
  let xorOfN = 0,
    xorOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    xorOfN = xorOfN ^ (i + 1);
    xorOfArr = xorOfArr ^ arr[i];
  }
  // XOR with last number i.e. N
  xorOfN = xorOfN ^ (arr.length + 1);
  return xorOfN ^ xorOfArr; // Missing number
}

const arr1 = [1, 2, 4, 5],
  arr2 = [2, 3];

console.log("Missing number is :", findMissingNumber_BF(arr1));
console.log("Missing number is :", findMissingNumber_BF(arr2));
process.stdout.write("\n");

console.log("Missing number is :", findMissingNumber_BS(arr1));
console.log("Missing number is :", findMissingNumber_BS(arr2));
process.stdout.write("\n");

console.log("Missing number is :", findMissingNumber_OS1(arr1));
console.log("Missing number is :", findMissingNumber_OS1(arr2));
process.stdout.write("\n");

console.log("Missing number is :", findMissingNumber_OS2(arr1));
console.log("Missing number is :", findMissingNumber_OS2(arr2));
process.stdout.write("\n");
