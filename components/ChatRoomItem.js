import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ProfileIcon from '../assets/icons/ProfileIcon';
export default function ChatRoomItem({...room}) {
  return (
    <View style={false ? styles.containerActive : styles.container}>
      {room.roomPic ? (
        <Image style={styles.image} source={{uri: room.roomPic}} />
      ) : (
        <ProfileIcon />
      )}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <View style={styles.textContainer}>
          <Text style={false ? styles.mainTextActive : styles.mainText}>
            {room.__typename}
          </Text>
          <Text style={false ? styles.textActive : styles.text}>
            {room.name}
          </Text>
        </View>
        <View>
          <Text style={false ? styles.activeDot : styles.active}>
            2 minutes
          </Text>
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
  activeDot: {
    position: 'absolute',
    right: 0,
    color: 'green',
    // alignSelf: 'stretch',
  },
  active: {
    color: 'black',
    position: 'absolute',
    right: 0,
    color: 'black',
  },
});
