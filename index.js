const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js');

const port = 3000||process.env.port;

app.use(express.json());

// routes
app.use("/api/products",productRoute)
//
app.listen(port,()=>{

})

mongoose.connect('mongodb+srv://admin:NydGWdzmRgI7Tsn3@cruddb.ax9ldmi.mongodb.net/?retryWrites=true&w=majority&appName=CRUDdb')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(() => {
    console.log('Connection failed');
  });


//NydGWdzmRgI7Tsn3