const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router= require('./Route');
const morgan = require('morgan');

//database
require('./DataBase')

//Route and Controllers
app.use(router)


app.listen(3000, ()=> console.log('Server running in port 3000'));

//app.listen(3000, () => console.log('Server running in port 3000'));