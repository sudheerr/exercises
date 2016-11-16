var debounce = function(fn, wait) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function(){
			timeout = null;
			return fn.apply(context,args);
		}
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};
/*
VERSION 2 with immediate execution
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
*/
module.exports = debounce;