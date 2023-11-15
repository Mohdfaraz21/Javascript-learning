const userEmail = []

if (userEmail) {
    console.log("Got user Eamil");
} else {
    console.log("Don't have user email");
}
// ++++ +truthy values+ +++++++++++++++++++
//  "0", 'false', " ", [], {}, function(){}

// +++++ +falsy values+ +++++++++++++
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// check the  data type is array or not

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

// for object

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 =  null ?? 5 ?? 10

console.log(val1);

// Terniary operator

// condition ? true : false


const iceTeaPrice = 70
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");