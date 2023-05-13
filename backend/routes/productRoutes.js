import express from "express";

// // while using import in backend must use file extension ie. .js as done below
// import products from "./data/products.js";

// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
