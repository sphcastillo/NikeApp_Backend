const express = require('express');
const router = express.Router();
const { getProduct, getAllProducts } = require('../database/products');

// get a list of products
router.get('/', async (req, res) => {
    const products = await getAllProducts();
    // see data in the console.log? - our connection will MongoDB is successful
    // console.log("products: ", products);
    res.send({ status: 'OK', data: products });
});

// get one product
router.get('/:productId', async (req, res) => {
    console.log("Query product with id: ", req.params.productId);
    try {
        const product = await getProduct(req.params.productId);
        // if product is null
        if(!product){
            res.status(404).send({ status: "FAILED", error: 'Product not found'})
            return;
        }

        res.send({ status: "OK", data: product });
    } catch (e){
        // HTTP status code 
        res.status(401).send({ status: "FAILED", error: e.message })  
    }
});

module.exports = router;