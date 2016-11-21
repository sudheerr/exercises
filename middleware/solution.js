function Middleware() {
	var fnAr = [];
	return {
		use: function(fn) {
			fnAr.push(fn);
		},
		go: function(cb) {
			var ctx= this;
			var args = arguments;
			var len = fnAr.length;
			var i=0;
			function next(){
				if(i<len){
					fnAr[i].call(ctx,next);
					i++;
				}else{
					cb.apply(ctx,args);
				}

			}
			next();			
		}
	}
}

module.exports = Middleware;