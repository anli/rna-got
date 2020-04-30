import {NavigationContainer} from '@react-navigation/native';
import {store} from '@store';
import React from 'react';
import 'react-native';
import {render} from 'react-native-testing-library';
import {Provider as StoreProvider} from 'react-redux';
import HomeScreen from './home';

describe('Home Screen', () => {
  it('Given any, When I am at "Home Screen", Then I should see "List of Characters Names"', () => {
    const component = render(
      <StoreProvider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </StoreProvider>,
    );
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Mary')).toBeDefined();
    expect(component.getByText('Jane')).toBeDefined();
  });
});
