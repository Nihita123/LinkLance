import asyncHandler from "express-async-handler";
import User from "../models/User.js";

// @desc    Get all users
// @route   GET /api/users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(users);
});

// @desc    Get single user by ID
// @route   GET /api/users/:id
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
