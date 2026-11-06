import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';

interface WatchStarProps {
  watched: boolean;
  onPress: () => void;
}

export function WatchStar({ watched, onPress }: WatchStarProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={watched ? 'Dejar de seguir envío' : 'Seguir envío'}
      style={styles.button}
    >
      <Text style={[styles.icon, watched && styles.iconActive]}>{watched ? '★' : '☆'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: SPACING.sm,
  },
  icon: {
    color: COLORS.textSecondary,
    fontSize: 24,
  },
  iconActive: {
    color: COLORS.accent,
  },
});