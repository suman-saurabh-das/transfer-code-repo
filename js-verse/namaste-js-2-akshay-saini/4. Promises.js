/*
promise.all() - It is used when we have to make parallel API calls and get the results.
It is used to handle multiple promises together.
The promise.all() method takes in an iterable as its argument. e.g. array of promises. It will wait for all the promises to get resolved, but if any of the promise fails, it will immediately return the error.

For e.g. if we have an array of 3 promises [p1, p2, p3] and we pass it to promise.all() then it will make 3 parallel API calls and get the result.

promiseArray = [p1, p2, p3]

CASE 1 - all promises are successful
    p1 - takes 3 sec to resolve
    p2 - takes 1 sec to resolve
    p3 - takes 2 sec to resolve

    Output of promise.all will be an array which contains the result of all 3 promise.
    e.g. [val1, val2, val3] and it will take 3 sec for the promise.all() API to get the result.
    promise.all() API will wait for all of them to finish and then give us the result.

CASE 2 - one of the promise gets rejected
    p1 - takes 3 sec to resolve
    p2 - gets rejected in 1 sec
    p3 - takes 2 sec to resolve

    As soon as any one of the promise gets rejected, promise.all() will throw an error.
    i.e. It will not wait for the remaining promises to be resolved or rejected.
    The result will be the error that it gets from the rejected promise. In this case p2 and after 1 sec.

    NOTE - As of now in JS, once a promise is executed, it cannot be cancelled.
    In promise.all(), if all promises are resolved, then we get the result but if any one of the promise fails, then we get an error.

promise.allSettled() - It will wait for all the promises to be settled, it doesn't matter if they are fulfilled or rejected. And it will give us all the result collectively once all promises are settled. It returns an array of objects.

Case 1 - one of the promise gets rejected
    p1 - takes 3 sec to resolve
    p2 - gets rejected in 1 sec
    p3 - takes 2 sec to resolve

    After 3 sec, the promise.allSettled() will return us an array having [val1, err2, val3]
    The output of promise.allSettled() will contain the same number of values as the number of promises passed in.

promise.race() - It returns the value of the first settled promise. It doesn't matter if the promise gets resolved or rejected.

CASE 1 - all promises are successful
    p1 - takes 3 sec to resolve
    p2 - takes 5 sec to resolve
    p3 - takes 2 sec to resolve

    The output of promise.race() will be the value that we get from the first settled promise which is p3 in this case.

CASE 2 - one of the promise gets rejected
    p1 - takes 3 sec to resolve
    p2 - takes 5 sec to resolve
    p3 - gets rejected in 2 sec

    The output of promise.race() will be the error that we get from the first settled promise which is p3 in this case.

promise.any() - It returns the value of the first resolved promise. It will wait until any one of the promise is resolved and return its value immediately. But if all the promises fails, then it returns an aggregate error (array containing all the errors).

CASE 1 - one of the promise gets rejected
    p1 - takes 3 sec to resolve
    p2 - takes 5 sec to resolve
    p3 - gets rejected in 2 sec

    The output of promise.any() will be the value that we get from the first resolved promise which is p2 in this case.

CASE 2 - all the promises gets rejected
    p1 - gets rejected in 3 sec
    p2 - gets rejected in 5 sec
    p3 - gets rejected in 2 sec

    The output of promise.any() will be aggregate error when all the promises are rejected. It will be an array of all the 3 errors.
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000)
    // setTimeout(() => reject("P1 Fail"), 3000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1000)
    // setTimeout(() => reject("P2 Fail"), 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000)
    // setTimeout(() => reject("P3 Fail"), 2000)
})

Promise.all([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err))

    // Returns an array of values if all promises are resolved successfully.
    // If there is any error, returns the first encountered error value.

Promise.allSettled([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err))

    // Returns an array of objects having the promise status and promise value if promise is resolved and a status and reason if a promise if rejected.

Promise.race([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err))

    // Returns the first settled promise value if resolved or an error if rejected.

Promise.any([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.error(err, err.errors))

    // Returns the first resolved promise value.
    // If all promises are rejected, then an Aggregate error containing all the errors gets returned.

// NOTE - settled means we got the promise result
// Promise resolved -> success/fulfilled
// Promise rejected -> failure/rejected