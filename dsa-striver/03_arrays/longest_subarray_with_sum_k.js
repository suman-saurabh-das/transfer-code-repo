/*
  Find longest sub array with sum k. (positives & negatives)
  
  Problem link: https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
  Solution link: https://youtu.be/frf7qxiN2qU?si=MTAvPY70_chRjiRq
  
  Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

  Array with only positives.
    Input: arr = [2, 3, 5], k = 5, Output: 2
    Input: arr = [2, 3, 5, 1, 9], k = 10, Output: 3
    Input: arr = [1, 5, 6, 0, 0, 0, 1, 6, 0, 7], k = 7, Output: 6

  Array with both positives & negatives,
    Input: arr = [10, 5, 2, 7, 1, -10], k = 15, Output: 6
    Input: arr = [-5, 8, -14, 2, 4, 12], k = -5, Output: 5
    Input: arr = [10, -10, 20, 30], k = 5, Output: 0
*/

const arr1 = [2, 3, 5],
  k1 = 5;
const arr2 = [2, 3, 5, 1, 9],
  k2 = 10;
const arr3 = [1, 5, 6, 0, 0, 0, 1, 6, 0, 7],
  k3 = 7;

// Brute force: Using nested loops.
// Time complexity: O(n²) | Space complexity: O(1)
function findLongestSubArraySum_BF(arr, k) {
  let subArrMaxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    // Finding the sum for every possible sub-array.
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum === k) {
        let subArrLength = j - i + 1;
        if (subArrLength > subArrMaxLength) {
          subArrMaxLength = subArrLength;
        }
      }
    }
  }
  return subArrMaxLength;
}

console.log("Max subarray length is :", findLongestSubArraySum_BF(arr1, k1));
console.log("Max subarray length is :", findLongestSubArraySum_BF(arr2, k2));
console.log("Max subarray length is :", findLongestSubArraySum_BF(arr3, k3));
process.stdout.write("\n");

// Better solution: Hashing.
// Time complexity: O(n) | Space complexity: O(n)
function findLongestSubArraySum_BS(arr, k) {
  let sum = 0,
  subArrMaxLength = 0;
  const prefixSumMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    // Calculating the sum of numbers till i. (prefix sum)
    sum = sum + arr[i];
    // Storing the sum and index i in the map.
    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
    // If sum === k, update subArrMaxLength.
    if (sum === k) {
      subArrMaxLength = Math.max(subArrMaxLength, i + 1);
    }
    // Calculate the sum of remaining part i.e. x - k
    let rem = sum - k;
    // Calculate the length and update subArrMaxLength.
    if (prefixSumMap.has(rem)) {
      let length = i - prefixSumMap.get(rem);
      subArrMaxLength = Math.max(subArrMaxLength, length);
    }
  }
  return subArrMaxLength;
}

console.log("Max subarray length is :", findLongestSubArraySum_BS(arr1, k1));
console.log("Max subarray length is :", findLongestSubArraySum_BS(arr2, k2));
console.log("Max subarray length is :", findLongestSubArraySum_BS(arr3, k3));
process.stdout.write("\n");

// Optimal solution: Using 2 pointers.
// Time complexity: O(2*n) | Space complexity: O(1)
function findLongestSubArraySum_OS(arr, k) {
  let right = 0,
    left = 0,
    sum = arr[0],
    subArrMaxLength = 0;
  while (right < arr.length) {
    // If sum > k, reduce the sub array from left until sum becomes less than or equal to k.
    while (left <= right && sum > k) {
      sum = sum - arr[left];
      left++;
    }
    // If sum === k, update subArrMaxLength.
    if (sum === k) {
      subArrMaxLength = Math.max(subArrMaxLength, right - left + 1);
    }
    // Move right pointer & calculate sum.
    right++;
    if (right < arr.length) {
      sum = sum + arr[right];
    }
  }
  return subArrMaxLength;
}

console.log("Max subarray length is :", findLongestSubArraySum_OS(arr1, k1));
console.log("Max subarray length is :", findLongestSubArraySum_OS(arr2, k2));
console.log("Max subarray length is :", findLongestSubArraySum_OS(arr3, k3));
process.stdout.write("\n");

// If the input array has both negative and positive numbers, then use hashing and nested loop approach, as the two pointer approach will not work.

const arr4 = [10, 5, 2, 7, 1, -10],
  k4 = 15;
const arr5 = [-5, 8, -14, 2, 4, 12],
  k5 = -5;
const arr6 = [10, -10, 20, 30],
  k6 = 5;

console.log("Max subarray length is :", findLongestSubArraySum_BF(arr4, k4));
console.log("Max subarray length is :", findLongestSubArraySum_BF(arr5, k5));
console.log("Max subarray length is :", findLongestSubArraySum_BF(arr6, k6));
process.stdout.write("\n");

console.log("Max subarray length is :", findLongestSubArraySum_BS(arr4, k4));
console.log("Max subarray length is :", findLongestSubArraySum_BS(arr5, k5));
console.log("Max subarray length is :", findLongestSubArraySum_BS(arr6, k6));
process.stdout.write("\n");
