/* -------------------------------------------------------------------------------------------------

  [01] Count digits.
  https://www.naukri.com/code360/problems/number-of-digits_9173

  You are given a number 'n'. Return number of digits in ‘n’.
  Input: 123 | Output: 3
  Input: 38  | Output: 2
*/

// Time complexity: O(log(n)) | Space complexity: O(1)
function countDigits_BF(n) {
  let numberOfDigits = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    numberOfDigits++;
  }
  return numberOfDigits;
}
console.log("Number of digits in 123 :", countDigits_BF(123));
console.log("Number of digits in 38 :", countDigits_BF(38));
process.stdout.write("\n");

// Time complexity: O(1) | Space complexity: O(1)
function countDigits_OS(n) {
  return Math.floor(Math.log10(n) + 1);
}
console.log("Number of digits in 123 :", countDigits_OS(123));
console.log("Number of digits in 38 :", countDigits_OS(38));
process.stdout.write("\n");

/* -------------------------------------------------------------------------------------------------

  [02] Reverse a number.
  https://www.naukri.com/code360/problems/reverse-of-a-number_624652

  Write a program to generate the reverse of a given number N.
  Input: 1234 | Output: 4321
  Input: 1980 | Output: 891
*/

// Time complexity: O(log(n)) | Space complexity: O(1)
function reverseNumber(n) {
  let reversedNum = 0;
  while (n > 0) {
    let lastDigit = Math.floor(n % 10);
    reversedNum = reversedNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reversedNum;
}
console.log("Reverse of 1234 is :", reverseNumber(1234));
console.log("Reverse of 1980 is :", reverseNumber(1980));
process.stdout.write("\n");

/* -------------------------------------------------------------------------------------------------

  [03] Check palindrome.
  https://www.naukri.com/code360/problems/palindrome-number_624662

  Check whether a given number ’n’ is a palindrome number.
  Input: 1032 | Output: false
  Input: 121  | Output: true
*/

// Time complexity: O(log(n)) | Space complexity: O(1)
function isPalindrome(n) {
  let originalNum = n,
    reversedNum = 0;
  while (n > 0) {
    let lastDigit = Math.floor(n % 10);
    reversedNum = reversedNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return originalNum === reversedNum;
}
console.log("Number 1032 is palindrome :", isPalindrome(1032));
console.log("Number 121 is palindrome :", isPalindrome(121));
process.stdout.write("\n");

/* -------------------------------------------------------------------------------------------------

  [04] Armstrong numbers.
  https://www.naukri.com/code360/problems/check-armstrong_589

  You are given an integer 'n'. Return 'true' if 'n' is an Armstrong number, and 'false' otherwise.
  Input: 103  | Output: false
  Input: 1634 | Output: true

  An Armstrong number is a number where the sum of its digits, each raised to the power of the number of digits, equals the original number.
*/

// Time complexity: O(log(n)) | Space complexity: O(1)
function isArmstrong(n) {
  let originalNumber = n,
    sumOfCubes = 0;
  let numberOfDigits = Math.floor(Math.log10(n) + 1);
  while (n > 0) {
    let lastDigit = Math.floor(n % 10);
    sumOfCubes = sumOfCubes + Math.pow(lastDigit, numberOfDigits);
    n = Math.floor(n / 10);
  }
  return originalNumber === sumOfCubes;
}
console.log("Number 103 is armstrong :", isArmstrong(103));
console.log("Number 1634 is armstrong :", isArmstrong(1634));
process.stdout.write("\n");

/* -------------------------------------------------------------------------------------------------

  [05] Print all divisors.
  https://www.naukri.com/code360/problems/print-all-divisors-of-a-number_1164188

  Given an integer ‘N’, write a program that returns all the divisors of ‘N’
  Input: 10 | Output: 1 2 5 10
  Input: 6  | Output: 1 2 3 6
*/

// Time complexity: O(n) | Space complexity : O(1)
function printDivisors_BF(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
  process.stdout.write("\n");
}
process.stdout.write("Divisors of 10 are :");
printDivisors_BF(10);
process.stdout.write("Divisors of 6 are :");
printDivisors_BF(6);
process.stdout.write("\n");

// Time complexity: O(sqrt(n)) | Space complexity : O(1)
function printDivisors_OS(n) {
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
      if (n / i !== i) {
        process.stdout.write(n / i + " ");
      }
    }
  }
  process.stdout.write("\n");
}
process.stdout.write("Divisors of 10 are :");
printDivisors_OS(10);
process.stdout.write("Divisors of 6 are :");
printDivisors_OS(6);
process.stdout.write("\n");

/* -------------------------------------------------------------------------------------------------

  [06] Check for prime.
  https://www.naukri.com/code360/problems/check-prime_624674

  Given an integer, check if it is prime or not.
  Input: 7  | Output: true
  Input: 15 | Output: false
*/

// Time complexity: O(sqrt(n)) | Space complexity : O(1)
function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Number 7 is prime :", isPrime(7));
console.log("Number 15 is prime :", isPrime(15));
process.stdout.write("\n");

/* -------------------------------------------------------------------------------------------------

  [07] GCD or HCF
  https://www.naukri.com/code360/problems/gcd_6557

  Calculate and return GCD(Greatest Common Divisor) of two given numbers x and y.
  Input: 20 5  | Output: 5
  Input: 96 14 | Output: 2
*/

// Time complexity: O(min(n1, n2)) | Space complexity: O(1)
function findGCD_BF(n1, n2) {
  let gcd = 1;
  for (let i = 2; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}
console.log("GCD of 20 & 5 is :", findGCD_BF(20, 5));
console.log("GCD of 96 & 14 is :", findGCD_BF(96, 14));
process.stdout.write("\n");

// Time complexity: O(min(n1,n2)) | Space complexity: O(1)
function findGCD_BS(n1, n2) {
  for (let i = Math.min(n1, n2); i > 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
  return 1;
}
console.log("GCD of 7 & 13 is :", findGCD_BF(7, 13));
console.log("GCD of 20 & 5 is :", findGCD_BF(20, 5));
console.log("GCD of 96 & 14 is :", findGCD_BF(96, 14));
process.stdout.write("\n");

// Solution using - Euclidean algorithm.
// Time complexity: O(log(min(n1,n2))) | Space complexity: O(1)
function findGCD_OS(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  if (n1 !== 0) {
    return n1;
  }
  return n2;
}
console.log("GCD of 7 & 13 is :", findGCD_OS(7, 13));
console.log("GCD of 20 & 5 is :", findGCD_OS(20, 5));
console.log("GCD of 96 & 14 is :", findGCD_OS(96, 14));

process.stdout.write("\n");

// -------------------------------------------------------------------------------------------------
