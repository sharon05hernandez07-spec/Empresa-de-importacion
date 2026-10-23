import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ShipmentsStackParamList = {
  ShipmentsList: undefined;
  ShipmentDetail: { shipmentId: string };
};

export type ProductsStackParamList = {
  ProductsList: undefined;
  ProductDetail: { productId: string };
};

export type RootTabParamList = {
  ShipmentsTab: NavigatorScreenParams<ShipmentsStackParamList>;
  ProductsTab: NavigatorScreenParams<ProductsStackParamList>;
};

export type ShipmentsStackScreenProps<T extends keyof ShipmentsStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ShipmentsStackParamList, T>,
    BottomTabScreenProps<RootTabParamList>
  >;

export type ProductsStackScreenProps<T extends keyof ProductsStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProductsStackParamList, T>,
    BottomTabScreenProps<RootTabParamList>
  >;