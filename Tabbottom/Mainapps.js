
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabBar } from 'react-native-tab-view';
import Home from './Tabbottom/Home';
import Location from './Tabbottom/Locations';
import Faqs from './Tabbottom/Faqs';
import Setting from './Tabbottom/Setting';
import About from './Tabbottom/About us';

const Tab=createBottomTabNavigator ();
const Apps = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarLabelPosition:"below-icon",
      tabBarShowLabel:true,
      tabBarActiveTintColor:"blue",
      tabBarInactiveTintColor:"gray"
     
    }}>
    <Tab.Screen name="Home" component={Home}
    options={{
      tabBarIcon:({color})=>(<FontAwesome  name="home" size={20} color={color} ></FontAwesome>),
      headerShown:false
    }}
    />
    <Tab.Screen name="Location" component={Location}
    options={{
      tabBarIcon:({color})=>(<FontAwesome  name="globe" size={20}  color={color}></FontAwesome>),
      headerShown:false
    }} 
    />
    <Tab.Screen name="Faqs" component={Faqs}
    options={{
      tabBarIcon:({color})=>(<FontAwesome  name="user-circle-o" size={20}  color={color}></FontAwesome>),
      headerShown:false
    }}  
    />
    <Tab.Screen name="About us" component={About} 
    options={{
      tabBarIcon:({color})=><FontAwesome  name="male" size={20}  color={color}></FontAwesome>,
      headerShown:false
    }} 
    />
    <Tab.Screen name="setting" component={Setting} 
    options={{
      tabBarIcon:({color})=><FontAwesome  name="gear" size={20}  color={color}></FontAwesome>,
      headerShown:false
    }} 
    />
    </Tab.Navigator>
       </NavigationContainer>
  )
}
export default Apps