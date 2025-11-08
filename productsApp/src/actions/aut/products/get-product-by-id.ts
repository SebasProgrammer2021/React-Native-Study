import tesloApi from "../../../config/api/tesloApi";
import { IProduct } from "../../../domain/entities/product";
import { ProductMapper } from "../../../infrastructure/interfaces/mappers/product.mapper";
import { ITesloProducts } from "../../../infrastructure/interfaces/teslo-products.response";

export const getProductById = async (id: string): Promise<IProduct> => {

  try {
    const { data } = await tesloApi.get<ITesloProducts>(`/products/${id}`);
    console.log("🚀 ~ getProductById ~ data:", data)
    return ProductMapper.tesloProductToEntity(data);

  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by ID: ${id}`);
  }
}