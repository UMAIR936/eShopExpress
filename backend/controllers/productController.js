const Product = require("../models/product");

// create product
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

//update product

exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      throw new Error("Product not found");
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      throw new Error("Products not found");
    }
    res.status(200).json({ success: true, products });
  } catch (error) {
    next(error);
  }
};

// find Product by id
exports.getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      throw new Error("Product not found");
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};

// delete product
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.deleteOne({ _id: productId });

    if (product.deletedCount === 0) {
      throw new Error("Product not found");
    }
    res
      .status(200)
      .json({ success: true, message: "product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
