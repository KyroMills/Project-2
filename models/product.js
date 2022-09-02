const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productsSchema = new Schema({
    name: { type: String, enum: ["Ram", "CPU", "GPU","PSU","Motherboard"] },
    price: { type: Number, min: 0 },
})

module.exports = mongoose.model('Product', productsSchema)