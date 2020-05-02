import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from '@store';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {render as RNTRender} from 'react-native-testing-library';
import {Provider as StoreProvider} from 'react-redux';

const Stack = createStackNavigator();

const render = (component: any, options: any) =>
  RNTRender(
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="screen"
              component={component}
              options={options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>,
  );

export default render;
