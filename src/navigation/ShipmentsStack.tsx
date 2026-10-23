import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ShipmentDetailScreen } from '../screens/ShipmentDetailScreen';
import { ShipmentsScreen } from '../screens/ShipmentsScreen';
import type { ShipmentsStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<ShipmentsStackParamList>();

export function ShipmentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShipmentsList"
        component={ShipmentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShipmentDetail"
        component={ShipmentDetailScreen}
        options={{ title: 'Detalle del envío' }}
      />
    </Stack.Navigator>
  );
}