function math() {
	return {
		add: function (x, y) {
			return x + y;
		},
		substract: function (x, y) {
			return x - y;
		},
		divide: function (x, y) {
			return x / y;
		},
		multiply: function (x, y) {
			return x * y;
		},
		pow: function (x, y) {
			var res = x;
			while (y > 1) {
				res *= x;
				y--
			}
			return res;
		}
	}
}
