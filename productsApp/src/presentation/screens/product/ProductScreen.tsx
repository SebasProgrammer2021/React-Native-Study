import { Button, ButtonGroup, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import MainLayout from "../../layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../actions/aut/products/get-product-by-id";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useRef } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { FadeInImage } from "../../components/ui/FadeInImage";
import { Gender, Size } from "../../../domain/entities/product";
import MyIcon from "../../components/ui/MyIcon";

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
    <MainLayout
      title={product.title}
      subTitle={`Precio: $${product.price}`}
    >
      <ScrollView style={{ flex: 1 }}>
        <Layout>
          <FlatList
            data={product.images}
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
          <Input label="Título" value={product.title} style={{ marginVertical: 5 }} />
          <Input label="Slug" value={product.slug} style={{ marginVertical: 5 }} />
          <Input label="Descripción"
            multiline
            value={product.description}
            style={{ marginVertical: 5 }}
            numberOfLines={5}
          />
        </Layout>
        <Layout style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
          <Input label="Precio"
            value={product.price.toString()}
            style={{ marginVertical: 5, flex: 1 }}
          />
          <Input label="Inventario"
            value={product.stock.toString()}
            style={{ marginVertical: 5, flex: 1 }}
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
                onPress={() => console.log(size)}
                style={{
                  flex: 1,
                  backgroundColor: true ? theme['color-primary-200'] : 'undefined'
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
                key={gender}
                onPress={() => console.log(gender)}
                style={{
                  flex: 1,
                  backgroundColor: true ? theme['color-primary-200'] : 'undefined'
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
          style={{ margin: 15, marginTop: 40 }}
          onPress={() => console.log('Guardar cambios')}
        >
          Guardar cambios
        </Button>
        <Layout style={{ height: 160 }} />
      </ScrollView>
    </MainLayout>
  );
}


export default ProductScreen;
