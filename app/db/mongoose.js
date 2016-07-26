var mongoose = require('mongoose');
var app = process.cwd() + '/app/';

var log = require(app + 'config/log')(module);
var config = require(app + 'config/config');

mongoose.connect(config.get('mongoose:uri'));

var db = mongoose.connection;

db.on('error', function (err) {
	log.error('Connection error:', err.message);
});

db.once('open', function callback () {
	log.info("Connected to DB!");
});

module.exports = mongoose;
