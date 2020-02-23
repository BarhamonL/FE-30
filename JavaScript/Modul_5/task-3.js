'use strict';
// Напиши класс Storage, который будет создавать
// объекты для управления складом товаров. При вызове
// будет получать один аргумент - начальный массив товаров,
// и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его
// к текущим
// removeItem(item) - получет товар и, если он есть,
// удаляет его из текущих

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

class Storage {
  constructor(items = []) {
    this.items = items;
  }
  getItems() {
    console.table(this.items);
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    let product;
    for (let i = 0; i <= this.items.length; i += 1) {
      if (item === this.items[i]) {
        product = this.items.indexOf(item);
      }
    }
    return this.items.splice(product, 1);
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

storage.getItems();
console.table(storage);
storage.addItem('Дроид');
console.table(storage);
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// const arr = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// arr.splice(1, 1);
// console.table(arr);
