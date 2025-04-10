// Asynchronous JS & Event loop: https://youtu.be/8zKuNo4ay8E?si=QkuVVbTUA8uj-2Lz

/*
  ◉ JS is a synchronous single threaded language.
  ◉ It has one call stack and it can do only one thing at a time.
  ◉ Call stack is present inside the JS engine and all the code is executed inside this.

  ◉ Browser contains the JS engine, which contains the call stack where all code is executed.
  ◉ Browser also has Web APIs which give access to timer, local storage, it can connect to external URL links, access bluetooth, location, etc. These web APIs can be used by the JS code.
  ◉ E.g. setTimeout(), DOM APIs, fetch(), local storage, console, location, etc.

  ◉ Global execution context has window object using which JS code can access the Web APIs. As window is a global object, even if we do not use the window keyword, we can access the Web APIs directly without the dot operator. e.g. code below.
*/

// setTimeout example
console.log("Start");
setTimeout(function () {
  console.log("Callback");
}, 5000);
console.log("End");

/*
  ◉ GEC is pushed in the stack.
  ◉ JS uses the console API to log "Start" in the console.
  ◉ When setTimeout() function runs, a callback function is registered in the Web APIs environment and a 5000ms timer starts.
  ◉ JS uses console API to log "End" in the console.
  ◉ GEC is popped out of the stack.

  ◉ As soon as the 5000ms timer expires, the callback function needs to be in the callstack to be executed, but it cannot go directly in the callstack.
  ◉ The callback function moves to the callback queue once the timer expires.
  
  ◉ Event loop checks the callstack and if it is empty, puts the callback functions from callback queue in the callstack. Event loop acts like a gate keeper, it checks the callback queue and pushes any function in it into the callstack when the callstack is empty.
  ◉ JS uses the console API to log "call back" in the console.

  ◉ Event loops job is to continuously monitor the callstack and callback queue.
  ◉ When it sees that the callstack is empty and there is a function in the callback queue waiting to be executed, it pushes that function into the callstack.
  ◉ Now the callback method gets executed.
*/

// onClick event listener example
console.log("Start");
document.getElementById("btn").addEventListener("click", function () {
  console.log("Callback");
});
console.log("End");

/*
  Why do we need the callback queue ?
  If we have multiple callback functions, then they will be executed one after another in the order in which they are present in the queue. E.g. if we click a button multiple times.
*/

// fetch example
console.log("Start");
setTimeout(function cbT() {
  console.log("Callback");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});
// Lots of code ...
console.log("End");

/*
  ◉ fetch(): It is used to go to an URL and request an API call. The fetch function returns a promise and takes a callback function which is executed once the promise is resolved.
  ◉ NOTE: fetch() method behaves differently than other APIs.
  ◉ For e.g. In the above code even if the cbF function is completed first, it does not move into the callback queue, it goes to the micro task queue.

  ◉ Microtask queue: Exactly similar to the callback queue but has higher priority.
  ◉ cbF function goes in the microtask queue.
  ◉ Functions in microtask queue will be executed before the functions in callback queue.
  ◉ NOTE: All the callback functions which comes from promises and mutation observer will go inside the microtask queue.
    ◈ Read more about promises and mutation observer.

  ◉ Callback queue is also called Task queue.

  ◉ Starvation of the callback queue: When the function inside the microtask queue, creates a new microtask inside itself and it continues. Due to this, the functions inside the callback queue does not get the chance to be executed, this is known as starvation.
*/

/*
  ▣ Questions

  1. When does the event loop actually start ?
  ◉ Event loop as the name suggests, is a single threaded, loop that is `almost infinite`. It is always running and doing its job (checking the callstack, callback & microtask queues).

  2. Are only asynchronous web API callbacks registered in the web API environment ?
  ◉ Yes, the synchronous callback functions like what we pass inside map, filter and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.

  3. Does the Web API environment store only the callback function and pushes the same callback to the callback queue / microtask queue ?
  ◉ Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners (e.g. click handler) the original callback stays in the Web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.

  4. How does it matter if we ste delay for setTimeout to be 0ms. Then will the callback move to  queue without any wait ?
  ◉ No, there are trust issues with setTimeout(). The callback function needs to wait until the callstack is empty. So the 0ms callback might have to wait for 100ms also if the callstack is busy.
*/
