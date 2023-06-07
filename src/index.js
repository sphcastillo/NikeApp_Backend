const express = require('express');

// export in variable 
const PORT = 3000;

// initalize our application - the instance of our app
const app = express();

// in order to run: we need to call 
// provide a port where to listen
// provide a callback that will be executed when the app runs
app.listen(PORT, () => {
    console.log('API is listening on port:', PORT);
})