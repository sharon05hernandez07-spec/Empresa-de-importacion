import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { ShipmentCard } from '../components/ShipmentCard';
import { SHIPMENTS } from '../data/shipments';
import { COLORS, SPACING } from '../theme/colors';

const TOP_INSET =
  Platform.OS === 'android' ? (StatusBar.currentHeight ?? 24) + SPACING.md : 56;

export function ShipmentsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shipments</Text>
        <Text style={styles.subtitle}>{SHIPMENTS.length} envíos activos</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {SHIPMENTS.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: TOP_INSET,
  },
  header: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.accent,
    fontSize: 14,
    marginTop: SPACING.xs,
  },
  list: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.lg,
  },
});