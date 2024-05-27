import { Schema, model } from "mongoose";
import { TOrder} from "./order.interface";



const orderSchema = new Schema<TOrder>({
  email: {type: String, required: true, unique: true },
  productId: { 
    type: String, 
    required: [true, 'ID is required'],
  },
  price: { type: Number, required: [true, "Price is required"] },
  quantity: { type: Number, required: true },
})


export const Order = model<TOrder>("Order", orderSchema);
