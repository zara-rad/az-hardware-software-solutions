//admin protection
import express from "express";
import multer from "multer";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

/* ---------------------- 🛡 Secure File Upload ---------------------- */

// Storage + Safe File Names
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // جلوگیری از نام‌های خطرناک
    const safeName = Date.now() + "-" + file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    cb(null, safeName);
  },
});

// Only allow images
function imageFilter(req, file, cb) {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
}

// Limit: Max 3MB per image
const upload = multer({
  storage,
  fileFilter: imageFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

/* ------------------------------------------------------------------- */

// 🟢 Public — Everyone can SEE products
router.get("/", getProducts);

// 🔐 Secure — Only Admin can CREATE
router.post("/", protect, adminOnly, upload.array("images", 5), createProduct);

// 🔐 Secure — Only Admin can UPDATE
router.put("/:id", protect, adminOnly, upload.array("images", 5), updateProduct);

// 🔐 Secure — Only Admin can DELETE
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;


// import express from "express";
// import multer from "multer";
// import {
//   getProducts,
//   createProduct,
//     updateProduct,
//   deleteProduct,
// } from "../controllers/productController.js";

// const router = express.Router();

// // 🖼️ پیکربندی Multer برای آپلود عکس
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// // 📦 مسیرها
// router.get("/", getProducts); // همه محصولات
// router.post("/", upload.array("images", 5), createProduct); // افزودن محصول (تا ۵ عکس)
// router.put("/:id", upload.array("images", 5), updateProduct); // 🟢 اضافه شد

// router.delete("/:id", deleteProduct); // حذف محصول

// export default router;
