import { StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';



const Home = (props) => {
  return (
    <View style={{flex:1}}>  
    <LinearGradient colors={['#53528a','#FFFFFF']} style={{height:'100%'}}>
        <View style={{marginTop:200,marginHorizontal:30}} > 
        <Image source={require('../weatherimage/weather.png')} style={{height: 200, width: 290}} />
        <Text style={{fontWeight:"700",fontSize:30,textAlign:"center"}}> Weather</Text>
        </View>
        <TouchableOpacity onPress={()=> props.navigation.navigate("Hometwo")} >
      <Text style={{backgroundColor:"#0482CA", width:160,height:47,padding:10
      ,borderRadius:30,textAlign:"center",color:"white" ,marginHorizontal:100,marginTop:180,fontSize:20}}>Let's Start </Text>
    </TouchableOpacity>

   

   

     
    </LinearGradient>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})