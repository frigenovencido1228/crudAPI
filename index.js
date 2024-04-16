const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');

app.use(express.json());

// routes
app.use("/api/products",productRoute)
//
app.listen(3000,()=>{

})

mongoose.connect('mongodb+srv://admin:NydGWdzmRgI7Tsn3@cruddb.ax9ldmi.mongodb.net/?retryWrites=true&w=majority&appName=CRUDdb')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(() => {
    console.log('Connection failed');
  });


//NydGWdzmRgI7Tsn3