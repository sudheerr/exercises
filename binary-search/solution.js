module.exports = search;

function search(arr, query) {
   return binSearch(arr, query, 0, arr.length-1);
    function binSearch(arr, query, low, high) {
    	if(low > high) return -1;
        var middle = Math.floor((high + low) / 2);
        var middleElement = arr[middle];
        if(middleElement === query)	return middle;
        if (middleElement > query) return binSearch(arr, query, low, middle-1);
        return binSearch(arr, query, middle+1, high);
     }
}