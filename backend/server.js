import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// 🔹 Root endpoint
app.get("/", (req, res) => {
  res.send("✅ API is running successfully...");
});

// 🔹 Routes
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);

// 🔹 Error handling (اختیاری ولی حرفه‌ای)
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`)
);
