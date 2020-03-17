'use strict';
// Задание 2
// =============================================================================
/**
 * Перевернуть строку
 * Написать функцию которая возвращает перевернутую строку
 */

{
  //*****************мое решение******************************//
  const reverseString = function reverseString(str) {
    let reverse = '';
    for (let i = str.length; i > 0; i--) {
      reverse += str[i - 1];
    }
    console.log(reverse);
  };

  //  правильное если в вызов добавить консоль.лог//
  // const reverseString = str =>
  //   str
  //     .split('')
  //     .reverse()
  //     .join('');

  reverseString('hello'); // "olleh".
  reverseString('Howdy'); // "ydwoH".
  reverseString('Greetings from Earth'); // "htraE morf sgniteerG".
}

// Задание 3
// =============================================================================
/**
 * Найдите самое длинное слово в строке
 * Написать функцию которая возвращает длину самого длинного слова в предложении
 */

{
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
}
// Задание 4
// =============================================================================
/**
// * Подтвердите окончание строки
// * Проверьте, заканчивается ли строка (первый аргумент, str)
// * заданной целевой строкой (второй аргумент, target).
// */

{
  //*****************мое решение******************************//
  // const confirmEnding = function confirmEnding(str, target) {
  //   let reverseTarget = '';
  //   for (let i = target.length; i > 0; i--) {
  //     reverseTarget += target[i - 1];
  //   }
  //   let reverseStr = '';
  //   for (let i = str.length; i > 0; i--) {
  //     reverseStr += str[i - 1];
  //   }
  //   if (reverseStr.length > reverseTarget.length) {
  //     reverseStr = `${reverseStr.slice(0, reverseTarget.length)}`;
  //   }
  //   console.log(reverseStr === reverseTarget);
  // };

  const confirmEnding = (str, target) =>
    str.substring(str.length - target.length) === target;

  // Не спортивный вариант
  // const confirmEnding = (str, target) => str.endsWith(target);

  confirmEnding('Bastian', 'n'); // true.
  confirmEnding('Congratulation', 'on'); // true.
  confirmEnding('Open sesame', 'same'); // true.
  confirmEnding('Open sesame', 'pen'); // false.
}
