import { Button, StyleSheet, Text, TextInput, View,FlatList,ScrollView ,ImageBackground, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LastData from './LastData';
import data from './data';
export const Two=(props)=>{
return(
    <View style={{marginLeft:5}}>
      
<View style={{flexDirection:"row",justifyContent:"space-between",margin:10}}>
<View style={{flex:1,marginLeft:5}}>
    <Text style={{fontSize:15}}>Explore</Text>
    <Text style={{fontSize:25}}>Aspen </Text></View>
    <View style={{flexDirection:"row", marginLeft:70,flex:1}}>
   <FontAwesome name="map-marker" size={20} color={"blue"}></FontAwesome>
   <Text style={{fontSize:15,marginLeft:5}}>Aspen USA </Text></View></View>

<View style={{flexDirection:"row",width:320,height:40,backgroundColor:"white",margin:10,borderRadius:20}}>
<FontAwesome style={{margin:10}} name="search" size={20}></FontAwesome>
<TextInput  placeholder='find things to do'></TextInput></View >
<View >
<FlatList style={{flexDirection:"row"}}
horizontal
data={user} 
renderItem={({item})=><Text style={{ fontSize:10,
    margin:5,
    padding:10,
    borderRadius:20,
    backgroundColor:"white"}}>{item.name} </Text>}
/>
 </View> 
 <Text style={{fontSize:20,margin:10}}>Popular </Text>
 <FlatList
          data={data}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=> props.navigation.navigate("Three",{item})
              } >


                <View style={{height: 170, width: 170,margin:5}}  >
                  <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={item.img}>
                       
                      <Text style={{backgroundColor:"gray",width:100,marginTop:85,
 borderRadius:30,height:40,padding:10}}>{item.name}</Text>
                     
 
                        <View style={{flexDirection:"row"}}> 
                        <View style={{ width:60,height:30,backgroundColor:"gray",
flexDirection:"row",borderRadius:10,margin:5,marginLeft:5,marginRight:60}}>
<FontAwesome style={{margin:8}} name="star" size={10}  color={"gold"}></FontAwesome>
<Text style={{margin:1,padding:4}}>{item.rate}</Text>
</View>
<View style={{width:30,height:30,borderRadius:15,backgroundColor:"white",marginTop:10}}>
<FontAwesome style={{margin:6}} name="heart" size={15} color={"red"}></FontAwesome>
</View>
</View>
                     
                    </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          }}
        />

<Text style={{fontSize:20,margin:10}}>Recommended</Text>
<FlatList
          data={LastData}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={()=> props.navigation.navigate("Three",{item})
            } >
                  <View style={{height: 170, width: 170,margin:5}}  >
                  <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={item.img}>
                       
                      <Text style={{backgroundColor:"gray",width:100,marginTop:85,
 borderRadius:30,height:40,padding:10}}>{item.name}</Text>
                     
 
                        <View style={{flexDirection:"row"}}> 
                        <View style={{ width:60,height:30,backgroundColor:"gray",
flexDirection:"row",borderRadius:10,margin:5,marginLeft:5,marginRight:60}}>
<FontAwesome style={{margin:8}} name="star" size={10}  color={"gold"}></FontAwesome>
<Text style={{margin:1,padding:4}}>{item.rate}</Text>
</View>
<View style={{width:30,height:30,borderRadius:15,backgroundColor:"white",marginTop:10}}>
<FontAwesome style={{margin:6}} name="heart" size={15} color={"red"}></FontAwesome>
</View>
</View>
                     
                    </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          }}
        />
    </View>
)
}