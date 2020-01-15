const express = require('express');
const router = express.Router();
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

const medicineSchema = new mongoose.Schema({
    name: String,
    mg:Number,
    price:Number,
    users:{
        type:String,
        required:true
    }
})

const UsersModel = mongoose.model("Users", usersSchema);
const MedicineModel = mongoose.model("Medicine", medicineSchema);

// router.get('', (req, res) => {
//     SearchModel.findUsers(req, (error, response) => {
//         if (error) console.log("Error is: ", error);
//         if (response) {
//             // console.log("Success response is: ", response);
//             res.send(response);
//         }
//     });
// });

router.get('', function(req, res) {
    async.waterfall([
        function getUser(done) {
            MedicineModel.find({ name: req.query.search }).lean().exec(done);
        },
        function getList(user, done) {
            UsersModel.find({ userName: user.users }).lean().exec(done);
        },
    ], function (err, casts) {
        if (err) {
            console.log(err);
            return res.status(400).send(e);
        }
        res.json(casts);
    });
});

module.exports = router;