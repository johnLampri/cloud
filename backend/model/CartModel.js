
mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CartSchema = new Schema({
    dateOfInsertion: {
        type: Date
    },
    userid:{
        type: String,
        required: true,
        unique:true
    }
});
module.exports = mongoose.model('Cart', CartSchema);