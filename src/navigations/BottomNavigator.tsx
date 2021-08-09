import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { HomeScreen } from '../screens/HomeScreen';
import { HomeDetailScreen } from '../screens/HomeScreen/HomeDetailScreen';

const { Navigator, Screen } = createBottomTabNavigator();

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Details" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={HomeDetailScreen} />
  </Navigator>
);

export const BottomNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
