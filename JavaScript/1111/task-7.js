'use strict';

// =============================================================================
// Задание 7
// =============================================================================
/**
 * Пропущенные буквы
 * Найдите пропущенную букву в диапазоне букв и верните ее.
 */
fearNotLetter('abce'); // "d"
fearNotLetter('abcdefghjklmno'); // "i"
fearNotLetter('stvwx'); // "u"
fearNotLetter('bcdf'); // "e"
fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined

function fearNotLetter(str) {
  let missingLetter;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      missingLetter = String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return missingLetter;
}
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
