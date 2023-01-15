
mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Attributes of the Course object
var UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    surname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true

    },
    confirmed: {
        type: Boolean,
        default: 0
    },
    userid:{
        type: String,
        required: true
    }
}); 

module.exports =  mongoose.model('User', UserSchema);