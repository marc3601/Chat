import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function RoomIcons({Search, Rooms}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <Search />
      </View>

      <View style={styles.icon}>
        <Rooms />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
  },
});
