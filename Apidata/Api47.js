import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setdata]=useState([])
  const GetAPIData= async ()=>{

    const url="https://jsonplaceholder.typicode.com/posts"
 let result=await fetch(url);
result=await result.json();
setdata(result)

  }
  useEffect(()=>{
GetAPIData()
  },[])
  return (
     <ScrollView>

    
      <Text>API Data</Text>
      {
        data.length ? 
        data.map((item)=>
          <View> 
          <Text> "id"  {item.id}</Text>
          <Text> "userId" {item.userId}</Text>
          <Text> "title" {item.title}</Text>
          <Text> "body" {item.body}</Text>
          </View>
        )
        :null
      }
   </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})