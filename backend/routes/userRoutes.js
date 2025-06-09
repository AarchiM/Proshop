import express from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUsers,
    updateUserProfile,
    getUserProfile,
    deleteUser,
    getUserById,
    updateUser,
} from "../controllers/userController.js";
import {protect, admin} from '../middleware/authMiddleware.js'

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
router.post('/logout',logoutUser);
router.post('/login',authUser);

export default router;
