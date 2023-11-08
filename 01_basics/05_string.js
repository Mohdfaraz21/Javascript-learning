const name = "faraz"
const repoCount = 15
// the normal way
// console.log(name + repoCount + " value");

// a modern way and this is known as{string interpolation}
// console.log(`Hello my name is ${name} and my repo count is${repoCount}`);


const gameName = new String('faraz-fs-com')

console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('r'));
// console.log(gameName.charAt('2'));

const newString = gameName.substring(0, 4)
// console.log(newString);
// output {fara}

const anotherString = gameName.slice(-7, 7)
// console.log(anotherString);

const newStringOne = "      faraz       "
// console.log(newStringOne);
// space ke sath output mila 


// console.log(newStringOne.trim());
// space dono taraf se trim ho gya

const url = "https://faraz.com/faraz%20siddiqui"
console.log(url.replace('%20', '@'));

console.log(url.includes('faraz'));
// keyword pata karne ke liye boolean me output milega

console.log(gameName.split('-'));