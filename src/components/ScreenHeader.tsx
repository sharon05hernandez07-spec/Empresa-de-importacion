import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function ScreenHeader({ title, subtitle, children }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
  },
  title: {
    color: COLORS.textPrimary,
    ...TYPOGRAPHY.title,
  },
  subtitle: {
    color: COLORS.accent,
    marginTop: SPACING.xs,
    ...TYPOGRAPHY.caption,
  },
});