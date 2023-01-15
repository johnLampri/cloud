const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/UserModel');


var router = express.Router();


const getUsers = async (req, res) =>{
    const user = await User.find();
    if (!user) return res.status(204).json({ 'message': 'No users found.' });
    res.json(user);
}

const getUserById = async (req, res) =>{
    if (!req?.params?.id ) {
        return res.status(400).json({ 'message': 'userid is required' });
    }try{
    const user = await User.find({userid: req.params.userid });
    if (!user) return res.status(204).json({ 'message': 'No users found.' });
    res.json(user);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

const createUser = async (req, res) =>{
    if (!req?.body?.name || !req?.body?.surname || !req?.body?.lastname || !req?.body?.userid  ) {
        return res.status(400).json({ 'message': 'name, surname, lastname, userid are required' });
    }
    try{
        const result = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            lastname: req.body.lastname,
            userid: req.body.userid
        });
        res.status(201).json(result);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

const updateUser = async(req, res) =>{
    if (!req?.params?.id ) {
        return res.status(400).json({ 'message': 'userid is required' });
    }
    try {
        const user = await User.findOne({ userid: req.params.id }).exec();
         if(!user) return res.status(400).json({ 'message': 'This user code does not correspond to any user.' });

        if (req.body?.name) user.name = req.body.name;
        if (req.body?.surname) user.surname = req.body.surname;
        if (req.body?.lastname) user.lastname = req.body.lastname;
        if (req.body?.confirmed) user.confirmed = req.body.confirmed;

        const result = await user.save();
        res.status(200).json({msg: "User updated successfully"});
    } catch (error) {
        res.status(400).json({msg: error.message});

    }
}


const deleteUser= async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });
    const user = await User.findOne({ userid: req.params.id });
    if(!user) return res.status(400).json({ 'message': 'This user id does not correspond to any users.' });
    try {
        const result = await user.deleteOne();
        res.status(200).json({msg: "Product deleted successfully"});
    }catch (error) {
        res.status(400).json({msg: error.message});
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser
}