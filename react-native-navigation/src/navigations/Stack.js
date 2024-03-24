import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { List, Home, Chat } from '../screens/Index';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: '#ffffff' } }}
    >
      <Stack.Screen name="List" component={List}></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerTitle: 'Chat Screen' }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNav;
