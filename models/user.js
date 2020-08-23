const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
   //     required:[true,'required']
    },
    email:{
        type : String,
     //   required:[true,'required']
    },
    password:{
        type : String,
       // required:[true,'required']
    },
    purchase_history:{
        type : String,
        //required:[true,'required']
    }
    
})

module.exports = mongoose.model('User',userSchema)