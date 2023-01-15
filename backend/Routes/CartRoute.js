const express=require('express');
const router = express.Router();

const cart = require('../Controllers/cart');

router.route('/carts/:id&:1').get( cart.getCartsById);
router.route('/cart/:userid').get( cart.getCartOfSessionUser);
router.route('/carts/:userid').get( cart.getProductsOfCart);
router.route('/carts').post( cart.createCart);
//router.route('/carts/:id').patch( cart.updateCart);
router.route('/carts/update/:id&:userid').patch( cart.AddProductToCart);
router.route('/carts/:id&:userid').delete( cart.deleteProductOfCart);

module.exports = router;