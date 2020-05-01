import React from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator, Item, PlaceholderList} from './components';
import useHome from './hooks';

const HomeScreenComponent = () => {
  const {data, onLoadMore, isLoadingMore, isLoading, onShowDetail} = useHome();

  return (
    <>
      <View>
        {isLoading && <PlaceholderList testID="HomeScreen.PlaceholderList" />}
        {!isLoading && (
          <FlatList
            testID="HomeScreen.FlatList"
            data={data}
            renderItem={({item}) => (
              <Item
                onPress={onShowDetail}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
              />
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

export default class {
  static Component = HomeScreenComponent;
  static Options = HomeScreenOptions;
}
