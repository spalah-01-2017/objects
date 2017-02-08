function reverseArray(arr) {
  var newArr =[];
  
  for (var i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  
  return newArr;
}
