const Store = require('../models/store');
const Product = require('../models/product');

function show(req,res){
    Store.findById(req.params.id, function (err, store){
        Product.find({store: store._id}, function(err, products){
            res.render('stores/show', {title: 'Store Detail', store, products});
        })
    })
}
// function createProduct(req,res) {
//     let storeId = req.params.id;
//     req.body.store = storeId;
//     Product.create(req.body, function (err, product){
//         res.redirect(`/stores/${storeId}`)
//     });
// }

function index(req,res){
    Product.find({}, function(err, products){
        res.render('stores/show',{products})
    })
}

function addNewProduct(req,res) {
    res.render('products/new')
}
function create(req, res) {

    const product = new Product(req.body);
    product.save(function(err) {
      if (err) console.log(err);
    res.redirect('/products')
    });
  }
module.exports = {
    show,
    // createProduct,
    index,
    addNewProduct,
    create,
}