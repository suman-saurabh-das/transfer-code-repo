// Scope chain, Scope & Lexical environment: https://youtu.be/uH-tVP8MUs8?si=-WWgjpToT8-aWGmM

/*
  ▣ Scope: means where we can access a specific variable or a function inside our code.

  ▣ Lexical environment: is the local memory along with the lexical environment of its parent.
    ◉ Lexical: means hierarchy or in sequence or in order. (where a code is present physically)

  ▣ Scope chain: Chain of lexical environments is called scope chain.
    ◉ If a variable or function is not present in this chain, it means that it is not defined.
*/

function outer() {
  var num = 10;
  inner();
  function inner() {
    console.log(num);
  }
}
// lexical parent of function inner() is function outer()
// lexical parent of function outer() is global execution context.
// lexical parent of global execution context is null.
outer();
console.log(num); // throws error as "num" is not defined in global scope.
