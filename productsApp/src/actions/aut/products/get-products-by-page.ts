import tesloApi from "../../../config/api/tesloApi"
import type { IProduct } from "../../../domain/entities/product"
import { ProductMapper } from "../../../infrastructure/interfaces/mappers/product.mapper"
import type { ITesloProducts } from "../../../infrastructure/interfaces/teslo-products.response"

export const getProductsByPage = async (page: number, limit: number = 20): Promise<IProduct[]> => {
  try {
    const { data } = await tesloApi.get<ITesloProducts[]>(`/products?offset=${page * 10}&limit=${limit}`)

    const products = data.map(ProductMapper.tesloProductToEntity);
    console.log("🚀 ~ getProductsByPage ~ products:", products[0])

    return products;

  } catch (error) {
    console.error("Error fetching products by page:", error)
    throw new Error("Failed to fetch products by page")
  }
}