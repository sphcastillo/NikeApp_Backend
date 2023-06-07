const express = require('express');
const productRoutes = require("./router/productRoutes");

// initalize our application - the instance of our app
const app = express();
const PORT = 3000;

app.use('/products', productRoutes);

// specify endpoint - request for route endpoint
// send response 
app.get("/", (req, res) => {
    res.send("<h2>HELLO WORLD !!!!</h2>")
})


// provide a port where to listen & provide a callback that will be executed when the app runs
app.listen(PORT, () => {
    console.log('API is listening on port:', PORT);
})