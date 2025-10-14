// backend/scripts/createAdmin.js
/**
 * Usage:
 *   node scripts/createAdmin.js "Admin Name" "admin@example.com" "password123"
 *
 * یا اگر از npm script استفاده می‌کنی:
 *   node ./backend/scripts/createAdmin.js ...
 */

import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();
await connectDB();

const [name, email, password] = process.argv.slice(2);
if (!name || !email || !password) {
  console.error("Usage: node createAdmin.js <name> <email> <password>");
  process.exit(1);
}

const exists = await User.findOne({ email });
if (exists) {
  console.log("User already exists:", email);
  process.exit(0);
}

const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);

const user = new User({ name, email, password: hashed });
await user.save();
console.log("Admin created:", user.email);
process.exit(0);
