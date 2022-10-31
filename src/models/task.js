const { default: mongoose } = require('mongoose');
const moongoose = require('moongoose');

//connecting to a databse here by instering link or database
mongoose.connect() 

//To start mongodb/brew/mongodb-community now and restart at login:
//brew services start mongodb/brew/mongodb-community

//To stop a mongod running as a macOS service, use the following command as needed:
//brew services start mongodb/brew/mongodb-community

//To verify that MongoDB is running, perform one of the following:
//brew services list

//To begin using MongoDB, connect  mongos to the running instance. From a new terminal, issue the following:
//mongosh
