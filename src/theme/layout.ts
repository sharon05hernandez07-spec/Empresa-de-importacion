import { Platform, StatusBar } from 'react-native';

import { SPACING } from './colors';

// Espacio superior para no quedar debajo de la barra de estado.
// En la semana 03 lo reemplaza react-navigation con safe-area.
export const TOP_INSET =
  Platform.OS === 'android' ? (StatusBar.currentHeight ?? 24) + SPACING.md : 56;