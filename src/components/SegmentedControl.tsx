import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';

interface SegmentOption<T extends string> {
  key: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentOption<T>[];
  value: T;
  onChange: (key: T) => void;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: SegmentedControlProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const selected = option.key === value;
        return (
          <Pressable
            key={option.key}
            onPress={() => onChange(option.key)}
            style={[styles.segment, selected && styles.segmentSelected]}
          >
            <Text style={[styles.label, selected && styles.labelSelected]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.xs,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  segment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    borderRadius: 9,
  },
  segmentSelected: {
    backgroundColor: COLORS.accent,
  },
  label: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.heading,
  },
  labelSelected: {
    color: COLORS.background,
  },
});