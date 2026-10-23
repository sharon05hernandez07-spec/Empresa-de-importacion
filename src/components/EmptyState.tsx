import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: SPACING.lg * 2,
  },
  message: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    ...TYPOGRAPHY.body,
  },
});