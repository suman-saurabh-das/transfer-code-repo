/*
  Video solution link for [01-04]: https://youtu.be/37E9ckMDdTk?si=3SW7z2PiqQ-MAewM
  Video solution link for [05-]: 

*/

/* -------------------------------------------------------------------------------------------------

  [01] Find the largest element in an array.
  
  Input: [2, 5, 1, 3, 0]  | Output: 5
  Input: [8, 10, 5, 7, 9] | Output: 10
*/

function main01() {
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
}
main01();

/* -------------------------------------------------------------------------------------------------

  [02] Find second smallest & largest element in an array.
  
  Input: [1, 2, 4, 7, 7, 5] | Output: 2 5
  Input: [1]                | Output: -1 -1
*/

function main02() {
  // Brute force solution: Sorting the array then traversing to find 2nd smallest & 2nd largest.
  // Time complexity: O(n*log(n)) | Space complexity: O(1)
  function findSecondSmallestSecondLargest_BF(arr) {
    // Sorting the array.
    arr.sort((a, b) => a - b);
    let secondSmallest = -1,
      secondLargest = -1;
    // Finding the second smallest element.
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
        secondSmallest = arr[i];
        break;
      }
    }
    // Finding the second largest element.
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] < arr[arr.length - 1]) {
        secondLargest = arr[i];
        break;
      }
    }
    console.log(
      "Second smallest element :",
      secondSmallest,
      " Second largest element :",
      secondLargest
    );
  }

  // Optimal solution: Linear search in array to find the second smallest & second largest element.
  // Time complexity: O(n) | Space complexity: O(1)
  function findSecondSmallestSecondLargest_OS(arr) {
    let smallest = arr[0],
      largest = arr[0],
      secondSmallest = -1,
      secondLargest = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      }
      if (arr[i] > smallest && arr[i] < secondSmallest) {
        secondSmallest = arr[i];
      }
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      }
      if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    console.log(
      "Second smallest element :",
      secondSmallest,
      " Second largest element :",
      secondLargest
    );
  }

  const arr1 = [1, 2, 4, 7, 7, 5],
    arr2 = [1];
  findSecondSmallestSecondLargest_BF(arr1);
  findSecondSmallestSecondLargest_BF(arr2);
  process.stdout.write("\n");

  const arr3 = [1, 2, 4, 7, 7, 5],
    arr4 = [1];
  findSecondSmallestSecondLargest_OS(arr3);
  findSecondSmallestSecondLargest_OS(arr4);
  process.stdout.write("\n");
}
main02();

/* -------------------------------------------------------------------------------------------------

  [03] Check if array is sorted.

  Input: [1, 2, 3, 4, 5] | Output: true
  Input: [5, 4, 6, 7, 8] | Output: false
*/

function main03() {
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

  const arr3 = [1, 2, 3, 4, 5],
    arr4 = [5, 4, 6, 7, 8];
  console.log("Array is sorted :", isSorted_OS(arr3));
  console.log("Array is sorted :", isSorted_OS(arr4));
  process.stdout.write("\n");
}
main03();

/* -------------------------------------------------------------------------------------------------

  [04] Remove duplicates in-place from sorted array.

  Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

  If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements. Return k after placing the final result in the first k slots of the array.

  Input: [1, 1, 2, 2, 2, 3, 3] | Output: [1, 2, 3, 2, 2, 3, 3]
  Input: [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4] | Output: [1, 2, 3, 4]
*/

function main04() {
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
}
main04();

/* -------------------------------------------------------------------------------------------------

[05] Given an array of n integers, left rotate the array by one place.

Input: [1, 2, 3, 4, 5, 6] | Output: [2, 3, 4, 5, 6, 1]
Input: [3] | Output: [3]
*/

function main05() {
  // Optimal solution: Store first element in a temp variable, shift all elements to left by 1 place, then replace last element with temp element.
  // Time complexity: O(n) | Space complexity: O(1)
  function leftRotateBy1Place(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
  }

  const arr1 = [1, 2, 3, 4, 5, 6],
    arr2 = [3];
  console.log("Array after rotating by 1 place :", leftRotateBy1Place(arr1));
  console.log("Array after rotating by 1 place :", leftRotateBy1Place(arr2));
  process.stdout.write("\n");
}
main05();

/* -------------------------------------------------------------------------------------------------

[06] Rotate array by k elements.

Given an array of integers, rotating array of elements by k elements either left or right.

Input: [] | Output: []
Input: [] | Output: []
*/

function main06() {
  // Optimal solution: Find number of elements to be shifted, copy these elements in temp array, shift the elements then copy elements from temp array to original array.
  // Time complexity: O(n) | Space complexity: O(k)
  function rotateArray(arr, k, direction) {
    k = k % (arr.length - 1); // Number of elements to be shifted.
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
      for (let i = 0; i < tempArr.length; i++) {
        arr[arr.length - k + i] = tempArr[i];
      }
    } else {
      for (let i = 0; i < k; i++) {
        tempArr[i] = arr[arr.length - 1 - i];
      }
      for (let i = 0; i < arr.length - k; i++) {
        arr[arr.length - 1 - i] = arr[arr.length - 1 - k - i];
      }
      for (let i = 0; i < tempArr.length; i++) {
        arr[i] = tempArr[tempArr.length - 1 - i];
      }
    }
    return arr;
  }
  const arr1 = [1, 2, 3, 4, 5, 6, 7],
    k1 = 2,
    direction1 = "left";
  const arr2 = [3, 7, 8, 9, 10, 11],
    k2 = 3,
    direction2 = "right";
  console.log("Array after rotation :", rotateArray(arr1, k1, direction1));
  console.log("Array after rotation :", rotateArray(arr2, k2, direction2));
}
main06();

/* -------------------------------------------------------------------------------------------------

  [07] 

  Input: [] | Output: []
  Input: [] | Output: []
*/

// Brute force solution:
// Optimal solution:
