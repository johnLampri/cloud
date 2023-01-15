const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../model/CartModel');
const Product = require('../model/ProductModel');
const CartProduct = require('../model/CartProductModel');

var router = express.Router();


const getCarts = async (req, res) =>{
    const cart = await Cart.find({ userid: req.params.username });
    if (!cart) return res.status(204).json({ 'message': 'No products found.' });
    res.json(cart);
}


const getCartsById = async (req, res) =>{
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });
    const cart = await Cart.findOne({ _id: req.params.id }).exec();
    if (!cart) return res.status(204).json({ 'message': 'No carts found.' });
    res.json(cart);
}


const getCartOfSessionUser = async (req, res) =>{
    if (!req?.params?.userid) return res.status(400).json({ 'message': 'Cart ID required.' });
    const cart = await Cart.findOne({ userid: req.params.userid });
    if (!cart) return res.status(204).json({ 'message': 'No carts found.' });
    res.json(cart);
}

const createCart = async (req, res) =>{
    if (!req?.body?.userid || !req?.body?.dateOfInsertion) {
        return res.status(400).json({ 'message': 'userId, date of withdrawal are required' });
    }
    try{
        const result = await Cart.create({
            userid: req.body.userid,
            dateOfInsertion: req.body.dateOfInsertion
        });
        res.status(201).json(result);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

const AddProductToCart = async(req, res) =>{

    if (!req?.params?.id || !req?.params?.userid) {
        return res.status(400).json({ 'message': 'productid is required' });
    }
    try{
    const cart = await Cart.findOne({ userid: req.params.userid }) || await Cart.create({ userid: req.params.userid }) ;
    if(!cart) return res.status(400).json({ 'message': 'This product code does not correspond to any product.' });
    const product = await Product.findOne({productcode: req.params.id});
    if(!product) return res.status(400).json({ 'message': 'This product code does not correspond to any product.' });
    cartProduct=await CartProduct.findOne({productid: product._id , cartid: cart._id});
    if(cartProduct) return res.status(400).json({ 'message': 'This cartProduct exists.' });

    await CartProduct.create({
        productid: product._id,
        cartid: cart._id
    });

    res.status(200).json({msg: "Product inserted to cart successfully"});
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

const updateCart = async(req, res) =>{
}

const getProductsOfCart = async(req, res) =>{
    if (!req?.params?.userid) {
        return res.status(400).json({ 'message': 'userid is required' });
    }
    try{
    const cart = await Cart.findOne({ userid: req.params.userid });
    if(!cart) return res.status(400).json({ 'message': 'This cart code does not correspond to any cart.' });

    const product = await CartProduct.find({cartid: cart._id});
    if(!product) return res.status(400).json({ 'message': 'This cart code does not correspond to any product in cart.' });

    res.status(200).json(product);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}  

const deleteProductOfCart= async (req, res) => {
    if (!req?.params?.id || !req?.params?.userid) {
        return res.status(400).json({ 'message': 'productid, userid is required' });
    }
    try {
        
   
    const product = await Product.findOne({ productcode: req.params.id });
    if(!product) return res.status(400).json({ 'message': 'This product code does not correspond to any product.' });
    const cart = await Cart.findOne({ userid: req.params.userid }).exec();
    const cartproduct = await CartProduct.findOne({ cartid: cart._id , productid:product._id }).exec();
    
    const result = await cartproduct.deleteOne();
    res.status(200).json({msg: "Product deleted successfully"});
} catch (error) {
    res.status(500).json({msg: error.message});

}
}



module.exports = {
    createCart,
    AddProductToCart,
    getProductsOfCart,
    deleteProductOfCart,
    getCarts,
    updateCart,
    getCartOfSessionUser,
    getCartsById
}