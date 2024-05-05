// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCHours());


// let day = document.getElementById("day");
// let hour = document.getElementById("hour");
// let minute = document.getElementById("minute");
// let second = document.getElementById("second");

// setInterval(() =>{
//     let date = new Date();
//     let nursultan = new Date(2024, 9, 1);
//     let difference = nursultan.getTime() - date.getTime();

//     day.textContent = Math.floor(difference / 1000 / 60 / 60 / 24);
//     hour.textContent = Math.floor((difference / 1000 / 60 / 60 / 24) % 24);
//     minute.textContent = Math.floor((difference / 1000 / 60 ) % 60);
//     second.textContent = Math.floor((difference / 1000) % 60);
// }, 1000);

// constformatNum = num => num < 10 ? `0${num}` : num;

// let b = "false", a = b;  alert(a == b);


// const call = () => {
//     console.log(1);
//   };

// call();

// let obj = {"1": 0, 1: 1, 0: 2};

// alert(obj["1"])

let btn = document.getElementById("click");

btn.onclick = () =>{
    alert('"привет"')
}
