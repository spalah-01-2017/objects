function math() {
  var arr = [];
  
  function addMemory(elem) {
  	arr.push(elem);
  }
  
	var newObj = {
  	add: function(a, b) {
    	addMemory( a + b );
    	return a + b;
    },
    substract: function(a, b) {
    	addMemory( a - b );
    	return a - b;
    },
    divide: function(a, b) {
    	addMemory( a / b );
    	return a / b;
    },
    multiply: function(a, b) {
    	addMemory( a * b );
    	return a * b;
    },
    pow: function(a, b) {
    	addMemory( Math.pow(a, b) );
    	return Math.pow(a, b);
    }, 
    memory: function() {
    	return arr;
    }
  };
  
  return newObj;
  
}

var myMath = math();
console.log( myMath.add(2,3) );
console.log( myMath.substract(10,1) );
console.log( myMath.divide(16,2) );
console.log( myMath.multiply(3,5) );
console.log( myMath.pow(5,2) );
console.log( myMath.pow(myMath.add(2,1),3) );
console.log( myMath.memory() );