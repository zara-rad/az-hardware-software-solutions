import rateLimit from "express-rate-limit";

// محدودیت برای Login
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 دقیقه
  max: 5, // هر IP فقط 5 بار اجازه داره Login تست کنه
  message: {
    success: false,
    message: "Too many login attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});
