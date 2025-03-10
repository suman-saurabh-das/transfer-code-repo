/*
  Selection sort (select minimum and sort)

  Selection Sort works by repeatedly finding the smallest (or largest) element and placing it at the correct position. It is not stable. (order of elements is not maintained)

  ▣ Steps -
    ◉ Find minimum element in the unsorted part of the array.
    ◉ Swap it with the first element of the unsorted part.
    ◉ Move to the next unsorted part and repeat the process.
    ◉ Continue until the array is fully sorted.

  ▣ Complexity analysis -
    ◉ Best, Average & Worst case Time complexity: O(n²)
    ◉ Space complexity: O(1)

  ▣ Advantages & Disadvantages -
    ◉ Simple & easy to understand, works well for small datasets.
    ◉ Inefficient for large datasets. (O(N²) complexity)
    ◉ Not stable. (Doesn’t maintain the relative order of equal elements)

  ▣ Video tutorial: https://youtu.be/HGk_ypEuS24?si=Rpz5CXoAHLH_Z_vS
*/

// Time complexity: O(n²) | Space complexity: O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minElementIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minElementIndex]) {
        minElementIndex = j;
      }
    }
    swapArrElementsByIndex(arr, i, minElementIndex);
  }
}

const arr1 = [13, 46, 24, 52, 20, 9],
  arr2 = [5, 4, 3, 2, 1];
selectionSort(arr1);
selectionSort(arr2);
console.log("Sorted array :", arr1);
console.log("Sorted array :", arr2);
process.stdout.write("\n");

// Swap array elements using index.
// Time complexity: O(1) | Space complexity: O(1)
function swapArrElementsByIndex(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
