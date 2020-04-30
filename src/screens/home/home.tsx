import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {FlatList, View} from 'react-native';
import {Avatar, List} from 'react-native-paper';
import useHome from './hooks';

const HomeScreenComponent = () => {
  const {data} = useHome();

  return (
    <>
      <View>
        <FlatList
          testID="HomeScreen.FlatList"
          data={data}
          renderItem={({item}) => (
            <List.Item
              title={item.name}
              left={() => (
                <Avatar.Image size={48} source={{uri: item.imageUrl}} />
              )}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const HomeScreenOptions = {headerShown: false};

const Stack = createStackNavigator();
const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreenComponent}
      options={HomeScreenOptions}
    />
  </Stack.Navigator>
);

export default HomeStackScreen;
