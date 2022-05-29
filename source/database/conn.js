//This file is responsible for connection to database[MongoDB]
const mongoose = require('mongoose'); //here we includes external module mongoose that exist in separate file
const url = "mongodb://localhost:27017/MyDB" //url of mongodb database and MyDB = databasename
mongoose.connect(url,{  //estabilishing connection
    useNewUrlParser:true, // old parser has been deprecated , if found anybug in newparser then come to old one
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error:"));
db.once("open",function(){
    console.log("Connected Successfully")
});


