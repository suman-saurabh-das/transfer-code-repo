/*
  Video solution link for [01-04]: https://youtu.be/37E9ckMDdTk?si=3SW7z2PiqQ-MAewM
  Video solution link for [05-10]: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb
  Video solution link for [10-15]: 
*/

/* -------------------------------------------------------------------------------------------------

  [01] Find the largest element in an array.
  
  Input: [2, 5, 1, 3, 0] | Output: 5
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
  Input: [1] | Output: -1 -1
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

  console.log("Array is sorted :", isSorted_OS(arr1));
  console.log("Array is sorted :", isSorted_OS(arr2));
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
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
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

  Input: [1, 2, 3, 4, 5, 6] | Output: [3, 4, 5, 6, 1, 2]
  Input: [3, 7, 8, 9, 10, 11] | Output: [9, 10, 11, 3, 7, 8]
*/

function main06() {
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
}
main06();

/* -------------------------------------------------------------------------------------------------

  [07] Move all zeros to the end of the array.

  Input: [1, 0, 2, 3, 0, 4, 0, 1] | Output: [1, 2, 3, 4, 1, 0, 0, 0]
  Input: [1, 2, 0, 1, 0, 4, 0] | Output: [1, 2, 1, 4, 0, 0, 0]
*/

function main07() {
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
}
main07();

/* -------------------------------------------------------------------------------------------------

  [08] Linear search.

  Given an array, and an element num, find if num is present in the given array or not.
  If present return the index of the element or return -1.

  Input: [1, 2, 3, 4, 5] | Output: 2
  Input: [5, 4, 3, 2, 1] | Output: -1
*/

function main08() {
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
}
main08();

/* -------------------------------------------------------------------------------------------------

  [09] Union of two sorted arrays.

  Input: [1, 2, 3, 4, 5], [2, 3, 4, 4, 5]
  Output: [1, 2, 3, 4, 5]
  
  Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 11, 12]
  Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  */

function main09() {
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
}
main09();

/* -------------------------------------------------------------------------------------------------

  [10] Intersection of two sorted arrays.

  Input: [1, 2, 3, 4, 5], [2, 3, 4, 4, 5] | Output: [2, 3, 4, 5]
  Input: [1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7] | Output: [2, 3, 3, 5, 6]
*/

function main10() {
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
}
main10();

/* -------------------------------------------------------------------------------------------------

  [11] Find the missing number in an array.

  Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

  Input: [1, 2, 4, 5] | Output: 3
  Input: [2, 3] | Output: 1
*/

function main11() {
  // Brute force solution: Using nested loops.
  // Time complexity: O(n²) | Space complexity: O(1)
  function findMissingNumber_BF(arr) {
    for (let i = 1; i <= arr.length + 1; i++) {
      isFound = false;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === i) {
          isFound = true;
          break;
        }
      }
      if (!isFound) {
        return i;
      }
    }
  }

  // Better solution: Hashing.
  // Time complexity: O(2*n) | Space complexity: O(n)
  function findMissingNumber_BS(arr) {
    // Create a hash array of length (arr.length + 1) with all 0.
    let hashArray = new Array(arr.length + 1).fill(0);
    // For every element that exists in array, set the value as 1.
    for (let i = 0; i < arr.length; i++) {
      hashArray[arr[i]] = 1;
    }
    // console.log(hashArray);
    // Loop through hash array to find the missing element. (value as 0)
    for (let i = 1; i <= hashArray.length; i++) {
      if (hashArray[i] === 0) {
        return i;
      }
    }
    // If the last number is missing.
    return hashArray.length;
  }

  // Optimal solution 1: Using sum.
  // Time complexity: O(n) | Space complexity: O(1)
  function findMissingNumber_OS1(arr) {
    let sum = 0,
      n = arr.length + 1;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    const sumOfN = Math.floor((n * (n + 1)) / 2);
    // Missing number = sum of n natural numbers - sum of all numbers in array
    return sumOfN - sum;
  }

  // Optimal solution 2: Using XOR.
  // Property 1: a ^ 0 = a | Property 2: a ^ a = 0
  // Time complexity: O(n) | Space complexity: O(1)
  function findMissingNumber_OS2(arr) {
    let xorOfN = 0,
      xorOfArr = 0;
    for (let i = 0; i < arr.length; i++) {
      xorOfN = xorOfN ^ (i + 1);
      xorOfArr = xorOfArr ^ arr[i];
    }
    // XOR with last number i.e. N
    xorOfN = xorOfN ^ (arr.length + 1);
    return xorOfN ^ xorOfArr; // Missing number
  }

  const arr1 = [1, 2, 4, 5],
    arr2 = [2, 3];

  console.log("Missing number is :", findMissingNumber_BF(arr1));
  console.log("Missing number is :", findMissingNumber_BF(arr2));
  process.stdout.write("\n");

  console.log("Missing number is :", findMissingNumber_BS(arr1));
  console.log("Missing number is :", findMissingNumber_BS(arr2));
  process.stdout.write("\n");

  console.log("Missing number is :", findMissingNumber_OS1(arr1));
  console.log("Missing number is :", findMissingNumber_OS1(arr2));
  process.stdout.write("\n");

  console.log("Missing number is :", findMissingNumber_OS2(arr1));
  console.log("Missing number is :", findMissingNumber_OS2(arr2));
  process.stdout.write("\n");
}
main11();

