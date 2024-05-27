import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// Creating a new product
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

// Retrieve All Products
const retrieveAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.retrieveAllProductsFromDB(searchTerm as string ?? null);
    res.status(200).json({
      success: true,
      message: "Products are retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
  }
};

// Retrieving a Specific Product by ID
const retrieveSingleProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.retrieveSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product is retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
  }
};
// Deleting a Specific Product by ID
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
  }
};
// Retrieving a Specific Product by ID
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    // console.log(product)
    const result = await ProductServices.updateProductFromDB(productId,productData);
    res.status(200).json({
      success: true,
      message: "Product is updated successfully",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
  }
};

export const ProductControllers = {
  createProduct,
  retrieveAllProducts,
  retrieveSingleProductById,
  deleteProductById,
  updateProductById
};
