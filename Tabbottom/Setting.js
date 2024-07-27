import { View, Text } from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style={{marginHorizontal:5}}>
      <Text style={{textAlign:"center",color:"green"}}>Setting</Text>
      <View style={{flexDirection:"row"}}>
        <Text style={{paddingRight:130,fontWeight:"700",fontSize:20}}> Enable TCP mode</Text>
        <View style={{width:20,height:20,borderWidth:1,borderRadius:4,marginTop:10}}></View>
      </View>
      <Text>
          If connection error,or no data connected,please enable TCP mode and reconnect.
        </Text>
    </View>
  )
}

export default Setting