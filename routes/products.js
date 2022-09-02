const express = require('express')
const router = express.Router();
const isLoggedIn = require('../config/auth')
const productsCtrl = require('../controllers/products.js')

router.get('/admin',isLoggedIn,productsCtrl.addNewProduct)
router.get('/',isLoggedIn, productsCtrl.index)


router.get('/:id/edit',productsCtrl.edit)
router.get('/:id',productsCtrl.index);
router.get('/new', productsCtrl.addNewProduct);
router.post('/', productsCtrl.createProduct);

router.put('/:id',productsCtrl.update)
router.delete('/:id',productsCtrl.deleteProduct)

module.exports = router;