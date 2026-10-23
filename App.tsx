import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SegmentedControl } from './src/components/SegmentedControl';
import { ProductsScreen } from './src/screens/ProductsScreen';
import { ShipmentsScreen } from './src/screens/ShipmentsScreen';
import { COLORS } from './src/theme/colors';
import { TOP_INSET } from './src/theme/layout';

type TabKey = 'shipments' | 'products';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'shipments', label: 'Shipments' },
  { key: 'products', label: 'Products' },
];

export default function App() {
  const [tab, setTab] = useState<TabKey>('shipments');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SegmentedControl options={TABS} value={tab} onChange={setTab} />
      {tab === 'shipments' ? <ShipmentsScreen /> : <ProductsScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: TOP_INSET,
  },
});