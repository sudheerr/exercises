var memoize = function (fn){
	var memo = {};
	return function (){
		var args = arguments;
		var memoCd  = Array.prototype.join.call(arguments,'_')
		var ctx = this;
		if(!memo[memoCd]){
			memo[memoCd]  = fn.apply(ctx, args);
		}
		return memo[memoCd];
	};
};
module.exports = memoize;