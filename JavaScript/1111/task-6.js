'use strict';

// Задание 6
// =============================================================================
/**
 * Разница двух массивов
 * Сравните два массива и верните новый массив с элементами,
 * найденными только в одном из двух указанных массивов, но не в обоих.
 * Другими словами, вернуть симметричную разность двух массивов.
 */
// const diffArray = function diffArray(arr1, arr2) {
//   const newArr = [];
//   if (arr1.includes(arr1[i]) !== arr2.includes(arr2[i])) {
//     newArr.push(arr1[i]);
//   }
//   if (arr2.includes(arr1[i]) !== arr1.includes(arr2[i])) {
//     newArr.push(arr2[i]);
//   }
//   console.log(newArr);
// };
const diffArray = (a, b) => {
  let res = [];

  a.forEach(e => {
    if (!b.includes(e)) res.push(e);
    // console.log(e, b.includes(e));
  });
  b.forEach(e => {
    if (!a.includes(e)) res.push(e);
    // console.log(e, b.includes(e));
  });

  return res;
};

diffArray(['diorite', 'andesite'], ['diorite', 'dirt']); // ["andesite", "dirt"].
diffArray([1, 2, 3], [1, 2, 4]); // [3, 4]
diffArray(['andesite', 'grass'], ['andesite', 'grass']); // []
