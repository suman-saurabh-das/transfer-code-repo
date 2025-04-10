// Trust issues with setTimeout(): https://youtu.be/nqsPmuicJJc?si=Z3flD97KaRabiz4p

// ◉ setTimeout() function doesn't always takes the set amount of time to execute, it may take more than that time also, this depends on the call stack.

console.log("Start");

setTimeout(function callBack() {
  console.log("Callback");
}, 5000);

console.log("End");

// While loop that takes 10 seconds to run
let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("While loop expired");

/*
  ◉ Here while loop takes 10 seconds to run, till then the callstack remains blocked. Even though the callback function is ready to be pushed to callstack from callback queue, the event loop waits for the callstack to be empty and after 10 seconds, when callstack becomes empty, the callback function gets pushed to the callstack.

  ◉ JS is synchronous single threaded language and it has a single callstack and code is executed there itself. This makes JS a kind of interpreted language and as a result it is very fast as it does not have to wait for whole code to get compiled, it has just in time compilation.
*/

// ▣ Deferring the execution of the callback function

// setTimeout for 0 seconds
console.log("Start");

setTimeout(function callBack() {
  console.log("Callback");
}, 0)

console.log("End");

/*
  ◉ Here even though the timer is zero, the code in setTimeout() function will execute only after the global execution context finishes execution and the callstack is empty. Once the callstack is empty, the callback function will be pushed from the callback queue to the callstack. So output will be Start -> End -> Callback.
  ◉ This is called concurrency model in JS.
*/
