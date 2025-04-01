/* 
  [01] Find the largest element in an array.
  
  Solution link: https://youtu.be/37E9ckMDdTk?si=3SW7z2PiqQ-MAewM
  
  Input: [2, 5, 1, 3, 0] | Output: 5
  Input: [8, 10, 5, 7, 9] | Output: 10
*/

// Brute force solution: Sort the array, largest element will be at the end.
// Time complexity: O(n*log(n)) | Space complexity: O(1)
function findLargest_BF(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

// Optimal solution: Linear search in array to find the largest element.
// Time complexity: O(n) | Space complexity: O(1)
function findLargest_OS(arr) {
  let largestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

const arr1 = [2, 5, 1, 3, 0],
  arr2 = [8, 10, 5, 7, 9];

console.log("Largest element is :", findLargest_BF(arr1));
console.log("Largest element is :", findLargest_BF(arr2));
process.stdout.write("\n");

const arr3 = [2, 5, 1, 3, 0],
  arr4 = [8, 10, 5, 7, 9];

console.log("Largest element is :", findLargest_OS(arr3));
console.log("Largest element is :", findLargest_OS(arr4));
process.stdout.write("\n");
