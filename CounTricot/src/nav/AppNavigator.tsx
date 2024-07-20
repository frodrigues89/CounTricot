// AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationOptions } from './navigationOptions';
import Inicio from '../screens/Inicio';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions = {({ navigation }) => navigationOptions(navigation)}
        >
          <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ title: ' ' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
