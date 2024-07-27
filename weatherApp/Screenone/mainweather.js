import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './weatherApp/Screenone/Home'
import Hometwo from './weatherApp/Screenone/Hometwo'
import Cards from './weatherApp/Screenone/Cards'
import location from './weatherApp/Screenone/location'
import Livelocation from './weatherApp/Screenone/livelocation'
const stack=createNativeStackNavigator()
const APP = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Hometwo' component={Hometwo}/>
        <stack.Screen name='Cards' component={Cards} /> 
        <stack.Screen name='Location' component={location} />  
        <stack.Screen name='LiveLocation' component={Livelocation} />  
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default APP

const styles = StyleSheet.create({})