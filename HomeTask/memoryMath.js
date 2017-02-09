function memoryMath() {
	return {
		memory: [],
		add: function (x, y) {
			var res = x + y;
			this.memory.push(res);
			return res;
		},
		substract: function (x, y) {
			var res = x - y;
			this.memory.push(res);
			return res;
		},
		divide: function (x, y) {
			var res = x / y;
			this.memory.push(res);
			return res;
		},
		multiply: function (x, y) {
			var res = x * y;
			this.memory.push(res);
			return res;
		},
		pow: function (x, y) {
			var res = x;
			while (y > 1) {
				res *= x;
				y--
			}
			this.memory.push(res);
			return res;
		}
	}
}
