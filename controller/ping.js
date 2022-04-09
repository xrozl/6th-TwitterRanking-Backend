var express = require('express');
var response = require('../response');
var router = express.Router();

router.get('/', function(req, res, next) {
        response(res, "pong");
    }
);

module.exports = router;