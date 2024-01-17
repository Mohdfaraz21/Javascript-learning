const user = [
    {firstName: "Syed", lastName: "Faraz" , age: "21"},
    {firstName: "Abhinit", lastName: "singh" , age: "22"},
    {firstName: "Shashwat", lastName: "pandey" , age: "19"}
]

// **list of full name/

// const output = user.map((x) => x.firstName + x.lastName)

// console.log(output);

// const output1 = user.reduce(function (acc, curr) {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// }, {})

// console.log(output1);

const output2 = 
user.filter((x) => x.age < 20)
.map((x) => x.firstName)

console.log(output2);