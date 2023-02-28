// Connecting database
const express=require('express');
const mongoose=require('mongoose');
const app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb://0.0.0.0:27017/password')
.then(()=>{console.log('Database Connected!')}).catch(()=>{console.log("Something went wrong")})
var db=mongoose.connection;

db.on('error',()=>console.log("Error in connecting database"))
db.once('open',()=>console.log("Connected to database"))

const User=require("./model/value")
app.get("/",(req,res)=>{
  res.set({
    "Allow-access-Allow-Origin":"*"
  })
}).listen(8080)
app.post("/getdata",(req,res)=>{
    var fname=req.body.fname;
    var sname=req.body.sname;
    var data={
      "firstname":fname,
      "lastname":sname
    }
    db.collection('password').insertOne(data,(err,collection)=>{
      if(err){
        throw err;
      }
      console.log("Record Inserted");
    })
})