import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '../theme/colors';
import type { RootTabParamList } from '../types/navigation';
import { ProductsStack } from './ProductsStack';
import { ShipmentsStack } from './ShipmentsStack';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.textSecondary,
      }}
    >
      <Tab.Screen
        name="ShipmentsTab"
        component={ShipmentsStack}
        options={{
          title: 'Shipments',
          tabBarIcon: ({ focused }) => (
            <Text style={[styles.icon, !focused && styles.iconInactive]}>🚢</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ProductsTab"
        component={ProductsStack}
        options={{
          title: 'Products',
          tabBarIcon: ({ focused }) => (
            <Text style={[styles.icon, !focused && styles.iconInactive]}>📦</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  iconInactive: {
    opacity: 0.6,
  },
});