const CustomError = require("../errors/CustomError");
const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/products");

exports.search = asyncHandler(async (req, res) => {
  const { query } = req.query;
  const products = await Product.find({
    $or: [
      { name: { $regex: query, $options: "i" } }, // Case-insensitive search for product name
      { description: { $regex: query, $options: "i" } }, // Case-insensitive search for description
      { category: { $regex: query, $options: "i" } }, // Case-insensitive search for description
    ],
  });
  if (!products) throw new CustomError(400, false, "No products were found!");

  res.status(200).json({ success: true, products });
});

exports.filterProduct = asyncHandler(async (req, res) => {
  // const {}
});
