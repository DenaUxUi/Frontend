let key = prompt("Введите ключ(age, name, surname)"); 

let obj = {
    age: "15",
    name: "Nursultan",
    surname: "Saimbetov",
};

while (!obj.hasOwnProperty(key)) {
    key = prompt("Неверный ключ. Введите ключ(age, name, surname)"); 
}

alert(obj[key]);
