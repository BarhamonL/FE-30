'use strict';

// Напиши функцию checkForSpam(message),
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam
// и sale. Если нашли зарещенное слово то функция
// возвращает true, если запрещенных слов нет
// функция возвращает false. Слова в строке могут
// быть в произвольном регистре.

// const checkForSpam = function(message) {
//   // твой код
// };

/*
 * Вызовы функции для проверки работоспособности 
 твоей реализации.
 */

//нужно так!!!!!!
// unction setSpamWords(...spamWords) {
//   return function checkInclude(s) {
//   const arg = [...spamWords];

//   for (let i = 0; i < arg.length; i += 1) {
//   if (s.includes(arg[i])) return true;
//   }
//   return false;
//   };
//   }

//   const checkForSpam = setSpamWords('spam', 'sale')

const checkForSpam = function(message) {
  const registerMessages = message.toLowerCase();
  const value1 = 'spam';
  const value2 = 'sale';
  const result =
    registerMessages.includes(value1) || registerMessages.includes(value2);
  return result;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
