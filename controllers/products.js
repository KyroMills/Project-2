const Store = require('../models/store');
const Product = require('../models/product');
const product = require('../models/product');

function show(req,res){
    Store.findById(req.params.id, function (err, store){
        Product.find({store: product._id}, function(err, products){
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
        res.render('stores/index',{products})
    })
}

function addNewProduct(req,res) {
    res.render('products/new')
}
function createProduct(req, res) {

    const product = new Product(req.body);
    product.save(function(err) {
      if (err) console.log(err);
    res.redirect('/products')
    });
  }
  function deleteProduct(req, res) {
    console.log('hi')
    Product.findOneAndDelete(
      // Ensue that the book was created by the logged in user
      {_id: req.params.id, userRecommending: req.user._id}, function(err) {
        // Deleted book, so must redirect to index
        res.redirect('/products');
      }
    );
  }
  function edit(req, res) {
    Product.findOne({_id: req.params.id}, function(err, product) {
      if (err || !product) return res.redirect('/products');
      res.render('products/edit', {product});
    });
  }
  function update(req, res) {
    Product.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, product) {
        if (err || !product) return res.redirect('/products');
        res.redirect(`/stores/index`);
      }
    );
  }
module.exports = {
    show,
    createProduct,
    index,
    addNewProduct,
    deleteProduct,
    edit,
    update,
}