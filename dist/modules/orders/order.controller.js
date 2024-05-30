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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
// Creating a new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Creating schema validation using Zod
        const orderData = req.body;
        const zodParsedData = order_validation_1.default.parse(orderData);
        const manageInventory = yield order_service_1.OrderServices.handleProductInventory(orderData);
        if (!manageInventory.success) {
            res.status(200).json(manageInventory);
        }
        else {
            const result = yield order_service_1.OrderServices.createOrder(zodParsedData);
            res.json({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        }
        ;
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
// Retrieving all orders
const retrieveAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email } = req.query;
    const result = yield order_service_1.OrderServices.retrieveAllOrdersFromDB((_a = email) !== null && _a !== void 0 ? _a : null);
    res.json({
        success: true,
        message: "Orders are retrieved successfully!",
        data: result,
    });
});
// Retrieving a Specific Product by ID
const retrieveSingleOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const result = yield order_service_1.OrderServices.retrieveSingleOrderByIdFromDB(orderId);
        res.status(200).json({
            success: true,
            message: "Order is retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.OrderControllers = {
    createOrder,
    retrieveAllOrders,
    retrieveSingleOrderById,
};
