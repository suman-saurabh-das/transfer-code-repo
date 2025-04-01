/*
  Two sum.

  Given an array of integers arr and an integer target, return indices of the two numbers such that they add up to target. Each input would have exactly one solution, and you may not use the same element twice.

  Problem link: https://leetcode.com/problems/two-sum/
  Solution link: 

  Input: arr = [2, 7, 11, 15], target = 9, Output: [0, 1]
  Input: arr = [3, 2, 4], target = 6, Output: [1, 2]
  Input: arr = [3, 3], target = 6, Output: [0, 1]
*/

const arr1 = [2, 7, 11, 15],
  target1 = 9;
const arr2 = [3, 2, 4],
  target2 = 6;
const arr3 = [3, 3],
  target3 = 6;

// Brute force: Using nested for loops.
// Time complexity: O(n²) | Space complexity: O(1)
function findTwoSum_BF(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let sum = 0;
      sum = arr[i] + arr[j];
      if (sum === target && i != j) {
        return new Array(i, j);
      }
    }
  }
  return new Array(-1, -1);
}

// Better solution: Using a difference array.
// Time complexity: O(n) | Space complexity: O(n)
function findTwoSum_BS(arr, target) {
  // Create a difference, containing target - arr[i]
  let diffArr = [];
  for(let i = 0; i < arr.length; i++) {
    
  }
}

console.log("Elements are at indexes :", findTwoSum_BF(arr1, target1));
console.log("Elements are at indexes :", findTwoSum_BF(arr2, target2));
console.log("Elements are at indexes :", findTwoSum_BF(arr3, target3));
