/*
  [04] Remove duplicates in-place from sorted array.

  Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
  
  If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements. Return k after placing the final result in the first k slots of the array.
  
  Solution link: https://youtu.be/37E9ckMDdTk?si=3SW7z2PiqQ-MAewM
  
  Input: [1, 1, 2, 2, 2, 3, 3] | Output: [1, 2, 3, 2, 2, 3, 3]
  Input: [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4] | Output: [1, 2, 3, 4]
*/

// Brute force solution: Insert the elements in a set because it doesn't hold duplicates. Then replace the elements in array and return the count of unique elements.
// Time complexity: O(n) | Space complexity: O(n)
function removeDuplicates_BF(arr) {
  const uniqueNumSet = new Set(arr);
  const uniqueNumArr = Array.from(uniqueNumSet);
  for (let i = 0; i < uniqueNumArr.length; i++) {
    arr[i] = uniqueNumArr[i];
  }
  // console.log(arr);
  return uniqueNumArr.length;
}

// Optimal solution: Using 2 pointers, iterate over the array and whenever there is an unique element found, update the array.
// Time complexity: O(n) | Space complexity: O(1)
function removeDuplicates_OS(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  // console.log(arr);
  return i + 1;
}

const arr1 = [1, 1, 2, 2, 2, 3, 3],
  arr2 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

console.log("Array after removing duplicates :", removeDuplicates_BF(arr1));
console.log("Array after removing duplicates :", removeDuplicates_BF(arr2));
process.stdout.write("\n");

const arr3 = [1, 1, 2, 2, 2, 3, 3],
  arr4 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

console.log("Array after removing duplicates :", removeDuplicates_OS(arr3));
console.log("Array after removing duplicates :", removeDuplicates_OS(arr4));
process.stdout.write("\n");
