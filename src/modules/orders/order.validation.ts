import { z } from "zod";

const orderValidationSchema = z.object({
    email: z.string().email().max(30,{ message: "Email can not be more than 30 characters" }),
    productId: z.string().max(50,{ message: "ID is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    quantity: z.number().int().positive({ message: "Quantity must be a positive integer" })
  });

  export default orderValidationSchema;