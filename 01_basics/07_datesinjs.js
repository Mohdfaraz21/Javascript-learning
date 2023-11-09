// DATES

let myDate = new Date()
console.log(myDate);
// 2023-11-09T11:09:21.328Z
console.log(myDate.toString());
// Thu Nov 09 2023 16:39:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
// Thu Nov 09 2023
console.log(myDate.toLocaleString());
// 9/11/2023, 4:39:21 pm
console.log(typeof myDate);
// object
// in js Month start with 0
let myCreatedDate = new Date(2023, 0, 20)
console.log(myCreatedDate.toDateString());
// Fri Jan 20 2023
let myCreatedDate1 = new Date(2023, 0, 20, 5, 3)
console.log(myCreatedDate1.toLocaleString());
// 20/1/2023, 5:03:00 am

let myCreatedDate2 = new Date("01-12-2023")
console.log(myCreatedDate2.toLocaleString());
// 12/1/2023, 12:00:00 am
// myCreatedDate is object


let myTimeStamp = Date.now()

console.log(myTimeStamp);
// 1699529656655
console.log(myCreatedDate2.getTime());
// 1673461800000
console.log(Date.now()/1000);
// 1699529896.614
console.log(Math.floor(Date.now()/1000));
// 1699529813
// comparision humesh millisecond me hoga 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    
})