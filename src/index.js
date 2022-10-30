const { setDefaultResultOrder } = require('dns');
const express = require('express');
const app = express(); 
const port = 3000
// Settings

// Middlewares
 
// Routes sasd

// Static Files

//Send a HellO World text as an example
app.get('/', (req, res) => {
 res.send('Hello World!') 
})
//Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); 
 

//nodemon helps restart the server anytime there is a change on js files 