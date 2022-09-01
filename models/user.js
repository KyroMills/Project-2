const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    Name: String,
    Age: Number,
    Cart: []
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);