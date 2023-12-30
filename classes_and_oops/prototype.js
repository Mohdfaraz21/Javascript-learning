// let myName = "faraz     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["flash", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.faraz = function(){
    console.log(`faraz is present in all objects`);
}

Array.prototype.heyFaraz = function(){
    console.log(`Faraz says hello`);
}

// heroPower.faraz()
// myHeros.faraz()
// myHeros.heyFaraz()
// heroPower.heyFaraz()

// inheritance
// ?old syntax
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"faraz".trueLength()
"iceChai".trueLength()