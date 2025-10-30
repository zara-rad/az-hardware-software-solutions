import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// 🔹 Load environment variables
dotenv.config();

// 🔹 Connect to MongoDB
connectDB();

// 🔹 Initialize Express
const app = express();
app.use(cors());

// 🟢 تنظیم محدودیت برای ارسال داده (مثل عکس base64 یا متن طولانی)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// 🔹 مسیر مطلق پروژه
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 بررسی و ساخت پوشه‌ی uploads در صورت نبود
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
  console.log("📁 'uploads' folder created automatically.");
}

// 🔹 ارائه‌ی فایل‌های آپلودی برای دسترسی از فرانت
app.use("/uploads", express.static(uploadPath));

// 🔹 مسیرهای API
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/products", productRoutes);

// 🔹 مسیر تست ساده
app.get("/", (req, res) => {
  res.send("✅ API is running successfully...");
});

// 🔹 Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// 🚀 Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
);




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contactRoutes.js";
// import quoteRoutes from "./routes/quoteRoutes.js";
// import authRoutes from "./routes/authRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// // 📂 مسیر فایل‌های آپلود شده (عکس محصولات)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("✅ API is running successfully...");
// });

// app.use("/api/contact", contactRoutes);
// app.use("/api/quote", quoteRoutes);
// app.use("/api/products", productRoutes);

// // 🔹 Error handling
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err.stack);
//   res.status(500).json({ error: "Internal server error" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(
//     `🚀 Server running in ${
//       process.env.NODE_ENV || "development"
//     } mode on port ${PORT}`
//   )
// );
