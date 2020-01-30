'use strict';
let total = 0;
let input;
do {
  input = prompt('Введите число');
  total += Number(input);
  console.log(input);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
console.log(total);
