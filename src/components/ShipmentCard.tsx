import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import type { Shipment } from '../types/shipment';
import { StatusBadge } from './StatusBadge';

interface ShipmentCardProps {
  shipment: Shipment;
  onPress: () => void;
}

export function ShipmentCard({ shipment, onPress }: ShipmentCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.header}>
        <Image source={{ uri: shipment.originFlagUrl }} style={styles.flag} />
        <View style={styles.headerText}>
          <Text style={styles.reference}>{shipment.reference}</Text>
          <Text style={styles.supplier}>{shipment.supplier}</Text>
        </View>
        <StatusBadge status={shipment.status} />
      </View>

      <Text style={styles.product}>
        {shipment.quantity} × {shipment.product}
      </Text>
    </Pressable>
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
  cardPressed: {
    opacity: 0.8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  flag: {
    width: 40,
    height: 28,
    borderRadius: 4,
    marginRight: SPACING.md,
  },
  headerText: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  reference: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  supplier: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  product: {
    color: COLORS.textPrimary,
    fontSize: 15,
  },
});