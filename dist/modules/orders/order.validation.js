"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email().max(30, { message: "Email can not be more than 30 characters" }),
    productId: zod_1.z.string().max(50, { message: "ID is required" }),
    price: zod_1.z.number().positive({ message: "Price must be a positive number" }),
    quantity: zod_1.z.number().int().positive({ message: "Quantity must be a positive integer" })
});
exports.default = orderValidationSchema;
