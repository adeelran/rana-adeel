import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main'
import Meen from './Meen'
import BottomNavigation from '../../botom/BottomNavigation'


const Drawer=createDrawerNavigator()
const DrawerNavigation = () => {
  return (
   <Drawer.Navigator>
    <Drawer.Screen name='Main' component={BottomNavigation} />
    <Drawer.Screen name='Meen' component={Meen} />
   </Drawer.Navigator>
      
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})