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
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many login attempts. Try again in 15 minutes.",
  },
});
const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  message: {
    success: false,
    message: "Too many requests. Try again later.",
  },
});
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
});

dotenv.config();

connectDB();

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204).end());

const allowedOrigins = [
  "https://aqbitz.de",
  "https://www.aqbitz.de",
  "https://az-hardware-software-solutions.vercel.app",
  "http://localhost:5173",
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

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
  console.log("📁 'uploads' folder created automatically.");
}

app.use("/uploads", express.static(uploadPath));
app.use("/api/", apiLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ API is running successfully...");
});

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(
    `🚀 Server running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`
  )
);
