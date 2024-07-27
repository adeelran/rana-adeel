import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {API_KEY} from './content';
import location from './location';

const Hometwo = props => {
  const [data, setData] = useState('');
  const [city, setcity] = useState('');
  const cities = [
    {
      name: 'Lahore',
    },
    {
      name: 'Zahir pir',
    },
    {
      name: 'khanpur',
    },
  ];
  const getData = async () => {
    try {
      const arr = [];
      for (let city of cities) {
        let res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`,
        );
        res = await res.json();
        // console.log("MYRESPONSE===>",res);
        arr.push(res);
        setData(arr);
      }
      console.log(arr);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#6a699f', '#FFFFFF']} style={{height: '100%'}}>
        <View style={{position: 'absolute', marginLeft: 80, marginTop: 8}}   
            >
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Location', {name: location})
            }>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                backgroundColor: 'black',
                width: 120,
                height: 30,
                textAlign: 'center',
                borderRadius: 10,
              }}>
              
              Location
            </Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.38)',
            'rgba(255, 255, 255, 0),rgba(151, 151, 151, 0.16)',
          ]}
          style={{
            height: 50,
            width: 300,
            borderRadius: 20,
            marginTop: 40,
            marginHorizontal: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: 150,
              height: 40,
              margin: 10,
              borderRadius: 20,
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Cards', {name: city})}>
              <FontAwesome
                style={{margin: 8}}
                name="search"
                size={20}
                color={'white'}></FontAwesome>
            </TouchableOpacity>
            <TextInput
              placeholder="Enter location"
              placeholderTextColor={'white'}
              style={{color: 'white', fontSize: 15}}
              value={city}
              onChangeText={val => setcity(val)}></TextInput>
          </View>
        </LinearGradient>
        {data.length > 0 && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Cards', {name: item.name})
                }>
                <View
                  style={{
                    width: '80%',
                    alignSelf: 'center',
                    height: 60,
                    backgroundColor: '#4D8CBA',
                    margin: 5,
                    borderRadius: 15,
                    padding: 10,
                    marginTop: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text
                        style={{fontSize: 20, color: 'white', paddingLeft: 10}}>
                        {' '}
                        {item.name}
                      </Text>
                      <Text style={{color: 'white', paddingLeft: 10}}>
                        {' '}
                        {(item.main.temp_max - 273).toFixed(0)}&deg;/{' '}
                        {(item.main.temp_min - 273).toFixed(0)}&deg;{' '}
                      </Text>
                    </View>

                    <Text
                      style={{
                        paddingLeft: 140,
                        fontSize: 20,
                        color: 'white',
                        fontWeight: '700',
                      }}>
                      {(item.main.temp - 273).toFixed(0)}&deg;
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}

        <LinearGradient
          colors={['#c8ceff', '#9796c2']}
          style={{
            height: 280,
            width: 370,
            borderTopLeftRadius: 360,
            borderTopRightRadius: 360,
            marginTop: 5,
          }}>
          <View style={{marginTop: 30, marginHorizontal: 30}}>
            <Image
              source={require('../weatherimage/weather.png')}
              style={{height: 200, width: 290}}
            />
            <Text
              style={{fontWeight: '700', fontSize: 30, textAlign: 'center'}}>
              {' '}
              Weather
            </Text>
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default Hometwo;

const styles = StyleSheet.create({});
