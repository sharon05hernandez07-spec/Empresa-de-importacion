import { StyleSheet, Text, View } from 'react-native';

import { CATEGORY_LABELS } from '../data/categories';
import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  supplierName: string;
}

export function ProductCard({ product, supplierName }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.supplier}>{supplierName}</Text>
        </View>
        <Text style={styles.price}>US$ {product.unitPriceUsd.toFixed(2)}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.tag}>{CATEGORY_LABELS[product.category]}</Text>
        <Text style={styles.meta}>HS {product.hsCode}</Text>
        <Text style={styles.meta}>Arancel {product.tariffPercent}%</Text>
        <Text style={styles.meta}>Stock {product.stock}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  headerText: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  name: {
    color: COLORS.textPrimary,
    ...TYPOGRAPHY.heading,
  },
  supplier: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
  },
  price: {
    color: COLORS.accent,
    ...TYPOGRAPHY.heading,
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  tag: {
    color: COLORS.textPrimary,
    backgroundColor: COLORS.border,
    borderRadius: 6,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    marginRight: SPACING.sm,
    marginBottom: SPACING.xs,
    ...TYPOGRAPHY.label,
  },
  meta: {
    color: COLORS.textSecondary,
    marginRight: SPACING.md,
    marginBottom: SPACING.xs,
    ...TYPOGRAPHY.caption,
  },
});