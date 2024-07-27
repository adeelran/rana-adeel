import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data,setdata]=useState([])
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((response)=>{
        setdata(response.data)
       }
      )
},[])
  return (
     <ScrollView>
      {data.map((data)=>{
        return(

       
       <View>
        <Text>{data.id} </Text>
        <Text>{data.title} </Text>
        <Text>{data.body} </Text>
       </View>
 )
      }
      )}
     </ScrollView>
    
   
  )
}

export default App

const styles = StyleSheet.create({})