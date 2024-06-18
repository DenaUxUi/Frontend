// /**
//   * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * Сложность задачи: 1 of 5
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}
// **/

// const fill = (arraySize, value) => {
//     throw Array(arraySize).fill(value);
//    };
   
// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill)); // ['a', 'a', 'a']

// const arr = [1, 9, 9];

// console.log(arr.fill(10, 0));

// /**
//   * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}
// */
// const nickname = ("Kvadratic" /** "citardavK" */)

// const reverse = nickname.split("").reverse().join("");

// console.log(reverse);



// const reverse = (array) => {
//     return [...array].reverse();
//    }
   
//    const data = [1, 2, 3];
//    console.log(reverse(data)); // [3, 2, 1]

/**
  * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
  * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
  * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}
// */
// const compact = (array) => array.filter((el) => el);
//     // if (array == "kvadratic"){
//     //     array.splice(array.indexOf("kvadratic"), 1);
//     // }

//    const data = [0, 1, false, 2, undefined, '', 3, null];
//    console.log(compact(data)) // [1, 2, 3]


// /**
//   * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
//   * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - массив, значения которого массивы пар
//   * @returns {Array}
// */
// const fromPairs = (array) => array.reduce(acc, curValue) => {
//     if (Array.isArray(curValue)){
//         acc[curValue[0] = vlue[1]];
//     }
//     return acc
//    }
   
//    const data = [['a', 1], ['b', 2]];
//    console.log(fromPairs(data)) // { 'a': 1, 'b'

// const a = 1234;
// console.log((a + '')[1]);

// const a = 1234;
// console.log(a.toString().split('').pop()); 
// console.log(a);


const num = 1234;
const first = ((num + '')[0]);
const last = num.toString().split('').pop();
const merge = +first + +last

console.log(merge);