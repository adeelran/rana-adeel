import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setdata]=useState(undefined)
  const GetAPIData= async ()=>{

    const url="https://jsonplaceholder.typicode.com/posts/1"
 let result=await fetch(url);
result=await result.json();
setdata(result)

  }
  useEffect(()=>{
GetAPIData()
  },[])
  return (
    <View>
      <Text>API Data</Text>
      {
        data? <View> 
          <Text> "id"  {data.id}</Text>
          <Text> "userId" {data.userId}</Text>
          <Text> "title" {data.title}</Text>
          <Text> "body" {data.body}</Text>
         </View>:null
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({})