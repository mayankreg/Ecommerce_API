// importing product schema
const Product = require('../models/product');

// function to get all the products from db
    // GET : http://localhost:3000/products
module.exports.products = function(req, res){
    Product.find({}, function(err, foundProducts){
        if(err){
            res.send(err);
        }else{
            console.log(foundProducts);
            res.send(foundProducts);
        }
    });
}

// function to create a new product
    // POST : http://localhost:3000/products/create
module.exports.create = function(req, res){ 
    
    // creating product
    const newProduct = new Product({
        name: req.body.name,
        quantity: req.body.quantity
    });

    // saving to db
    newProduct.save(function(err){
        if(err){
            res.send(err);
        }else{
            res.send('New product created successfully.');
        }
    });
}

// function to delete a product using it's ID
    // DELETE : http://localhost:3000/products/64227a32abef9cb0ea86de1d
module.exports.delete = function(req, res){
    
    // searching & deleting
    Product.deleteOne(
        {_id: req.params.productID},
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send({
                    message: "Product deleted successfully"
                });
            }
        });
}

// function to update a product's quantity
    // POST : http://localhost:3000/products/64227bc73886ac1c14bdeacf/update_quantity?number=18
module.exports.updateQunatity = function(req, res){
    
    // getting product ID from params in req
    const ID = req.params.productID;
    
    // find the product using id
    Product.findById(ID, function(err, prod){
        if(err){
            res.send(err);
        }else{
            
            // pass positive value to increment & negative value to decrement
                // adding value in db & query param value
            const newQty = parseInt(prod.quantity) + parseInt(req.query.number);

            // update the product's quantity
            Product.findByIdAndUpdate(ID, {quantity: newQty}, function(err, updatedProduct){
                if(err){
                    res.send(err);
                }else{
                    updatedProduct.quantity = newQty;
                    res.send({
                        product: updatedProduct,
                        message: 'updated successfully'
                    });
                }
            });
        }
    });
}