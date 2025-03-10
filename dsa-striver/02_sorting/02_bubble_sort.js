/*
  Bubble sort (push maximum element to the last by adjacent swaps)

  Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order. The largest values "bubble up" to the end. It is stable. (order of elements is maintained)

  ▣ Steps -
    ◉ Compare adjacent elements & swap them if they are in the wrong order.
    ◉ Repeat the process for the entire array.
    ◉ After each pass, the largest element is correctly placed.
    ◉ Continue until no swaps are needed.

  ▣ Complexity analysis -
    ◉ Best case: O(n) | Average & Worst case Time complexity: O(n²)
    ◉ Space complexity: O(1)

  ▣ Advantages & Disadvantages -
    ◉ Simple & easy to implement.
    ◉ Stable sorting algorithm. (Preserves order of equal elements)
    ◉ Slow for large datasets. (O(N²))
    ◉ Not efficient compared to Quick Sort or Merge Sort.
  
  ▣ Video tutorial: https://youtu.be/HGk_ypEuS24?si=Rpz5CXoAHLH_Z_vS
*/

// Time complexity: O(n²) | Space complexity: O(1)
function bubble_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapArrElementsByIndex(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
}

const arr1 = [13, 46, 24, 52, 20, 9],
  arr2 = [5, 4, 3, 2, 1];
bubble_sort(arr1);
bubble_sort(arr2);
console.log("Sorted array :", arr1);
console.log("Sorted array :", arr2);

// Swap array elements using index.
// Time complexity: O(1) | Space complexity: O(1)
function swapArrElementsByIndex(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
