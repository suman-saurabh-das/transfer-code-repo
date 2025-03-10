/*
  Merge sort (divide & merge)

  Merge Sort is a divide and conquer sorting algorithm that splits the array into smaller parts, sorts them, and then merges them back together. It is stable. (order of elements is maintained)

  ▣ Steps -
    ◉ Divide: Split the array into two halves until each subarray has one element.
    ◉ Conquer: Recursively sort each half.
    ◉ Merge: Merge two sorted halves into a single sorted array.

  ▣ Complexity analysis -
    ◉ Best case, Average & Worst case Time complexity: O(n*log(n))
    ◉ Space complexity: O(n)

  ▣ Advantages & Disadvantages -
    ◉ Fast. (O(N log N))
    ◉ Stable Sorting. (Preserves order of equal elements)
    ◉ Good for large datasets.
    ◉ Uses extra memory. (O(N))
    ◉ Slower than Quick Sort in most cases.

  ▣ Video tutorial: https://youtu.be/ogjf7ORKfd8?si=HqxknZEea_YxVYDJ
*/

// Time complexity: O(n*log(n)) | Space complexity: O(n)
function mergeSort(arr, low, high) {
  if (low === high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  let left = low,
    right = mid + 1,
    temp = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

const arr1 = [4, 2, 1, 6, 7],
  arr2 = [3, 2, 8, 5, 1, 4, 23];

mergeSort(arr1, 0, arr1.length - 1);
mergeSort(arr2, 0, arr2.length - 1);

console.log("Sorted array :", arr1);
console.log("Sorted array :", arr2);
