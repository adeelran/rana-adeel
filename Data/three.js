import { Button, StyleSheet, Text, TextInput, View,FlatList,ScrollView ,ImageBackground, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const Three = (props) => {
    const {item}=props.route.params;
  return (
    <View>
     <View style={{flexDirection:"row"}}>
<View style={{ width:350,height:250,margin:3}}>
<ImageBackground style={{width:"100%",height:"100%"}} source={item.img}>

  <View > 
  <View style={{width:40,height:40,borderRadius:20,backgroundColor:"white",margin:230}}>
  <FontAwesome style={{margin:7}} name="heart" size={25} color={"red"}> </FontAwesome>
  </View></View>
</ImageBackground>
 
</View>
 </View>
 <View style={{flexDirection:"row"}}>
  <View>
  <View style={{flexDirection:"row" }}>
  <Text style={{fontSize:20,margin:10}}>{item.name}</Text>
  <Text style={{color:"blue",marginLeft:140,marginTop:15}}> {item.dic} </Text>
  </View>
 <View style={{
  flexDirection:"row",borderRadius:20,margin:10,marginLeft:1}}>
  <FontAwesome style={{margin:5}} name="star" size={20}  color={"gold"}></FontAwesome>
  <Text style={{margin:5}}>{item.dec}</Text>
  </View>
<View style={{flexDirection:"row"}}> 
  
  <View style={{margin:10}}>
  <Text>{item.textname}</Text>
  </View>
  
 </View>
  </View>
 
 </View>
 
 <View style={{margin:10}}>
  <Text style={{fontSize:30}}>Facilities</Text>
  
  <View style={{flexDirection:"row" ,margin:10}}>
  <TouchableOpacity> 
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="wifi" size={20}  ></FontAwesome>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="cutlery" size={20}  ></FontAwesome>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="cart-plus" size={20}  ></FontAwesome>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{width:60,height:60,backgroundColor:"white",borderRadius:20,margin:10}}> 
    <FontAwesome style={{margin:20}} name="ship" size={20}  ></FontAwesome>
    </View>
    </TouchableOpacity>
  </View>
 
 </View>
 <View  style={{flexDirection:"row" }}>
 <View style={{marginLeft:10}}>
     <Text>price</Text>
  <Text style={{color:"green",fontSize:25}}>$199 </Text>
  </View>

<View>
<TouchableOpacity> 
<View style={{backgroundColor:"blue",flexDirection:"row",borderRadius:10,width:200,marginLeft:50}}>
<Text style={{
    color:"white",
    margin:6,
    padding:6,
    textAlign:"center",
    fontSize:20,
    }}>Book now </Text>
      
         <FontAwesome style={{marginTop:8}} name="long-arrow-right" size={40} color={"white"} > </FontAwesome>
    </View>
    </TouchableOpacity>
</View>
</View>

    </View>
  )
}

export default Three

const styles = StyleSheet.create({})