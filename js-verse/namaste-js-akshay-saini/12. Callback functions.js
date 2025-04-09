// Callback functions: https://youtu.be/btj35dh3_U8?si=fkwDt9r9rRsmzFTw

/*
  ▣ Callback function
    ◉ In JS, functions are first class functions.
    (functions can take function as a parameter and return a function as well)
    ◉ When we pass a function into another function as a parameter, then the function which is being passed is called as callback function.
    ◉ By using callback functions, we can use JS asynchronously. E.g. setTimeout()
*/

// Callback function example 1.
setTimeout(function () {
  console.log("timer");
}, 2000);

// Callback function example 2.
function myFunc(callbackFunc) {
  console.log("I am myFunc");
  callbackFunc();
}
// Here cb is the callback function
function cb() {
  console.log("I am cbFunc");
}
myFunc(cb);

/*
    ◉ Call back functions are called so because these functions are called in some later part of the code. Here we are giving the responsibility of calling the passed function to another function.

    ◉ Main thread - JS has only one call stack which is known as the main thread. Whatever is executed in the page is executed through the call stack only. If any operation blocks the call stack, it is known as blocking the main thread.

    ◉ We should not block our main thread, we should use async operations for performing tasks which take time. e.g. By use of setTimeout() method.
*/

// Event listeners
document
  .getElementById("click-btn")
  .addEventListener("click", function btnClicked() {
    console.log("Button Clicked");
  });

// Closures with event listener
function attachEventListeners() {
  let count = 0;
  document
    .getElementById("click-btn")
    .addEventListener("click", function btnClicked() {
      console.log("Button Clicked, ", ++count);
    });
}
attachEventListeners();

// ◉ Event listeners are heavy (take up memory), as the memory associated with it cannot be freed up (garbage collected), because we never know when that event might get triggered. So it is good practice to remove event listeners when not in use.
