/*
  [07] Move all zeros to the end of the array.
  
  Solution link: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb

  Input: [1, 0, 2, 3, 0, 4, 0, 1] | Output: [1, 2, 3, 4, 1, 0, 0, 0]
  Input: [1, 2, 0, 1, 0, 4, 0] | Output: [1, 2, 1, 4, 0, 0, 0]
*/

/*
    Brute force solution -
    Step 1: Copy all non zero elements to a tempArr.
    Step 2: Replace elements from tempArr in arr & replace remaining element with 0.
  */
// Time complexity: O(2*n) | Space complexity: O(m)
// n: number of elements in array, m: number of non-zero elements.
function moveAllZeroToEnd_BF(arr) {
  let tempArr = [];
  // Storing all non-zero elements in temp array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      tempArr.push(arr[i]);
    }
  }
  // Replacing non-zero elements from tempArr in original array.
  for (let i = 0; i < tempArr.length; i++) {
    arr[i] = tempArr[i];
  }
  // Replacing remaining elements with 0.
  for (let i = tempArr.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

// Optimal solution: Using 2 pointers & swapping.
// Time complexity: O(n) | Space complexity: O(1)
function moveAllZeroToEnd_OS(arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    // Finding the first occurrence of a zero.
    if (arr[i] === 0 && j === -1) {
      j = i;
    }
    // Swapping.
    if (arr[i] > 0 && j !== -1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

const arr1 = [1, 0, 2, 3, 0, 4, 0, 1],
  arr2 = [1, 2, 0, 1, 0, 4, 0];

console.log("Array after moving zeros :", moveAllZeroToEnd_BF(arr1));
console.log("Array after moving zeros :", moveAllZeroToEnd_BF(arr2));
process.stdout.write("\n");

const arr3 = [1, 0, 2, 3, 0, 4, 0, 1],
  arr4 = [1, 2, 0, 1, 0, 4, 0];

console.log("Array after moving zeros :", moveAllZeroToEnd_OS(arr3));
console.log("Array after moving zeros :", moveAllZeroToEnd_OS(arr4));
process.stdout.write("\n");
