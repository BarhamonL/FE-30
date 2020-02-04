'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let input;
let message;

do {
  input = prompt('Введите пароль');
  console.log(input);
  if (input !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
  }
  if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  }
  if (input === null) {
    message = 'Отменено пользователем!';
  }
  alert(message);
} while (input !== ADMIN_PASSWORD && input !== null);
