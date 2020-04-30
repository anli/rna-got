import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '@screens';
import {store} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};
export default App;
