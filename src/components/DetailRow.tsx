import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';

interface DetailRowProps {
  label: string;
  value: string;
}

export function DetailRow({ label, value }: DetailRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm + 2,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  label: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
  },
  value: {
    flexShrink: 1,
    marginLeft: SPACING.md,
    textAlign: 'right',
    color: COLORS.textPrimary,
    ...TYPOGRAPHY.body,
  },
});