var faker = require('faker');

var libs = process.cwd() + '/app/';

var log = require(libs + 'config/log')(module);
var db = require(libs + 'db/mongoose');
var config = require(libs + 'config/config');

var User = require(libs + 'models/users');
var Client = require(libs + 'models/client');
var AccessToken = require(libs + 'models/accessToken');
var RefreshToken = require(libs + 'models/refreshToken');
var uuid = require('node-uuid');
User.remove({}, function(err) {
    var user = new User({
        _id :uuid.v1(),
        username: config.get("default:user:username"), 
        password: config.get("default:user:password")
    });
    
    user.save(function(err, user) {
        if(!err) {
            log.info("New user - %s:%s", user.username, user.password);
        }else {
            return log.error(err);
        }
    });
});

Client.remove({}, function(err) {
    var client = new Client({ 
        name: config.get("default:client:name"), 
        clientId: config.get("default:client:clientId"), 
        clientSecret: config.get("default:client:clientSecret") 
    });
    
    client.save(function(err, client) {

        if(!err) {
            log.info("New client - %s:%s", client.clientId, client.clientSecret);
        } else {
            return log.error(err);
        }

    });
});

AccessToken.remove({}, function (err) {
    if (err) {
        return log.error(err);
    }
});

RefreshToken.remove({}, function (err) {
    if (err) {
        return log.error(err);
    }
});

setTimeout(function() {
    db.disconnect();
}, 3000);