/*
  Insertion sort (take an element & place it in correct order)

  Insertion Sort builds the sorted array one item at a time, picking an element and placing it in its correct position. It is stable. (order of elements is maintained)

  ▣ Steps -
    ◉ Start with the second element (assume the first is already sorted).
    ◉ Compare it with elements before it.
    ◉ Shift elements larger than the current element to the right.
    ◉ Insert the current element into its correct position.
    ◉ Repeat for all elements.

  ▣ Complexity analysis -
    ◉ Best case: O(n) | Average & Worst case Time complexity: O(n²)
    ◉ Space complexity: O(1)

  ▣ Advantages & Disadvantages -
    ◉ Efficient for small datasets
    ◉ Stable sorting algorithm (Preserves order of equal elements)
    ◉ Adaptive (Runs in O(N) for nearly sorted data)
    ◉ Inefficient for large datasets (O(N²))

  ▣ Video tutorial: https://youtu.be/HGk_ypEuS24?si=Rpz5CXoAHLH_Z_vS
*/

// Time complexity: O(n²) | Space complexity: O(1)
function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swapArrElementsByIndex(arr, j, j - 1);
      j--;
    }
  }
}

const arr1 = [13, 46, 24, 52, 20, 9],
  arr2 = [5, 4, 3, 2, 1];
insertion_sort(arr1);
insertion_sort(arr2);
console.log("Sorted array :", arr1);
console.log("Sorted array :", arr2);

// Swap array elements using index.
// Time complexity: O(1) | Space complexity: O(1)
function swapArrElementsByIndex(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
