import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Article from './drawer/drwScreens/Article'
import Feed from './drawer/drwScreens/Feed'
import Main from './drawer/drwScreens/Main'
const drawer=createDrawerNavigator()
const App = () => {
  return (
<NavigationContainer>
  <drawer.Navigator>
    <drawer.Screen  name='Home' component={Article}/>
     <drawer.Screen  name='login' component={Feed}/>
      <drawer.Screen  name='My page' component={Main}/>
  </drawer.Navigator>

</NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})