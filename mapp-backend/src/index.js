const express = require("express");
const bodyParser = require("body-parser");
require('./dbConnection');
var users=require('./routes/users');
var medicine=require('./routes/medicine');
const UsersModel=require('./models/users');
const session = require('express-session');

var app=express();

app.use(bodyParser.json());
app.use(session({
    key: "mediMap",
    secret: "mediMapSecret",
    resave: true,
    saveUninitialized: true
}))

app.use("*", (req, res, next) => {
    // console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.use('/users',users);
app.use('/medicine',medicine);

app.get("/",function(req,res){
    res.send("MediMaps Portal");
})

app.listen(8081,()=>{
    console.log("Server is listening at post 8081")
})