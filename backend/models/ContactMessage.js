import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String },
    budget: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);
