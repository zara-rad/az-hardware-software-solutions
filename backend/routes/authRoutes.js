import express from "express";
import { login, createAdmin } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimit.js";

const router = express.Router();
// 🔒 محدودیت روی Login
router.post("/login", loginLimiter, login);
//router.post("/login", login);
router.post("/create-admin", createAdmin);

export default router;
