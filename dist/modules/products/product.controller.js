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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// Creating a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodParseData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.createProduct(zodParseData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
// Retrieve All Products
const retrieveAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.retrieveAllProductsFromDB((_a = searchTerm) !== null && _a !== void 0 ? _a : null);
        res.status(200).json({
            success: true,
            message: "Products are retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Retrieving a Specific Product by ID
const retrieveSingleProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.retrieveSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product is retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Deleting a Specific Product by ID
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product is deleted successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// Retrieving a Specific Product by ID
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        // console.log(product)
        const result = yield product_service_1.ProductServices.updateProductFromDB(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product is updated successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ProductControllers = {
    createProduct,
    retrieveAllProducts,
    retrieveSingleProductById,
    deleteProductById,
    updateProductById
};
