import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator, Item, PlaceholderList} from './components';
import useHome from './hooks';

export const HomeScreenComponent = () => {
  const {data, onLoadMore, isLoadingMore, isLoading} = useHome();

  return (
    <>
      <View>
        {isLoading && <PlaceholderList testID="HomeScreen.PlaceholderList" />}
        {!isLoading && (
          <FlatList
            testID="HomeScreen.FlatList"
            data={data}
            renderItem={({item}) => (
              <Item id={item.id} name={item.name} imageUrl={item.imageUrl} />
            )}
            keyExtractor={item => item.id}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => (
              <ActivityIndicator color="black" animating={isLoadingMore} />
            )}
          />
        )}
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
