import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const Home = (props) => {
  const countryName = props?.route?.params?.item;

  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false); // New state to track connection status
  const [stopwatchTime, setStopwatchTime] = useState(0); // Stopwatch time in milliseconds
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const stopwatchRef = useRef(null); // Ref to hold the interval ID

  useEffect(() => {
    // Loader simulation
    const loaderTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    // Stopwatch timer
    if (isStopwatchRunning) {
      stopwatchRef.current = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 100); // Update every 100ms
      }, 100);
    } else {
      if (stopwatchRef.current) clearInterval(stopwatchRef.current);
    }

    return () => {
      if (stopwatchRef.current) clearInterval(stopwatchRef.current);
    };
  }, [isStopwatchRunning]);

  const formatStopwatchTime = (time) => {
    const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const toggleStopwatch = () => {
    setIsStopwatchRunning((prevRunning) => !prevRunning);
    setIsConnected((prevConnected) => !prevConnected);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', width: '70%' }}>
          <Image
            source={require('../Tabbottom/icons/shield.png')}
            style={{ width: 35, height: 30 }}
          />
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Welcome</Text>
        </View>

        <View style={{ flexDirection: 'row', marginLeft: 0 }}>
          <Image
            source={require('../Tabbottom/icons/star.png')}
            style={{ width: 30, height: 30, tintColor: '#19C179', marginRight: 10 }}
          />
          <Image
            source={require('../Tabbottom/icons/share.png')}
            style={{ width: 30, height: 30, tintColor: '#19C179' }}
          />
        </View>
      </View>

      <View style={{ position: 'relative', marginHorizontal: 30 }}>
        <TextInput
          placeholder='Change Location'
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#19C179',
            paddingLeft: 10,
            paddingRight: 50, // Make space for the image
            fontWeight: 'bold'
          }}
        />
        <TouchableOpacity style={styles.textInputImageTouchable} onPress={() => {
          props.navigation.navigate("Location")
        }}>
          <Image
            source={require('../Tabbottom/icons/down.png')}
            style={styles.textInputImage}
          />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>{countryName}</Text>
      </View>
      <View>
        <Text style={{ color: "#19C179", fontSize: 30, textAlign: "center" }}>
          {formatStopwatchTime(stopwatchTime)}
        </Text>
      </View>

      <View style={styles.bottomBox}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <View style={styles.loaderContainer}>
                {!isConnected ? (
                  <>
                    <TouchableOpacity onPress={toggleStopwatch}>
                      <Image
                        source={require('../Tabbottom/icons/power.png')}
                        style={styles.powerImage}
                      />
                    </TouchableOpacity>
                    <Text style={styles.innerCircleText}>Disconnected</Text>
                  </>
                ) : loading ? (
                  <ActivityIndicator size={160} color="#19C179" />
                ) : (
                  <>
                    <TouchableOpacity onPress={toggleStopwatch}>
                      <Image
                        source={require('../Tabbottom/icons/power.png')}
                        style={styles.powerImage}
                      />
                    </TouchableOpacity>
                    <Text style={styles.innerCircleText}>Connected</Text>
                  </>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textInputImageTouchable: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -15 }],
  },
  textInputImage: {
    width: 30,
    height: 30,
    tintColor: '#19C179',
  },
  bottomBox: {
    width: '100%',
    height: 250, // Adjust the height as needed
    backgroundColor: '#19C179',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loaderContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  powerImage: {
    width: 30,
    height: 30,
    tintColor: 'black',
    position: 'absolute',
    zIndex: 1, // Ensures the power image is above the loader
  },
  innerCircleText: {
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: 20 }], // Adjust text position
    zIndex: 0, // Ensures the text is below the power image
  },
});
