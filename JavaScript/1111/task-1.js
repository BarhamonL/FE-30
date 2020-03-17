'use strict';

// Задание 1
// =============================================================================
/**
 * Перевести Цельсия в Фаренгейты
 * Написать функцию которая пересчитывает из градусов Цельсия в градусы Фаренгейта
 * - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.
 */

{
  //*****************мое решение******************************//
  const convertToF = function(valye) {
    let farengate = (valye * 9) / 5 + 32;
    return console.log(farengate);
  };

  //  правильное если в вызов добавить консоль.лог//
  // const convertToF = temp => (temp * 9) / 5 + 32;

  convertToF(-30); // -22
  convertToF(-10); // 14
  convertToF(0); // 32
  convertToF(20); // 68
}
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
  const confirmEnding = function confirmEnding(str, target) {
    let reverseTarget = '';
    for (let i = target.length; i > 0; i--) {
      reverseTarget += target[i - 1];
    }
    let reverseStr = '';
    for (let i = str.length; i > 0; i--) {
      reverseStr += str[i - 1];
    }
    if (reverseStr.length > reverseTarget.length) {
      reverseStr = `${reverseStr.slice(0, reverseTarget.length)}`;
    }
    console.log(reverseStr === reverseTarget);
  };

  //  правильное если в вызов добавить консоль.лог//
  // const confirmEnding = (str, target) =>
  //   str.substring(str.length - target.length) === target;

  // Не спортивный вариант
  // const confirmEnding = (str, target) => str.endsWith(target);

  confirmEnding('Bastian', 'n'); // true.
  confirmEnding('Congratulation', 'on'); // true.
  confirmEnding('Open sesame', 'same'); // true.
  confirmEnding('Open sesame', 'pen'); // false.
}

// =============================================================================
// Задание 5
// =============================================================================
/**
 * Повторить строку Повторить строку
 * Повторите данную строку str (первый аргумент) num раз (второй аргумент).
 * Вернуть пустую строку, если num не является положительным числом.
 */
{
  //*****************мое решение******************************//
  // const repeatStringNumTimes = function repeatStringNumTimes(str, num) {
  //   const repeat = [];

  //   for (let i = 0; i < num; i += 1) {
  //     repeat.push(str);
  //   }
  //   let repeatStr = repeat.join('');
  //   console.log(repeatStr);
  // };

  //  правильное //
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
}
// Задание 6
// =============================================================================
/**
 * Разница двух массивов
 * Сравните два массива и верните новый массив с элементами,
 * найденными только в одном из двух указанных массивов, но не в обоих.
 * Другими словами, вернуть симметричную разность двух массивов.
 */
{
  // const diffArray = (a, b) => {
  //   let res = [];

  //   a.forEach(e => {
  //     if (!b.includes(e)) res.push(e);
  //     // console.log(e, b.includes(e));
  //   });
  //   b.forEach(e => {
  //     if (!a.includes(e)) res.push(e);
  //     // console.log(e, b.includes(e));
  //   });

  //   return res;
  // };

  const diffArray = (arr1, arr2) => {
    let res = [];

    res = arr1.reduce(
      (acc, item) => (!arr2.includes(item) ? [...acc, item] : acc),
      [],
    );

    arr2.forEach(item => {
      if (!arr1.includes(item)) {
        res.push(item);
      }
    });

    console.log(res);
  };

  diffArray(['diorite', 'andesite'], ['diorite', 'dirt']); // ["andesite", "dirt"].
  diffArray([1, 2, 3], [1, 2, 4]); // [3, 4]
  diffArray(['andesite', 'grass'], ['andesite', 'grass']); // []
}
// =============================================================================
// Задание 7
// =============================================================================
/**
 * Пропущенные буквы
 * Найдите пропущенную букву в диапазоне букв и верните ее.
 */

{
  ////////// Один вариант ///////////////
  // function fearNotLetter(str) {
  //   let missingLetter;
  //   for (let i = 0; i < str.length; i += 1) {
  //     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
  //       missingLetter = String.fromCharCode(str.charCodeAt(i) - 1);
  //     }
  //   }
  //   return console.log(missingLetter);
  // }

  ////////// второй вариант  ///////////////
  const fearNotLetter = str => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const start = alphabet.indexOf(str[0]);
    const end = alphabet.indexOf(str[str.length - 1]);
    const fragment = alphabet.substring(start, end + 1);

    let res = undefined;

    fragment.split('').forEach(letter => {
      if (!str.includes(letter)) {
        res = letter;
      }
    });

    console.log(str, fragment, res);
  };

  // console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

  fearNotLetter('abce'); // "d"
  fearNotLetter('abcdefghjklmno'); // "i"
  fearNotLetter('stvwx'); // "u"
  fearNotLetter('bcdf'); // "e"
  fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined
}

// Задание 8
// =============================================================================
/**
 * Сумма всех парных чисел
 * Посчитайте сумму всех парных чисел в массиве
 */

{
  //////////////////Мой вариант/////////////////

  // const sumEvens = function sumEvens(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i += 1) {
  //     if (arr[i] % 2 === 0) {
  //       sum += arr[i];
  //     }
  //   }
  //   console.log(sum);
  // };

  /////////////////Правильный вариант////////////////////

  const sumEvens = arr =>
    arr.reduce((acc, number) => {
      if (number % 2 === 0) {
        acc += number;
      }

      return acc;
    }, 0);

  console.log(sumEvens([1, 2, 3, 4])); // 6
  console.log(sumEvens([11, 22, 33, 44])); // 66
  console.log(sumEvens([5, 7, 8, 9])); // 8
  console.log(sumEvens([1, 3, 5, 7])); // 0
}
// =============================================================================
// Задание 9
// =============================================================================
/**
 * Создайте животного, млекопитающегося и собаки (наследование)
 * Напишите конструкторы Animal, Mammal и Dog
 * которые наследуются друг от друга.
 * Создайте свойства и методы для классов:
 *  Animal - limbs (конечности шт.) - number
 *  Mammal - isMammal (является млекопитающим) - boolean
 *  Dog - bark() (гав-гав) - function
 */

{
  class Animal {
    constructor(limbs) {
      this.limbs = limbs;
    }
  }

  class Mammal extends Animal {
    constructor(limbs) {
      super(limbs);
      this.isMammal = true;
    }
  }

  class Dog extends Mammal {
    bark() {
      console.log('гав-гав');
    }
  }

  const dog = new Dog(4);

  console.log(dog.limbs); // 4
  console.log(dog.isMammal); // true
  dog.bark(); // гав-гав
}

// Задание 10
// =============================================================================
/**
 * Напишите пример замыкания
 * Например счетчик
 */

{
  function counter(value = 0) {
    return function() {
      return (value += 1);
    };
  }

  const count = counter();

  console.log(count()); // 1
  console.log(count()); // 2
  console.log(count()); // 3

  const count1 = counter();

  console.dir(count);
  console.dir(count1);
}
