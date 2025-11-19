
console.clear();
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
import helmet from "helmet";
import rateLimit from "express-rate-limit";
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 دقیقه
  max: 5, // هر IP فقط 5 بار تلاش
  message: {
    success: false,
    message: "Too many login attempts. Try again in 15 minutes."
  }
});
const contactLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 دقیقه
  max: 3, // هر IP فقط ۳ پیام در دقیقه
  message: {
    success: false,
    message: "Too many requests. Try again later."
  }
});
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 دقیقه
  max: 500, // در ۱۵ دقیقه فقط ۵۰۰ درخواست
});

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Fix favicon issue
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Allowed origins
const allowedOrigins = [
  "https://aqbitz.de",
  "http://localhost:5173",
  "http://localhost:5050"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Security Headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false
  })
);




// Body parsers
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Static upload directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
  console.log("📁 'uploads' folder created automatically.");
}

app.use("/uploads", express.static(uploadPath));
app.use("/api/", apiLimiter);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ API is running successfully...");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  )
);




// console.clear()
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
// import fs from "fs";
// import helmet from "helmet";
// import xss from "xss-clean";

// // 🔹 Load environment variables
// dotenv.config();

// // 🔹 Connect to MongoDB
// connectDB();

// // 🔹 Initialize Express
// const app = express();
// // 🟢 جلوگیری از خطای Helmet برای favicon
// app.get("/favicon.ico", (req, res) => res.status(204).end());

// // لیست دامین‌های مجاز
// const allowedOrigins = [
//   "https://aqbitz.de",
//   "http://localhost:5173", // برای توسعه
//   "http://localhost:5050",
// ];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // درخواست‌های Postman و سرورهای internal بدون origin هستند → اجازه بده
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       } else {
//         return callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// //app.use(cors());

// // 🔐 Security Headers
// // 🔐 Helmet Config (نسخه جدید)
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       useDefaults: true,
//       directives: {
//         "default-src": ["'self'"],
//         "img-src": ["'self'", "data:", "blob:"],
//         "script-src": ["'self'"],
//         "connect-src": ["'self'"],
//         "manifest-src": ["'self'"],
//       },
//     },
//   })
// );



// // 🛡 XSS Protection

// app.use(xss());

// // 🟢 تنظیم محدودیت برای ارسال داده (مثل عکس base64 یا متن طولانی)
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// // 🔹 مسیر مطلق پروژه
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // 📂 بررسی و ساخت پوشه‌ی uploads در صورت نبود
// const uploadPath = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath);
//   console.log("📁 'uploads' folder created automatically.");
// }

// // 🔹 ارائه‌ی فایل‌های آپلودی برای دسترسی از فرانت
// app.use("/uploads", express.static(uploadPath));

// // 🔹 مسیرهای API
// app.use("/api/auth", authRoutes);
// app.use("/api/contact", contactRoutes);
// app.use("/api/quote", quoteRoutes);
// app.use("/api/products", productRoutes);

// // 🔹 مسیر تست ساده
// app.get("/", (req, res) => {
//   res.send("✅ API is running successfully...");
// });

// // 🔹 Error handling middleware
// app.use((err, req, res, next) => {
//   console.error("❌ Server Error:", err.stack);
//   res.status(500).json({ error: "Internal server error" });
// });

// // 🚀 Start server
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () =>
//   console.log(
//     `🚀 Server running in ${
//       process.env.NODE_ENV || "development"
//     } mode on port ${PORT}`
//   )
// );
