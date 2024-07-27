import React, {useState} from 'react';
import {View, Button} from 'react-native';
import axios from 'axios';

const App = () => {
  const handleSubmit = async () => {
    const Data = {
      name: 'adeel',
      age: 40,
      email: 'abcde@gmail',
    };

    const url = ' ';
    let result = await fetch(url, {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: jsonstringify(Data),
    });
    result = await result.json();
  };

  return (
    <View>
      
      <Button title="Submit" onPress={handleSubmit} />
      
    </View>
  );
};

export default App;
