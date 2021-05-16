import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {GiftedChat} from 'react-native-gifted-chat';

export default function Chat({route}) {
  const {roomID} = route.params;
  const [messages, setMessages] = useState([]);
  const GET_ROOM_MESSAGES = gql`
  query getRoomMessages {
    room(id:"${roomID}") {
      messages {
        id
        body
        insertedAt
        user {
          id
          lastName
          firstName
          profilePic
        }
      }
    }
    }
`;

  //ERROR  Error: Rendered more hooks than during the previous render. Don't know how to find a fix for that.
  const {loading, error, data} = useQuery(GET_ROOM_MESSAGES);
  if (loading) return <Text>'Loading...'</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;
  useEffect(() => {
    setMessages(
      // data.room.messages.map((item) => {
      //   return {
      //     _id: item.id,
      //     text: item.body,
      //     user: {
      //       _id: item.user.id,
      //       avater: item.user.profilePic,
      //     },
      //   };
      // })
      {
        _id: 1,
        text: "Running out of time :(",
        user: {
          _id: 1,
          avater: "",
        },
      }
    );
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: '74557e70-4159-4832-85a6-8bd818a5d434', //hardcoded chat user id
      }}
      renderAvatar={null}
      alwaysShowSend={true}
    />
  );
}
