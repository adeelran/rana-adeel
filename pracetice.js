import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const StackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

const HomeScreen = () => {
  return <View><Text>Home Screen</Text></View>;
};

const SettingsScreen = () => {
  return <View><Text>Settings Screen</Text></View>;
};

const BottomTab = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#666',
      }}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" size={24} color={color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

const App = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="BottomTab" component={BottomTab} />
    </StackNavigator.Navigator>
  );
};

export default App;