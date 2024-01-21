const cart = ["shoes", "kurta", "pants"];

const promise = createOrder(cart); //orderId

promise
    .then(function (orderId) {
    console.log(orderId);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
    console.log(err.message);
    })
    .then(function (orderId) {
        console.log("no matter what happen,  i will be called");
});

// Producer

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // OrderId
    if (!validateCart(cart)) {
    const err = new Error("Cart is not Valid");
    reject(err);
    }
    // logic for createOrder
    const orderId = "321654";
    if (orderId) {
    setTimeout(function () {
        resolve(orderId);
    }, 4000);
    }
});
    return pr;
}

function proceedToPayment(orderId) {
    ///
    return new Promise (function (resolve, reject) {
        resolve("Payment Succesfull")
    })
}

function validateCart(cart) {
    return false;
}
