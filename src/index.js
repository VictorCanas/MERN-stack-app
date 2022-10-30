const { setDefaultResultOrder } = require('dns');
const express = require('express');
const morgan = require('morgan');
const app = express(); 
const port = 3000
// Settings 

// Middlewares - functions that act before a route
app.use(morgan('dev'));
//this function checks if is formatted in JSON
app.use(express.json());
 
// Routes
app.use(require('./routes/task.routes'));

// Static Files

//Starting the server
app.listen(port, () => {
  console.log(`Server on port ${port}`)
}); 
 

//nodemon helps restart the server anytime there is a change on js files 