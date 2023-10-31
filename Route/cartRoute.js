const {getCart,postCart} = require('../Controller/cartController')

const route = require('express').Router()

route.get('/',getCart)

route.post('/',postCart)

module.exports = route