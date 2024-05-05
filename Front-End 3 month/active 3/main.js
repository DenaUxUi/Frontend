// let timeout = setTimeout(() =>{
// console.log("Hello world!");
// }, 2000);

// clearTimeout(timeout);

// let interval = setInterval(()=>{
//     console.log("Hello world!");
// }, 2000);

// clearInterval(interval);

// console.log("start");

// setTimeout(() =>{
//     console.log("Hello world!");
// })

// console.log("end");


// const root = document.getElementById("root");
// const preLoad = document.getElementById("preLoad")

// const load = async () => {
//     preLoad.style = `
//     .lds-grid,
//     .lds-grid div {
//       box-sizing: border-box;
//     }
//     .lds-grid {
//       display: inline-block;
//       position: relative;
//       width: 80px;
//       height: 80px;
//     }
//     .lds-grid div {
//       position: absolute;
//       width: 16px;
//       height: 16px;
//       border-radius: 50%;
//       background: currentColor;
//       animation: lds-grid 1.2s linear infinite;
//     }
//     .lds-grid div:nth-child(1) {
//       top: 8px;
//       left: 8px;
//       animation-delay: 0s;
//     }
//     .lds-grid div:nth-child(2) {
//       top: 8px;
//       left: 32px;
//       animation-delay: -0.4s;
//     }
//     .lds-grid div:nth-child(3) {
//       top: 8px;
//       left: 56px;
//       animation-delay: -0.8s;
//     }
//     .lds-grid div:nth-child(4) {
//       top: 32px;
//       left: 8px;
//       animation-delay: -0.4s;
//     }
//     .lds-grid div:nth-child(5) {
//       top: 32px;
//       left: 32px;
//       animation-delay: -0.8s;
//     }
//     .lds-grid div:nth-child(6) {
//       top: 32px;
//       left: 56px;
//       animation-delay: -1.2s;
//     }
//     .lds-grid div:nth-child(7) {
//       top: 56px;
//       left: 8px;
//       animation-delay: -0.8s;
//     }
//     .lds-grid div:nth-child(8) {
//       top: 56px;
//       left: 32px;
//       animation-delay: -1.2s;
//     }
//     .lds-grid div:nth-child(9) {
//       top: 56px;
//       left: 56px;
//       animation-delay: -1.6s;
//     }
//     @keyframes lds-grid {
//       0%, 100% {
//         opacity: 1;
//       }
//       50% {
//         opacity: 0;
//       }
//     }
//     `;
// }

// const delPreLoad = async() =>{
//     NavigationPreloadManager.style.display="none"
// }

// const getData = async(id) =>{
//     await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
//         .then(responce => responce.json())
//         .then(data =>{
//     root.innerHTML += `<h1>${data.id}</h1>`
// })
// }

// const func = async() =>{
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await delPreLoad(4)

// }

// func()


const time = document.getElementById("time");
const start = document.getElementById("startBtn");
const restart = document.getElementById("restart");
const stop = document.getElementById("stop");
const record = document.getElementById("record");
const recordedTimes = document.getElementById("recordedTime");

let interval;
let i = 0;
let results = [];
let recordedTimes_arr = [];

start.onclick = function() {
    start.disabled = true;
    interval = setInterval(function() {
        i += 0.01;
        time.textContent = i.toFixed(2);
    }, 10);
};

restart.onclick = function() {
    start.disabled = false;
    clearInterval(interval);
    i = 0;
    time.textContent = i;
    recordedTimes.innerHTML = "";
    recordedTimes_arr = [];
};

stop.onclick = function() {
    clearInterval(interval);
    start.disabled = false;
};

record.onclick = function() {
    results.push(i.toFixed(2));
    let recordedAt = i.toFixed(2);
    recordedTimes_arr.push(recordedAt);
    updateRecordedTimes();
    let recordedTimeElement = document.createElement("div");
    
    recordedTimes.appendChild(recordedTimeElement);
};

function updateRecordedTimes() {
    recordedTimes.innerHTML = "";
    recordedTimes_arr.forEach(function(recordedTime) {
        let recordedTimeElement = document.createElement("div");
        recordedTimeElement.textContent = `Recorded at: ${recordedTime} seconds`;
        recordedTimes.appendChild(recordedTimeElement);
    });
}