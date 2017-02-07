## Домашнее задание

### Теория

[Презентация - Объекты](https://docs.google.com/presentation/d/1dFskHDDAPc0jvWRDcP-upYc78QhEdfgdN_3HQsG1HpA/edit?usp=sharing)

[Передача по ссылке](https://learn.javascript.ru/object-reference)

[Объекты (решите задачи внизу страницы, выкладывать код на гитхаб не надо)](http://learn.javascript.ru/object-for-in)

[Объекты и массивы](https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter4.html)

[Ключевое слово this](http://learn.javascript.ru/object-methods)

[Примеры с занятия](/example.js)

===

#### Методы для самостоятельного изучения. Подготовьте возникшие вопросы по ним, на занятии мы будем изучать другие методы массивов (map, reduce, filter, every, forEach и др.)
[Методы для работы с массивами](http://learn.javascript.ru/array-methods)

[Документация MDN. Методы для самостоятельного изучения:](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Array.prototype.concat()
- Array.prototype.indexOf()
- Array.prototype.lastIndexOf()
- Array.prototype.pop()
- Array.prototype.push()
- Array.prototype.join()
- Array.prototype.shift()
- Array.prototype.unshift()
- Array.prototype.slice()
- Array.prototype.reverse()
- Array.prototype.splice()
- Array.prototype.sort()

===
### Практика


(1) ⭐ Создайте функцию math, которая будет создавать новый объект, имеющий методы `add`, `subtract`, `divide`, `multiply`, `pow`. Каждый из этих методов может принимать в качестве аргументов два числа и выполнять соответсвующее математическое действие, возвращая полученный результат: 
```javascript
var myMath = math();
myMath.add(2,3); //5
myMath.subtract(10,1); //9
myMath.divide(16,2); //8
myMath.multiply(3,5); //15
myMath.pow(5,2); //25
myMath.pow(myMath.add(2,1),3); //27
```

(2) Используя функцию math из предыдущего задания, перепешите ее таким образом, чтобы объект, который она возвращает, имел свойство `memory`, помимо уже реализованных методов. Это свойство должно хранить в себе результаты всех математических операций, вызванных в контексте объекта, созданного с помощью функции `math`:
```javascript
var myMath = math();
myMath.add(2,3); //5
myMath.subtract(10,1); //9
myMath.divide(16,2); //8
myMath.memory; //[5,9,8]
```

(3,4) ⭐ Выполните упражнения "Сумма диапазона" и "Обращаем вспять массив" в конце [главы из книги](https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter4.html)

___
⭐ - обязательное задание
Все функции должны находиться в разных файлах (одна функция - один файл) с именем этой функции. Например, реализация функции math должна находиться в файле math.js.
