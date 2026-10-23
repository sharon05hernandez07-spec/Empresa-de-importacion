import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { EmptyState } from '../components/EmptyState';
import { ScreenHeader } from '../components/ScreenHeader';
import { SearchInput } from '../components/SearchInput';
import { ShipmentCard } from '../components/ShipmentCard';
import { SHIPMENTS } from '../data/shipments';
import { COLORS, SPACING } from '../theme/colors';
import { matchesQuery } from '../utils/search';

export function ShipmentsScreen() {
  const [query, setQuery] = useState('');

  const filtered = SHIPMENTS.filter((shipment) =>
    matchesQuery(
      query,
      shipment.reference,
      shipment.supplier,
      shipment.product,
      shipment.originCountry,
    ),
  );

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Shipments"
        subtitle={`${filtered.length} de ${SHIPMENTS.length} envíos`}
      >
        <SearchInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar por referencia, proveedor o país"
        />
      </ScreenHeader>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShipmentCard shipment={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<EmptyState message="No hay envíos que coincidan con tu búsqueda." />}
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