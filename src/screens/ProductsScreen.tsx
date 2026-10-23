import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { EmptyState } from '../components/EmptyState';
import { ProductCard } from '../components/ProductCard';
import { ScreenHeader } from '../components/ScreenHeader';
import { SearchInput } from '../components/SearchInput';
import { CATEGORY_LABELS } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { SUPPLIERS } from '../data/suppliers';
import { COLORS, SPACING } from '../theme/colors';
import { matchesQuery } from '../utils/search';

const SUPPLIER_NAMES = new Map(SUPPLIERS.map((supplier) => [supplier.id, supplier.name]));

function getSupplierName(supplierId: string): string {
  return SUPPLIER_NAMES.get(supplierId) ?? 'Proveedor desconocido';
}

export function ProductsScreen() {
  const [query, setQuery] = useState('');

  const filtered = PRODUCTS.filter((product) =>
    matchesQuery(
      query,
      product.name,
      CATEGORY_LABELS[product.category],
      getSupplierName(product.supplierId),
      product.hsCode,
    ),
  );

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Products"
        subtitle={`${filtered.length} de ${PRODUCTS.length} productos`}
      >
        <SearchInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar por nombre, categoría o código HS"
        />
      </ScreenHeader>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} supplierName={getSupplierName(item.supplierId)} />
        )}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<EmptyState message="No hay productos que coincidan con tu búsqueda." />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.lg,
  },
});