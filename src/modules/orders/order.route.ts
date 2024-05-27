import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// will call controller func
router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.retrieveAllOrders);
router.get("/:orderId", OrderControllers.retrieveSingleOrderById);

export const OrderRoutes = router;
