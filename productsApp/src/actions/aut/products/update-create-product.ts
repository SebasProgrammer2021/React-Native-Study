import { isAxiosError } from "axios";
import tesloApi from "../../../config/api/tesloApi";
import { IProduct } from "../../../domain/entities/product";

const preprareImages = (images: string[]) => {
  //todo: revisar lso files

  return images.map(
    image => image.split('/').pop()
  )
}

export const updateCreateProduct = (product: Partial<IProduct>) => {
  product.stock = Number.isNaN(product.stock) ? 0 : Number(product.stock);
  product.price = Number.isNaN(product.price) ? 0 : Number(product.price);

  if (product.id && product.id !== 'new') {
    return updateProduct(product);
  }

  return createProduct(product);
}

// todo: revisar si viene el usuario
const updateProduct = async (product: Partial<IProduct>) => {
  const { id, images = [], ...rest } = product;

  try {
    const checkedImages = preprareImages(images);

    const { data } = await tesloApi.patch(`/products/${id}`, {
      images: checkedImages,
      ...rest,
    })

    return data;

  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }

    throw new Error("Error updating product");
  }
}

const createProduct = async (product: Partial<IProduct>): Promise<IProduct> => {
  const { id, images = [], ...rest } = product;

  try {
    const checkedImages = preprareImages(images);

    const { data } = await tesloApi.post('/products/', {
      images: checkedImages,
      ...rest,
    })
    console.log("🚀 ~ createProduct ~ data:", data)

    return data;

  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data);
    }

    throw new Error("Error creating product");
  }
}

