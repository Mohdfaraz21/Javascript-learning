const user = {
    username: "faraz",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "carlo"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "faraz"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "faraz"
//     console.log(this.username);
// }
// chai()
// ********************************************arrow function*****************************
const chai = () => {
    let username = "faraz"
    console.log(this.username);
}
chai()
// ******explicite return************ explicite return krne k liye return ki zarurat padegi
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// **implicite return******************

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2)
// **object return krne k liye paranthesis ki zarurat padegi
const addTwo = (num1, num2) => ({username:"faraz"})
console.log(addTwo(3, 4));