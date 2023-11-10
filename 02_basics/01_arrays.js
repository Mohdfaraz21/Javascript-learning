// ARRAY
// js array is resizable

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["juniorji", "shaktiman", "hatim"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// ARRAY METHODS

myArr.push(5)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(8)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
// false
console.log(myArr.indexOf(3));
// 2

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
// convert in string

// SLICE AND SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]
