/*
  [13] Find the number that appears once, and the other numbers twice.

  Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

  Input: [2, 2, 1] | Output: 1
  Input: [4, 1, 2, 1, 2] | Output: 4
*/

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
