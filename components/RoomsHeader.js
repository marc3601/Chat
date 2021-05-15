import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RoomsHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Rooms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainText: {
        color: "#5603AD",
        fontSize: 36,
        fontFamily: "Poppins"
    }
  });
  
