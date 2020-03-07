'use strict';
// * Подтвердите окончание строки
// * Проверьте, заканчивается ли строка (первый аргумент, str)
// * заданной целевой строкой (второй аргумент, target).
// */

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

confirmEnding('Bastian', 'n'); // true.
confirmEnding('Congratulation', 'on'); // true.
confirmEnding('Open sesame', 'same'); // true.
confirmEnding('Open sesame', 'pen'); // false.
