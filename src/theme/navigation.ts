import { DarkTheme } from '@react-navigation/native';
import type { Theme } from '@react-navigation/native';

import { COLORS } from './colors';

export const NAVIGATION_THEME: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.accent,
    background: COLORS.background,
    card: COLORS.surface,
    text: COLORS.textPrimary,
    border: COLORS.border,
  },
};