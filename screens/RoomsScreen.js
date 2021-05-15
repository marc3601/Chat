import React from 'react';
import {ScrollView} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import img from '../assets/user.jpg';
const RoomsScreen = () => {
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
      id: 3,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
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
      id: 3,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
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
      id: 3,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
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
      id: 3,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
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
      id: 3,
      img: img,
      head: 'The one with Remus',
      text: 'Hey Harry, how you doing?',
      lastActive: '24 min',
    },
  ];
  return (
    <ScrollView style={{paddingTop: 125, backgroundColor: '#E5E5E5'}}>
      {msgs.map((msg) => (
        <ChatRoomItem {...msg} />
      ))}
    </ScrollView>
  );
};

export default RoomsScreen;
