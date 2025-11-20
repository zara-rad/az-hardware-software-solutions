import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, default: "General" },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  images: [String],
  inStock: { type: Boolean, default: true },
  serialNumber: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);
