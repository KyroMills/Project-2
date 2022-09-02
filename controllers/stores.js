const Store = require('../models/store')
const Product = require('../models/product');



function newStore(req,res) {
    res.render('stores/new')
}

function index(req,res) {
    Store.find({}, function(err, stores){
        if (err) return res.redirect('/');
        res.render('stores/index', { stores })
    })
}
function show(req,res){
    Product.findById(req.params.id, function (err, store){
        console.log(Store)
        Product.find({store}, function(err, products){
            res.render('stores/show', {title: 'Store Detail', store, products});
            
            console.log(products)
        })
    })
}
function create(req,res) {
    if (req.body.products === '') delete req.body.products;
    Store.create(req.body);
    console.log(req.body);
    res.redirect('stores');
}

module.exports = {
    new: newStore,
    index,
    show,
    create,
}