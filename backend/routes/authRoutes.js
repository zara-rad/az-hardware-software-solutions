import express from "express";
import { login, createAdmin } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

// 🔒 Login with Rate Limit
router.post("/login", loginLimiter, login);

// 🔹 Create Admin (NO rate limit)
router.post("/create-admin", createAdmin);

export default router;
