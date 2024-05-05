//  let conf = confirm("Вы гей?");
//  console.log(conf)

// let prom = prompt("Повторим вопрос, вы гей?");
// console.log(prom);
// if prom 

let num = prompt("Введите число:"); /* ввод */
let colors = ['red', 'blue', 'green']; /*Массив цветов, дабы он чередовал, надеюсь */
let colorIndex = 0; /*работа с массивом ЧЕЕЕК */

for (let i = 0; i < num; i++) { /*что-то на типе for i in range(1, num + 1) */
    if (i > 10) break; /* Если больше 10 то брик */
    let color = colors[colorIndex % colors.length]; /* выбор цвета, берем массив и в нем делим индекс массива на длину */
    document.write(`<div class="block ${color}"></div>`);/* Вывод квадратика */
    colorIndex++; /*Добавляем в индекс дабы чередовать */
}
