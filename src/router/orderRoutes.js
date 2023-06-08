const express = require('express');
const router = express.Router();
const { getOrder, createOrder } = require("../database/orders");

// find an order
// get order based on reference, a small string that we can send to the user or email or sms as tracking code
// not ID 
router.get('/:reference', async (req, res)  => {
    const order = await getOrder(req.params.reference);

    if(!order){
        res.status(404).send({ status: "FAILED", error: "Order not found"});
        return;
    }
    res.send({ status: "OK", data: order });
});

// create order endpoint
// POST operation
router.post('/', async (req, res) => {
    // req.body = data for the order
    const orderData = req.body;

    const ref = (Math.random() + 1).toString(36).substring(7);
    orderData.ref= ref;
    
    const newOrder = await createOrder(orderData);

    res.status(201).send({ status: "OK", data: newOrder });
});

module.exports = router;