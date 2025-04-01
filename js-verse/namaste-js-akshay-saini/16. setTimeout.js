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

// setTimeout for 0 seconds
console.log("Start");

setTimeout(function callBack() {
  console.log("Callback");
}, 0)

console.log("End");