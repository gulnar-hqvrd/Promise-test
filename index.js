// async function Test(){
// // return 12
// throw new Error("Salam")
// }

// Test().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


//  const MYPromise = new Promise((resolve , reject)=>{
//     // resolve("test")
//     // reject("rest")
//  })

// MYPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error" ,  err);
// })


// function sleep(ms){
//     return new Promise((resolve , reject)=>{
//     setTimeout(resolve , ms)
//     })
// }

// async function PrintwithDelay(ms , text){
//     await sleep(ms)
//     console.log(text);
// }


// PrintwithDelay(4000,"salam")


// const job = (value)=>{
//     return new Promise ((resolve , reject)=>{
//         if(value){
//             resolve("Resolve edildi")
//         }
//         else{
//             reject("reject edildi")
//         }
//     })

// }

// const firstPromise = job(false)
// console.log(firstPromise );



const first = (value)=>{
return new Promise((resolve , reject)=>{
    if(value){
        resolve("resolve edildi")
    }

    else{
        reject("reject edildi")
    }
})
}

const irst = first(true)

irst.then((data)=>{
    console.log("data" , data);
    return first(true)
}).catch((err)=>{
    console.log("Error" , err);
}).then((data)=>{
    console.log("data2" , data);
    return first(false)
}).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log("day besdi" , data);
})