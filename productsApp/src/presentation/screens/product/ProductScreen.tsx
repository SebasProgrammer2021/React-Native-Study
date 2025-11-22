import { Button, ButtonGroup, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import MainLayout from "../../layouts/MainLayout";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../actions/aut/products/get-product-by-id";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useRef } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { FadeInImage } from "../../components/ui/FadeInImage";
import { Gender, IProduct, Size } from "../../../domain/entities/product";
import MyIcon from "../../components/ui/MyIcon";
import { Formik } from 'formik';
import { updateCreateProduct } from "../../../actions/aut/products/update-create-product";

const sizes: Size[] = [
  Size.Xs,
  Size.S,
  Size.M,
  Size.L,
  Size.Xl,
  Size.Xxl,
];

const genders: Gender[] = [
  Gender.Kid,
  Gender.Men,
  Gender.Women,
  Gender.Unisex,
];

interface Props extends StackScreenProps<RootStackParamList, 'ProductScreen'> {
  productId: string;
}

const ProductScreen = ({ route }: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();

  const { data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current)
  })

  const mutation = useMutation({
    mutationFn: (data: IProduct) => updateCreateProduct({ ...data, id: productIdRef.current }),
    onSuccess: (data: IProduct) => {
      console.log("🚀 ~ mutation ~ data:", data)
    },
    onError: (error: Error) => {
      console.log("🚀 ~ mutation ~ error:", error)
    }
  })

  if (!product) {
    return (
      <MainLayout
        title="Product Details"
      >
        <Text>Loading...</Text>
      </MainLayout>
    )
  }


  return (
    <Formik
      initialValues={product}
      onSubmit={mutation.mutate}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }) => (
        <MainLayout
          title={values.title}
          subTitle={`Precio: $${values.price}`}
        >
          <ScrollView style={{ flex: 1 }}>
            <Layout>
              <FlatList
                data={values.images}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <FadeInImage
                    uri={item}
                    style={{ width: 300, height: 300, marginHorizontal: 10 }}
                  />
                )}
              />
            </Layout>
            <Layout style={{ marginHorizontal: 10 }}>
              <Input
                label="Título"
                style={{ marginVertical: 5 }}
                value={values.title}
                onChangeText={handleChange('title')}
              />
              <Input
                label="Slug"
                value={values.slug}
                style={{ marginVertical: 5 }}
                onChangeText={handleChange('slug')}
              />
              <Input
                label="Descripción"
                multiline
                value={values.description}
                style={{ marginVertical: 5 }}
                numberOfLines={5}
                onChangeText={handleChange('description')}
              />
            </Layout>
            <Layout
              style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <Input
                label="Precio"
                value={values.price.toString()}
                style={{ marginVertical: 5, flex: 1 }}
                onChangeText={handleChange('price')}
                keyboardType="numeric"
              />
              <Input
                label="Inventario"
                value={values.stock.toString()}
                style={{ marginVertical: 5, flex: 1 }}
                onChangeText={handleChange('stock')}
                keyboardType="numeric"
              />
            </Layout>

            {/* selectores */}
            <ButtonGroup style={{ margin: 2, marginTop: 30, marginHorizontal: 15 }}
              size="small"
              appearance="outline"
            >
              {
                sizes.map(size => (
                  <Button
                    key={size}
                    onPress={() => setFieldValue('sizes',
                      values.sizes.includes(size)
                        ? values.sizes.filter(s => s !== size)
                        : [...values.sizes, size]
                    )}
                    style={{
                      flex: 1,
                      backgroundColor: values.sizes.includes(size)
                        ? theme['color-primary-200']
                        : undefined
                    }}
                  >
                    {size}
                  </Button>

                ))
              }
            </ButtonGroup>
            <ButtonGroup style={{ margin: 2, marginTop: 30, marginHorizontal: 15 }}
              size="small"
              appearance="outline"
            >
              {
                genders.map(gender => (
                  <Button
                    onPress={() => setFieldValue('gender', gender)}
                    key={gender}
                    style={{
                      flex: 1,
                      backgroundColor: values.gender.startsWith(gender) ? theme['color-primary-200']
                        : undefined
                    }}
                  >
                    {gender}
                  </Button>

                ))
              }
            </ButtonGroup>

            {/* boton de guardar */}
            <Button
              accessoryLeft={<MyIcon name="save" color="white" />}
              onPress={() => handleSubmit()}
              disabled={mutation.isPending}
              style={{ margin: 15, marginTop: 40 }}
            >
              Guardar cambios
            </Button>
            <Text>{JSON.stringify(values, null, 2)}</Text>
            <Layout style={{ height: 160 }} />
          </ScrollView>
        </MainLayout>
      )
      }
    </Formik>
  );
}


export default ProductScreen;
