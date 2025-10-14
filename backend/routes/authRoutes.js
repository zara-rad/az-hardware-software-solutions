// backend/routes/authRoutes.js
import express from "express";
import { login, createAdmin } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);

// optional: enable only for initial setup or protect with ADMIN_CREATION_KEY env var check inside controller
router.post("/create-admin", createAdmin);

export default router;
