const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }
});
const User=mongoose.model('User',userschema)
module.exports=User
