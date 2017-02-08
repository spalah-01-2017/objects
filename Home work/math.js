function math() {
  var res;
  
  obj = {
    
    add : function(a, b) {
      return a+b;
    },
    
    subtract : function(a, b) {
      return a - b;
    },
    
    divide : function(a, b) {
      return a / b;
    },
    
    multiply : function(a, b) {
      return a * b;
    },
    
    pow : function(a, b) {
      return Math.pow(a, b);
    }
  }
  
  return obj;
}

var myMath = math();
