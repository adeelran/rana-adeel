import {
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native';
  import React from 'react';
  import data from './Data/data';
  
  
  
  const App = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#ccc'}}>
        <Text>App</Text>
        <FlatList
          data={data}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity >
                <View style={{height: 200, width: 200}}  >
                  <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={item.img}>
                      <Text style={{fontSize:20,color:"orange"}}>{item.name}</Text>
                      <Text style={{fontSize:20,color:"orange"}}>{item.dec}</Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({});