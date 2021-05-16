import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import ProfileIcon from '../assets/icons/ProfileIcon';
import TimeAgo from 'react-native-timeago';
export default function ChatRoomItem({navigation, ...room}) {
  const [roomNameTrim, setRoomNameTrim] = useState('');
  const [messageTrim, setMessageTrim] = useState('');
  const GET_MESSAGES = gql`
  query getMessages {
    room(id:"${room.id}") {
      messages {
        id
        body
        insertedAt
      }
    }
  }
`;
  const {loading, error, data} = useQuery(GET_MESSAGES);
  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  // console.log(data.room);
  // useEffect(() => {
  //   if (roomNameTrim.length >= 40) {
  //     const trimmed = room.name.substring(0, room.name.length - 10) + '...';
  //     setRoomNameTrim(trimmed);
  //   }
  //   if (messageTrim.length >= 45) {
  //     const trimmed = data.room.messages[0].body.substring(0, 45) + '...';
  //     setMessageTrim(trimmed);
  //   }
  // }, [data]);

  if (loading) {
    return (
      <Text
        style={{
          paddingTop: 140,
          textAlign: 'center',
          fontSize: 30,
          color: '#5603AD',
        }}
      >
        Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text
        style={{
          paddingTop: 140,
          textAlign: 'center',
          fontSize: 30,
          color: 'red',
        }}
      >
        Error:(
      </Text>
    );
  }

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
              {roomNameTrim ? roomNameTrim : room.name}
            </Text>
            <Text style={false ? styles.textActive : styles.text}>
              {messageTrim ? messageTrim : data.room.messages[0].body}
            </Text>
          </View>
          <View>
            <Text style={false ? styles.activeDot : styles.active}>
              <TimeAgo time={data.room.messages[0].insertedAt} hideAgo={true} />
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
    fontSize: 11,
    paddingRight: 25,
  },
  textActive: {
    color: 'white',
    fontFamily: 'PoppinsRegular',
    paddingRight: 25,
  },
  mainText: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 12,
    paddingRight: 60,
  },
  mainTextActive: {
    color: 'white',
    fontFamily: 'Poppins',
  },
  activeDot: {
    position: 'absolute',
    right: 0,
    color: 'green',
  },
  active: {
    color: 'black',
    position: 'absolute',
    right: 0,
    color: 'black',
    fontSize: 11,
  },
});
