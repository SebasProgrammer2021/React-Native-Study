import { isAxiosError } from "axios";
import tesloApi from "../../../config/api/tesloApi";
import { IProduct } from "../../../domain/entities/product";

const preprareImages = async (images: string[]) => {
  const fileImages = images.filter(image => image.includes('file://'));
  const currentImages = images.filter(image => !image.includes('file://'));

  if (fileImages.length > 0) {
    const uploadPromises = fileImages.map(uploadImage);
    const uploadedImages = await Promise.all(uploadPromises);
    currentImages.push(...uploadedImages);
  }

  return currentImages.map(
    image => image.split("/").pop()
  )
}

const uploadImage = async (image: string) => {
  const formData = new FormData();
  formData.append('file', {
    uri: image,
    type: 'image/jpeg',
    name: image.split("/").pop(),
  });

  const { data } = await tesloApi.post<{ image: string }>('/files/product', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data.image;
}

// todo: revisar si viene el usuario
const updateProduct = async (product: Partial<IProduct>) => {
  const { id, images = [], ...rest } = product;

  try {
    const checkedImages = await preprareImages(images);

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
  const { images = [], ...rest } = product;

  try {
    const checkedImages = await preprareImages(images);

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

export const updateCreateProduct = (product: Partial<IProduct>) => {
  product.stock = Number.isNaN(product.stock) ? 0 : Number(product.stock);
  product.price = Number.isNaN(product.price) ? 0 : Number(product.price);

  if (product.id && product.id !== 'new') {
    return updateProduct(product);
  }

  return createProduct(product);
}


