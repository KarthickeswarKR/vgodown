var express = require('express');
var log4js = require('log4js');
var logger = require('morgan');
var auditLog = require('audit-log');
var bodyParser = require('body-parser');var auditLog = require('audit-log');
var fs = require('fs')
var config = require('./app/config/config');
var mongoose = require('mongoose');
var html        =   require('./html.js')
var db = require('./app/db/mongoose');
auditLog.addTransport("mongoose", {connectionString: config.get('mongoose:uri')});
var vg = express();
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
log4js.configure({
	appenders: [
		{ type: 'console' },
		{ type: 'file', filename: 'logs/log4jsconnect.log', category: 'log4jslog' }
	]
});
var loggers = log4js.getLogger('log4jslog')
vg.use(log4js.connectLogger(loggers, { level: 'auto' }));
vg.use(logger('combined', {stream: accessLogStream}));
vg.use(bodyParser.json());
vg.use(bodyParser.urlencoded({ extended: false }));
vg.use('/static', express.static(__dirname + '/public'));
module.exports = vg;
vg.listen(3000);
console.log("vg is started and listening 3000");
