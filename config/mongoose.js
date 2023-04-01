const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
    // localhost:27017 may not work, thus use 127.0.0.1:27017
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB', {
    useNewUrlParser: true
});

const db = mongoose.connection;

// on error connecting to db
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// on sucessfully connecting to db
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;