const { setDefaultResultOrder } = require('dns');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express(); 
const port = 3000
// Settings 

// Middlewares - functions that act before a route
app.use(morgan('dev'));
//this function checks if is formatted in JSON
app.use(express.json());
  
// Routes
app.use('/api/tasks' ,require('./routes/task.routes'));

// Static Files
//Able to show directory of project
//console.log(path.join(__dirname, 'public'));

//Finds the public folder where index.html is being saved and duisplays on localhost:3000/homepage
app.use(express.static(path.join(__dirname, 'public')));

 
//Starting the server 
app.listen(port, () => {
  console.log(`Server on port ${port}`)
}); 
 

//nodemon helps restart the server anytime there is a change on js files 