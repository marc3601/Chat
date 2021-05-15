import React from 'react';
import {ScrollView, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import ChatRoomItem from '../components/ChatRoomItem';
const RoomsScreen = () => {
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

  console.log(data);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:(</Text>;
  return (
    <ScrollView style={{paddingTop: 125, backgroundColor: '#E5E5E5'}}>
      {data.usersRooms.rooms.map((room) => (
        <ChatRoomItem key={room.id} {...room} />
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;
