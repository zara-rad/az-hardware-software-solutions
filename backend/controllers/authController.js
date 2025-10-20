import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user._id, email: user.email, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Auth login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createAdmin = async (req, res) => {
  try {
    if (
      process.env.ADMIN_CREATION_KEY &&
      req.body.adminKey !== process.env.ADMIN_CREATION_KEY
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ message: "Name, email, password required" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashed, role: "admin" });
    await user.save();

    res
      .status(201)
      .json({
        message: "Admin created",
        user: { id: user._id, email: user.email, name: user.name },
      });
  } catch (err) {
    console.error("createAdmin error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
