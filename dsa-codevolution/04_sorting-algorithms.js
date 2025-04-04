// [01] Bubble sort

/*
  ▣ Compare adjacent elements in array & swap the positions if they are not in correct order.
  ▣ Repeat the steps for each element in the array.
  ▣ Once we step through the whole array with no swaps, the array is sorted.
*/

// Time complexity : O(n²)
const bubbleSort = (arr) => {
  // Outer loop - to count iterations.
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // Inner loop - to swap adjacent elements.
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        // Swap adjacent elements.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // Break out of loop if no elements were swapped.
    if (!swapped) {
      break;
    }
    // console.log("Array elements after each iteration : ", arr);
  }
}
const arr1 = [-6, 20, 8, -2, 4];
bubbleSort(arr1);
console.log("Array sorted using bubble sort : ", arr1);
console.log();

// [02] Insertion sort

/*
  ▣ Virtually split array in sorted and unsorted parts.
  ▣ Assume first element is already sorted and remaining elements are unsorted.
  ▣ Select an unsorted element and compare with all elements in sorted part.
    ◉ If element in sorted part is smaller than selected element, proceed to next element.
    ◉ Else, shift larger element in sorted part to the right.
    ◉ Insert selected element in correct index.
  ▣ Repeat until all unsorted elements are in correct place.
*/

// Time complexity : O(n²)
const insertionSort = (arr) => {
  // Outer loop - to count iterations.
  for (let i = 0; i < arr.length - 1; i++) {
    // Inner loop - to take elements from unsorted part and place them in sorted part.
    // Swap elements until it is in correct position.
    for (let j = i + 1; j > 0; j--) {
      // Swapping adjacent elements.
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
    // console.log("Array elements after each iteration : ", arr);
  }
}
const arr2 = [-6, 20, 8, -2, 4];
insertionSort(arr2);
console.log("Array sorted using insertion sort : ", arr2);
console.log();

// [03] Quick sort

/*
  ▣ Identify the pivot element in the array.
    ◉ Pivot element can be - first, last, middle or any random element.
  ▣ Put everything thats smaller than pivot into a left array and everything thats greater than pivot into a right array.
  ▣ Repeat the process for the individual left and right arrays till you have an array of length one which is sorted by definition.
  ▣ Repeatedly concatenate the left array, pivot and right array till one sorted array remains.
  ▣ NOTE - Quick sort doesn't modify the original array.
*/

// Worst case time complexity : O(n²)
// Average case time complexity : O(n*log(n))
const quickSort = (arr) => {
  // Base condition.
  if (arr.length < 2) {
    return arr;
  }
  // Last element is the pivot.
  let pivot = arr[Math.floor(arr.length - 1)];
  let leftArr = [], rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    // If element is less than pivot, add it in left half.
    // If element is more than pivot, add it in right half.
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  // Merge the left half, pivot and right half of the array.
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
const arr3 = [-6, 20, 8, -2, 4];
console.log("Array sorted using quick sort : ", quickSort(arr3));
console.log();

// [04] Merge sort

/*
  ▣ Divide the array into sub arrays, each containing only one element.
    (an array with one element is considered sorted)
    ◉ Split the array in middle.
    ◉ Left half containing elements from 0 to mid-1.
    ◉ Right half containing elements from mid to arr.length - 1.
  ▣ Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining.
*/

// Time complexity : O(n*log(n))
const mergeSort = (arr) => {
  // Base condition.
  if (arr.length === 1) {
    return arr;
  }
  // Split the array into 2 halves.
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return mergeSortedArrays2(mergeSort(leftArr), mergeSort(rightArr));
}

// Merging 2 sorted arrays.
const mergeSortedArrays = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

// Alter - Merging 2 sorted arrays.
const mergeSortedArrays2 = (leftArr, rightArr) => {
  let sortedArr = [], l1 = 0, l2 = 0, l3 = 0;
  while (l1 < leftArr.length && l2 < rightArr.length) {
    if (leftArr[l1] < rightArr[l2]) {
      sortedArr[l3] = (leftArr[l1]);
      l1++;
    } else {
      sortedArr[l3] = (rightArr[l2]);
      l2++;
    }
    l3++;
  }
  while (l1 < leftArr.length) {
    sortedArr[l3] = leftArr[l1];
    l1++;
    l3++;
  }
  while (l2 < rightArr.length) {
    sortedArr[l3] = rightArr[l2];
    l2++;
    l3++;
  }
  return sortedArr;
}
const arr4 = [-6, 20, 8, -2, 4];
console.log("Array sorted using merge sort : ", mergeSort(arr4));
console.log();
