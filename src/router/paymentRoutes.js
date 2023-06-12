const express = require("express");
const router = express.Router();
const stripe = require('stripe')('sk_test_51NGP9fG2sJl7vfGOUOfp4VWCSSE8lS8HzHtYFpi32FAfTfVQQ9CUWtk3oAnlClGRK57149lhAwKBDEz97wqrmmcJ00HthkT0Tn');

// router endpoints 

router.post('/intents', async  (req,res)  => {
    // Create a PaymentIntent
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount, // Integer => we are talking about pennies, USD
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            }
        });
        // Return the secret

        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (error){
        res.status(400).json({ error: error.message });
    }
});

module.exports = router; 