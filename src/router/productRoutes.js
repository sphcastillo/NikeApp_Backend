const express = require('express');
const router = express.Router();

// get a list of products
router.get('/', (req, res) => {
    res.send("Get all products");
})

// get one product
router.get('/:productId', (req, res) => {
    res.send(`Get product with id ${req.params.productId}`)
});

module.exports = router;