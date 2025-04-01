// Callback function example
setTimeout(function() {
    console.log('timer');
}, 2000);

function x (y){
    console.log("I am x");
    y();
}
// Here y is the callback function
function y () {
    console.log("I am y");
}
x(y);

document.getElementById("click-btn")
    .addEventListener("click", function btnClicked() {
        console.log("Button Clicked");
    })

// Closures with event listener
function attachEventListeners() {
    let count = 0;
    document.getElementById("click-btn")
    .addEventListener("click", function btnClicked() {
        console.log("Button Clicked, ",++count);
    })
}

attachEventListeners();
