import { Order } from "./order.model";
import { TOrder } from "./order.interface";
import { Product } from "../products/product.model";


// Creating order
const createOrder = async (orderLoad: TOrder) => {
  const result = await Order.create(orderLoad);
  return result;
};

// Retrieve all orders
const retrieveAllOrdersFromDB = async (email: string) => {
  
  // Retrieve specific product with email

  const result = await Order.find(
    email === null
      ? {}
      : {
         email:email
        },
  );

  return result;
};

const retrieveSingleOrderByIdFromDB = async (id: string) => {
  const result = await Order.findOne({ _id : id });
  return result;
}

const handleProductInventory = async (order: TOrder) => {
  const product = await Product.findOne({ _id: order.productId });
  if (product) {
    if (product.inventory.quantity >= order.quantity) {
      product.inventory.quantity -= order.quantity;
      product.inventory.inStock =
        product.inventory.quantity - order.quantity == 0 ? false : true;
      await product.save();
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        error: 'Insufficient quantity available in inventory!',
      };
    }
  } else {
    return {
      success: false,
      error: 'Entered product Id is not valid!',
    };
  }
};

export const OrderServices = {
  createOrder,
  retrieveAllOrdersFromDB,
  retrieveSingleOrderByIdFromDB,
  handleProductInventory,
};