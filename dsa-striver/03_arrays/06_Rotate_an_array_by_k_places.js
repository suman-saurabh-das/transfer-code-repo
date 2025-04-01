/*
  [06] Rotate array by k elements.
  
  Given an array of integers, rotating array of elements by k elements either left or right.
  
  Solution link: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb

  Input: [1, 2, 3, 4, 5, 6] | Output: [3, 4, 5, 6, 1, 2]
  Input: [3, 7, 8, 9, 10, 11] | Output: [9, 10, 11, 3, 7, 8]
*/

// Brute force solution: Find number of elements to be shifted, copy these elements in temp array, shift the elements then copy elements from temp array to original array.
// Time complexity: O(n+k) | Space complexity: O(k)
function rotateArray_BF(arr, k, direction) {
  k = k % arr.length; // Number of elements to be shifted.
  let tempArr = [];
  if (direction === "left") {
    // Copying elements to be moved to a temporary array.
    for (let i = 0; i < k; i++) {
      tempArr.push(arr[i]);
    }
    // Shifting remaining elements to left.
    for (let i = k; i < arr.length; i++) {
      arr[i - k] = arr[i];
    }
    // Replacing elements from tempArr to arr.
    for (let i = arr.length - k; i < arr.length; i++) {
      arr[i] = tempArr[i - (arr.length - k)];
    }
  } else if (direction === "right") {
    // Copying elements to be moved to a temporary array.
    for (let i = 0; i < k; i++) {
      tempArr[i] = arr[arr.length - 1 - i];
    }
    // Shifting remaining elements to right.
    for (let i = 0; i < arr.length - k; i++) {
      arr[arr.length - 1 - i] = arr[arr.length - 1 - k - i];
    }
    // Replacing elements from tempArr to arr.
    for (let i = 0; i < tempArr.length; i++) {
      arr[i] = tempArr[tempArr.length - 1 - i];
    }
  }
  return arr;
}

// Optimal solution: Reversing array elements multiple times. (Works for both left & right shift)
/*
    Step 1: Reverse array elements which needs to be shifted. e.g. [2, 1, 3, 4, 5, 6]
    Step 2: Reverse remaining array elements. e.g. [2, 1, 6, 5, 4, 3]
    Step 3: Reverse the entire array. e.g. [3, 4, 5, 6, 1, 2]
  */
// Time complexity: O(n) | Space complexity: O(1)
function reverseArrUsingIndex(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Time complexity: O(2*n) | Space complexity: O(1)
function rotateArray_OS(arr, k) {
  reverseArrUsingIndex(arr, 0, k - 1);
  reverseArrUsingIndex(arr, k, arr.length - 1);
  reverseArrUsingIndex(arr, 0, arr.length - 1);
  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6],
  k1 = 2,
  direction1 = "left";
const arr2 = [3, 7, 8, 9, 10, 11],
  k2 = 3,
  direction2 = "right";

console.log("Array after rotation :", rotateArray_BF(arr1, k1, direction1));
console.log("Array after rotation :", rotateArray_BF(arr2, k2, direction2));
process.stdout.write("\n");

const arr3 = [1, 2, 3, 4, 5, 6],
  k3 = 2;
const arr4 = [3, 7, 8, 9, 10, 11],
  k4 = 3;

console.log("Array after rotation :", rotateArray_OS(arr3, k3));
console.log("Array after rotation :", rotateArray_OS(arr4, k4));
process.stdout.write("\n");
