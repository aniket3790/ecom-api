const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// post logic
exports.register = async (req,res)=>{
    try {
        const userExits = await User.findOne({email:req.body.email})
        if(userExits) return res.status(400).json({errors:true,message:"user already exists"})

        // password encryption
        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,salt)

        // save logic
        const data = await User.create(req.body)

        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }

}

// login
exports.login = async (req,res)=>{
    try {
        const userExits = await User.findOne({email:req.body.email})
        if(!userExits) return res.status(400).json({errors:true,message:"email or password is invalid"})

        // password verify
        const verifyPassword = await bcrypt.compare(req.body.password,userExits.password)
        if(!verifyPassword) return res.status(400).json({errors:true,message:"email or password is invalid"})
       
        const token = await jwt.sign({id:userExits._id},process.env.SEC)
        return res.json({errors:false,data:{token:token,user:userExits}})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }

}

