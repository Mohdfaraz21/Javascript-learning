// const p = new Promise((resolve, reject) => {
//     resolve("Promis ResoLved VALUE ")
// })

// // ?Always return a promise
// async function getData() {
//     return p;
// }

// const dataPromise = getData()

// dataPromise.then((res) => console.log(res))

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolve Value")
    }, 10000)

    
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolve Value")
    }, 20000)

    
})

// ?exicution is suspended
// ?await can only be used inside an async function

// async function handlePromise() {
//     console.log("Hello World");
//     // js Engine was waiting for promise to resolve
//     const val = await p1 
//     console.log("Namaste JS!!");
//     console.log(val);

//     const val1 = await p2 
//     console.log("Namaste JS!!!!!");
//     console.log(val1);
// }
// handlePromise()

// !! HANDLING ERROR

const API_URL = ""

async function handlePromise() {
    try {
        const data = await fetch(API_URL)
        const jsonValue = await data.json()
        console.log(jsonValue);
    } catch (err) {
        console.log(err);
    }
}
handlePromise()
// or
async function handlePromise() {
        const data = await fetch(API_URL)
        const jsonValue = await data.json()
        console.log(jsonValue)
}
// handlePromise().catch((err) => console.log(err))