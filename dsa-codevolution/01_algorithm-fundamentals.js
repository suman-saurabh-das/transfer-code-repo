/*

[01] [02] What is an algorithm ?

  ▣ A set of well defined instructions to solve a particular problem.      
    e.g. algorithm to add 2 numbers.

          input       ->                  algorithm                   ->     output
    2 numbers a and b -> add numbers using + operator & return result -> sum of a and b

[03] Time and Space complexity.

  ▣ Absolute running time of an algorithm cannot be predicted, since it depends on a number of factors.
    ◉ Programming language used to implement the algorithm.
    ◉ Computer the program runs on.
    ◉ Other programs running at the same time.
    ◉ Quality of the operating system.

  ▣ We evaluate the performance of an algorithm in terms of its input size.
    ◉ Time complexity - Amount of time taken by an algorithm to run, as a function of its input size.
    ◉ Space complexity - Amount of memory taken by an algorithm to run, as a function of input size.

  ▣ By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

  ▣ There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.
    ◉ If your app needs to be very quick and has plenty of  memory to work with, you don't have to worry about space complexity.
    ◉ If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

  ▣ Asymptotic notations (Mathematical tools) used to represent time and space complexity.
    ◉ Big-O notation (O) - Worst case complexity.
    ◉ Omega notation (Ω) - Best case complexity.
    ◉ Theta notation (Θ) - Average case complexity.

[04] Big-O notation

  ▣ Worst case time complexity of an algorithm is represented using Big-O notation.
  ▣ Big-O notation describes the complexity of an algorithm using algebraic terms.
  ▣ It has 2 important characteristics -
    ◉ It is expressed in terms of the input.
    ◉ It focuses on the bigger picture without getting caught up in the minute details.

    e.g. function to calculate sum of n natural numbers
      function summation(n) {
        let sum = 0;
        for(let i = 0; i<= n; i++) {
          sum = sum + i;
        }
        return sum;
      }
    Here as the input size grows, time taken to execute grows linearly (linear time complexity) - O(n).
    
      function summation(n) {
        return (n * (n + 1)) / 2;
      }
    Here the function is not dependent on the input size. (constant time complexity) - O(1)

      ◉ no loop - constant
      ◉ input size reduces by half every iteration - logarithmic
      ◉ 1 loop - linear time
      ◉ 2 nested loop - quadratic time
      ◉ 3 nested loop - cubic

  ▣ Important points

    ◉ Multiple algorithms exist for the same problem and there is no one right solution. Different algorithms work well under different constraints.
    ◉ The same algorithm with the same programming language can be implemented in different ways.
    ◉ When writing programs at work, don't lose sight of the bigger picture. Rather than writing clever code, write code that is simple to read and maintain.

[05] Big-O of Objects, Arrays and Methods

  ▣ Objects - An object is a collection of key-value pairs
    ◉ Insert, Remove, Access - O(1) | Search - O(n)
    ◉ Object.keys(), Object.values(), Object.entries() - O(n)

  ▣ Array - An array is an ordered collection of values
    ◉ Insert/Remove at the end - O(1)
    ◉ Insert/Remove at the beginning - O(n)
    ◉ Access, Search, Push, Pop - O(1)
    ◉ Shift, Unshift, Slice, Splice, Concat, forEach, Map, Filter, Reduce - O(n)

*/