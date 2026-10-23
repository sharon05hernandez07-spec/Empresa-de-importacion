import type { ShipmentStatus } from '../types/shipment';

export const COLORS = {
  background: '#0F172A',
  surface: '#1E293B',
  border: '#334155',
  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  accent: '#38BDF8',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
} as const;

export const STATUS_COLORS: Record<ShipmentStatus, string> = {
  ordered: '#A78BFA',
  in_transit: '#38BDF8',
  in_customs: '#FBBF24',
  cleared: '#34D399',
  delivered: '#22C55E',
};

export const STATUS_LABELS: Record<ShipmentStatus, string> = {
  ordered: 'Ordenado',
  in_transit: 'En tránsito',
  in_customs: 'En aduana',
  cleared: 'Liberado',
  delivered: 'Entregado',
};