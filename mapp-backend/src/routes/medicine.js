const express = require('express');
const router = express.Router();
const MedicineModel = require('./../models/medicine');

router.get('', (req, res) => {
    MedicineModel.findMedicine(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.post('/addMedicine', (req, res) => {
    MedicineModel.addMedicine(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.delete('/deleteMedicine', (req, res) => {
    MedicineModel.deleteMedicine(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

module.exports = router;