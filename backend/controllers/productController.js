import asyncHandler from "express-async-handler";
import Product from "../models/productModels.js";

// desc : fetch all products
// route : GET/api/products
// access : Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// desc : fetch single products
// route : GET/api/products/:id
// access : Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    // res.status(404).json({ message: "product not found" }); or
    res.status(404);
    throw new Error("product not found");
  }
});
