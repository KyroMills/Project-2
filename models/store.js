const mongoose = require('mongoose');
const Schema = mongoose.Schema

const storeSchema = new Schema({
    title: String,
    product: String,
    price: { type: Number, min: 0 },
})


module.exports = mongoose.model('Store',storeSchema);