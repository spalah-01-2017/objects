function range (x, y, step) {
	var arr = [];

	if (step < 0) {
		for (var i = y; i >= x; i += step) {
			arr.push(i);
		}
		return arr;
	}

	if (step) {
		for (var i = x; i <= y; i += step) {
			arr.push(i);
		}
			return arr;
	}

	for (var i = x; i <= y; i++) {
		arr.push(i);
		}
	return arr;
}

console.log(range(-7, 20, -1));
