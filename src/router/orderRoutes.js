const express = require('express');
const router = express.Router();

// find an order
// get order based on reference, a small string that we can send to the user or email or sms as tracking code
// not ID 
router.get('/:reference', (req, res)  => {
    res.send(`Getting order with reference: ${req.params.reference}`);
});

// create order endpoint
// POST operationå
router.post('/', (req, res) => {
    res.send("Creating an order");
});

module.exports = router;