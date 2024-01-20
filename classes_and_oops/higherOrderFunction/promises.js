// ***PROMISES ARE USED TO HANDLE ASYNC OPERATION IN JS

// !?The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId);
});
// **in this piece of code we have attaching a callback function not passing a call back function
// ** promise is container for future value
// **it is immutable
// ** it resolve at once

// ++++++++

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
        updateWalletBalance();
    });
    });
});

// ???PROMISE CHAINING

createOrder(cart)
    .then(function (orderId) {
    return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
    });


    // !! Arrow function
// ??createOrder(cart)
    // ?? .then((orderId) => proceedToPayment(orderId))
    // ?? .then((paymentInfo) => showOrderSummary(paymentInfo))
    // ?? .then((paymentInfo) => updateWalletBalance(paymentInfo))
