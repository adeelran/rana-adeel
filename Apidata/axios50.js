import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setdata]=useState([])
  const GetAPIData=  ()=>{axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((Response)=>{
      setdata(Response.data)
    })

  }  
  useEffect(()=>{
GetAPIData()   
  },[])
  return (
     <ScrollView>
      <Text> API Data </Text>
      {
        data.map((data)=>{
          return(
          <View> 
          <Text>  {data.id} </Text>
          <Text>  {data.userId} </Text>
          <Text>  {data.title} </Text>
          <Text>  {data.body} </Text>
         
          </View>
          )
          
        } 
        )
      } 
   </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})