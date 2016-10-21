/**
 * Created by Karthick Eswar K R on 18/10/2016.
 */
var express = require('express');
var mailer = require('express-mailer');
var config = require('../../config/mail-config');
var currentMailerOptions = config.mailer;
var config = require('../../config/config');

var app = express();
mailer.extend(app, currentMailerOptions);

// Views
app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

exports.sendChangePasswordURL = function(userEmail) {
    console.log("Mail Service Started...");
    app.locals.url = "Dear Colleague,Hope you had a good day!!!";


//  app.locals.url="Gentle reminder to drop a retrospection mail. Ignore, if already sent.                                                                  Hope you had a good day!!!";


    app.mailer.send('email', {
            to: userEmail,
            subject: 'Remainder of retrospection mail',
            url: "Gentle reminder to drop a retrospection mail. Ignore, if already sent.Hope you had a good day!!!"
        },
        function (err,mailRes) {
            if (err) {
                console.log('Sending Mail Failed!');
                console.log(err);
                res.send(err);
                return;
            }
            else{
            console.log("Mail Sent"+mailRes);
          }
        });
};
