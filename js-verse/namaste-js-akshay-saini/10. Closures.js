function x() {
  var a = 25;
  function y() {
    console.log(a);
  }
  a = 50;
  return y;
}
var z = x();
console.log(z);

// ... many more code

z();    // returns 50 (as it remembers the lexical scope where it came from)
// Here a doesn't refer to value, it refers to the reference

function z() {
  var a = 100;
  function y() {
    var b = 50;
    function x() {
      console.log(a, " ", b);
    }
    x();
  }
  y();
}
z();
