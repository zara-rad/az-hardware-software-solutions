import express from "express";
import { login, createAdmin } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/login", loginLimiter, login);
router.post("/create-admin", createAdmin);

export default router;
