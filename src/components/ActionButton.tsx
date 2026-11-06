import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function ActionButton({ label, onPress, variant = 'primary' }: ActionButtonProps) {
  const primary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        primary ? styles.primary : styles.secondary,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, primary ? styles.labelPrimary : styles.labelSecondary]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: SPACING.sm + 4,
    paddingHorizontal: SPACING.md,
  },
  primary: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: COLORS.border,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    ...TYPOGRAPHY.heading,
  },
  labelPrimary: {
    color: COLORS.background,
  },
  labelSecondary: {
    color: COLORS.textPrimary,
  },
});