// How functions work in JS (Variable environment): https://youtu.be/gSDncyuGw0s?si=xgEVXpLmV7gmks-P
// Shortest JS program (window & this keyword): https://youtu.be/QCRpVw2KXf8?si=bNvHQB3UkKKF3KrV

var x = 1;
a(); // 10
b(); // 100
console.log(x); // 1

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

/*
  Code execution


*/

/*
  Shortest program in JS

  
*/
