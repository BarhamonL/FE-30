'use strict';

// =============================================================================
// Задание 5
// =============================================================================
/**
 * Повторить строку Повторить строку
 * Повторите данную строку str (первый аргумент) num раз (второй аргумент).
 * Вернуть пустую строку, если num не является положительным числом.
 */
// const repeatStringNumTimes = function repeatStringNumTimes(str, num) {
//   const repeat = [];

//   for (let i = 0; i < num; i += 1) {
//     repeat.push(str);
//   }
//   let repeatStr = repeat.join('');
//   console.log(repeatStr);
// };

const repeatStringNumTimes = (str, count) => {
  let res = '';

  for (let i = 0; i < count; i += 1) {
    res += str;
  }

  return console.log(res);
};

repeatStringNumTimes('*', 3); // "***"
repeatStringNumTimes('abc', 3); // "abcabcabc"
repeatStringNumTimes('abc', 1); // "abc"
repeatStringNumTimes('abc', -2); // ""
