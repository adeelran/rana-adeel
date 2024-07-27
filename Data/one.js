import { Text, View ,Button,ImageBackground, TouchableHighlight, Pressable} from "react-native"

export const One=(props)=>{
return(
    <View style={{ flex:1}}>
    <ImageBackground style={{width:"100%",height:"100%"}} source={require("../images/mountain.jpg")}>
    <Text style={{fontSize:80,margin:50,color:"white"}}>Aspen</Text>
    <View style={{justifyContent:"flex-end",flex:1}}>
    <Text style={{fontSize:25,marginLeft:25,color:"white"}}>Plan your</Text>
    <Text style={{fontSize:45,marginLeft:25,color:"white"}}>Luxurious</Text> 
    <Text style={{fontSize:45,marginLeft:25,color:"white"}}>Vacation</Text>
    </View>
    <View style={{justifyContent:"center",alignItems:'center'}}> 
    <Pressable  onPress={()=> props.navigation.navigate("Two")}>
      <Text style={{backgroundColor:"blue", width:310,height:40,padding:10
      ,marginBottom:40,borderRadius:15,textAlign:"center",color:"white"}}>Explore </Text>
    </Pressable>
    
    </View>
</ImageBackground>
  </View>
)
}