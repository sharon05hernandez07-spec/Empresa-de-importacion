import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { DetailRow } from '../components/DetailRow';
import { EmptyState } from '../components/EmptyState';
import { StatusBadge } from '../components/StatusBadge';
import { SHIPMENTS } from '../data/shipments';
import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';
import type { ShipmentsStackScreenProps } from '../types/navigation';

export function ShipmentDetailScreen({ route }: ShipmentsStackScreenProps<'ShipmentDetail'>) {
  const { shipmentId } = route.params;
  const shipment = SHIPMENTS.find((item) => item.id === shipmentId);

  if (!shipment) {
    return (
      <View style={styles.container}>
        <EmptyState message="No se encontró el envío." />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image source={{ uri: shipment.originFlagUrl }} style={styles.flag} />
        <View style={styles.headerText}>
          <Text style={styles.reference}>{shipment.reference}</Text>
          <Text style={styles.supplier}>{shipment.supplier}</Text>
        </View>
        <StatusBadge status={shipment.status} />
      </View>

      <DetailRow label="Producto" value={shipment.product} />
      <DetailRow label="Cantidad" value={String(shipment.quantity)} />
      <DetailRow label="Origen" value={shipment.originCountry} />
      <DetailRow label="Puerto destino" value={shipment.destinationPort} />
      <DetailRow label="ETA" value={shipment.eta} />
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  flag: {
    width: 48,
    height: 34,
    borderRadius: 4,
    marginRight: SPACING.md,
  },
  headerText: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  reference: {
    color: COLORS.textPrimary,
    ...TYPOGRAPHY.heading,
  },
  supplier: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
  },
});