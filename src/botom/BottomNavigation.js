import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
const Bottom=createBottomTabNavigator()
const BottomNavigation = () => {
  return (
   <Bottom.Navigator screenOptions={{headerShown:false}}>
    <Bottom.Screen name='Main'  component={Screen1}/>
    <Bottom.Screen name='Screen2'  component={Screen2}/>
    <Bottom.Screen name='Screen3'  component={Screen3}/>
   </Bottom.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})