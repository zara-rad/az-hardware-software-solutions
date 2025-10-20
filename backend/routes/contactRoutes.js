import express from "express";
import { sendContactForm } from "../controllers/contactController.js";
import ContactMessage from "../models/ContactMessage.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", sendContactForm);

// GET all messages
router.get("/admin", protect, async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (err) {
    console.error("Get contact messages error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET single message
router.get("/admin/:id", protect, async (req, res) => {
  try {
    const msg = await ContactMessage.findById(req.params.id);
    if (!msg)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: msg });
  } catch (err) {
    console.error("Get contact message error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE message
router.delete("/admin/:id", protect, async (req, res) => {
  try {
    const msg = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!msg)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    console.error("Delete contact message error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
