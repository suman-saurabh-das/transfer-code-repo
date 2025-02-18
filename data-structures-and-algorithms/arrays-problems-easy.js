// [02] Second Largest Element in an Array without sorting

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

const arr1 = [12, 35, 1, 10, 34, 1];
const arr2 = [10, 5, 10];
const arr3 = [10, 10, 10];

// console.log("Second largest element :", secondLargest_BF(arr1));
// console.log("Second largest element :", secondLargest_BF(arr2));
// console.log("Second largest element :", secondLargest_BF(arr3));
console.log("Second largest element :", secondLargest_OS(arr1));
console.log("Second largest element :", secondLargest_OS(arr2));
console.log("Second largest element :", secondLargest_OS(arr3));

// [03] Check if the array is sorted

// Brute force solution
// Time complexity : O(n²) | Space complexity : O(1)
function isSorted_BF(arr) {
  // Use nested for loops to check if current element is smaller than every other element after it.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
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
  for(let i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) {
      return false;
    }
  }
  return true;
}

// [04]

// Brute force solution
// Time complexity : O() | Space complexity : O()

// Optimal solution
// Time complexity : O() | Space complexity : O()