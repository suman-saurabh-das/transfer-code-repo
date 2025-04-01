/*
  [08] Linear search.

  Given an array, and an element num, find if num is present in the given array or not.
  If present return the index of the element or return -1.
  
  Solution link: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb

  Input: [1, 2, 3, 4, 5] | Output: 2
  Input: [5, 4, 3, 2, 1] | Output: -1
*/

// Optimal solution: Search for element using linear search.
// Time complexity: O(n) | Space complexity: O(1)
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const arr1 = [1, 2, 3, 4, 5],
  num1 = 3;
const arr2 = [5, 4, 3, 2, 1],
  num2 = 7;

console.log("Element found at index :", linearSearch(arr1, num1));
console.log("Element found at index :", linearSearch(arr2, num2));
process.stdout.write("\n");
