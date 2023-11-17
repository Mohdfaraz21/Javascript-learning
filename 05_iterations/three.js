// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// MAPS
const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'BGMI'
    
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }