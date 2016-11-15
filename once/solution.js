var once = function(fn) {
	var check = 2;
	var memo;
	return function() {
		if (--check > 0) {
			memo = fn.apply(this, arguments);
		}
		return memo;
	};
};

module.exports = once;