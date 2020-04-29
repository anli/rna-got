import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native';
import {render} from 'react-native-testing-library';
import HomeScreen from './home';

describe('Home Screen', () => {
  it('Given any, When I am at "Home Screen", Then I should see "List of Characters Names"', () => {
    const component = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Mary')).toBeDefined();
    expect(component.getByText('Jane')).toBeDefined();
  });
});
