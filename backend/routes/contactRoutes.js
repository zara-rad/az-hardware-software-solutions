import express from "express";
import { sendContactMessage, getAllMessages } from "../controllers/contactController.js";

const router = express.Router();

// ارسال پیام
router.post("/", sendContactMessage);

// گرفتن تمام پیام‌ها (برای آینده‌ی admin panel)
router.get("/", getAllMessages);

export default router;
