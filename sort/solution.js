function sort(ar){
	var len =ar.length;
	for(var i=1;i<len;i++){
		var j = i;
		while (j>0 && ar[j-1] > ar[j]){
			var temp = ar[j-1];
			ar[j-1] = ar[j];
			ar[j] = temp;
			j --;
		}
	}
	return ar;
}
module.exports = sort;