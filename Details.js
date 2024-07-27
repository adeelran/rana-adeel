import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const Details = () => {
    const getData=async()=>{
        try {
            let res=await axios.get("http://192.168.10.15:3000/user");
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})