// [01] Fibonacci sequence

/*
  ▣ Problem - Given a number n, find the first n elements of the fibonacci sequence.
  
  ▣ Fibonacci is a sequence in which each number is the sum of the preceding ones.
  ▣ The first two numbers in the sequence are 0 and 1.
    fibonacci(2) = [0, 1]
    fibonacci(3) = [0, 1, 1]
    fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
*/

// Time complexity : O(n)
const fibonacci = (n) => {
  let fibArr = [];
  if (n >= 1) fibArr.push(0);
  if (n >= 2) fibArr.push(1);
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
}
console.log("fibonacci(1) : ", fibonacci(1));
console.log("fibonacci(2) : ", fibonacci(2));
console.log("fibonacci(3) : ", fibonacci(3));
console.log("fibonacci(7) : ", fibonacci(7));
console.log();


// [02] Factorial of a number

/*
  ▣ Problem - Given an integer n, find the factorial of that integer.
  
  ▣ Factorial of a non-negative integer n, denoted as n! is the product of all positive integers less than or equal to n.
    factorial(0) = 1
    factorial(4) = 4*3*2*1 = 24
    factorial(5) = 5*4*3*2*1 = 120
*/

// Time complexity : O(n)
const factorial = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log("factorial(0) : ", factorial(0));
console.log("factorial(1) : ", factorial(1));
console.log("factorial(4) : ", factorial(4));
console.log("factorial(5) : ", factorial(5));
console.log();

// [03] Prime number

/*
  ▣ Problem - Given a natural number n, determine if it is prime or not.
  
  ▣ A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
    isPrime(5) = true
    isPrime(4) = false
*/

// Time complexity : O(sqrt(n))
const isPrime = (n) => {
  if (n === 0 || n === 1) {
    return false;
  }
  let isPrime = true, i = 2;
  // while (i < n) {
  //   if(n % i === 0) {
  //     isPrime = false;
  //     break;
  //   }
  //   i++;
  // }

  // Optimized solution - Integers larger than square root do not need to be checked because, whenever n = a * b, one of the two factors a and b is less than or equal to square root of n.
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  return isPrime;
}
console.log("isPrime(0) : ", isPrime(0));
console.log("isPrime(1) : ", isPrime(1));
console.log("isPrime(4) : ", isPrime(4));
console.log("isPrime(5) : ", isPrime(5));
console.log();

// [04] Power of 2

/*
  ▣ Problem - Given a positive integer n, determine if the number is a power of 2 or not.
  
  ▣ An integer is a power of two if there exists an integer n such that x === 2ⁿ
    isPowerOfTwo(1) = true
    isPowerOfTwo(2) = true
    isPowerOfTwo(5) = false
*/

// Time complexity : O(log(n))
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log("isPowerOfTwo(1) : ", isPowerOfTwo(1));
console.log("isPowerOfTwo(2) : ", isPowerOfTwo(2));
console.log("isPowerOfTwo(6) : ", isPowerOfTwo(6));
console.log("isPowerOfTwo(7) : ", isPowerOfTwo(7));
console.log("isPowerOfTwo(8) : ", isPowerOfTwo(8));
console.log();

// Time complexity : O(1)
const isPowerOfTwoBitWise = (n) => {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0;
}
console.log("isPowerOfTwoBitWise(1) : ", isPowerOfTwoBitWise(1));
console.log("isPowerOfTwoBitWise(2) : ", isPowerOfTwoBitWise(2));
console.log("isPowerOfTwoBitWise(5) : ", isPowerOfTwoBitWise(5));
console.log();

// [05] Recursion

/*
  ▣ What is recursion ?
    ◉ Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.
    ◉ Recursion is when a function calls itself.
  ▣ Why recursion ?
    ◉ A great technique to simplify our solution.
    ◉ If we find ourselves breaking down our problem into smaller versions of the same problem, recursion is very useful.

  ▣ Important points
    ◉ Every recursive solution needs to have a base case (A condition to terminate the recursion).
    ◉ Recursion might simplify solving a problem, but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution.

    ◉ Figure out how to break the problem into smaller versions of the same problem.
    ◉ Identify the base case for recursion.
*/

// [06] Recursive fibonacci sequence

/*
  ▣ Problem - Given a number n, find the nth element of the fibonacci sequence.

  ▣ Fibonacci is a sequence in which each number is the sum of the preceding ones.
  ▣ The first two numbers in the sequence are 0 and 1.
    recursiveFibonacci(0) = 0
    recursiveFibonacci(1) = 1
    recursiveFibonacci(6) = 8
*/

// Time complexity : O(2ⁿ)
const recursiveFibonacci = (n) => {
  // Base condition.
  if (n === 0 || n === 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log("recursiveFibonacci(0) : ", recursiveFibonacci(0));
console.log("recursiveFibonacci(1) : ", recursiveFibonacci(1));
console.log("recursiveFibonacci(6) : ", recursiveFibonacci(6));
console.log();

// [07] Recursive factorial of a number

/*
  ▣ Problem - Given an integer n, find the factorial of that integer.

  ▣ Factorial of a non-negative integer n, denoted as n! is the product of all positive integers less than or equal to n.
    factorial(0) = 1
    factorial(4) = 4*3*2*1 = 24
    factorial(5) = 5*4*3*2*1 = 120
*/

// Time complexity : O(n)
const recursiveFactorial = (n) => {
  // Base condition.
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n-1);
}
console.log("recursiveFactorial(0) : ", recursiveFactorial(0));
console.log("recursiveFactorial(4) : ", recursiveFactorial(4));
console.log("recursiveFactorial(5) : ", recursiveFactorial(5));
console.log();
