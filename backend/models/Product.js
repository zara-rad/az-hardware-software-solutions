import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, default: "General" },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  images: [String], // تا ۵ تا عکس
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);
