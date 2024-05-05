const mongoose = require("mongoose");


var mongoURL = 'mongodb+srv://Raymarktomas:raymarktomas@cluster0.dod29fz.mongodb.net/mern-gocery'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})


module.exports =mongoose