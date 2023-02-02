import express from "express";

// // while using import in backend must use file extension ie. .js as done below
// import products from "./data/products.js";

// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import asyncHandler from "express-async-handler";

const router = express.Router();
import Product from "../models/productModels.js";

// desc : fetch all products
// route : GET/api/products
// access : Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// desc : fetch single products
// route : GET/api/products/:id
// access : Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  })
);

export default router;
