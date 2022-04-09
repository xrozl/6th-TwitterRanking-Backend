module.exports = res;
module.exports.err = err;

err = function(res) {
    var re = {"status":"ERROR", "response":""};
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(re);
}

res = function(res, response) {
    var re = {"status":"OK", "response":response};
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(re);
}