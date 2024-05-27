import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// will call controller func
router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.retrieveAllProducts);
router.get("/:productId", ProductControllers.retrieveSingleProductById);
router.put("/:productId", ProductControllers.updateProductById);
router.delete("/:productId", ProductControllers.deleteProductById);

export const ProductRoutes = router;
