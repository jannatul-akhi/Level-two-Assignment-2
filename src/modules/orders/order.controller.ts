import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { Order } from "./order.model";

// Creating a new order
const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderServices.createOrder(orderData);
  res.json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};


// Retrieving all orders
const retrieveAllOrders = async (req: Request, res: Response) => {
  const { email } = req.query;
  const result = await OrderServices.retrieveAllOrdersFromDB(email as string ?? null)
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

    const { quantity } = req.body;

    const result = await OrderServices.retrieveSingleOrderByIdFromDB(orderId);

    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (result.quantity < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    result.quantity -= quantity;
    // result.inStock = result.quantity > 0;

    await result.save();

    const order = new Order({ orderId, quantity });
    await order.save();


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
  retrieveSingleOrderById
};
