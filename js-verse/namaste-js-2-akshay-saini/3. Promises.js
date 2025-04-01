// 1. Promise Basics
/*
const cart1 = ["pen", "copy", "pencil"]
const cart2 = []

// Producer end of a promise
function createOrder(cart) {
  // Creating a promise using a promise constructor
  // This promise constructor takes in a function which has 2 parameters - resolve and reject
  // resolve and reject are functions given by JS that help us in building a promise
  const pr = new Promise(function (resolve, reject) {
    // Validating cart
    let orderId = undefined
    if (cart.length > 0) {
      orderId = 12345
    }

    // Logic to create an orderId
    if (orderId) {
      setTimeout(function() {
        resolve(orderId)
      }, 5000)
    } else {
      const error = new Error("Invalid cart")
      reject(error)
    }
  })
  return pr
}

// Consumer end of a promise
const promiseObject = createOrder(cart1)
console.log(promiseObject)

promiseObject
.then(function(orderId) {
  // In case of success, the function inside .then() gets executed
  console.log(orderId);
})
.catch(function (err) {
  // In case of failure, the function inside .catch() gets executed
  // Here we are handling the errors
  console.log(err.message);
})
*/

// 2. Promise Chaining
/*
const cart1 = ["pen", "copy", "pencil"]
const cart2 = []

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    let orderId = undefined
    if (cart.length > 0) {
      orderId = 12345
    }
    if (orderId) {
      setTimeout(function() {
        resolve(orderId)
      }, 5000)
    } else {
      const error = new Error("Invalid cart")
      reject(error)
    }
  })
  return pr
}

function proceedToPayment(orderId) {
  return new Promise(function(resolve, reject) {
      resolve(`Payment is successful for order id : ${orderId}`)
  })
}

createOrder(cart1)
.then(function(orderId) {
  console.log(orderId);
  return orderId
})
.then(function(orderId) {
  return proceedToPayment(orderId)
})
.then(function(paymentSuccessMsg) {
  console.log(paymentSuccessMsg);
})
.catch(function (err) {
  console.log(err.message);
})
.then(function () {
  console.log('No matter what happens this will be executed');
})

// The value returned from the callback function inside the .then() can be any data or a promise.
// We always need to return a data or a promise from the callback function in order for promise chaining to work.
// If we place the .catch() method at the end of the promise chain, and whenever there is any error in any part of the promise chain, the .catch() method will handle the error.
// If we place the .catch() method in the middle of the chain, then it will only handle the errors above it and remaining .then() methods will be executed even if there is any error above the .catch() method.
// We can attach multiple .catch() methods to a promise chain.
*/

// 3. Assignment

// Producer end of promise
const createOrderId = function (cart) {
  return new Promise(function (resolve, reject) {
    let orderId;
    if (cart.length > 0) {
      orderId = 112335;
    }
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 3000);
    } else {
      reject(new Error('Cart is empty !'));
    }
  })
}

const proceedToPayment = function (orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      paymentInfo = {
        paymentAmt: 7896,
        orderId: orderId,
      };
      resolve(paymentInfo);
    } else {
      reject(new Error('Payment failed !'));
    }
  })
}

const showOrderSummary = function (paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (paymentInfo) {
      resolve(paymentInfo.paymentAmt);
    } else {
      reject(new Error('Order details unavailable !'));
    }
  })
}

const updateWalletBalance = function (paymentAmt) {
  return new Promise(function (resolve, reject) {
    let walletAmt = 12000;
    if (paymentAmt) {
      walletAmt = walletAmt - paymentAmt;
      resolve(walletAmt)
    } else {
      reject(new Error('Wallet amount ' + walletAmt));
    }
  })
}

// Consumer end of promise
const cart = ['item1', 'item2', 'item3'];
// const cart = [];
createOrderId(cart)
  .then(function (orderId) {
    console.log(`Order created with order id ${orderId}`);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(`Requesting payment Rs${paymentInfo.paymentAmt} for Order ${paymentInfo.orderId}`);
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentAmt) {
    console.log(`Amount to be paid Rs${paymentAmt}`);
    return updateWalletBalance(paymentAmt);
  })
  .then(function (walletAmt) {
    console.log(`Remaining wallet balance Rs${walletAmt}`);
  })
  .catch(function (error) {
    console.log(error.message);
  })