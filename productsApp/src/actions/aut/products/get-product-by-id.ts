import tesloApi from "../../../config/api/tesloApi";
import { Gender, IProduct } from "../../../domain/entities/product";
import { ProductMapper } from "../../../infrastructure/interfaces/mappers/product.mapper";
import { ITesloProducts } from "../../../infrastructure/interfaces/teslo-products.response";

const emptyProduct: IProduct = {
  id: '',
  title: 'Nuevo Producto',
  description: '',
  price: 0,
  images: [],
  slug: '',
  gender: Gender.Unisex,
  sizes: [],
  stock: 0,
  tags: [],
};

export const getProductById = async (id: string): Promise<IProduct> => {

  if (id === 'new') return emptyProduct;

  try {
    const { data } = await tesloApi.get<ITesloProducts>(`/products/${id}`);
    return ProductMapper.tesloProductToEntity(data);

  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by ID: ${id}`);
  }
}