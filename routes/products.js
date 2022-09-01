const express = require('express')
const router = express.Router();

const productsCtrl = require('../controllers/products.js')
router.get('/admin',productsCtrl.addNewProduct)
router.get('/', productsCtrl.index)
router.post('/',productsCtrl.create)

// router.get('/new', isLoggedIn, moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);
// router.post('/', isLoggedIn, moviesCtrl.create);
module.exports = router;