import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { DetailRow } from '../components/DetailRow';
import { EmptyState } from '../components/EmptyState';
import { CATEGORY_LABELS } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { SUPPLIERS } from '../data/suppliers';
import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';
import type { ProductsStackScreenProps } from '../types/navigation';

export function ProductDetailScreen({ route }: ProductsStackScreenProps<'ProductDetail'>) {
  const { productId } = route.params;
  const product = PRODUCTS.find((item) => item.id === productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <EmptyState message="No se encontró el producto." />
      </View>
    );
  }

  const supplier = SUPPLIERS.find((item) => item.id === product.supplierId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>US$ {product.unitPriceUsd.toFixed(2)}</Text>
      </View>

      <DetailRow label="Categoría" value={CATEGORY_LABELS[product.category]} />
      <DetailRow label="Proveedor" value={supplier?.name ?? 'Proveedor desconocido'} />
      <DetailRow label="País del proveedor" value={supplier?.country ?? '-'} />
      <DetailRow label="Código HS" value={product.hsCode} />
      <DetailRow label="Arancel" value={`${product.tariffPercent}%`} />
      <DetailRow label="Stock" value={String(product.stock)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
  },
  header: {
    marginBottom: SPACING.md,
  },
  name: {
    color: COLORS.textPrimary,
    ...TYPOGRAPHY.title,
  },
  price: {
    color: COLORS.accent,
    marginTop: SPACING.xs,
    ...TYPOGRAPHY.heading,
  },
});