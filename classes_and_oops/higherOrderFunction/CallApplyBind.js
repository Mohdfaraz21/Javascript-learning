let name = {
    firstname: "Mohd",
    lastname: "FARAZ",
   
}
let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
}
printFullName.call(name, "Azamgarh", "UttarPradesh" )

let name2 = {
    firstname: "Mohd",
    lastname: "Zeya",
}

// function Borrwoing
name.printFullName.call(name2, "Mumbai", "Maharashtra")

name.printFullName.apply(name2, ["Mumbai", "Maharashtra"])

// bind method does not directly invoked it gives the copy of the function
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra")
console.log(printMyName);
printMyName()

// let name = {
//     firstname: "Mohd",
//     lastname: "FARAZ",
//     printFullName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// }
// name.printFullName

// let name2 = {
//     firstname: "Mohd",
//     lastname: "Zeya",
// }

// // function Borrwoing
// name.printFullName.call(name2)

