/*
  [09] Union of two sorted arrays.

  Solution link: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb

  Input: [1, 2, 3, 4, 5], [2, 3, 4, 4, 5]
  Output: [1, 2, 3, 4, 5]
  
  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/

// Brute force solution: Using set.
// Time complexity: O(n1+n2) | Space complexity: O(n1+n2)
function unionOfTwoSortedArr_BF(arr1, arr2) {
  const uniqueNumSet = new Set();
  for (let i = 0; i < arr1.length; i++) {
    uniqueNumSet.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    uniqueNumSet.add(arr2[i]);
  }
  return Array.from(uniqueNumSet);
}

// Optimal solution: Using 2 pointers.
// Time complexity: O(n1+n2) | Space complexity: O(n1+n2)
function unionOfTwoSortedArr_OS(arr1, arr2) {
  let i = 0,
    j = 0,
    unionArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // If unionArr already has the element in it, then do not insert, else insert.
      if (unionArr[unionArr.length - 1] === arr1[i]) {
        i++;
      } else {
        unionArr.push(arr1[i]);
        i++;
      }
    } else {
      if (unionArr[unionArr.length - 1] === arr2[i]) {
        j++;
      } else {
        unionArr.push(arr2[j]);
        j++;
      }
    }
  }
  // Adding remaining elements when one of the arrays is exhausted.
  while (i < arr1.length) {
    if (unionArr[unionArr.length - 1] === arr1[i]) {
      i++;
    } else {
      unionArr.push(arr1[i]);
      i++;
    }
  }
  while (j < arr2.length) {
    if (unionArr[unionArr.length - 1] === arr2[i]) {
      j++;
    } else {
      unionArr.push(arr2[j]);
      j++;
    }
  }
  return unionArr;
}

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 4, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  arr4 = [2, 3, 4, 4, 5, 11, 12];

console.log("Union of sorted arrays :", unionOfTwoSortedArr_BF(arr1, arr2));
console.log("Union of sorted arrays :", unionOfTwoSortedArr_BF(arr3, arr4));
process.stdout.write("\n");

console.log("Union of sorted arrays :", unionOfTwoSortedArr_OS(arr1, arr2));
console.log("Union of sorted arrays :", unionOfTwoSortedArr_OS(arr3, arr4));
process.stdout.write("\n");
