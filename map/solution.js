var map = function(ar, fn, ctx) {
	var retAr =[];
	var len = ar.length;
	for(var i=0 ;i< len;i++){
		retAr[i] = fn.call(ctx, ar[i], i , ar);
	}
	return retAr;
};
module.exports = map;