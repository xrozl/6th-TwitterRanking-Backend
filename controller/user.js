var express = require('express');
var response = require('../response');
var fs = require('fs');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    // load json
    var user = JSON.parse(fs.readFileSync('./data/user/' + id + ".json", 'utf8'));
    var data = {};

    for (const key in user) {
        if (key == "id") {
            data[key] = user[key];
        } else if (key == "tweet") {
            data[key] = user[key];
        } else if (key == "follower") {
            data[key] = user[key];
        } else if (key == "following") {
            data[key] = user[key];
        } else if (key == "last_update") {
            data[key] = user[key];
        }
    }
    response(res, data);
    }
);

module.exports = router;