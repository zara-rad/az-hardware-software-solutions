import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

// 🔹 تابع تولید سریال‌نامبر
function generateSerial(category, title) {
  const cat = (category || "XX").slice(0, 2).toUpperCase(); // مثل LA برای Laptop
  const tit = (title || "YY").slice(0, 2).toLowerCase();   // مثل as برای asus
  const random = Math.floor(100000 + Math.random() * 900000); // عدد رندوم 6 رقمی
  return `${cat}${tit}${random}`;
}


// 📦 گرفتن همه محصولات
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➕ افزودن محصول جدید
export const createProduct = async (req, res) => {
  try {
    const images = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

    // 🔸 تولید سریال یکتا بر اساس دسته و عنوان
    const serialNumber = generateSerial(req.body.category, req.body.title);

    const newProduct = new Product({
      ...req.body,
      images,
      serialNumber,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✏️ ویرایش محصول
export const updateProduct = async (req, res) => {
  try {
    const images = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

    const updatedData = {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
    };

    // فقط اگر عکس جدید فرستاده شده بود
    if (images.length > 0) updatedData.images = images;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ حذف محصول
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // 🗑 حذف عکس‌های محصول از پوشه uploads
    if (product.images && product.images.length > 0) {
      product.images.forEach((imgPath) => {
        const fullPath = path.join(process.cwd(), imgPath);

        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      });
    }

    await product.deleteOne();

    res.json({ success: true, message: "Product deleted successfully" });

  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



