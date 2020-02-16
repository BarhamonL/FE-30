'use strict';

// Напиши функцию countProps(obj),
// считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

// const countProps = function(obj) {
//   console.log(countProps.getOwnPropertyNames);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

const countProps = countProps => {
  const keys = Object.keys(countProps).length;
  return keys;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
