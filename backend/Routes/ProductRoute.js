const express=require('express');
const router = express.Router();


const product = require('../Controllers/product');

router.route('/products/:username').get( product.getProducts);
router.route('/product/:id').get( product.getProductById);
router.route('/productsall').get( product.getAllProducts);
router.route('/products').post( product.createProduct);
router.route('/products/:id').patch( product.updateProduct);
router.route('/products/:id').delete( product.deleteProduct);

module.exports = router;