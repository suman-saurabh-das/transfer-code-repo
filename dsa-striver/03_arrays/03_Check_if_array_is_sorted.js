/*
  [03] Check if array is sorted.
  
  Solution link: https://youtu.be/37E9ckMDdTk?si=3SW7z2PiqQ-MAewM

  Input: [1, 2, 3, 4, 5] | Output: true
  Input: [5, 4, 6, 7, 8] | Output: false
*/

// Brute force solution: Compare each element in array with one another.
// Time complexity: O(n²) | Space complexity: O(1)
function isSorted_BF(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        return false;
      }
    }
  }
  return true;
}

// Optimal solution: Compare consecutive elements in array with one another.
// Time complexity: O(n) | Space complexity: O(1)
function isSorted_OS(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [5, 4, 6, 7, 8];

console.log("Array is sorted :", isSorted_BF(arr1));
console.log("Array is sorted :", isSorted_BF(arr2));
process.stdout.write("\n");

console.log("Array is sorted :", isSorted_OS(arr1));
console.log("Array is sorted :", isSorted_OS(arr2));
process.stdout.write("\n");
