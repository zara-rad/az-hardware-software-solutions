import nodemailer from "nodemailer";
import ContactMessage from "../models/ContactMessage.js";

// 📩 ارسال و ذخیره‌ی پیام تماس
export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    // ✅ ذخیره در دیتابیس
    const newMessage = await ContactMessage.create({
      name,
      email,
      service,
      budget,
      message,
    });

    // ✅ ارسال ایمیل با Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AZ Hardware Contact" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER || process.env.CONTACT_EMAIL,
      subject: `📬 New Contact Request from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service || "—"}</p>
        <p><b>Budget:</b> ${budget || "—"}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message saved and email sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("❌ Error in contact controller:", error);
    res.status(500).json({ error: "Server error while sending message." });
  }
};

// 📜 دریافت تمام پیام‌ها (برای admin panel)
export const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch messages." });
  }
};
