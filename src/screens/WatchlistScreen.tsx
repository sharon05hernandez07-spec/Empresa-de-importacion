import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton } from '../components/ActionButton';
import { EmptyState } from '../components/EmptyState';
import { ScreenHeader } from '../components/ScreenHeader';
import { ShipmentCard } from '../components/ShipmentCard';
import { SHIPMENTS } from '../data/shipments';
import { useWatchlistStore } from '../store/watchlistStore';
import { COLORS, SPACING } from '../theme/colors';
import type { RootTabParamList } from '../types/navigation';

type WatchlistNavigation = BottomTabNavigationProp<RootTabParamList, 'WatchlistTab'>;

export function WatchlistScreen() {
  const navigation = useNavigation<WatchlistNavigation>();

  const watchedIds = useWatchlistStore((state) => state.watchedIds);
  const toggleWatch = useWatchlistStore((state) => state.toggleWatch);
  const clearWatchlist = useWatchlistStore((state) => state.clearWatchlist);

  const watched = SHIPMENTS.filter((shipment) => watchedIds.includes(shipment.id));

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScreenHeader title="Seguimiento" subtitle={`${watched.length} envíos en seguimiento`}>
        {watched.length > 0 && (
          <View style={styles.action}>
            <ActionButton label="Vaciar lista" variant="secondary" onPress={clearWatchlist} />
          </View>
        )}
      </ScreenHeader>
      <FlatList
        data={watched}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShipmentCard
            shipment={item}
            watched
            onPress={() =>
              navigation.navigate('ShipmentsTab', {
                screen: 'ShipmentDetail',
                params: { shipmentId: item.id },
              })
            }
            onToggleWatch={() => toggleWatch(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <EmptyState message="Aún no sigues ningún envío. Toca la estrella en la lista de Shipments." />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  action: {
    marginTop: SPACING.md,
  },
  list: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.lg,
  },
});