var myMath;
myMath = math();
function math() {
	return {
    add: function(num1, num2) {
      var res = this.memory.push(num1 + num2);
      return num1 + num2;
    },
    subtract: function(num1, num2) {
     var res = this.memory.push(num1 - num2);
     return num1 - num2;
   },
   divide: function(num1, num2) {
     var res = this.memory.push(num1 / num2);
     return num1 / num2;
   },
   multiply: function(num1, num2) {
     var res = this.memory.push(num1 * num2);
     return num1 * num2;
   },
   pow: function(num1, num2) {
     var res = this.memory.push(Math.pow(num1, num2));
     return Math.pow(num1, num2);
   },
   memory: []
 }
}