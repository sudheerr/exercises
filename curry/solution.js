var curry = function(f){
   	function curryAux(func, args) {
		return function() {
			var newArgs = args.concat(Array.prototype.slice.call(arguments));
			if (newArgs.length === func.length) {
				return func.apply(null, newArgs);
			} else {
				return curryAux(func, newArgs);
			}
		};
	}

	return curryAux(f, []);

};
module.exports = curry;