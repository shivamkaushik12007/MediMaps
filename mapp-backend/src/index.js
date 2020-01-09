const express = require("express");
const bodyParser = require("body-parser");
require('./dbConnection');
var users=require('./routes/users');
const UsersModel=require('./models/users');
const session = require('express-session');

var app=express();
var cookieValidator = (req, res, next) => {
    if (req.session.userName) {
        UsersModel.findUser(req, (err, res) => {
            if (err) res.status(401).send("User not authenticated");
            if (res && res.length == 0) {
                res.status(401).send("User not authenticated");
            }
            if (res && res.length > 0) {
                next();
            }
        })
    } else {
        res.status(401).send("User not authenticated");
    }
}

app.use(bodyParser.json());
app.use(session({
    key: "mediMap",
    secret: "mediMap"
}))
app.use("/", express.static('static'))
app.use("/mediList", express.static('static'))

app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.get("/",function(req,res){
    res.send("MediMaps Intro Page");
})

app.listen(8080,()=>{
    console.log("Server is listening at post 8080")
})