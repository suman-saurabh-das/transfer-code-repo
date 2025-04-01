// Using callback functions to perform asynchronous tasks.

console.log('Program starts');
function printAfter5seconds() {
  console.log('Async function called');
}
setTimeout(printAfter5seconds, 5000)
console.log('Program ends');

// Problems with using callback functions

// 1. Callback hell - Deeply nested callback functions dependent on one another.
// 2. Inversion of control - Losing the control of our code when using a callback function.

const cart = ['pens', 'notebooks', 'pencils']

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet()
    })
  })
})