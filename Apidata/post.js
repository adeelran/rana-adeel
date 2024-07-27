import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';


const App = () => {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
 
const handleSubmit =(e)=>{
axios.post("https://jsonplaceholder.typicode.com/posts",{firstName,lastName})
.then((response)=>{
  console.log(JSON.stringify(response.data));
    setinputdata(response.inputdata)
})

 }
  return (
    <View>
      <Text>Sign Up  </Text>
      <TextInput
        placeholder="Fname"
        value={firstName}
        onChangeText={(val)=>setFirstName(val)}

      />
      <TextInput
        placeholder="Lname"
        value={lastName}
        onChangeText={(val)=>setLastName(val)}
      />
      
      <Button title="Submit"onPress={handleSubmit} />
      
    </View>
  );
};

export default App;
