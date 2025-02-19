//  [01] Patterns

/*
  Patterns: We will be using nested loops.

    Using the outer loop, count the number of lines.
    Using the inner loop, focus on the columns & connect them somehow to the rows.
    Print the "*" inside the inner for loop.
    Observe symmetry.
*/

/*
  Print the below patterns -

    Pattern 1     Pattern 2     Pattern 3     Pattern 4

    * * * * *     *             1             1
    * * * * *     * *           1 2           2 2
    * * * * *     * * *         1 2 3         3 3 3
    * * * * *     * * * *       1 2 3 4       4 4 4 4
    * * * * *     * * * * * *   1 2 3 4 5     5 5 5 5 5
     
    Pattern 5     Pattern 6     Pattern 7     Pattern 8

    * * * * *     1 2 3 4 5         *         *********
    * * * *       1 2 3 4          ***         *******
    * * *         1 2 3           *****         *****
    * *           1 2            *******         ***
    *             1             *********         *
     
    Pattern 9     Pattern 10    Pattern 11    Pattern 12

        *         *             1             1        1
       ***        **            0 1           12      21
      *****       ***           1 0 1         123    321
     *******      ****          0 1 0 1       1234  4321
    *********     *****         1 0 1 0 1     1234554321
     *******      ****
      *****       ***
       ***        **
        *         *

    Pattern 13            Pattern 14          Pattern 15

    1                     A                   A B C D E       
    2 3                   A B                 A B C D
    4 5 6                 A B C               A B C
    7 8 9 10              A B C D             A B
    11 12 13 14 15        A B C D E           A

    Pattern 16            Pattern 17          Pattern 18

    A                         A               E
    B B                      B B              D E
    C C C                   C C C             C D E
    D D D D                D D D D            B C D E
    E E E E E             E E E E E           A B C D E

    Pattern 19     Pattern 20    Pattern 21   Pattern 22

    **********     *        *     * * * *     4 4 4 4 4 4 4
    ****  ****     **      **     *     *     4 3 3 3 3 3 4
    ***    ***     ***    ***     *     *     4 3 2 2 2 3 4
    **      **     ****  ****     * * * *     4 3 2 1 2 3 4
    *        *     **********                 4 3 2 2 2 3 4
    *        *     ****  ****                 4 3 3 3 3 3 4
    **      **     ***    ***                 4 4 4 4 4 4 4
    ***    ***     **      **
    ****  ****     *        *
    **********       
*/

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// pattern1(5);

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// pattern2(5);

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((j + 1).toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern3(5);

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((i + 1).toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern4(5);

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// pattern5(5);

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write((j).toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern6(5);

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    // Loop 1 to print spaces " "
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // Loop 2 to print stars "*"
    for (let k = 0; k < (i * 2) + 1; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern7(5);

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    // Loop 1 to print spaces " "
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // Loop 2 to print stars "*"
    for (let k = 0; k < ((n - i - 1) * 2 + 1); k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern8(5);

function pattern9(n) {
  pattern7(n);
  pattern8(n);
}
// pattern9(5);

function pattern10(n) {
  let i = 0;
  // Loop 1 to print stars till i <= n (increment i)
  for (i; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  // Loop 2 to print stars till i becomes 0 (decrement i)
  for (i; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern10(5);

function pattern11(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // i + j + 1 will give us alternate odd & even numbers.
      // We can get the alternate 0 & 1 by using % operator.
      process.stdout.write(((i + j + 1) % 2).toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern11(5);

function pattern12(n) {
  for (let i = 0; i < n; i++) {
    let j = 0;
    // Loop 1 to print numbers.
    for (j; j <= i; j++) {
      process.stdout.write((j + 1).toString());
    }
    // Loop 2 to print spaces.
    for (let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    // Loop 3 to print spaces.
    for (let l = 0; l < n - i - 1; l++) {
      process.stdout.write(" ");
    }
    // Loop 4 to print numbers.
    for (j; j > 0; j--) {
      process.stdout.write((j).toString());
    }
    process.stdout.write("\n");
  }
}
// pattern12(5);

function pattern13(n) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // Incrementing count variable after every iteration and printing.
      process.stdout.write(count.toString() + " ");
      count++;
    }
    process.stdout.write("\n");
  }
}
// pattern13(5);

function pattern14(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // Converting number to character and printing.
      process.stdout.write(String.fromCharCode(64 + j + 1) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern14(5);

function pattern15(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i; j++) {
      // Converting number to character and printing.
      process.stdout.write(String.fromCharCode(64 + j + 1) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern15(5);

function pattern16(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
      // Converting number to character and printing.
      process.stdout.write(String.fromCharCode(64 + i + 1) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern16(5);

function pattern17(n) {
  for(let i = 0; i < n; i++) {
    // Loop 1 to print spaces " "
    for(let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // Loop 2 to print characters.
    for(let k = 0; k <= i; k++) {
      process.stdout.write(String.fromCharCode(64 + i + 1) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern17(5);

function pattern18(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
      process.stdout.write(String.fromCharCode(64 + n - i + j) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern18(5);

function pattern19(n) {
  // Downward triangles left and right halves.
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i; j++) {
      process.stdout.write("*");
    }
    for(let k = 0; k < i; k++) {
      process.stdout.write(" ");
    }
    for(let k = 0; k < i; k++) {
      process.stdout.write(" ");
    }
    for(let j = 0; j < n - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  // Upward triangles left and right halves.
  for (let i = 0; i < n; i++) {
    for(let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    for(let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for(let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for(let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern19(5);