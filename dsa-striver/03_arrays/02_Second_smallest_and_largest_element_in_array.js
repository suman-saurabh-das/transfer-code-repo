/*
  [02] Find second smallest & largest element in an array.
  
  Solution link: https://youtu.be/37E9ckMDdTk?si=3SW7z2PiqQ-MAewM
  
  Input: [1, 2, 4, 7, 7, 5] | Output: 2 5
  Input: [1] | Output: -1 -1
*/

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
