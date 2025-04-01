/*
  [12] Count maximum consecutive one's in the array.

  Given an array containing only 1 and 0 return the count of maximum consecutive ones in the array.

  Input: [1, 1, 0, 1, 1, 1] | Output: 3
  Input: [1, 0, 1, 1, 0, 1] | Output: 2
*/

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
