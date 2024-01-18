const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
    api.ShowOrderSummary(function () {
        api.updateWallet();
    });
    });
});

// ***Call back hell pyramid of doom


//**call back plays very important role to write asynchronous code in js */

//? inversion of control is that when you loose the control of your code
//?
api.createOrder(cart, function () {
api.proceedToPayment(function () {});
});
