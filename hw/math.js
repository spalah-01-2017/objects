/*
 Создайте функцию math, которая будет создавать новый объект, имеющий методы
 add, subtract, divide, multiply, pow. Каждый из этих методов может принимать
 в качестве аргументов два числа и выполнять соответсвующее математическое действие,
 возвращая полученный результат:

 var myMath = math();
 myMath.add(2,3); //5
 myMath.subtract(10,1); //9
 myMath.divide(16,2); //8
 myMath.multiply(3,5); //15
 myMath.pow(5,2); //25
 myMath.pow(myMath.add(2,1),3); //27
 */


function math() {
    var obj = {
        add: function (a, b){
            return a+b;
        },
        subtract: function (a, b){
            return a-b;
        },
        divide: function (a, b){
            return a/b;
        },
        multiply: function (a, b){
            return a*b;
        },
        pow: function (a, b){
            var res = 1;
            for (var i = 0; i<b; i++){
                res*=a;
            }
            return res;
        }
    };
    return obj;
}