import {Text,
    TouchableOpacity,ImageBackground,
    View,
    Image,} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_KEY} from './content';
import Geolocation from '@react-native-community/geolocation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
API_KEY;
const Livelocation = props => {
    const {name} = props.route.params;
  const [data, setData] = useState();
  const getData=async(latitude,longitude)=>{
    try {
        let res=await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
          )
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.log(error));
    } catch (error) {
        console.log(error.message)
    }
  }
  const getLocation=async()=>{ 
    try {
      await Geolocation.getCurrentPosition(info => getData(info.coords.latitude,info.coords.longitude));
    } catch (error) {
        console.log(error.message)
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require("../weatherimage/sea.jpg")}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
<View style={{position:"absolute" ,flexDirection:"row"}}> 
  
<TouchableOpacity>
  <FontAwesome
                style={{margin:20}}
                name="plus"
                size={20}
                color={'black'}></FontAwesome>
            

                </TouchableOpacity>
                <TouchableOpacity>

                
                <View style={{marginLeft:250}}>
                <Entypo
                style={{margin:20}}
                name="dots-three-vertical"
                size={20}
                color={'black'}></Entypo>
                </View>
                </TouchableOpacity>



                </View>
      <View  
  style={{
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    top: 50,
    
    left: 0,
    right: 0,
  }}>
  

        <View>
 
        </View>
        
  <View >
    <View > 
      <Text style={{fontSize:50,color:"black",fontWeight:"700"}}>{data.name} </Text>
     
    </View>
      
    </View>

      </View>

      
    </View>
  );
};

export default Livelocation;
