var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var schema = new mongoose.Schema({
    username: String,
    password: String,
    profile_picture : 
        { 
            type: String, 
            default : "https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png"
        }
});
schema.plugin(passportLocalMongoose);
module.exports =  mongoose.model("user", schema);