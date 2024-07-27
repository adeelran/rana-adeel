import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import FlatData from './FlatData';

const Location = (props) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View>
      <Text>locations</Text>
      <FlatList
        data={FlatData}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedId;
          return (
            <TouchableOpacity 
              onPress={() => {
                props.navigation.navigate("Home", { item:item.name });
                setSelectedId(item.id);
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  style={styles.image}
                  source={item.img}
                />
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity>
                <View style={[styles.box, isSelected && styles.selectedBox]} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  itemContainer: {
    height: 70,
    width: "90%",
    margin: 5,
    flexDirection: "row",
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green",
    alignItems: "center"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 5,
    margin: 5,
    width:"20%"

  },
  itemName: {
    fontSize: 20,
    textAlign: "center",
    
    width:"60%"
  },
  box: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  selectedBox: {
    backgroundColor: 'black'
  }
});
