/*
  [10] Intersection of two sorted arrays.

  Solution link: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb

  Input: [1, 2, 3, 4, 5], [2, 3, 4, 4, 5] | Output: [2, 3, 4, 5]
  Input: [1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7] | Output: [2, 3, 3, 5, 6]
*/

// Brute force solution: Using nested loops.
// Time complexity: O(n1*n2) | Space complexity: O(max(n1,n2))
function intersectionOfTwoSortedArr_BF(arr1, arr2) {
  // Create a visited array to keep track of whether an element is already paired.
  let visitedArr = new Array(arr2.length).fill(false),
    intersectionArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && visitedArr[j] === false) {
        intersectionArr.push(arr2[j]);
        visitedArr[j] = true;
        break;
      }
      if (arr2[j] > arr1[i]) {
        break;
      }
    }
  }
  return intersectionArr;
}

// Optimal solution: Using 2 pointers.
// Time complexity: O(n1+n2) | Space complexity: O(max(n1,n2))
function intersectionOfTwoSortedArr_OS(arr1, arr2) {
  let i = 0,
    j = 0,
    intersectionArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      intersectionArr.push(arr1[i]);
      i++;
      j++;
    }
  }
  return intersectionArr;
}

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 4, 4, 5];
const arr3 = [1, 2, 2, 3, 3, 4, 5, 6],
  arr4 = [2, 3, 3, 5, 6, 6, 7];

console.log(
  "Intersection of sorted arrays :",
  intersectionOfTwoSortedArr_BF(arr1, arr2)
);
console.log(
  "Intersection of sorted arrays :",
  intersectionOfTwoSortedArr_BF(arr3, arr4)
);
process.stdout.write("\n");

console.log(
  "Intersection of sorted arrays :",
  intersectionOfTwoSortedArr_OS(arr1, arr2)
);
console.log(
  "Intersection of sorted arrays :",
  intersectionOfTwoSortedArr_OS(arr3, arr4)
);
process.stdout.write("\n");
