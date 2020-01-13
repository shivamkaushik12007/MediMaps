const express=require("express");
const bodyParser=require("body-parser");
var path=require("path");
require('./dbConnection');
const users=require('./routes/users');
const medicine=require('./routes/medicine');
const search=require('./routes/search');
const session=require('express-session');

var app=express();
app.use('/',express.static(path.join(__dirname,'./../public/')));

app.use(bodyParser.json());

app.use(session({
    key:"mediMap",
    secret: "mediMap",
    cookie:{
        expires:600000
    }
}))

app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.use('/users',users);
app.use('/medicine',medicine);
app.use('/search',search);

app.get("/",function(req,res){
    res.send("MediMaps Portal");
})

app.listen(8080,()=>{
    console.log("Server is listening at post 8080")
})