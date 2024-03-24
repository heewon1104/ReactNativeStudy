import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Profile, Settings } from '../screens/Index';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mail" component={Mail}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNav;
