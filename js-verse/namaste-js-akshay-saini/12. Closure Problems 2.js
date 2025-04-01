// Closure basic example
function outerFunc() {
    var a = 10;
    function innerFunc() {
        console.log(a);
    }
    innerFunc();
}
outerFunc();

// Accessing the closure in some other part of code
function outerFunc() {
    var a = 10;
    function innerFunc() {
        console.log(a);
    }
    return innerFunc;
}
// Here outer() returns the innerFunc and the second () calls the innerFunc
outerFunc()();
// This is same as writing outer()()
var closure = outerFunc();
closure();

// Passing a parameter to outer function
function outerFunc(b) {
    var a = 10;
    function innerFunc() {
        console.log(a, b);
    }
    return innerFunc;
}
outerFunc('alex')();

// Nested closure
function outermostFunc() {
    var c = 20;
    function outerFunc(b) {
        var a = 10;
        function innerFunc() {
            console.log(a, b, c);
        }
        return innerFunc;
    }
    return outerFunc;
}
outermostFunc()('alex')();

// Use case of closure - Creating a counter
function counter() {
    let count = 0;
    function incrementCounter() {
        count++;
        console.log(count);
    }
    return incrementCounter;
}

let myCounter1 = counter();
myCounter1();
myCounter1();
myCounter1();

// Scalable counter using constructor function
function Counter() {
    let count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

let myCounter = new Counter();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.decrementCounter();

// Garbage collector example
function a() {
    let x = 10, z = 20;
    return function b() {
        console.log(x);
    }
}

let c = a();
c();
