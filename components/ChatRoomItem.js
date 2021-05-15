import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default function ChatRoomItem({...msg}) {
  return (
    <View
      key={msg.id}
      style={msg.active ? styles.containerActive : styles.container}
    >
      <Image style={styles.image} source={msg.img} />
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
      >
        <View style={styles.textContainer}>
          <Text style={msg.active ? styles.mainTextActive : styles.mainText}>
            {msg.head}
          </Text>
          <Text style={msg.active ? styles.textActive: styles.text}>{msg.text}</Text>
        </View>
        <View>
          <Text style={styles.active}>{msg.lastActive}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerActive: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#5603AD',
    padding: 15,
    marginTop: 15,
    marginBottom: 0,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 15,
    marginTop: 15,
    marginBottom: 0,
    borderRadius: 12,
  },
  image: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  textContainer: {
    marginLeft: 25,
  },
  text: {
    color: 'black',
    fontFamily: 'PoppinsRegular',
  },
  textActive: {
    color: 'white',
    fontFamily: 'PoppinsRegular',
  },
  mainText: {
    color: 'black',
    fontFamily: 'Poppins',
  },
  mainTextActive: {
    color: 'white',
    fontFamily: 'Poppins',
  },
  active: {
    color: 'white',
    alignSelf: 'stretch',
  },
});