/* -------------------------------------------------------------------------------------------------

  [12] Count maximum consecutive one's in the array.

  Given an array containing only 1 and 0 return the count of maximum consecutive ones in the array.

  Input: [1, 1, 0, 1, 1, 1] | Output: 3
  Input: [1, 0, 1, 1, 0, 1] | Output: 2
*/

function main12() {
  // Optimal solution: Iterate over the array & keep track of current & maximum consecutive 1's.
  // Time complexity: O(n) | Space complexity: O(1)
  function finMaxConsecutiveOnes(arr) {
    let current = 0,
      max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        current++;
        if (current > max) {
          max = current;
        }
      } else {
        current = 0;
      }
    }
    return max;
  }

  const arr1 = [1, 1, 0, 1, 1, 1],
    arr2 = [1, 0, 1, 1, 0, 1];

  console.log("Maximum consecutive 1's :", finMaxConsecutiveOnes(arr1));
  console.log("Maximum consecutive 1's :", finMaxConsecutiveOnes(arr2));
  process.stdout.write("\n");
}
main12();

/* -------------------------------------------------------------------------------------------------

  [13] Find the number that appears once, and the other numbers twice.

  Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

  Input: [2, 2, 1] | Output: 1
  Input: [4, 1, 2, 1, 2] | Output: 4
*/

function main13() {
  // Brute force solution: Using nested loops.
  // Time complexity: O(n²) | Space complexity: O(1)
  function findSingleNumber_BF(arr) {
    for (let i = 1; i <= arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === i) {
          count++;
        }
        if (count === 2) {
          break;
        }
      }
      if (count === 1) {
        return i;
      }
    }
  }

  // Better solution: Hashing using maps.
  // Time complexity: O(2*n) | Space complexity: O(n/2)
  function findSingleNumber_BS(arr) {
    const hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (!hashMap.has(arr[i])) {
        hashMap.set(arr[i], 1);
      } else {
        let count = hashMap.get(arr[i]);
        hashMap.set(arr[i], count + 1);
      }
    }
    for (let [key, value] of hashMap) {
      if (value === 1) {
        return key;
      }
    }
  }

  // Optimal solution: Using XOR.
  // Time complexity: O(n) | Space complexity: O(1)
  function findSingleNumber_OS(arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
      xor = xor ^ arr[i];
    }
    return xor;
  }

  const arr1 = [2, 2, 1],
    arr2 = [4, 1, 2, 1, 2];

  console.log("Number appearing once :", findSingleNumber_BF(arr1));
  console.log("Number appearing once :", findSingleNumber_BF(arr2));
  process.stdout.write("\n");

  console.log("Number appearing once :", findSingleNumber_BS(arr1));
  console.log("Number appearing once :", findSingleNumber_BS(arr2));
  process.stdout.write("\n");

  console.log("Number appearing once :", findSingleNumber_OS(arr1));
  console.log("Number appearing once :", findSingleNumber_OS(arr2));
  process.stdout.write("\n");
}
main13();

/* -------------------------------------------------------------------------------------------- */
