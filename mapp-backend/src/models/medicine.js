const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    mg:Number,
    price:Number,
    users:String
})

const MedicineModel = mongoose.model("Medicine", medicineSchema);

BooksModel.findMedicine = function (req, callBack) {
    let id = req.session.userName;
    let query = {};
    if (id) {
        query = { users: id }
    }
    MedicineModel.find(query, callBack);
}

MedicineModel.addMedicine = function (req, callBack) {
    let medicine = req.body;
    MedicineModel.create(medicine, callBack);
}

MedicineModel.deleteMedicine = function (req, callBack) {
    let query = { _id: req.query.id };
    MedicineModel.deleteOne(query, callBack);
}

module.exports = BooksModel;
