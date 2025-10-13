import express from "express";
import { sendContactForm } from "../controllers/contactController.js";

const router = express.Router();

// ✅ ارسال پیام از فرم تماس
router.post("/", sendContactForm);

// ⚙️ رزرو شده برای آینده (admin panel → نمایش پیام‌ها)
router.get("/", (req, res) => {
  res.status(200).json({ message: "Admin route placeholder — coming soon" });
});

export default router;



// import express from "express";
// import { sendContactMessage, getAllMessages } from "../controllers/contactController.js";

// const router = express.Router();

// // ارسال پیام
// router.post("/", sendContactMessage);

// // گرفتن تمام پیام‌ها (برای آینده‌ی admin panel)
// router.get("/", getAllMessages);

// export default router;
