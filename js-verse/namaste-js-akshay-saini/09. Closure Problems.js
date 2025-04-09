// setTimeout + closure interview questions: https://youtu.be/eBTBG4nda2A?si=Eznd9Bvywem0LIu3

function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 2000);
  console.log("Namaste JS !");
}
x();
// Here "Namaste JS" is printed first and after 2 seconds, "1" is printed. This is because JS code execution doesn't wait for setTimeout() function to finish. It directly moves on to the next line of code and the setTimeout() forms a closure in a separate space which completes its execution after 2 seconds.

function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}
a();
// Here all setTimeout() functions point to the same reference of i (which is present inside the global object), Hence 6 is printed after every second because the value of i has already become 6 even before the first setTimeout() function runs.

function b() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}
b();
// Here all setTimeout() functions point to different reference of i (as it is declared via let). A separate instance of i is present with the lexical scope of each setTimeout() function). Each time the setTimeout() is called, it forms a closure with a new variable i (as let has block scope)

function c() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    closure(i);
  }
}
c();
// Here we have used var x and a function to create a closure which will provide the setTimeout() a new copy of i every time it is called.
