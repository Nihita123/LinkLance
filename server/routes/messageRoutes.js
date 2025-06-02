import express from "express";
import {
  sendMessage,
  getMessagesForProject,
} from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Send message
router.post("/:projectId", protect, sendMessage);

// Get all messages for a project
router.get("/:projectId", protect, getMessagesForProject);

export default router;
