function range(start, end, step) {
  var res = [];
  
  if (step < 0) {
    for(var i = start; i >= end; i += step) {
      res.push(i);
    }
  } else if(!step) {
    step = 1;
    
    for(var j = start; j <= end; j += step) {
      res.push(j);
    }
  } else {
    for(var k = start; k <= end; k += step) {
      res.push(k);
    }
  }

  
  return res;
}

function sum(arr) {
  var res = 0;
  
  for(var i = 0; i < arr.length; i++){
    res += arr[i]; 
  }
  
  return res;
}