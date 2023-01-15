const mongoose = require('mongoose');
//mongodb://mongo:27017/docker-db"
const uri = "//mongodb://mongo:27017/docker-db";
mongoose.connect(uri, {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});

//Connecting Node and MongoDB
require('./ProductModel');