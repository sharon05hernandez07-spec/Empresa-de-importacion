import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import type { StatusFilter } from '../store/shipmentFilterStore';
import { COLORS, SPACING, STATUS_LABELS } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';
import type { ShipmentStatus } from '../types/shipment';

interface StatusFilterChipsProps {
  value: StatusFilter;
  onChange: (filter: StatusFilter) => void;
}

const STATUS_KEYS = Object.keys(STATUS_LABELS) as ShipmentStatus[];

const OPTIONS: { key: StatusFilter; label: string }[] = [
  { key: 'all', label: 'Todos' },
  ...STATUS_KEYS.map((key) => ({ key, label: STATUS_LABELS[key] })),
];

export function StatusFilterChips({ value, onChange }: StatusFilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.scroll}
    >
      {OPTIONS.map((option) => {
        const selected = option.key === value;
        return (
          <Pressable
            key={option.key}
            onPress={() => onChange(option.key)}
            style={[styles.chip, selected && styles.chipSelected]}
          >
            <Text style={[styles.label, selected && styles.labelSelected]}>{option.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginTop: SPACING.md,
  },
  chip: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 999,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs + 2,
    marginRight: SPACING.sm,
  },
  chipSelected: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  label: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.label,
  },
  labelSelected: {
    color: COLORS.background,
  },
});