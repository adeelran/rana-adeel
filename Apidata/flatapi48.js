import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'



const App = () => {
  const [data,setdata]=useState([])
  const Apidata= async()=>{
    const url =("https://jsonplaceholder.typicode.com/posts ")
    let result= await fetch(url)
    result= await result.json()
    setdata(result)
  }
  
useEffect(()=>{
Apidata()

},[])
  return (
    <View> 
     
    {
      data.length ? 
      <FlatList 
      data={data}
      renderItem={({item})=>
        <View>
          <Text>{item.id} </Text> 
           <Text>{item.body} </Text> 
        </View>
      }
      /> 
      :null
    }
    </View>
  )
}

export default App

const styles = StyleSheet.create({})