// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const UsersModel = mongoose.model("Users", usersSchema);
// const MedicineModel = mongoose.model("Medicine", medicineSchema);

// // router.get('', (req, res) => {
// //     SearchModel.findUsers(req, (error, response) => {
// //         if (error) console.log("Error is: ", error);
// //         if (response) {
// //             // console.log("Success response is: ", response);
// //             res.send(response);
// //         }
// //     });
// // });

// router.get('', requireAuth, function(req, res) {
//     async.waterfall([
//         function getUser(done) {
//             MedicineModel.find({ name: req.search }).lean().exec(done);
//         },
//         function getList(user, done) {
//             UsersModel.find({ userName: user.users }).lean().exec(done);
//         },
//     ], function (err, casts) {
//         if (err) {
//             console.log(err);
//             return res.status(400).send(e);
//         }
//         res.json(casts);
//     });
// });