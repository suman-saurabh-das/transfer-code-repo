// [01] Cartesian product

/*
  ▣ Problem - Given 2 finite non-empty sets, find their cartesian product.

  ▣ Cartesian product of two sets A and B, denoted by A×B, is the set of all ordered pairs (a,b) where a is in A and b is in B.
    e.g. A = [1,2,3], B = [4,5]
    A×B = [[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]]
  ▣ Traverse each array and pair each element in the first array with each element in the second array.
*/

// Time complexity : O(n1 * n2)
const cartesianProduct = (arr1, arr2) => {
  let cartesianArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      cartesianArr.push([arr1[i], arr2[j]]);
    }
  }
  return cartesianArr;
}
console.log("Cartesian product of arrays : ", cartesianProduct([1, 2, 3], [4, 5]));
console.log();

// [02] Climbing staircase

/*
  ▣ Problem - Given a staircase of n steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

  n = 1, climbingStaircase(1) = 1 | (1)
  n = 2, climbingStaircase(1) = 2 | (1,1) & (2)
  n = 3, climbingStaircase(1) = 3 | (1,1,1), (1,2) & (2,1)
  n = 4, climbingStaircase(4) = 5 | (1,1,1,1), (1,1,2) & (1,2,1), (2,1,1) & (2,2)
*/

// Time complexity : O(2ⁿ)
// Solution using recursion.
const climbingStaircase = (n) => {
  if (n <= 2) {
    return n;
  }
  return climbingStaircase(n-1) + climbingStaircase(n-2);
}
console.log("Number of distinct ways : ", climbingStaircase(1));
console.log("Number of distinct ways : ", climbingStaircase(2));
console.log("Number of distinct ways : ", climbingStaircase(3));
console.log("Number of distinct ways : ", climbingStaircase(4));
console.log();

// Time complexity : O(n)
// Solution using iteration.
const climbingStaircase2 = (n) => {
  if (n < 3) {
    return n;
  }
  let numSteps = 0, s1 = 1, s2 = 2;
  for (let i = 2; i < n; i++) {
    numSteps = s1 + s2;
    s1 = s2;
    s2 = numSteps;
  }
  return numSteps;
}
console.log("Number of distinct ways : ", climbingStaircase2(1));
console.log("Number of distinct ways : ", climbingStaircase2(2));
console.log("Number of distinct ways : ", climbingStaircase2(3));
console.log("Number of distinct ways : ", climbingStaircase2(4));
console.log();

// [03] Tower of Hanoi

/*
  ▣ Objective of the puzzle is to move the entire stack ti the last rod, by obeying the following rules -
    ◉ Only one disk may be moved at a time.
    ◉ Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod.
    ◉ No disk may be placed on top of a disk that is smaller.
*/

// Time complexity : O(2ⁿ)
const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n-1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n-1, usingRod, toRod, fromRod);
}
towerOfHanoi(3, "A", "B", "C");

/*
  ▣ Algorithm design techniques

  ◉ Brute force - Simple and exhaustive technique that evaluates every possible outcome to find the best solution. e.g. linear search

  ◉ Greedy - Choose the best option at the current time, without any consideration for the future. e.g. Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm.

  ◉ Divide and Conquer - Divide the problem into smaller sub-problems. Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution. e.g. binary search, quick sort merge sort and tower of hanoi.

  ◉ Dynamic programming - Divide the problem into smaller sub-problems. Break it down into smaller but overlapping sub problems. Store the result and reuse it for the same sub-problems. This is called memoization and is an optimization technique that improves the time complexity of your algorithm. e.g. fibonacci numbers and climbing staircase.

  ◉ Backtracking - Generate all possible solutions. Check if the solution satisfies all the given constraints and only then you proceed with generating subsequent solutions. Id the constraints are not satisfies, backtrack and go on a different path to find the solution. e.g. N-queens problem.
*/

// [04] Finding GCD using the Euclidian algorithm.
// [05] Finding permutations and combinations for a list of numbers.
// [06] Finding the longest common substring in a given string.
// [07] Knapsack problem