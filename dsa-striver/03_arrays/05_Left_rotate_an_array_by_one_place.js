/*
  [05] Given an array of n integers, left rotate the array by one place.
  
  Solution link: https://youtu.be/wvcQg43_V8U?si=H5Bw3f9avfU6XHEb

  Input: [1, 2, 3, 4, 5, 6] | Output: [2, 3, 4, 5, 6, 1]
  Input: [3] | Output: [3]
*/

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
