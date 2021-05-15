import 'react-native-gesture-handler';
import 'localstorage-polyfill';
import React from 'react';
import {View} from 'react-native';
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client/react';
import {setContext} from '@apollo/client/link/context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RoomsHeader from './components/RoomsHeader';
import {useFonts} from 'expo-font';
import RoomIcons from './components/RoomIcons';
import SearchIcon from './assets/icons/SearchIcon';
import RoomsIcon from './assets/icons/RoomsIcon';
import RoomsScreen from './screens/RoomsScreen';
const Stack = createStackNavigator();

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
});

const authLink = setContext((_, {headers}) => {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MjMxOTQ0NDEsImlhdCI6MTYyMDc3NTI0MSwiaXNzIjoiY2hhdGx5IiwianRpIjoiOTdmZTM0NzYtM2QwZi00MjlmLTgyNTctNWIzYmVkMmEwNTIwIiwibmJmIjoxNjIwNzc1MjQwLCJzdWIiOiI3NDU1N2U3MC00MTU5LTQ4MzItODVhNi04YmQ4MThhNWQ0MzQiLCJ0eXAiOiJhY2Nlc3MifQ.6THpS6WJIli-lC1wL6fA2FRDGiF6VSGky1_ZsJBWJU7bMkgygRiols_-PxH3J3C9BEaTJFZbjhkYGhKWpbt9jw';
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const globalHeaderStyles = {
  headerStyle: {
    height: 125,
  },
};

export default function App() {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) return null;
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalHeaderStyles}>
          <Stack.Screen
            name="Rooms"
            component={RoomsScreen}
            options={{
              title: 'Rooms',
              headerTitle: <RoomsHeader />,
              headerRight: () => (
                <RoomIcons Search={SearchIcon} Rooms={RoomsIcon} />
              ),
              headerTransparent: true,
              headerBackground: () => (
                <View
                  style={{
                    backgroundColor: '#B6DEFD',
                    height: 125,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                  }}
                ></View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
