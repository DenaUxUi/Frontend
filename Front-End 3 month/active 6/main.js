const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const formatNum = (num) =>{
    if(num < 10){
        return `0${num}`
    }   else{
        return num
    }
}

const birthdayTime = setInterval(()=>{
    let date = new Date();
    let nursultan = new Date(2024, 4, 15, -11, -31);
    let difference = Date.parse(nursultan) - Date.parse(date);
    let gift = document.getElementById("textGift");
    
    let daysValue = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hoursValue = Math.floor((difference / 1000 / 60 / 60 ) % 24);
    let minutesValue = Math.floor((difference / 1000 / 60 ) % 60);
    let secondsValue = Math.floor((difference / 1000 ) % 60);
    
    days.textContent = formatNum(daysValue);
    hours.textContent = formatNum(hoursValue);
    minutes.textContent = formatNum(minutesValue);
    seconds.textContent = formatNum(secondsValue);
    
    if(daysValue === 0 && hoursValue === 0 && minutesValue === 0 && secondsValue === 0){
        clearInterval(birthdayTime);
        gift.style.visibility = "visible"

    }
}, 1000);