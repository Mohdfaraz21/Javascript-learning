// singleton
// object.create BY COBNSTRUCTOR METHOD

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name : "faraz",
    "full_name": "mohd faraz",
    age : 20,
    location : "azamgarh",
    email : "faraz@google.com",
    isLoggedIn : ["Monday", "Saturday"],
    [mySym] : "mykey1"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full_name"]);
console.log(JsUser[mySym]); 
// line no .20 is string hai and symbol ko access krne k liye  sq. barcket ka use krenge taki 
// TYPEof value(datatype) jo ho vo bhi symbol me ho usually string me acces hota hai

JsUser.email = "faraz@yahoo.com"
Object.freeze(JsUser)
JsUser.email = "faraz@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
// for access the properties of the object
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.full_name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());