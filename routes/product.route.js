const express = require('express');
const router = express.Router();
const {getProducts,getProductbyId,deleteProduct,updateProduct,postProduct} = require('../controllers/product.controller.js')

//get all products
router.get('/', getProducts);
//get product by ID
router.get('/:id',getProductbyId);
//add a product
router.post('/',postProduct);
//update a product
router.put('/:id',updateProduct);
//delete a product
router.delete('/:id',deleteProduct);

module.exports = router;