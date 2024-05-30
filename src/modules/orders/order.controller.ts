import { Request, Response } from "express";
import { OrderServices } from "./order.service";
// import { Order } from "./order.model";
import { z } from "zod";
import orderValidationSchema from "./order.validation";

// Creating a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    // Creating schema validation using Zod

    const orderData = req.body;
    const zodParsedData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrder(zodParsedData);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

// Retrieving all orders
const retrieveAllOrders = async (req: Request, res: Response) => {
  const { email } = req.query;
  const result = await OrderServices.retrieveAllOrdersFromDB(
    (email as string) ?? null
  );
  console.log(result)
  res.json({
    success: true,
    message: "Orders are retrieved successfully!",
    data: result,
  });
};

// Retrieving a Specific Product by ID
const retrieveSingleOrderById = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const result = await OrderServices.retrieveSingleOrderByIdFromDB(orderId);

    res.status(200).json({
      success: true,
      message: "Order is retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
  retrieveAllOrders,
  retrieveSingleOrderById,
};
