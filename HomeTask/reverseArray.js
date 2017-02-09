function reverseArray(arr) {
	var newArr = [];

	for (var i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		arr.push(arr[i]);
	}
	arr.splice(0, (arr.length / 2));
}

var arra = [1, 2, 3, 4, 5];

reverseArrayInPlace(arra);

console.log(arra);
