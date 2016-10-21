var express = require('express');
var logger = require('morgan');
var cron = require('node-schedule');
var bodyParser = require('body-parser');
var fs = require('fs')
var config = require('./app/config/config');
var mongoose = require('mongoose');
var db = require('./app/db/mongoose');
var users = require('./app/controllers/user-controller');
var vg = express();
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
vg.use(logger('combined', {stream: accessLogStream}));
vg.use(bodyParser.json());
vg.use(bodyParser.urlencoded({ extended: false }));
vg.use('/static', express.static(__dirname + '/public'));
vg.use('/api/users', users);
module.exports = vg;
vg.listen(800);
console.log("vg is started and listening 3000");
