import { z } from 'zod';

// Define the Zod schema for Variant
const variantValidationSchema = z.object({
  type: z.string().min(1,{ message: "Type is required" }),
  value: z.string().min(1,{ message: "Value is required" })
});

// Define the Zod schema for Inventory
const inventoryValidationSchema = z.object({
  quantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
  inStock: z.boolean()
});

// Define the Zod schema for Product
const productValidationSchema = z.object({
  name: z.string().min(1,{ message: "Name is required" }),
  description: z.string().min(1,{ message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1,{ message: "Category is required" }),
  tags: z.array(z.string().min(1,{ message: "Tag is required" })).nonempty({ message: "At least one tag is required" }),
  variants: z.array(variantValidationSchema).min(1,{ message: "At least one variant is required" }),
  inventory: inventoryValidationSchema
});



export default productValidationSchema;
