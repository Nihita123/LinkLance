import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  applyToProject,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a project (Client)
router.post("/", protect, createProject);

// Get all projects (Public)
router.get("/", getAllProjects);

// Get single project by ID
router.get("/:id", getProjectById);

// Apply to a project (Freelancer)
router.post("/:id/apply", protect, applyToProject);

export default router;
