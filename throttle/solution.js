var throttle = function(fn, wait) {
	var exec, timeout;
	var context, args;
	return function() {
		if (!exec || (new Date()- exec > wait && !timeout)) {
			exec = new Date();
			return fn.apply(this, arguments);
		} else {
			context = this;
			args = [].slice.call(arguments);
			if (!timeout) {
				timeout = setTimeout(function() {
					exec = new Date();
					timeout = null;// Imp Step.
					return fn.apply(context, args);
				}, wait);
			}
		}
	};
};

module.exports = throttle;