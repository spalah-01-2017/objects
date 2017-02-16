// (2) Используя функцию math из предыдущего задания, перепешите ее таким образом, чтобы объект, который она возвращает, имел свойство memory, помимо уже реализованных методов. Это свойство должно хранить в себе результаты всех математических операций, вызванных в контексте объекта, созданного с помощью функции math:
//
// var myMath = math();
// myMath.add(2,3); //5
// myMath.subtract(10,1); //9
// myMath.divide(16,2); //8
// myMath.memory; //[5,9,8]

function math() {
  var memory = [];
  return {
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    pow: pow,
    memory: memory
  }
  function add(a,b) {
    memory.push(a+b);
    return a+b;
  }
  function subtract(a,b) {
    memory.push(a-b);
    return a-b;
  }
  function divide(a,b) {
    memory.push(a/b);
    return a/b;
  }
  function multiply(a,b) {
    memory.push(a*b);
    return a*b;
  }
  function pow(a,b) {
    memory.push(Math.pow(a,b));
    return Math.pow(a,b);
  }
}

var myMath = math();

console.log(myMath.add(2,3)); //5
console.log(myMath.subtract(10,1)); //9
console.log(myMath.divide(16,2)); //8
console.log(myMath.memory); //[5,9,8]
