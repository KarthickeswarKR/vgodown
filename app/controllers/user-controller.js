var express = require('express');
var router = express.Router();
var userService = require('../services/user-service');
router.post('/addUser',function(req, res, next) {
    userService.addUser(req,res);
});
module.exports = router;
