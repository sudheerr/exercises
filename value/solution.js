function value(arg){
	while(typeof arg === 'function'){
		arg  = arg();
	}
	return arg;
}
module.exports = value;