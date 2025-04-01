const cart = ['pens', 'notebooks', 'pencils']

/*
A promise returns an object with a data value and a promise state.
Initially the data value is undefined and when the async operation inside the promise is completed, it stores the data inside this data value property.

Initially the promise object is as below 
{
  PromiseState: pending
  PromiseResult: undefined
}
Once the async operation inside the promise is completed, the promise object is automatically filled with data. Based on the state of fulfilled or rejected the object gets the data.
{
  PromiseState: fulfilled/rejected
  PromiseResult: orderDetails
}
To perform any action once the promise is resolved, we attach a callback function by passing a callback function to the .then() method called on the promise object.

The callback function is automatically called once the promise is resolved.

Passing a callback function and attaching a callback function to a promise object are different.
When we pass a function as callback to another function, it becomes the responsibility of the parent function to call the callback function but in case of promise object, once the parent function is called after sometime, the promise object gets filled with data and then the callback function will get called automatically. This ensures that the control of the program remains with us as we are not passing it to another function.
Also JS guarantees that the callback function is called only one time.
We can chain multiple promises together and they will be executed in order once the previous promise gets resolved. i.e. we want to pipe the data and will want the data to flow through all promises.
NOTE - In this case we must return the promise object from every function otherwise chaining will not work.

State of a promise - It tells us about the state that the promise is in.
It can have 3 states -
  pending - initial state neither fulfilled nor rejected.
  fulfilled - meaning that the operation was completed successfully.
  rejected - meaning that the operation failed.

Promise objects are immutable. i.e. we can pass the promise object in our code and we need not worry about it getting modified.
*/
// The createOrder function returns a promise object.
const promise = createOrder(cart)
promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentId) => showOrderSummary(paymentId))
  .then((paymentInfo) => updateWalletBalance(paymentInfo))

// alter - without using arrow functions
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId)
  }).then(function (paymentId) {
    return showOrderSummary(paymentId)
  }).then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo)
  })

// Example of promise using fetch() method

const GITHUB_API = 'https://api.github.com/users/sumansaurabhdas'
const user = fetch(GITHUB_API)
console.log(user);  // Initially this will log a promise in pending state, but by the time we expand the object to see the data, google chrome updates the promise state as it is resolved by then and shows the current state of the promise.

// The operation that we need to perform after the promise is resolved gets passed inside the then() method which is called on the promise object. And we can access the data returned from the promise inside this function.
user.then(function (data) {
  console.log(data);
})
