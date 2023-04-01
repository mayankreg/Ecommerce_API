// importing required packages : express/ parser/ mongoose
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();

// using body parser to parse over the request body to access data
app.use(bodyParser.urlencoded({extended: true}));

// using routes for different API hits described in products.js
app.use('/products', require('./routes/products'));

// starting server & logging in console
app.listen(3000, function(){
    console.log('API is live on http://localhost:3000/products');
});