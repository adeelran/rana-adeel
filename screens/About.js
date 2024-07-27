import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.top}>
      <Text style={styles.main}>About us</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    main:{
        textAlign:"center",
        color:"white",
        backgroundColor:"black",
        fontSize:30,
    },
    top:{flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})