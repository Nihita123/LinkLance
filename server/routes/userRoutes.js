import express from "express";
import { getAllUsers, getUserById } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   GET /api/users
router.get("/", protect, getAllUsers);

// @route   GET /api/users/:id
router.get("/:id", protect, getUserById);

export default router;
