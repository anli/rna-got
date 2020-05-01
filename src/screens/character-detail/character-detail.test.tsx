import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CharacterDetailScreen} from '@screens';
import {store} from '@store';
import React from 'react';
import 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {cleanup, render as RNTRender} from 'react-native-testing-library';
import {Provider as StoreProvider} from 'react-redux';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(() => ({params: {id: 1}})),
  };
});

const Stack = createStackNavigator();

const render = () =>
  RNTRender(
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="CharacterDetailScreen"
              component={CharacterDetailScreen.Component}
              options={CharacterDetailScreen.Options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>,
  );

describe('CharacterDetail Screen', () => {
  afterAll(() => {
    cleanup();
  });

  it('Given any, When I am at "CharacterDetail Screen", Then I should see "Character Information"', async () => {
    const component = render();
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Male')).toBeDefined();
  });
});
