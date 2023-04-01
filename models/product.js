// importing mongoose
const mongoose = require('mongoose');

// creating the product schema with fields : name & quantity
    // no need for internal revision of the document : hence keeping versionKey false
const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
},{
    versionKey: false
});

// creating & exporting a new model called "Product"
const Product = mongoose.model('Product', productSchema);

module.exports = Product;