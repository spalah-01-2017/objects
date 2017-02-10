/*
 Напишите функцию range, принимающую два аргумента –
 начало и конец диапазона – и возвращающую массив,
 который содержит все числа из него, включая начальное и конечное.
 Затем напишите функцию sum, принимающую массив чисел
 и возвращающую их сумму. Запустите console.log(sum(range(1, 10)));
 и убедитесь, что она возвращает 55.
 В качестве бонуса дополните функцию range, чтобы она
 могла принимать необязательный третий аргумент –
 шаг для построения массива. Если он не задан, шаг равен единице.
 Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
 Убедитесь, что она работает с отрицательным шагом так,
 что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
 console.log(sum(range(1, 10)));
 // → 55
 console.log(range(5, 2, -1));
 // → [5, 4, 3, 2]
 */

function range(beg, end, step) {
    if (step == 0){
        step = 1;
    }
    var ran = [];
    if (beg < end) {
        for (var i = beg; i<=end; i=i+step) {
            ran.push(i);
        }
    } else if (beg > end) {
        for (var i = beg; i>=end; i=i+step) {
            ran.push(i);
        }
    }
    return ran;

}

range(1, 10, 2);
range(5, 2, -1);

function sum(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

sum([1, 3, 4]);
