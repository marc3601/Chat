import React, {useEffect} from 'react';
import {ScrollView, Text, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import ChatRoomItem from '../components/ChatRoomItem';
import {TouchableOpacity} from 'react-native';
const RoomsScreen = ({navigation}) => {
 
  const GET_ROOMS = gql`
    query GetRoomsData {
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

  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  return (
    <ScrollView style={{paddingTop: 125, backgroundColor: '#E5E5E5'}}>
      {data.usersRooms.rooms.map((room) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat', {roomID: room.id})}
          activeOpacity={0.5}
          key={room.id}
        >
          <ChatRoomItem {...room} navigation={navigation} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;
