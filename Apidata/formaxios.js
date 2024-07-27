import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      password
    };

    axios.post('(https://jsonplaceholder.typicode.com/posts)', userData)
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        setResponse(error.message);
      });
  };

  return (
    <View>
      <Text>Sign Up </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>Response: {response}</Text>
    </View>
  );
};

export default App;
