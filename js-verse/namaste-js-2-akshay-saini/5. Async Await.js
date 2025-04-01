// ------------------------------------------------------------------------------------------------

// What is async ?
// What is await ?

// An async function always returns a promise.
// If we return a value directly from an async function, then this value will be automatically wrapped by a promise and returned from the async function.
// If we return a promise from an async function, it is returned as it is.

const promise1 = new Promise(function (resolve, reject) {
    resolve('String value from promise')
})
const getData = async function () {
    // return 'String value'
    return promise1
}
const promiseObject = getData()
console.log(promiseObject)

promiseObject.then(function (promiseVal) {
    console.log(promiseVal);
})

// ------------------------------------------------------------------------------------------------

// How async await works behind the scenes ?

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('String value from promise')
    }, 5000)
})

// Handling promises without using async-await
function getData2() {
    // JS engine will not wait for the promise to get resolved and it will go to the next line and execute the code
    promise2.then(res => console.log(res))
    console.log('This will be logged to the console BEFORE the promise is resolved');
}
getData2()

// Handling promises using async-await
// async and await keywords are used to handle promises.
// await is a keyword that can be only used inside an async function.
// We use await keyword before a promise and it resolves the promise and we can store the value returned from the promise in a variable.

async function handlePromise() {
    console.log('This will be logged to the console BEFORE the promise is resolved');
    const val = await promise2
    // JS engine will wait until and unless the above promise gets resolved.
    // And then it will execute the below line of codes only after the promise resolves.
    // The function execution is suspended until the time, promise is resolved. i.e. function is removed from call-stack during this time.
    console.log('This will be logged to the console AFTER the promise is resolved');
    console.log(val)
}
handlePromise()

// ------------------------------------------------------------------------------------------------

// Examples of using async/await

// Promises working behind the scenes
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('String value from promise')
    }, 2000)
    // }, 4000)
})
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('String value from promise')
    }, 4000)
    // }, 2000)
})
async function handlePromise2() {
    const val1 = await promise3
    console.log('Promise 3 resolved')
    console.log(val1)

    const val2 = await promise4
    console.log('Promise 4 resolved')
    console.log(val2)
}
handlePromise2()

// Case 1 - When promise3 resolves in 2 seconds and promise4 resolves in 4 seconds
// Then firstly JS will execute promise3 after 2 seconds and then promise4 after 4 seconds i.e. statements from console.log of promise3 will be logged after 2 seconds and after an interval of 4 seconds, the statements from console.log of promise4 will be logged to the console.

// Case 2 - When promise3 resolves in 4 seconds and promise4 resolves in 2 seconds
// Then firstly JS will execute promise3 after 4 seconds and then promise4 also after 4 seconds i.e. statements from both promises will be logged together after 4 seconds.

// This is because the callbacks from promises gets registered separately in the microtask queue and these will be executed when the call-stack is empty.
// NOTE - Program execution doesn't freeze/pause when we use await, JS will suspend the async function and remove it from call stack until the promise is resolved. Once the promise is resolved, JS will again move the async function to call stack and complete the code execution.

// ------------------------------------------------------------------------------------------------

// Fetching data using async-await
const GITHUB_API = 'https://api.github.com/users/sumansaurabhdas'
async function handlePromise3() {
    const data = await fetch(GITHUB_API)
    const jsonValue = await data.json()
    console.log(jsonValue)
}
handlePromise3()

// How fetch works ?
// When we use fetch method, it returns a response object which is a promise.
// This response object has a body which is a readable stream.
// To convert the readable stream to json, we will have to use a method .json()
// This .json() method will again return a promise and once it is resolved, it returns a json value.

// ------------------------------------------------------------------------------------------------

// Error handling

// Handling errors using try-catch block
async function handlePromise4() {
    try {
        const data = await fetch(GITHUB_API)
        const jsonValue = await data.json()
        console.log(jsonValue)
    }
    catch (err) {
        console.log(err);
    }
}
handlePromise4()

// Handling error using catch
async function handlePromise5() {
    const data = await fetch(GITHUB_API)
    const jsonValue = await data.json()
    console.log(jsonValue)
}
handlePromise5().catch(err => console.log(err))

// ------------------------------------------------------------------------------------------------

// Interviews
// async await vs promise .then() & .catch()

/*
    async is a keyword that is used with functions and these functions always returns a promise.
    await is a keyword that can be only used inside async functions to handle promises.
    These promises are asynchronous.
    Promise with examples and behind the scenes of async-await with promises.
    async-await is just a syntactic sugar for .then() & .catch() i.e. behind the scene JS will use .then() & .catch()
    We can avoid promise chaining by using async-await
*/

// ------------------------------------------------------------------------------------------------