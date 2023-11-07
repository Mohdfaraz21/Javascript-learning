// PREMITIVE (CALL BY VALUE)

// 7 TYPES : string, Number, Boolean, Null, Undefined, Symbol(unique), bigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Reference(Non Premitive)

// ARRAY, OBJECT, Function

const heros = ["shaktiman", "ironman", "shinchan"];

let myObj ={
    name: "faraz",
    age: 20,
}

// function ()}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof scoreValue);
