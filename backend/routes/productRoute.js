const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);

router
  .route("/product/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = router;
