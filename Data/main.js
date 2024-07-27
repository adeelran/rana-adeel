import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { One } from './Data/one'
import { Two } from './Data/two'
import user from './Data/user'
import data from './Data/data'
import Three from './Data/three'


const Stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer >
<Stack.Navigator  >
  <Stack.Screen   name='one'  component={One} 
  options={{headerShown:false}}
  />
  <Stack.Screen  name='Two'  component={Two} 
   options={{headerShown:false}}
  />
  <Stack.Screen  name='Three'  component={Three} 
  options={{headerShown:false}}
  />
</Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})