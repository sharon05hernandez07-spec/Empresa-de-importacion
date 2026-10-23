import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS, SPACING } from '../theme/colors';
import { TYPOGRAPHY } from '../theme/typography';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export function SearchInput({ value, onChangeText, placeholder }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Pressable onPress={() => onChangeText('')} hitSlop={8}>
          <Text style={styles.clear}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.md,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    paddingVertical: SPACING.sm + 2,
    ...TYPOGRAPHY.body,
  },
  clear: {
    color: COLORS.textSecondary,
    fontSize: 16,
    marginLeft: SPACING.sm,
  },
});