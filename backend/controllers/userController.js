import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js';

const authUser = asyncHandler (async (req, res) => {
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