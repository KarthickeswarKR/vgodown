var express = require('express');
var Users = require('../models/users.js');
var resHandler = require("res-handler");
var commonService = require("../common/commonService.js");
var cron = require('node-schedule');
var mailService = require('../common/mail/mailService');
var config = require('../config/config');
var scheduletime=process.env.SCHEDULETIME || config.get('currency:scheduletime');
cron.scheduleJob(scheduletime, function(){
  try{
mailService.sendChangePasswordURL("karthickeswar@virtualgodown.com");
mailService.sendChangePasswordURL("s.sarathi@virtualgodown.com ");
mailService.sendChangePasswordURL("p.vignesh@virtualgodown.com ");
mailService.sendChangePasswordURL("s.manikandan@virtualgodown.com");
      }
    catch(err){
console.log(err);
    }
    });
