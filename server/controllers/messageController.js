import Message from "../models/Message.js";

// @desc    Send a message
// @route   POST /api/messages/:projectId
export const sendMessage = async (req, res) => {
  const { text } = req.body;
  try {
    const newMessage = new Message({
      sender: req.user._id,
      project: req.params.projectId,
      text,
    });

    const saved = await newMessage.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error sending message" });
  }
};

// @desc    Get messages for a project
// @route   GET /api/messages/:projectId
export const getMessagesForProject = async (req, res) => {
  try {
    const messages = await Message.find({
      project: req.params.projectId,
    }).populate("sender", "name email");
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};
