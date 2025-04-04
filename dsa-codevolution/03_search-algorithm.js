// [01] Linear search

/*
  ▣ Problem - Given an array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found.
*/

// Time complexity : O(n)
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log("Element found at index : ", linearSearch([-5, 2, 10, 4, 6], 10));
console.log("Element found at index : ", linearSearch([-5, 2, 10, 4, 6], 6));
console.log("Element found at index : ", linearSearch([-5, 2, 10, 4, 6], 20));
console.log();

// [02] Binary search

/*
  ▣ Problem - Given a sorted array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found.
*/

// Time complexity : O(log(n))
const binarySearch = (arr, target) => {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log("Element found at index : ", binarySearch([-5, 2, 4, 6, 10], 10));
console.log("Element found at index : ", binarySearch([-5, 2, 4, 6, 10], 6));
console.log("Element found at index : ", binarySearch([-5, 2, 4, 6, 10], 20));
console.log();

// [03] Recursive binary search

// Time complexity : O(log(n))
const recursiveBinarySearch = (arr, target, start, end) => {
  // Base condition.
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (target < arr[mid]) {
    return recursiveBinarySearch(arr, target, start, mid - 1);
  } else if (target > arr[mid]) {
    return recursiveBinarySearch(arr, target, mid + 1, end);
  } else {
    return mid;
  }
}
console.log("Element found at index : ", recursiveBinarySearch([-5, 2, 4, 6, 10], 10, 0, 4));
console.log("Element found at index : ", recursiveBinarySearch([-5, 2, 4, 6, 10], 6, 0, 4));
console.log("Element found at index : ", recursiveBinarySearch([-5, 2, 4, 6, 10], 20, 0, 4));
console.log();