/* Переменные в HTML */
let count = document.getElementById("count");
let time = document.getElementById("time");
let start = document.getElementById("start");
let restart = document.getElementById("restart");
let countPerSecond = document.getElementById("count_per_second");
let gameOver = document.getElementById("game_over")
let timeValue = time.value;
/* Изменение времени  */
time.onchange = (event) =>{
    if (time.value < 5){
        alert("Минимальное значение времени 5сек и максимальное 15сек");
        time.value = 5;
        timeValue = 5;
    }
    if (time.value > 15){
        alert("Минимальное значение времени 5сек и максимальное 15сек");
        time.value = 15;
        timeValue = 15;
    }    
}
/* Глобальные переменные времени */
let interval;
let timeout;
let i = 0;

/* Оператор отвечающий за старт кликера */
start.onclick = () =>{
    i++;
    count.textContent = i;
    if(i == 1){
        time.disabled = true;
        timeout = setTimeout(() =>{
            start.disabled = true;
            start.style.cursor = 'none'
            start.style.opacity = '0.7'
            clearInterval(interval);
            countPerSecond.textContent = i / timeValue;
            time.value = 0;
        }, timeValue * 1000)
        interval = setInterval(()=>{
            time.value--;
        }, 1000)
    }
}

restart.onclick = () =>{
    start.style.cursor = 'cursor'
    start.style.opacity = '1'
    time.disabled = false;
    start.disabled = false;
    i = 0;
    count.textContent = i;
    time.value = 10;
    countPerSecond.textContent = 0;
    clearInterval(interval);
    clearTimeout(timeout);
}

