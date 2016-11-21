function flatten(arr) {
	var retAr = [];

	function populate(arr) {
		for (var i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				populate(arr[i]);
			} else {
				retAr.push(arr[i]);
			}
		}
	}
	populate(arr);
	return retAr;
}

// Variation 2 by Author
function flatten2(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      ret.push.apply(ret, flatten2(arr[i]));//COOL
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}
module.exports = flatten;