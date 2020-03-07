'use strict';

// Задание 3
// =============================================================================
/**
 * Найдите самое длинное слово в строке
 * Написать функцию которая возвращает длину самого длинного слова в предложении
 */
const findLongestWordLength = function findLongestWordLength(str) {
  const words = str.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return console.log(longestWord.length);
};

findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
findLongestWordLength('May the force be with you'); // 5
findLongestWordLength('Google do a barrel roll'); // 6
findLongestWordLength(
  'What is the average airspeed velocity of an unladen swallow',
); // 8
findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology',
); // 19
