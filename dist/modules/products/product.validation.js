"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema for Variant
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, { message: "Type is required" }),
    value: zod_1.z.string().min(1, { message: "Value is required" })
});
// Define the Zod schema for Inventory
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().positive({ message: "Quantity must be a positive integer" }),
    inStock: zod_1.z.boolean()
});
// Define the Zod schema for Product
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name is required" }),
    description: zod_1.z.string().min(1, { message: "Description is required" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    category: zod_1.z.string().min(1, { message: "Category is required" }),
    tags: zod_1.z.array(zod_1.z.string().min(1, { message: "Tag is required" })).nonempty({ message: "At least one tag is required" }),
    variants: zod_1.z.array(variantValidationSchema).min(1, { message: "At least one variant is required" }),
    inventory: inventoryValidationSchema
});
exports.default = productValidationSchema;
