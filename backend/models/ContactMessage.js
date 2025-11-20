import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    service: { type: String },
    budget: { type: String },
    message: { type: String, required: true },
    serialNumber: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("ContactMessage", contactMessageSchema);
