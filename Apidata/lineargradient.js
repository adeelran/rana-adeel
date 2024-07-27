import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const APP = () => {
  return (
    <View style={{flex:1}}>  
    <LinearGradient colors={['#396afc','#2948ff']} style={{height:'100%'}}>
<Text> hello</Text>
<View>
   <Text> hello sir</Text>
</View>
    </LinearGradient>
    
    </View>
  )
}

export default APP

const styles = StyleSheet.create({})