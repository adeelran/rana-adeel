import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const navigation=useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const Data = {
    userId:name,
    title:email,
    body:password
  };

  const handleSubmit = () => {
    if(name.length>0 && email.length>0 && password.length>0)
      {
        axios
        .post("https://jsonplaceholder.typicode.com/posts",Data)
        .then(()=>ToastAndroid.show('Record inserted', ToastAndroid.LONG))
        
        .catch(error=>ToastAndroid.show(error. message,ToastAndroid.LONG))
        navigation.navigate("Details")
      }
      else{
        ToastAndroid.show('plz insert all information',ToastAndroid.LONG)
      }
   
  }
  return (
    <View>
      <Text>Sign Up </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(val)=>setName(val)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(val)=>setEmail(val)}
      />
      <TextInput
        placeholder="Password"
         value={password}
        onChangeText={(val)=>setPassword(val)}
      />
      <View style={{alignSelf:"center",width:200,borderRadius:10,margin:10}}> 
      <Button title="Submit" onPress={handleSubmit} />
      </View>
      
    </View>
  );
};

export default Main;
