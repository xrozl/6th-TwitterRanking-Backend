var express = require('express');
var parser = require('body-parser');
var app = express();

var controller_ping = require('./controller/ping');
var controller_user = require('./controller/user');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.use('/ping', controller_ping);
app.use('/user', controller_user)

app.listen(8888);