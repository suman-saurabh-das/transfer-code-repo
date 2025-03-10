/*
  Quick sort

  Quick Sort is a divide and conquer sorting algorithm that works by selecting a pivot, partitioning the array around it, and recursively sorting the sub-arrays. It is not stable. (order of elements is not maintained)

  Steps -
    ◉ Choose a Pivot: Select the first or middle element as the pivot.
    ◉ Partition: Move all elements smaller than the pivot to the left and larger to the right.
    ◉ Recursively Sort: Apply Quick Sort to the left and right sub-arrays.

  ▣ Complexity analysis -
    ◉ Time complexity: Best, Average case: O(n*log(n)) | Worst case: O(n²)
    ◉ Space complexity: O(n)

  ▣ Advantages & Disadvantages -
    ◉ Fast (O(n*log(n)) in average cases)
    ◉ Efficient for large datasets.
    ◉ In-place sorting possible. (reducing space complexity to O(1))
    ◉ Worst-case O(N²) if pivot selection is poor.
    ◉ Not stable. (Doesn’t preserve the relative order of equal elements)

  ▣ Quick sort with middle element as pivot.
    ◉ Video tutorial: https://youtu.be/Z8svOqamag8?si=tXi1aG24XQUZxwDL

  ▣ Quick sort with first element as pivot.
    ◉ Video tutorial: https://youtu.be/WIrA4YexLRQ?si=LZUvC5C_QgI_-bDT
*/

// Quick sort with middle element as pivot.
// Time complexity: O(n*log(n)) | Space complexity: O(1)
function quickSortMidElementAsPivot(arr, low, high) {
  // low and high pointers - determine which part of array we are working on.
  if (low >= high) {
    return;
  }

  // start and end pointers - are used for swapping.
  // mid is the index of pivot element.
  let start = low,
    end = high,
    mid = Math.floor((start + end) / 2),
    pivot = arr[mid];

  while (start <= end) {
    while (arr[start] < pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    // We will only swap if start <= end
    // (because this condition may be violated before body of while is finished executing)
    if (start <= end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // Now pivot will be at correct index, and we will have to sort the LHS and RHS part of array.
  quickSortMidElementAsPivot(arr, low, end);
  quickSortMidElementAsPivot(arr, start, high);
}

const arr1 = [4, 1, 7, 9, 3],
  arr2 = [4, 6, 2, 5, 7, 9, 1, 3];

quickSortMidElementAsPivot(arr1, 0, arr1.length - 1);
quickSortMidElementAsPivot(arr2, 0, arr2.length - 1);

console.log("Sorted array :", arr1);
console.log("Sorted array :", arr2);
process.stdout.write("\n");

// -------------------------------------------------------------------------------------------------

// Quick sort with first element as pivot.
// Time complexity: O(n*log(n)) | Space complexity: O(1)
function quickSortFirstElementAsPivot(arr, low, high) {
  // Check if range is > 1
  if (low < high) {
    let partitionIndex = partition(arr, low, high);
    // Sorting left subarray
    quickSortFirstElementAsPivot(arr, low, partitionIndex - 1);
    // Sorting right subarray
    quickSortFirstElementAsPivot(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let start = low,
    end = high,
    pivot = arr[low];
  while (start < end) {
    while (arr[start] <= pivot && start <= high - 1) {
      start++;
    }
    while (arr[end] > pivot && end >= low + 1) {
      end--;
    }
    // Swap elements lesser than & greater than pivot.
    if (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
  // Swap first element to its correct position.
  // Now pivot is at correct position.
  let temp = arr[low];
  arr[low] = arr[end];
  arr[end] = temp;
  return end;
}

const arr3 = [4, 1, 7, 9, 3],
  arr4 = [4, 6, 2, 5, 7, 9, 1, 3];

quickSortFirstElementAsPivot(arr3, 0, arr3.length - 1);
quickSortFirstElementAsPivot(arr4, 0, arr4.length - 1);

console.log("Sorted array :", arr3);
console.log("Sorted array :", arr4);
