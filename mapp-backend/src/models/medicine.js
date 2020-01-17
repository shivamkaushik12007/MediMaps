const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mg:{
        type:Number,
        required:true
    },
    price:{
        type:Number
    },
    users:{
        type:String,
        required:true
    }
})
// medicineSchema.index({name:1,mg:1,price:1,users:1},{unique:true});

const MedicineModel = mongoose.model("Medicine", medicineSchema,"medicines");

MedicineModel.findMedicine = function (req, callBack) {
    let query = { users: req.query.users };
    MedicineModel.find(query, callBack);
}

MedicineModel.addMedicine = function (req, callBack) {
    let medicine = req.body;
    MedicineModel.create(medicine, callBack);
}

MedicineModel.deleteMedicine = function (req, callBack) {
    let query = { _id: req.query.id };
    // console.log(req.query.id);
    MedicineModel.deleteOne(query, callBack);
}

MedicineModel.findSearch=function(req,callBack){
    let query={name:req.query.search};
    MedicineModel.find(query,callBack);
}

module.exports = MedicineModel;
