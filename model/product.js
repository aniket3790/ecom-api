const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'myuser1'
    }
})

module.exports = mongoose.model('product',productSchema)

