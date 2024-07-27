import { Button, StyleSheet, Text, TextInput, View,FlatList,ScrollView ,ImageBackground, TouchableOpacity} from 'react-native'


export const Login = (props) => {
  return (
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

