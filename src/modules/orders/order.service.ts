import { Order } from "./order.model";
import { TOrder } from "./order.interface";


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

// const calculation = async(id: string) => {
//   const result = await Order.findOne({id});
//   return result;
// } 

export const OrderServices = {
  createOrder,
  retrieveAllOrdersFromDB,
  retrieveSingleOrderByIdFromDB,
  // calculation
};