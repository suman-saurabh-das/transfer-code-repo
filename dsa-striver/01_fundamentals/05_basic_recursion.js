/*
  ▣ Recursion: A function calling itself until a specified condition (base condition) is met.

  ▣ Stack overflow: Whenever recursion calls are executed, they’re simultaneously stored in a recursion stack where they wait for the completion of the recursive function. A recursive function can only be completed if a base condition is fulfilled and the control returns to the parent function. But, when there is no base condition given for a particular recursive function, it gets called indefinitely which results in a Stack Overflow i.e, exceeding the memory limit of the recursion stack and hence the program terminates giving a Segmentation Fault error. 

  ▣ Base condition: Condition that is written in a recursive function in order for it to get completed and not to run infinitely. After encountering the base condition, the function terminates and returns back to its parent function simultaneously.

  ▣ Observations -

    ◉ If the recursive function call doesn't return a value, then we do not need a return keyword before the recursive function call. e.g. Printing name 5 times.
    ◉ If we are expecting a recursive function to return a value, then at each recursive call, we need to use return keyword. e.g. Find the sum of first N natural numbers.

    ◉ Recursion problems can be solved in 2 ways -
      ◈ Parameterized: Return value will be passed in the function parameter.
      ◈ Functional: Function should return the value, by generating it internally.
*/

// [01] Print name N times using recursion. --------------------------------------------------------

// Time complexity: O(n) | Space complexity: O(n)
function printName_recursion(i, n, name) {
  // Base condition.
  if (i > n) {
    return;
  }
  console.log(name);
  // Recursive function call.
  printName_recursion(i + 1, n, name);
}
printName_recursion(1, 3, "Saurabh");
process.stdout.write("\n");

// [02] Print 1 to N using recursion. --------------------------------------------------------------

// Time complexity: O(n) | Space complexity: O(n)
function print1ToN_recursion(i, n) {
  if (i > n) {
    return;
  }
  process.stdout.write(i + " "); // printing before recursive function call.
  print1ToN_recursion(i + 1, n);
}
process.stdout.write("Printing 1 to 5 (recursion) : ");
print1ToN_recursion(1, 5);
process.stdout.write("\n");

// Solution using back-tracking.
function print1ToN_backTracking(n) {
  if (n < 1) {
    return;
  }
  print1ToN_backTracking(n - 1);
  process.stdout.write(n + " "); // printing after recursive function call.
}
process.stdout.write("Printing 1 to 5 (back tracking) : ");
print1ToN_backTracking(5);
process.stdout.write("\n\n");

// [03] Print N to 1 using recursion. --------------------------------------------------------------

// Time complexity: O(n) | Space complexity: O(n)
function printNto1_recursion(n) {
  if (n === 0) {
    return;
  }
  process.stdout.write(n + " "); // printing before recursive function call.
  printNto1_recursion(n - 1);
}
process.stdout.write("Printing 5 to 1 (recursion) : ");
printNto1_recursion(5);
process.stdout.write("\n");

// Solution using back-tracking.
function printNTo1_backTracking(i, n) {
  if (i > n) {
    return;
  }
  printNTo1_backTracking(i + 1, n);
  process.stdout.write(i + " "); // printing after recursive function call.
}
process.stdout.write("Printing 5 to 1 (back tracking) : ");
printNTo1_backTracking(1, 5);
process.stdout.write("\n\n");

// [04] Sum of first N numbers using recursion. ----------------------------------------------------

// Time complexity: O(n) | Space complexity: O(n)
// Parameterized approach
function sumOfNumbers_paramsRecursion(sum, i, n) {
  if (i > n) {
    return sum; // Return value, must be returned from each recursive function calls.
  }
  sum = sum + i;
  return sumOfNumbers_paramsRecursion(sum, i + 1, n);
}
console.log("Sum of first 5 numbers :", sumOfNumbers_paramsRecursion(0, 1, 5));

// Functional approach
function sumOfNumbers_funcRecursion(n) {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNumbers_funcRecursion(n - 1);
}
console.log("Sum of first 5 numbers :", sumOfNumbers_funcRecursion(5));
process.stdout.write("\n");

// [05] Factorial of N numbers using recursion. ----------------------------------------------------

// Time complexity: O(n) | Space complexity: O(n)
// Parameterized approach
function factorialOfN_paramsRecursion(factorial, i, n) {
  if (i > n) {
    return factorial;
  }
  factorial = factorial * i;
  return factorialOfN_paramsRecursion(factorial, i + 1, n);
}
console.log("Factorial of 5 :", factorialOfN_paramsRecursion(1, 1, 5));

// Functional approach
function factorialOfN_funcRecursion(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialOfN_funcRecursion(n - 1);
}
console.log("Factorial of 5 :", factorialOfN_funcRecursion(5));
process.stdout.write("\n");

// [06] Reverse an array using recursion. ----------------------------------------------------------

// Time complexity: O(1) | Space complexity: O(1)
function swapArrElementsUsingIndex(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Time complexity: O(n) | Space complexity: O(n)
function reverseArray_recursion(arr, i) {
  if (i >= Math.floor(arr.length / 2)) {
    return;
  }
  swapArrElementsUsingIndex(arr, i, arr.length - 1 - i);
  reverseArray_recursion(arr, i + 1);
}
let arr1 = [1, 2, 3, 4, 5];
reverseArray_recursion(arr1, 0);
console.log("Reversed array : ", arr1);
let arr2 = [1, 2, 3, 4];
reverseArray_recursion(arr1, 0);
console.log("Reversed array : ", arr2);
process.stdout.write("\n");

// [07] Check if a string is palindrome or not using recursion. ------------------------------------

// Time complexity: O(n) | Space complexity: O(n)
function isPalindrome_recursion(str, i) {
  if (i >= str.length / 2) {
    return true;
  }
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }
  return isPalindrome_recursion(str, i + 1);
}
console.log("String aba is palindrome :", isPalindrome_recursion("aba", 1));
console.log("String abada is palindrome :", isPalindrome_recursion("abada", 1));
process.stdout.write("\n");

// [08] Print the Fibonacci series up to the Nth term using recursion. -----------------------------

// Time complexity: O(2ⁿ) | Space complexity: O(2ⁿ)
function fibonacciNum_recursion(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacciNum_recursion(n - 1) + fibonacciNum_recursion(n - 2);
}

// Time complexity: O(n*2ⁿ) | Space complexity: O(n*2ⁿ)
function printFibonacciSeries_recursion(i, n) {
  if (i >= n) {
    return;
  }
  process.stdout.write(fibonacciNum_recursion(i).toString() + " ");
  printFibonacciSeries_recursion(i + 1, n);
}

process.stdout.write("Fibonacci series till 3 : ");
printFibonacciSeries_recursion(0, 3);
process.stdout.write("\n");
process.stdout.write("Fibonacci series till 8 : ");
printFibonacciSeries_recursion(0, 8);
process.stdout.write("\n");

// -------------------------------------------------------------------------------------------------
