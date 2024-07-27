import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setage] = useState('');

  const handleSubmit = async () => {
    const url = ' ';
    let result = await fetch(url, {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: jsonstringify((name , email, age)),
    });
    result = await result.json();
  };

  return (
    <View>
      <Text>Sign Up </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={val => setName(val)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={val => setage(val)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default App;
