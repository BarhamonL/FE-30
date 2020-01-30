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
