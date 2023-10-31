const {getProduct,postProduct} = require('../Controller/productController')
const auth = require('../middleware/auth')

const route = require('express').Router()

route.get('/',getProduct)

route.post('/',auth,postProduct)


module.exports = route