import { StatusBar } from 'expo-status-bar';

import { ShipmentsScreen } from './src/screens/ShipmentsScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ShipmentsScreen />
    </>
  );
}