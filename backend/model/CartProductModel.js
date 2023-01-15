mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CartProduct = new Schema({
    productid: {
        type: String,
        required: true
    },
    cartid:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('CartProduct', CartProduct);