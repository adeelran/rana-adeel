
import { Button, StyleSheet, Text, TextInput, View,FlatList,TouchableHighlight, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stack=createNativeStackNavigator();

const Third = () => {
  return (
    <View>
  <View style={{flexDirection:"row"}}>
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<View style={{flexDirection:"row",marginLeft:120}}>
  
  <View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:5}}>
  <FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
  </View>
  </View>
</ImageBackground>
 
</View>
 </View>




 <View style={{flexDirection:"row"}}>
  <View>
  <Text style={{fontSize:20}}> Coeurdes Alpes</Text>
 <View style={{
  flexDirection:"row",borderRadius:20,margin:10,marginLeft:1}}>
  <FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
  <Text style={{margin:10}}>4.5(355 Rewiews)</Text>
  </View>
 
  </View>
 <Text style={{margin:5,marginLeft:100,color:"blue"}}> Show map</Text>
 </View>


 <View>
  <Text>Aspen in as close asone can get to a storybook alpine town in america.The choose your -own-advanture possibilities-
    skiing,hiking,dining shopping and... 
  </Text>
 </View>
 <View>
  <Text style={{fontSize:30}}>Facilities</Text>
  <View style={{flexDirection:"row" ,margin:20}}>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="wifi" size={20}  ></FontAwesome>
    </View>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="cutlery" size={20}  ></FontAwesome>
    </View>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="cart-plus" size={20}  ></FontAwesome>
    </View>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="ship" size={20}  ></FontAwesome>
    </View>
  </View>
 </View>



<View  style={{flexDirection:"row" }}>
  <View>
     <Text>price</Text>
  <Text style={{color:"green",fontSize:25}}>$199 </Text>
  </View>

<View>

<Text style={{ backgroundColor:"blue",
    color:"white",
    margin:6,
    padding:6,
    textAlign:"center",
    fontSize:20,
    borderRadius:10,
    width:200,height:40 }}>Book now </Text>
</View>
</View>
</View>
  )
}

export default Third
const styles = StyleSheet.create({

  
  }
)