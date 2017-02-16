// Во введении был упомянут удобный способ подсчёта сумм диапазонов чисел:
//
// console.log(sum(range(1, 10)));
//
// Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
//
// В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
//
// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]

function sum(arr) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

function range(a, b, c) {
  if (c == undefined || c == 0) {
    var c = 1;
  } else if (c < 0) {
    c *= -1;
  }
  var res = [];
  if (a>b) {
    var d = a; a = b; b = d;
  }
  for (var i = a; i <= b; i += c) {
    res.push(i);
  }
  return res;
}

console.log(sum(range(1, 10)));
// // → 55
console.log(range(90, 80, 2));
// // → [ 2, 4, 6, 8, 10 ]
console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]

// Пришлось отпилисть отрицательный шаг, условия уикла тогда плывут