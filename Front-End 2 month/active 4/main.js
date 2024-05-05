// /* 1 задание */
// function doubleNumber(arr) {
//     return arr.map(x => 2 * x);
// }

// const input1 = [1, 2, 3];
// const output1 = doubleNumber(input1);
// console.log(output1); // [2, 4, 6]

// const input2 = [4, 1, 1, 1, 4];
// const output2 = doubleNumber(input2);
// console.log(output2); // [8, 2, 2, 2, 8]

// const input3 = [2, 2, 2, 2, 2, 2];
// const output3 = doubleNumber(input3);
// console.log(output3); // [4, 4, 4, 4, 4, 4]

// /* 2 Задание */
// function secondElement(arr) {
//     return arr.filter((_, index) => index % 2 === 0);
// }

// const input1 = ['Привет', 'Пока', 'Снова привет'];
// const output1 = secondElement(input1);
// console.log(output1); // ['Привет', 'Снова привет']

// const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const output2 = secondElement(input2);
// console.log(output2); // [1, 3, 5, 7, 9]

// const input3 = ['Пока', {'Цвет': 'Синий'}];
// const output3 = secondElement(input3);
// console.log(output3); // ['Пока']

// /* 3 Задание */
// function invertNumbers(arr) {
//     return arr.map(num => num >= 0 ? -Math.abs(num) : Math.abs(num));
// }

// const input1 = [1, 2, 3, 4, 5];
// const output1 = invertNumbers(input1);
// console.log(output1); // [-1, -2, -3, -4, -5]

// const input2 = [1, -2, 3, -4, 5];
// const output2 = invertNumbers(input2);
// console.log(output2); // [-1, 2, -3, 4, -5]

// const input3 = [];
// const output3 = invertNumbers(input3);
// console.log(output3); // []

// const input4 = [0];
// const output4 = invertNumbers(input4);
// console.log(output4); // [0]

// /* 4 Задание */
// function getFirstNElements(arr, n) { 
//     return arr.slice(0, n); 
// } 
 
// console.log(getFirstNElements([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2] 
// console.log(getFirstNElements([0, 1, 2, 3, 5, 8, 13], 5)); // [0, 1, 2, 3, 5] 
 
 
// /* 5 Задание */
// function filterElementsByIndex(arr) { 
//     return arr.filter((num, index) => num % index === 0); 
// } 
 
// console.log(filterElementsByIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25] 
// console.log(filterElementsByIndex([68, -1, 1, -7, 10, 10])); // [-1, 10] 
// console.log(filterElementsByIndex([11, -11])); // [-11] 
 
 
// /* 6 Задание */
// function replaceStringsWithNull(arr) { 
//     return arr.map(item => typeof item === 'string' ? null : item); 
// } 
 
// console.log(replaceStringsWithNull([4, 6, 'Ivan', 5, 'Denis'])); // [4, 6, null, 5,