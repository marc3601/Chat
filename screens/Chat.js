import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Chat() {
  return (
    <View>
      <Text style={{color:"black", paddingTop:150}}>This is your chat view</Text>
      <Button title="<<"/>
    </View>
  );
}
