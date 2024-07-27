import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './normal/splash'
import Parents from './normal/Parents'

const stack=createNativeStackNavigator()
const Appnavigater = () => {
  return (
    <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='Splash' component={Splash} 
        options={{headerShown:true}}
        /> 
         <stack.Screen name='Parents' component={Parents} 
        options={{headerShown:false}}
        /> 
       
    </stack.Navigator>
    </NavigationContainer>
  )
}

export default Appnavigater

const styles = StyleSheet.create({})