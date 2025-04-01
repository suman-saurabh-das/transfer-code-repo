// setTimeout example
console.log("Start");
setTimeout(function () {
    console.log("Callback");
}, 5000)
console.log("End");

// onClick event listener example
console.log("Start");
document.getElementById("btn")
    .addEventListener("click", function () {
        console.log("Callback");
    })
console.log("End");

// fetch example
console.log("Start");
setTimeout(function cbT() {
    console.log("Callback");
},5000);

fetch("https://api.netflix.com")
    .then(function cbF () {
        console.log("CB Netflix");
    });
// Lots of code ...
console.log("End");