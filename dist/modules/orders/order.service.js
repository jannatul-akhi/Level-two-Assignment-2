"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const product_model_1 = require("../products/product.model");
// Creating order
const createOrder = (orderLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(orderLoad);
    return result;
});
// Retrieve all orders
const retrieveAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve specific product with email
    const result = yield order_model_1.Order.find(email === null
        ? {}
        : {
            email: email
        });
    return result;
});
const retrieveSingleOrderByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findOne({ _id: id });
    return result;
});
const handleProductInventory = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findOne({ _id: order.productId });
    if (product) {
        if (product.inventory.quantity >= order.quantity) {
            product.inventory.quantity -= order.quantity;
            product.inventory.inStock =
                product.inventory.quantity - order.quantity == 0 ? false : true;
            yield product.save();
            return {
                success: true,
            };
        }
        else {
            return {
                success: false,
                error: 'Insufficient quantity available in inventory!',
            };
        }
    }
    else {
        return {
            success: false,
            error: 'Entered product Id is not valid!',
        };
    }
});
exports.OrderServices = {
    createOrder,
    retrieveAllOrdersFromDB,
    retrieveSingleOrderByIdFromDB,
    handleProductInventory,
};
