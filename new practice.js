import { Button, StyleSheet, Text, TextInput, View,FlatList,ScrollView ,ImageBackground, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stack=createNativeStackNavigator();
const App = () => {
 const btnbutton=()=>{
  console.warn("btn action")
 }
  return (
   <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="page 1" component={Login}
/>
<Stack.Screen name="home" component={Home}
/>


</Stack.Navigator>
   </NavigationContainer>
  )
}
const Home=(props)=>{
    
    
  const user=[
    {
      Id:1,
      name:"Location",
      age:24
    },
    {
      Id:2,
      name:"Hotels",
      age:25
    },
    {
      Id:3,
      name:"Food",
      age:26
    },
    {
      Id:4,
      name:"Adventure",
      age:27
    },
    {
      Id:5,
      name:"advance",
      age:28
    } ,{
      Id:4,
      name:"pakage",
      age:27
    },
    {
      Id:5,
      name:"benifits",
      age:28
    }
  ]
  
return(
  <View style={{flex:1}}>

<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<View style={{flex:1}}>
    <Text style={{fontSize:20}}>Explore</Text>
    <Text style={{fontSize:25}}>Aspen </Text></View>

    <View style={{flexDirection:"row", marginLeft:70,flex:1}}>
   <FontAwesome name="map-marker" size={25} color={"blue"}></FontAwesome>
   <Text style={{fontSize:20}}>Aspen USA </Text></View></View>

<View style={{flexDirection:"row",width:320,height:40,backgroundColor:"white",margin:10,borderRadius:20}}>
<FontAwesome style={{margin:10}} name="search" size={20}></FontAwesome>
<TextInput  placeholder='find things to do'></TextInput></View >

<View >
<FlatList style={{flexDirection:"row"}}
horizontal
data={user} 
renderItem={({item})=><Text style={styles.item}>{item.name} </Text>}
/>
 </View> 

 <View>
<Text style={{fontSize:20}}>Popular </Text>
</View>
<View style={{flexDirection:"row"}}>
<TouchableOpacity>
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
</TouchableOpacity>
<TouchableOpacity> 
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5,justifyContent:"flex-end"}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1,justifyContent:"flex-end"}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
   
</TouchableOpacity>
<TouchableOpacity> 
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5,justifyContent:"flex-end"}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1,justifyContent:"flex-end"}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
   
</TouchableOpacity>
<TouchableOpacity> 
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5,justifyContent:"flex-end"}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1,justifyContent:"flex-end"}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
   
</TouchableOpacity>
</View>

<View>
<Text style={{fontSize:20}}>Recommended</Text>
</View>


<View style={{flexDirection:"row"}}>
  
<TouchableOpacity>
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
</TouchableOpacity>
<TouchableOpacity> 
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5,justifyContent:"flex-end"}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1,justifyContent:"flex-end"}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
   
</TouchableOpacity>
<TouchableOpacity> 
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5,justifyContent:"flex-end"}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1,justifyContent:"flex-end"}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
   
</TouchableOpacity>
<TouchableOpacity> 
<View style={{justifyContent:"flex-end", width:160,height:220,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
<Text style={{backgroundColor:"gray",width:120,borderRadius:30,height:40,padding:10}}>Alley palace</Text>
<View style={{flexDirection:"row",margin:5,justifyContent:"flex-end"}}>
<View style={{width:90,height:40,backgroundColor:"gray",
flexDirection:"row",borderRadius:20,margin:10,marginLeft:1,justifyContent:"flex-end"}}>
<FontAwesome style={{margin:10}} name="star" size={20}  color={"gold"}></FontAwesome>
<Text style={{margin:10}}>4.1</Text>
</View>
<View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",marginTop:12}}>
<FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}></FontAwesome>
</View>
</View>
</ImageBackground>
</View>
   
</TouchableOpacity>

</View>

   </View>
)
}
const Login=(props)=>{
 
  return(
    <View style={{margin:30,flex:1}}>
      <ImageBackground style={{width:"100%",height:"100%"}} source={require("./images/images.jpg")}>
      <Text style={{fontSize:80,margin:10,color:"white"}}>Aspen</Text>
      <View style={{justifyContent:"flex-end",flex:1}}>
      <Text style={{fontSize:20,margin:1,color:"white"}}>Plan your</Text>
      <Text style={{fontSize:50,margin:1,color:"white"}}>Luxurious</Text> 
      <Text style={{fontSize:50,margin:1,color:"white"}}>Vacation</Text>
      </View>
      <Button title='Explore' onPress={()=> props.navigation.navigate("home")} />
</ImageBackground>
    
      
      
     
    </View>
  )
}
const header=()=>{
  return(
    <Button title='btn' />
  )
}
export default App

const styles = StyleSheet.create({
  item:{
    fontSize:10,
    margin:5,
    padding:10,
    borderRadius:20,
    backgroundColor:"white"
   } 
}
 )