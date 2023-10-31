const Product = require('../model/product')

// get
exports.getProduct = async (req,res)=>{
    try {
        const data = await Product.find().populate('user')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postProduct = async (req,res)=>{
    try {
        const data = await Product.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}