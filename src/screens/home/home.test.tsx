import {NavigationContainer} from '@react-navigation/native';
import {store} from '@store';
import React from 'react';
import 'react-native';
import {fireEvent, render} from 'react-native-testing-library';
import * as redux from 'react-redux';
import {Provider as StoreProvider} from 'react-redux';
import HomeScreen from './home';

describe('Home Screen', () => {
  it('Given any, When I am at "Home Screen", And data is "Loading", Then I should see "Placeholder List"', async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue({
      character: {
        data: [],
        page: 1,
        isLoadingMore: false,
        isLoading: true,
      },
    });

    const component = render(
      <StoreProvider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </StoreProvider>,
    );

    expect(component.getByTestId('HomeScreen.PlaceholderList')).toBeDefined();

    spy.mockRestore();
  });

  it('Given any, When I am at "Home Screen", And data is "Loading More", And I scroll to "bottom", Then I should not "Load More"', async () => {
    const spyUseSelector = jest.spyOn(redux, 'useSelector');
    spyUseSelector.mockReturnValue({
      character: {
        data: [],
        page: 1,
        isLoadingMore: true,
        isLoading: false,
      },
    });

    const spyUseDispatch = jest.spyOn(redux, 'useDispatch');
    const mockDispatch = jest.fn();
    spyUseDispatch.mockReturnValue(mockDispatch);

    const component = render(
      <StoreProvider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </StoreProvider>,
    );

    expect(mockDispatch).toBeCalledTimes(1);

    fireEvent(component.getByTestId('HomeScreen.FlatList'), 'onEndReached');

    expect(mockDispatch).toBeCalledTimes(1);

    spyUseSelector.mockRestore();
    spyUseDispatch.mockRestore();
  });

  it('Given any, When I am at "Home Screen", Then I should see "List of Characters Names"', async () => {
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

  it('Given any, When I am at "Home Screen", And I scroll to "bottom", Then I should see "Additional List of Characters Names"', async () => {
    const component = render(
      <StoreProvider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </StoreProvider>,
    );

    fireEvent(component.getByTestId('HomeScreen.FlatList'), 'onEndReached');

    expect(component.getByText('Paul')).toBeDefined();
    expect(component.getByText('Peter')).toBeDefined();
    expect(component.getByText('Micheal')).toBeDefined();
  });
});
