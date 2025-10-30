import express from "express";
import multer from "multer";
import {
  getProducts,
  createProduct,
    updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// 🖼️ پیکربندی Multer برای آپلود عکس
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// 📦 مسیرها
router.get("/", getProducts); // همه محصولات
router.post("/", upload.array("images", 5), createProduct); // افزودن محصول (تا ۵ عکس)
router.put("/:id", upload.array("images", 5), updateProduct); // 🟢 اضافه شد

router.delete("/:id", deleteProduct); // حذف محصول

export default router;
