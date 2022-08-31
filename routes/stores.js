var express = require('express');
var router = express.Router();
const storesCtrl = require('../controllers/stores');
const store = require('../models/store');


router.get('/', storesCtrl.index);
router.get('/new',storesCtrl.new);
router.get('/:id',storesCtrl.show)
router.post('/:id', storesCtrl.create)
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
