//import express
const express = require('express');

//import mongoose
const mongoose = require('mongoose');

//import cors
const cors = require('cors');

//create an instance of express
const app = express();

//select our port
const port = 8000;

//enable cors
app.use(cors());

//use expres and return json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connect to mongoose config
require('./config/mongoose.config');

//import routes and include (app) for express
require('./routes/author.routes.js')(app)

//listen for connection on specified ports
app.listen(port, () => console.log(`Listening on port ${port}`));