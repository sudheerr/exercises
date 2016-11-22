function flattenthunk(thunk) {
    return function(cb) {
        next();
        function next() {
            thunk(function(err, res) {
                if (typeof res === 'function') {
                    thunk = res;
                    next();
                } else {
                    cb(null, res);
                }
            });
        }
    }
}

module.exports = flattenthunk;