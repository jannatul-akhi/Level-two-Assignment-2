import { Product } from "./product.model";
import { TProduct } from "./product.interface";

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
const retrieveAllProductsFromDB = async (search?: string) => {
  const result = await Product.find(
    search === null
      ? {}
      : {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } },
          ],
        },
  );

  return result;
};
const retrieveSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findOneAndDelete({ _id: id });
  return result;
};

const updateProductFromDB = async (id: string, product: TProduct) => {
  const result = await Product.findByIdAndUpdate( id , product, {new: true});
  return result;
};

export const ProductServices = {
  createProduct,
  retrieveAllProductsFromDB,
  retrieveSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB
};
