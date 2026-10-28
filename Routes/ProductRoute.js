const express = require('express');
const router = express.Router(); //

//import the product controller
const productController = require('../Controller/ProductController');

//define the routes
router.post('/createproduct', productController.createProduct);

router.put('/updateproduct/:id', productController.updateProduct);

router.get('/getallproducts', productController.getAllProducts);

router.get('/getproduct/:id', productController.getByID);

router.delete('/deleteproduct/:id', productController.deleteProduct);

//export the router to be used in other files
module.exports = router;