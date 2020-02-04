'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let message;
const input = prompt('Сколько дроидов Вы хотите купить?');
const totalPrice = input * pricePerDroid;
if (input === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else if (totalPrice < credits) {
  message = `Вы купили ${input} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}
alert(message);

const ghvfjjh = function(string) {
  const dtyddty = string.length;
  if (dtyddty > 40) {
    String.slice(0, 40);
    String.push('...');
  }

  return string;
};
