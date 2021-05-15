import React from 'react';
import {ScrollView, Text} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import ChatRoomItem from '../components/ChatRoomItem';
import img from '../assets/user.jpg';
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

  const msgs = [
    {
      id: 1,
      img: img,
      head: 'The one with Harry',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
      active: true,
    },
    {
      id: 2,
      img: img,
      head: 'The one with Ron',
      text: 'Ron sent a photo',
      lastActive: '24 min',
    },
    {
      id: 3,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 4,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 5,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 6,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 7,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 8,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 9,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 10,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 11,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
    {
      id: 12,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
  ];

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
