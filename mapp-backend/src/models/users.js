const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose,30);

const usersSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobNumber:{
        type:Number,
        required:true
    },
    eMail:{
        type:String,
        unique:true,
        required:true
    },
    name:String,
    address:String,
    longitude:Float,
    latitude:Float
})

const UsersModel = mongoose.model("Users", usersSchema, "userss");

UsersModel.findUser = function (req, callBack) {

    UsersModel.find({ userName: req.session.userName }, callBack);
}

UsersModel.findUserForLogin = function (req, callBack) {
    let user = { userName: req.body.userName, password: req.body.password };
    JSON.stringify(user);
    UsersModel.find(user, callBack);
}

UsersModel.addUser = function (req, callBack) {
    let user = req.body;
    UsersModel.create(user, callBack);
}

module.exports = UsersModel;
