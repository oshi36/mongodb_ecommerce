const mongoose = require('mongoose')
const Category=require('./category');

const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
  //required:[true]
    },
    description:{
        type : String,
     //   required:[true,',required']
      },
    price:{
        type : Number,
        //required:[true]
      },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'

    },
    quantity:{
        type : Number,
        //required:[true]
      }
})

module.exports = mongoose.model('Product',productSchema)