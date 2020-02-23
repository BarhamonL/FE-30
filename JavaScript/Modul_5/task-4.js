'use strict';
// Напиши класс StringBuilder. На вход он получает
// один параметр - строку, которую записывает в
// свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку)
// и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку)
// и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и
// добавляет ее в начало и в конец _value
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

class StringBuilder {
  constructor(str) {
    this._value = str.split('');
  }
  get value() {
    return this._value;
  }
  append(str) {
    // this._value.push(str);
    this._value.push(str);
    console.log(this._value);
    const arr = this._value.slice(0);
    console.log(arr);
    const arr1 = arr.join('');
    console.log(arr1);
    this._value = arr1;

    // ggg.join(''
    return this._value;
  }
}
const builder = new StringBuilder('.');

// builder.append('^');
console.log(builder.value); // '.^'
builder.append('^');
console.log(builder.value); // '.^'

// const arr = ['.', '^'];
// const arr1 = arr.join(' ');
// console.log(arr1);
