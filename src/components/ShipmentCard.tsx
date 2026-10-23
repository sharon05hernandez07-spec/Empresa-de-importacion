import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import type { Shipment } from '../types/shipment';
import { StatusBadge } from './StatusBadge';

interface ShipmentCardProps {
  shipment: Shipment;
}

export function ShipmentCard({ shipment }: ShipmentCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable
      onPress={() => setExpanded((prev) => !prev)}
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

      {expanded && (
        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.label}>Origen</Text>
            <Text style={styles.value}>{shipment.originCountry}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Puerto destino</Text>
            <Text style={styles.value}>{shipment.destinationPort}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ETA</Text>
            <Text style={styles.value}>{shipment.eta}</Text>
          </View>
        </View>
      )}
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
  details: {
    marginTop: SPACING.md,
    paddingTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
});