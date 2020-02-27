'use strict';
// class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor() {}

//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */

//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {}

//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {}

//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {}

//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {}

//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {}
//   }

//   const mustang = new Car({ maxSpeed: 200, price: 2000 });

//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);

//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();

//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000
class Car {
  constructor({ maxSpeed: maxSpeed, price: price }) {
    this._maxSpeed = maxSpeed;
    this._price = price;
    this._speed = 0;
    this._isOn = false;
    this._distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`,
    );
  }
  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    if (!this._isOn) {
      this.speed = 0;
    }
  }

  accelerate(value) {
    if (this._speed + value <= this._maxSpeed) {
      this._speed += value;
    } else {
      this._speed = this._maxSpeed;
    }
  }

  decelerate(value) {
    if (this._speed - value >= 0) {
      this._speed -= value;
    } else {
      this._speed = 0;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
