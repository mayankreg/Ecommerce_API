// importing express & router
const express = require('express');
const router = express.Router();

// initializing & accessing products controllers : here all urls are defined for different action
const productsController = require('../controllers/products_controller');

// to getting all the products in db 
    // URL [POST]: /products
router.get('/', productsController.products);

// to create a new product
    // URL [POST]: / products/create
router.post('/create', productsController.create);

// to delete a product using it's ID
    // URL [POST]: / products/:id
router.delete('/:productID', productsController.delete);

// updating product quantity: increasing/decreasing
    // URL [POST]: / products/ :id/update_quantity/?numbers=10
router.post('/:productID/update_quantity/', productsController.updateQunatity);

module.exports = router;