"use strict";

// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную
// строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

/*
 * Вызовы функции для проверки
  работоспособности твоей реализации.
 */

const findLongestWord = function(string) {
  const arrayStrings = string.split(" ");
  let max = arrayStrings[0];
  for (const arrayString of arrayStrings) {
    if (arrayString.length > max.length) {
      max = arrayString;
    }
  }
  return max;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
