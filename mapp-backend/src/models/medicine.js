const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name: String,
    mg:Number,
    price:Number,
    users:{
        type:String,
        required:true
    }
})

const MedicineModel = mongoose.model("Medicine", medicineSchema,"medicines");

MedicineModel.findMedicine = function (req, callBack) {
    let id = req.session.userName;
    let query = {};
    if (id) {
        query = { users: id }
    }
    // JSON.stringify(query);
    MedicineModel.find(query, callBack);
}

MedicineModel.addMedicine = function (req, callBack) {
    console.log("passed ",req.body);
    let medicine = req.body;
    MedicineModel.create(medicine, callBack);
}

MedicineModel.deleteMedicine = function (req, callBack) {
    let query = { _id: req.query.id };
    MedicineModel.deleteOne(query, callBack);
}

module.exports = MedicineModel;
