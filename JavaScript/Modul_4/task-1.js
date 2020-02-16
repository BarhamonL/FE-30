'use strict';
// Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value;
//   },
//   showOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost;
//     orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const createTransaction = function(amount, type) {
//   return {
//     type: type,
//     amount: amount,
//   };
// };

// console.log(createTransaction(500, 'dsx'));

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

deposit(amount => {
  let type = Transaction.DEPOSIT;
  createTransaction(amount, type);
  return {
    type: type,
    amount: amount,
  };
});

console.log(deposit(500));
