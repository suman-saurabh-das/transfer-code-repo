// ********** [01] Find largest element in an array. **********

// Brute force solution
// Time complexity : O(n * log(n)) | Space complexity : O(1)
function findLargestElement_BF(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

// Optimal solution
// Time complexity : O(n) | Space complexity : O(1)
function findLargestElement_OS(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const arr1 = [8, 7, 90, 56, 1];
const arr2 = [5, 5, 5, 5];
const arr3 = [10];
// console.log("Largest element :", findLargestElement_BF(arr1));
// console.log("Largest element :", findLargestElement_BF(arr2));
// console.log("Largest element :", findLargestElement_BF(arr3));
// console.log("Largest element :", findLargestElement_OS(arr1));
// console.log("Largest element :", findLargestElement_OS(arr2));
// console.log("Largest element :", findLargestElement_OS(arr3));

// ********** [02] Second Largest Element in an Array **********

// Brute force solution
// Time complexity : O(n * log(n)) | Space complexity : O(1)
function secondLargest_BF(arr) {
  // Sort the array in ascending order.
  arr.sort((a, b) => a - b);
  // Element less than the last element will be the 2nd largest.
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[arr.length - 1]) {
      return arr[i];
    }
  }
  return -1;
}

// Optimal solution
// Time complexity : O(n) | Space complexity : O(1)
function secondLargest_OS(arr) {
  // Loop through array to find largest and second largest.
  let largest = arr[0],
    secondLargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const arr4 = [12, 35, 1, 10, 34, 1];
const arr5 = [10, 5, 10];
const arr6 = [10, 10, 10];

// console.log("Second largest element :", secondLargest_BF(arr4));
// console.log("Second largest element :", secondLargest_BF(arr5));
// console.log("Second largest element :", secondLargest_BF(arr6));
// console.log("Second largest element :", secondLargest_OS(arr4));
// console.log("Second largest element :", secondLargest_OS(arr5));
// console.log("Second largest element :", secondLargest_OS(arr6));

// ********** [03] Check if the array is sorted **********

// Brute force solution
// Time complexity : O(n²) | Space complexity : O(1)
function isSorted_BF(arr) {
  // Using nested for loops to check if the current element is smaller than every other element after it.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}

// Optimal solution
// Time complexity : O(n) | Space complexity : O(1)
function isSorted_OS(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const arr7 = [3, 4, 5, 1, 2];
const arr8 = [2, 1, 3, 4];
const arr9 = [1, 2, 3];
console.log("Array is sorted :", isSorted_BF(arr7));
console.log("Array is sorted :", isSorted_BF(arr8));
console.log("Array is sorted :", isSorted_BF(arr9));

// Optimal solution
// Time complexity : O() | Space complexity : O()

// [04]

// Brute force solution
// Time complexity : O() | Space complexity : O()

// Optimal solution
// Time complexity : O() | Space complexity : O()
