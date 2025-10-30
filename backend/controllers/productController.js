import Product from "../models/Product.js";

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
    const newProduct = new Product({ ...req.body, images });
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
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
