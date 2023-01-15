
mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Attributes of the Course object
var productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    productcode: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    dateofwithdrawal: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true
    },
    userid:{
        type: String,
        required: true
    }
}); 

module.exports =  mongoose.model('Product', productSchema);