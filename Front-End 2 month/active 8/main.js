// // const func = (a = 1, b = 2, ...c) => {
// //     console.log(c);
// //     return a + b
// // };

// const getArr = () =>{
//     return [1, 2, 3]
// };

// const getObj = () =>{
//     return{
//         a: 10,
//         b: 20, 
//         c: 30
//     }
// };

// let [a] = getArr();

// let {a : x, b : y, c : z} = getObj();

// console.log(Math.ceil(2.6546));
// console.log(Math.floor(2.6546));
// console.log(Math.round(2.6546));

// console.log(Math.pow(2, 3));

// console.log(Math.sqrt(25));

// console.log(Math.ceil(Math.random() * 100));

// console.log(5.343424.toFixed(2));

let message = document.getElementById('message');
let yesBtn = document.getElementById('yes');
let noBtn = document.getElementById('no');
let text = document.getElementById('text');

noBtn.addEventListener('mouseover', () =>{
    message.style.transform = 'translate(0, 0)';
    message.style.top = Math.floor(Math.random() * 80) + '%';
    message.style.left = Math.floor(Math.random() * 80) + '%';
});

yesBtn.onclick = () =>{
    text.textContent = 'Я знал)';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.top = '50%';
    message.style.left = '50%'; // Исправил опечатку: 'accentColor' на 'left'
};
