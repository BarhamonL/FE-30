'use strict';
// Задание 2
// =============================================================================
/**
 * Перевернуть строку
 * Написать функцию которая возвращает перевернутую строку
 */
const reverseString = function reverseString(str) {
  let reverse = '';
  for (let i = str.length; i > 0; i--) {
    reverse += str[i - 1];
  }
  console.log(reverse);
};

reverseString('hello'); // "olleh".
reverseString('Howdy'); // "ydwoH".
reverseString('Greetings from Earth'); // "htraE morf sgniteerG".
