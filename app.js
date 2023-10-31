const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./Route/userRoute')
const productRoute = require('./Route/productRoute')
const cartRoute = require('./Route/cartRoute')
const cors = require('cors')
require('dotenv/config')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// default route
app.get('/',(req,res)=>{
res.send('home')
})

// main route
app.use('/api/user',userRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.listen(process.env.PORT || 5000)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log("error",error.message);
    }
}
main()
