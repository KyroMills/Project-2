const express = require('express')
const router = express.Router();

const productsCtrl = require('../controllers/products.js')
router.get('/admin',productsCtrl.addNewProduct)
router.get('/', productsCtrl.index)
router.post('/',productsCtrl.createProduct)

module.exports = router;