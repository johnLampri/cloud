const express = require('express');
const mongoose = require('mongoose');
const Product = require('../model/ProductModel');

var router = express.Router();

const getProducts = async (req, res) =>{
    const product = await Product.find({ userid: req.params.username });
    if (!product) return res.status(204).json({ 'message': 'No products found.' });
    res.json(product);
}

const getProductById = async (req, res) =>{
    try{
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });
    const products = await Product.findOne({ _id: req.params.id }).exec();
    if (!products) return res.status(204).json({ 'message': 'No products found.' });
    res.json(products);
    }catch(error){
        res.status(500).json({msg: error.message});

    }
}

const getAllProducts = async (req, res) =>{
    const products = await Product.find();
    if (!products) return res.status(204).json({ 'message': 'No products found.' });
    res.json(products);
}

const createProduct = async (req, res) =>{
    if (!req?.body?.name || !req?.body?.productcode || !req?.body?.price || !req?.body?.dateofwithdrawal || !req?.body?.category || !req?.body?.userid) {
        return res.status(400).json({ 'message': 'name,productcode,price,date of withdrawalm category, userId are required' });
    }
    try{
        const result = await Product.create({
            name: req.body.name,
            price: req.body.price,
            productcode: req.body.productcode,
            dateofwithdrawal: req.body.dateofwithdrawal,
            category: req.body.category,
            userid: req.body.userid
        });
        res.status(201).json(result);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

 const updateProduct = async(req, res) =>{
    if (!req?.params?.id ) {
        return res.status(400).json({ 'message': 'productid is required' });
    }
    
    const product = await Product.findOne({ _id: req.params.id }).exec();
    if(!product) return res.status(400).json({ 'message': 'This product code does not correspond to any product.' });

    if (req.body?.name) product.name = req.body.name;
    if (req.body?.price) product.price = req.body.price;
    //if (req.body?.productcode) product.productcode = req.body.productcode;
    if (req.body?.dateofwithdrawal) product.dateofwithdrawal = req.body.dateofwithdrawal;
    if (req.body?.category) product.category = req.body.category;
    const result = await product.save();
    res.status(200).json({msg: "Product updated successfully"});
}

const deleteProduct= async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });

    const product = await Product.findOne({ _id: req.params.id }).exec();
    if(!product) return res.status(400).json({ 'message': 'This product code does not correspond to any product.' });
    const result = await product.deleteOne();
    res.status(200).json({msg: "Product deleted successfully"});
}



module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getAllProducts,
    getProductById
}