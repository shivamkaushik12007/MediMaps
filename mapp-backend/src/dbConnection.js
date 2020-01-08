const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:2701/mapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db=mongoose.connection;
db.on('error',function(){
    console.log("Error connecting to db")
})

db.once('open',function(){
    console.log("Connected to db")
})