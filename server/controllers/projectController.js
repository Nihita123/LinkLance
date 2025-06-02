import Project from "../models/Project.js";
import User from "../models/User.js";

// @desc    Create new project
// @route   POST /api/projects
export const createProject = async (req, res) => {
  try {
    const { title, description, budget, deadline } = req.body;
    const newProject = new Project({
      client: req.user._id,
      title,
      description,
      budget,
      deadline,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Server error creating project" });
  }
};

// @desc    Get all projects
// @route   GET /api/projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("client", "name email");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching projects" });
  }
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      "client",
      "name email"
    );
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching project" });
  }
};

// @desc    Apply to project
// @route   POST /api/projects/:id/apply
export const applyToProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    if (project.applicants.includes(req.user._id)) {
      return res
        .status(400)
        .json({ message: "Already applied to this project" });
    }

    project.applicants.push(req.user._id);
    await project.save();

    res.status(200).json({ message: "Applied successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error applying to project" });
  }
};
