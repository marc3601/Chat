import React, {useEffect} from 'react';
import {ScrollView, Text, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import ChatRoomItem from '../components/ChatRoomItem';
import {TouchableOpacity} from 'react-native';
const RoomsScreen = ({navigation}) => {
  const GET_ROOMS = gql`
    query GetRooms {
      usersRooms {
        rooms {
          id
          name
          roomPic
        }
      }
    }
  `;

  const {loading, error, data} = useQuery(GET_ROOMS);

  if (loading)
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
  if (error)
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
  return (
    <ScrollView style={{paddingTop: 125, backgroundColor: '#E5E5E5'}}>
      {data.usersRooms.rooms.map((room) => (
        <TouchableOpacity activeOpacity={0.5} key={room.id}>
          <ChatRoomItem {...room} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;
