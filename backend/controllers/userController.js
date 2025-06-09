import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const authUser = asyncHandler (async (req, res) => {
const {email, password }  = req.body;
const user = await User.findOne({email});
if(user && await user.matchPassword(password)){
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d'})
    
    //set jwt as http only cockie 
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 //30days
    })

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    })
}else{
    res.status(401);
    throw new Error('Invalid email or password')
}
    res.send('auth user');
});
const registerUser = asyncHandler (async (req, res) => {
    res.send('register user');
});
const logoutUser = asyncHandler (async (req, res) => {
    res.send('logout user');
});
const updateUserProfile = asyncHandler (async (req, res) => {
    res.send('update user profile');
});
const updateUser = asyncHandler (async (req, res) => {
    res.send('update user');
});
const getUsers = asyncHandler (async (req, res) => {
    res.send('get users');
});
const getUserProfile = asyncHandler (async (req, res) => {
    res.send('get User Profile');
});
const getUserById = asyncHandler (async (req, res) => {
    res.send('get User By Id');
});
const deleteUser = asyncHandler (async (req, res) => {
    res.send('delete user profile');
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUsers,
    updateUserProfile,
    getUserProfile,
    deleteUser,
    getUserById,
    updateUser,
}