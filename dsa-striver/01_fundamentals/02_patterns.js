//  [01] Patterns ---------------------------------------------------------------------------------_

/*
  ▣ Patterns: We will be using nested loops to print the patterns.
  
  ▣ Steps to solve the pattern problems -
    ◉ Using the outer loop, count the number of lines.
    ◉ Using the inner loop, focus on the columns & connect them somehow to the rows.
    ◉ Print the "*" inside the inner for loop.
    ◉ Observe symmetry.

  ▣ Solution videos for below problems : https://www.youtube.com/watch?v=tNm_NNSB3_w
*/

/*
  Pattern 1

  * * * * *
  * * * * *
  * * * * *
  * * * * *
  * * * * *
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

/*
  Pattern 2

  *
  * *
  * * *
  * * * *
  * * * * *
*/

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// pattern2(5);

/*
  Pattern 3

  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
*/

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((j + 1).toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern3(5);

/*
  Pattern 4

  1
  2 2
  3 3 3
  4 4 4 4
  5 5 5 5 5
*/

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write((i + 1).toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern4(5);

/*
  Pattern 5
  
  * * * * *
  * * * *
  * * *
  * *
  *
*/

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }
}
// pattern5(5);

/*
  Pattern 6
  
  1 2 3 4 5
  1 2 3 4
  1 2 3
  1 2
  1
*/

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(j.toString() + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern6(5);

/*
  Pattern 7

      *
     ***
    *****
   *******
  *********
*/

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    // Loop 1 to print spaces " "
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // Loop 2 to print stars "*"
    for (let k = 0; k < i * 2 + 1; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern7(5);

/*
  Pattern 8

  *********
   *******
    *****
     ***
      *
*/

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    // Loop 1 to print spaces " "
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    // Loop 2 to print stars "*"
    for (let k = 0; k < (n - i - 1) * 2 + 1; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern8(5);

/*
  Pattern 9

      *
     ***
    *****
   *******
  *********
   *******
    *****
     ***
      *
*/

function pattern9(n) {
  pattern7(n);
  pattern8(n);
}
// pattern9(5);

/*
  Pattern 10

  *
  **
  ***
  ****
  *****
  ****
  ***
  **
  *
*/

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

/*
  Pattern 11

  1
  0 1
  1 0 1
  0 1 0 1
  1 0 1 0 1
*/

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

/*
  Pattern 12

  1        1
  12      21
  123    321
  1234  4321
  1234554321
*/

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
      process.stdout.write(j.toString());
    }
    process.stdout.write("\n");
  }
}
// pattern12(5);

/*
  Pattern 13

  1    
  2  3
  4  5  6
  7  8  9  10
  11 12 13 14 15
*/

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

/*
  Pattern 14

  A         
  A B       
  A B C     
  A B C D   
  A B C D E 
*/

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

/*
  Pattern 15

  A B C D E
  A B C D
  A B C
  A B
  A
*/

function pattern15(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      // Converting number to character and printing.
      process.stdout.write(String.fromCharCode(64 + j + 1) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern15(5);

/*
  Pattern 16 

  A
  B B
  C C C
  D D D D
  E E E E E
*/

function pattern16(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // Converting number to character and printing.
      process.stdout.write(String.fromCharCode(64 + i + 1) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern16(5);

/*
  Pattern 17

      A
     ABA
    ABCBA
   ABCDCBA
  ABCDEDBCBA
*/

function pattern17(n) {
  for (let i = 0; i < n; i++) {
    // Loop 1 to print spaces " "
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }
    // Loop 2 to print characters.
    charCode = 65; // charCode 65 === 'A'
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write(String.fromCharCode(charCode));
      if (k < Math.floor((2 * i + 1) / 2)) {
        charCode++;
      } else {
        charCode--;
      }
    }
    process.stdout.write("\n");
  }
}
// pattern17(5);

/*
  Pattern 18
  
  E
  D E
  C D E
  B C D E
  A B C D E
*/

function pattern18(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String.fromCharCode(64 + n - i + j) + " ");
    }
    process.stdout.write("\n");
  }
}
// pattern18(5);

/*
  Pattern 19
  
  **********
  ****  ****
  ***    ***
  **      **
  *        *
  *        *
  **      **
  ***    ***
  ****  ****
  **********
*/

function pattern19(n) {
  // Downward triangles left and right halves.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("*");
    }
    for (let k = 0; k < i; k++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < i; k++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  // Upward triangles left and right halves.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern19(5);

/*
  Pattern 20

  *        *
  **      **
  ***    ***
  ****  ****
  **********
  ****  ****
  ***    ***
  **      **
  *        *
*/

function pattern20(n) {
  for (let i = 0; i < n; i++) {
    // Printing triangles and spaces in upper half.
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < n - i - 1; k++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  // Printing triangles and spaces in lower half.
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("*");
    }
    for (let k = 0; k <= i; k++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k <= i; k++) {
      process.stdout.write(" ");
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
// pattern20(5);

/*
  Pattern 21

  * * * *
  *     *
  *     *
  * * * *
*/

function pattern21(n) {
  for (let i = 0; i < n; i++) {
    // Printing stars & no space for 1st and last rows.
    if (i === 0 || i === n - 1) {
      for (let j = 0; j < n; j++) {
        process.stdout.write("* ");
      }
    }
    // Printing stars for 1st and last column & spaces for other columns.
    else {
      for (let j = 0; j < n; j++) {
        if (j === 0 || j === n - 1) {
          process.stdout.write("* ");
        } else {
          process.stdout.write("  ");
        }
      }
    }
    process.stdout.write("\n");
  }
}
// pattern21(5);

/*
  Pattern 22

  4 4 4 4 4 4 4
  4 3 3 3 3 3 4
  4 3 2 2 2 3 4
  4 3 2 1 2 3 4
  4 3 2 2 2 3 4
  4 3 3 3 3 3 4
  4 4 4 4 4 4 4
*/

function pattern22(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let left = j;
      let right = 2 * n - 2 - j;
      let down = 2 * n - 2 - i;
      process.stdout.write(
        (n - Math.min(Math.min(top, down), Math.min(left, right))).toString() +
          " "
      );
    }
    process.stdout.write("\n");
  }
}
pattern22(4);

// -------------------------------------------------------------------------------------------------
