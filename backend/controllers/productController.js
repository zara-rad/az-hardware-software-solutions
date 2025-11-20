import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

function generateSerial(category, title) {
  const cat = (category || "XX").slice(0, 2).toUpperCase();
  const tit = (title || "YY").slice(0, 2).toLowerCase();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${cat}${tit}${random}`;
}

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const images = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

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
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.title = req.body.title;
    product.category = req.body.category;
    product.description = req.body.description;
    product.price = req.body.price;
    product.oldPrice = req.body.oldPrice;

    const deletedImages = req.body.deletedImages
      ? JSON.parse(req.body.deletedImages)
      : [];

    if (deletedImages.length > 0) {
      deletedImages.forEach((imgPath) => {
        const fullPath = path.join(process.cwd(), imgPath);

        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      });

      product.images = product.images.filter(
        (img) => !deletedImages.includes(img)
      );
    }

    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((file) => `/uploads/${file.filename}`);
      product.images.push(...newImages);
    }

    await product.save();

    return res.json(product);
  } catch (err) {
    console.error("Update Product Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
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
