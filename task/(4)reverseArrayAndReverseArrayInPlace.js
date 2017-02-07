// ------------------ reverseArray ------------------
function reverseArray(arr) {
	var newArr = [];
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		newArr.push(arr.pop());
	}
	return newArr;
}

var array = [1,2,3,4,5,'1','2','3','4','5'];

reverseArray(array);
// ------------------ reverseArrayInPlace ------------------
function reverseArrayInPlace(arr) {
	var newArr = [];
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		newArr.push(arr.pop());
	}
	// Вместо второго цыкла я хотел вырезать из newArr весь массив в arr, функция возвращает мне обратный arr, но когда я снова пытаюсь вызвать функцию, arr - пустой, может мозги уже не варят и что то не так делаю. arr = newArr.slice(); - возвращает обратный, а потом arr пуст.
	var newLen = newArr.length;
	for (var iter = 0; iter < newLen; iter++) {
		arr.push(newArr[iter]);
	}
	return arr;
}

var array = [1,2,3,4,5,'1','2','3','4','5'];

reverseArrayInPlace(array);