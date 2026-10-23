import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState } from '../components/EmptyState';
import { ScreenHeader } from '../components/ScreenHeader';
import { SearchInput } from '../components/SearchInput';
import { ShipmentCard } from '../components/ShipmentCard';
import { SHIPMENTS } from '../data/shipments';
import { COLORS, SPACING } from '../theme/colors';
import type { ShipmentsStackParamList } from '../types/navigation';
import { matchesQuery } from '../utils/search';

type ShipmentsNavigation = NativeStackNavigationProp<ShipmentsStackParamList, 'ShipmentsList'>;

export function ShipmentsScreen() {
  const navigation = useNavigation<ShipmentsNavigation>();
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
    <SafeAreaView style={styles.container} edges={['top']}>
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
        renderItem={({ item }) => (
          <ShipmentCard
            shipment={item}
            onPress={() => navigation.navigate('ShipmentDetail', { shipmentId: item.id })}
          />
        )}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<EmptyState message="No hay envíos que coincidan con tu búsqueda." />}
      />
    </SafeAreaView>
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