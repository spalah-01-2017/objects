function range(num1, num2, num3) {
	var arr = [];
	var step;
	if(num3 < 0) {
		step = -num3;
	} else if (num3) {
		step = num3;
	} else {
		step = 1;	
	}
	if (num1 < num2) {
		for (var i = num1; i <= num2; i += step) {
			arr.push(i);
		}
		return arr;
	} else {
		for (var i = num1; i >= num2; i -= step) {
			arr.push(i);
		}
		return arr;
	}
}

var a = (range(10, 1));

function sum(arr) {
	var res = 0; 
	for (var i = 0; i < arr.length; i++) {
		res += arr[i];
	}
	return res;
}
sum(a);