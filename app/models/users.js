var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = new Schema({
    _id:String,
    name:{
    fullName:{
      type:String,
      required:true
    },
    firstName:{
      type:String
    },
    lastName:{
      type:String
    }
  },
    username: {
        type: String,
      required:true,
      unique: true,
    },
    Password: {
        type: String,
        required:true

    },
    createdOn: {
        type: Date,
        "default": Date.now
    },
    updatedOn: {
        type: Date,
        "default": Date.now
    },
    status: {
        type: String,
        "default": "y"
    }
});
module.exports = mongoose.model('Users', Users);
