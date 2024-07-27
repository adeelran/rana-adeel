
import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const MyComponent = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);

  // Rest of your component code
}

Geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    error => {
      console.error(error.message);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
  import MapView, { Marker } from 'react-native-maps';

  const MyMapComponent = ({ userLocation }) => (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }} />
    </MapView>
  );
  
  // Usage:
  <MyMapComponent userLocation={userLocation} />
  import React, { useState, useEffect } from 'react';
  import { PermissionsAndroid, Platform } from 'react-native';
  import Geolocation from '@react-native-community/geolocation';
  
  const App = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
  
    useEffect(() => {
      // Request permission for accessing the device's location
      const requestLocationPermission = async () => {
        try {
          if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Location permission granted');
              watchLocation();
            } else {
              console.log('Location permission denied');
            }
          } else {
            Geolocation.requestAuthorization();
            watchLocation();
          }
        } catch (err) {
          console.warn(err);
        }
      };
  
      requestLocationPermission();
  
      // Clean up function to stop watching location when component unmounts
      return () => {
        Geolocation.clearWatch(watchId);
      };
    }, []);
  
    const watchLocation = () => {
      const watchId = Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        error => {
          console.error(error.message);
        },
        { enableHighAccuracy: true, distanceFilter: 10 }, // Update every 10 meters
      );
    };
  
    return (
      
       <Text>{currentLocation ? `Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}` : 'Waiting for location...'}</Text>
    );
  };
  
  export default App;
      