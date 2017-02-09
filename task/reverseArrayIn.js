function reverseArrayInPlace(arr) {
  var newarr = [];

	for ( var i = arr.length; i > 0; i-- ) {
  	newarr.push(i);
  }
  return newarr;
}

reverseArrayInPlace( [1,2,3,4,5]);