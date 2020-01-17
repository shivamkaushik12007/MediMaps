const express = require('express');
const router = express.Router();
const UsersModel = require('./../models/users');

router.get('/findSearch',(req,res)=>{
    UsersModel.findSearch(req,(error,response)=>{
        if(error) console.log("Error is: ",error);
        if(response){
            res.send(response);
        }
    })
})

router.post('/add', (req, res) => {
    UsersModel.addUser(req, (error, response) => {
        if (error) {
            console.log("Error is: ", error);
            // res.send(error);
            res.status(401).send(error);
        }
        if (response) {
            req.session.userName = req.body.userName
            req.session.id = response._id
            // console.log("Success response is: ", JSON.stringify(response));
            res.send('User added successfully');
        }
    });
});

router.post('/login', (req, res) => {
    UsersModel.findUserForLogin(req, (error, response) => {
        if (error) {
            console.log("Error is: ", error);
            res.send(error);
        }
        if (response) {
            // console.log(response);
            if (response.length > 0) {
                req.session.userName = req.body.userName
                req.session.id = response._id
                // console.log(req.session.userName);
                // console.log(req.body.userName);
                // console.log("Success response is: ", JSON.stringify(response));
                res.send('User authenticated successfully');
            }else {
                res.status(401).send('User not authenticated');
            }
        }
    });
})

module.exports = router;