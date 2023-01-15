require('./model/mongodb');

const ProductRoute= require('./Routes/ProductRoute');
const CartRoute= require('./Routes/CartRoute');
const UserRoute= require('./Routes/UserRoute');
//Import the necessary packages
const express = require('express');

var app = express();
const path = require('path');
const bodyparser = require('body-parser');


app.use(express.json());
app.use(ProductRoute);
app.use(CartRoute);
app.use(UserRoute);

app.listen(5001, ()=> {
    console.log('Server up and running...');
});