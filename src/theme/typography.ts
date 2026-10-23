import type { TextStyle } from 'react-native';

export const TYPOGRAPHY = {
  title: { fontSize: 28, fontWeight: '800' },
  heading: { fontSize: 16, fontWeight: '700' },
  body: { fontSize: 15, fontWeight: '400' },
  caption: { fontSize: 13, fontWeight: '400' },
  label: { fontSize: 12, fontWeight: '600' },
} satisfies Record<string, TextStyle>;