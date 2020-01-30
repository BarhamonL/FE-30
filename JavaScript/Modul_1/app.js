'use strict';
// const name  = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// const total = 100;
// let ordered = 50;
// if (total >= ordered) {console.log('"Заказ оформлен, с вами свяжется менеджер"');}
// else {console.log('"На складе недостаточно товаров!"');}

// ordered = 20;
// if (total >= ordered) {console.log('"Заказ оформлен, с вами свяжется менеджер"');}
// else {console.log('"На складе недостаточно товаров!"');}

// ordered = 80;
// if (total >= ordered) {console.log('"Заказ оформлен, с вами свяжется менеджер"');}
// else {console.log('"На складе недостаточно товаров!"');}

// ordered = 130;
// if (total >= ordered) {console.log('"Заказ оформлен, с вами свяжется менеджер"');}
// else {console.log('"На складе недостаточно товаров!"');}

// const ADMIN_PASSWORD = 'jqueryismyjam';
// const input = prompt('Введите пароль');
// let message;
// if (input === ADMIN_PASSWORD) {message = 'Добро пожаловать!';}
// if (input !== ADMIN_PASSWORD) {message = 'Доступ запрещен, неверный пароль!';}
// if (input === null) {message = 'Отменено пользователем!';}
// alert(message);

// const credits = 23580;
// const pricePerDroid = 3000;
// let message;
// const input = prompt('Сколько дроидов Вы хотите купить?');
// const totalPrice = input * pricePerDroid;
// if (input === null) {message = 'Отменено пользователем!';}
// else if (totalPrice > credits) {message = 'Недостаточно средств на счету!';}
// else if (totalPrice < credits) {message = `Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;}
// alert(message);

// const nameChina = 'Китай';
// const nameChile = 'Чили';
// const nameAustralia = 'Австралия';
// const nameIndia = 'Индия';
// const nameJamaica = 'Ямайка';
// const priceChina = 100;
// const priceChile = 250;
// const priceAustralia = 170;
// const priceIndia = 80;
// const priceJamaica = 120;
// const userChoice = prompt('Укажите название страны');
// let message;
// switch (userChoice.toLowerCase()) {
//   case nameChina.toLowerCase():
//     message = `Доставка в ${nameChina} будет стоить ${priceChina} кредитов`;
//     break;
//   case nameChile.toLowerCase():
//     message = `Доставка в ${nameChile} будет стоить ${priceChile} кредитов`;
//     break;
//   case nameAustralia.toLowerCase():
//     message = `Доставка в ${nameAustralia} будет стоить ${priceAustralia} кредитов`;
//     break;
//   case nameIndia.toLowerCase():
//     message = `Доставка в ${nameIndia} будет стоить ${priceIndia} кредитов`;
//     break;
//   case nameJamaica.toLowerCase():
//     message = `Доставка в ${nameJamaica} будет стоить ${priceJamaica} кредитов`;
//     break;
//   default:
//     alert((message = `В вашей стране доставка не доступна`));
// }
// console.log(message);

'use strict';
let total = 0;
let input;
do {
  input = prompt('Введите число');
  input = Number(input);
  if (typeof input !== isNaN) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else {
    total += Number(input);
    console.log(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
console.log(total);

('use strict');
let total = 0;
let input;
do {
  input = prompt('Введите число');
  input = Number(input);
  if (typeof isNaN(input)) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else {
    total += Number(input);
    console.log(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
console.log(total);
