// let num = 10;

// let promise = new Promise((resolve, reject)=>{
//     if(num > 5){
//         resolve("Hello world!")
//     }else{
//         reject("Goodbye world!")
//     }
// });

// promise.then((responce)=> {
//         console.log(responce);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Работаю всегда :3");
// });

// // const func = (callback) => {
// //     // Do something
// // }

// // func(func2)


console.log("start");
try{
    console.log(num);
} catch(error){
    console.error("БАН!");
}
console.log("end");
// Работает всегда !


fetch("https://jsonplaceholder.typicode.com/posts")
.then((responce)=>{
    // console.log(responce);
    return responce.json()
})
.then((data)=>{
    data.forEach( item =>{
        document.getElementById("root").innerHTML += `<h1>${item.title}</h1><p>${item.body}</p><hr>`
   })
})


// let btn = document.getElementById("btn")
// let text = document.getElementById("text")

// btn.onclick = () =>{
//     if(text.value.trim()){
//         fetch("https://jsonplaceholder.typicode.com/posts" , {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify({
//                 title: "title",
//                 body: text.value.trim()
//             })
//         }).then((responce)=>{
//             console.log(responce);
//             alert("Данные успешно отправлены!")
//         })
//     }
// }
