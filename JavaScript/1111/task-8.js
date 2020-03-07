'use strict';
// Задание 8
// =============================================================================
/**
 * Сумма всех парных чисел
 * Посчитайте сумму всех парных чисел в массиве
 */
const sumEvens = function sumEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
};
sumEvens([1, 2, 3, 4]); // 6
sumEvens([11, 22, 33, 44]); // 66
sumEvens([5, 7, 8, 9]); // 8
sumEvens([1, 3, 5, 7]); // 0
