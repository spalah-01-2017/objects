// (1) Создайте функцию math, которая будет создавать новый объект, имеющий методы add, subtract, divide, multiply, pow. Каждый из этих методов может принимать в качестве аргументов два числа и выполнять соответсвующее математическое действие, возвращая полученный результат:

// var myMath = math();
// myMath.add(2,3); //5
// myMath.subtract(10,1); //9
// myMath.divide(16,2); //8
// myMath.multiply(3,5); //15
// myMath.pow(5,2); //25
// myMath.pow(myMath.add(2,1),3); //27

function math() {
  return {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    pow: pow
  }
  function add(a,b) {
    return a+b;
  }
  function subtract(a,b) {
    return a-b;
  }
  function divide(a,b) {
    return a/b;
  }
  function multiply(a,b) {
    return a*b;
  }
  function pow(a,b) {
    return Math.pow(a,b);
  }
}

var myMath = math();

console.log(myMath.add(2,3)); //5
console.log(myMath.subtract(10,1)); //9
console.log(myMath.divide(16,2)); //8
console.log(myMath.multiply(3,5)); //15
console.log(myMath.pow(5,2)); //25
console.log(myMath.pow(myMath.add(2,1),3)); //27
