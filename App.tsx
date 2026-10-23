import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootTabs } from './src/navigation/RootTabs';
import { NAVIGATION_THEME } from './src/theme/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={NAVIGATION_THEME}>
        <StatusBar style="light" />
        <RootTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}