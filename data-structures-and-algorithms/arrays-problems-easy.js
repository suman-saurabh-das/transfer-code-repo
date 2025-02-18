// ********** [02] Second Largest Element in an Array without sorting **********

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
  let largest = arr[0], secondLargest = -1;
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
  // Use nested for loops to check if current element is smaller than every other element after it.
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
// Time complexity : O() | Space complexity : O()
function isSorted_OS(arr) {
  // In a sorted array, the elements should be in ascending order.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

const arr7 = [1, 3, 4, 6, 12, 7, 9];
const arr8 = [1, 2, 5, 6, 12, 17, 19];
const arr9 = [1, 7, 7, 7, 7];

// console.log("Array is sorted :", isSorted_BF(arr7));
// console.log("Array is sorted :", isSorted_BF(arr8));
// console.log("Array is sorted :", isSorted_BF(arr9));
// console.log("Array is sorted :", isSorted_OS(arr7));
// console.log("Array is sorted :", isSorted_OS(arr8));
// console.log("Array is sorted :", isSorted_OS(arr9));

// [04] ********** Remove duplicates from an array **********

// Brute force solution
// Time complexity : O(n) | Space complexity : O(n)
function removeDuplicates_BF(arr) {
  // Create a set and store elements in it.
  // A value in set may only occur once.
  const set = new Set(arr);
  // Create an array from set and replace values with unique values.
  const uniqueArr = Array.from(set);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  console.log(arr);
  return uniqueArr.length;
}

// Optimal solution
// Time complexity : O(n) | Space complexity : O(1)
function removeDuplicates_OS(arr) {
  // Using 2 pointers
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}
const arr13 = [1, 2, 3, 4, 5, 6];
const arr14 = [1, 1, 1, 2, 2, 3, 3, 3];
const arr15 = [1, 1, 1];
// console.log("Total unique elements :", removeDuplicates_BF(arr13));
// console.log("Total unique elements :", removeDuplicates_BF(arr14));
// console.log("Total unique elements :", removeDuplicates_BF(arr15));
// console.log("Total unique elements :", removeDuplicates_OS(arr13));
// console.log("Total unique elements :", removeDuplicates_OS(arr14));
// console.log("Total unique elements :", removeDuplicates_OS(arr15));


// ********** [05] Left rotate array by 1 **********

// Brute force solution
// Time complexity : O(n) | Space complexity : O(n)
function leftRotateByOne_BF(arr) {
  // Copy elements from original array at index i+1 into a new array.
  // Push element at index 0 of original array into new array.
  const rotatedArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    rotatedArr[i] = arr[i + 1];
  }
  rotatedArr.push(arr[0]);
  return rotatedArr;
}

// Optimal solution
// Time complexity : O(n) | Space complexity : O(1)
function leftRotateByOne_OS(arr) {
  // Store first element in a temporary variable.
  // Left shift all elements by 1 position, replace last element in array with temporary variable.
  let firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;
  return arr;
}

const arr10 = [1, 2, 3, 4, 5];
const arr11 = [7, 9, 12, 17, 14, 11];
const arr12 = [9, 13, 17, 1, 2];
// console.log("Array after left shifting 1 element:", leftRotateByOne_BF(arr10));
// console.log("Array after left shifting 1 element:", leftRotateByOne_BF(arr11));
// console.log("Array after left shifting 1 element:", leftRotateByOne_BF(arr12));
// console.log("Array after left shifting 1 element:", leftRotateByOne_OS(arr10));
// console.log("Array after left shifting 1 element:", leftRotateByOne_OS(arr11));
// console.log("Array after left shifting 1 element:", leftRotateByOne_OS(arr12));

// [06] ********** Rotate elements by k places **********

// Brute force solution
// Time complexity : O(n) | Space complexity : O(n)
function rotateArray(arr, k, direction) {
  if (direction === "left") {
    const tempArr = [];
    for (let i = 0; i < k; i++) {
      tempArr[i] = arr[i];
      arr[i] = arr[i + k];
    }
    console.log(arr);
    console.log(tempArr);
    for (let i = 0; i < tempArr.length; i++) {
      arr[i + k] = tempArr[i];
    }
    console.log(arr);
  }
  if (direction === "right") {

  }
}

const arr1 = [1, 2, 3, 4, 5, 6, 7], k1 = 2, direction1 = "right";
const arr2 = [3, 7, 8, 9, 10, 11], k2 = 3, direction2 = "left";
rotateArray(arr2, k2, direction2);

// Optimal solution
// Time complexity : O() | Space complexity : O()

// [0]

// Brute force solution
// Time complexity : O() | Space complexity : O()

// Optimal solution
// Time complexity : O() | Space complexity : O()

// [0]

// Brute force solution
// Time complexity : O() | Space complexity : O()

// Optimal solution
// Time complexity : O() | Space complexity : O()

// [0]

// Brute force solution
// Time complexity : O() | Space complexity : O()

// Optimal solution
// Time complexity : O() | Space complexity : O()

// [0]

// Brute force solution
// Time complexity : O() | Space complexity : O()

// Optimal solution
// Time complexity : O() | Space complexity : O()