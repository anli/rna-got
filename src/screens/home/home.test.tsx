import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '@screens';
import {store} from '@store';
import React from 'react';
import 'react-native';
import {
  cleanup,
  fireEvent,
  render as RNTRender,
} from 'react-native-testing-library';
import * as redux from 'react-redux';
import {Provider as StoreProvider} from 'react-redux';

const render = (children: Element) =>
  RNTRender(
    <StoreProvider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </StoreProvider>,
  );

describe('Home Screen', () => {
  afterAll(() => {
    cleanup();
  });

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

    const component = render(<HomeScreen />);

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

    const component = render(<HomeScreen />);

    expect(mockDispatch).toBeCalledTimes(1);

    fireEvent(component.getByTestId('HomeScreen.FlatList'), 'onEndReached');

    expect(mockDispatch).toBeCalledTimes(1);

    spyUseSelector.mockRestore();
    spyUseDispatch.mockRestore();
  });

  it('Given any, When I am at "Home Screen", Then I should see "List of Characters Names"', async () => {
    const component = render(<HomeScreen />);
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Mary')).toBeDefined();
    expect(component.getByText('Jane')).toBeDefined();
  });

  it('Given any, When I am at "Home Screen", And I scroll to "bottom", Then I should see "Additional List of Characters Names"', async () => {
    const component = render(<HomeScreen />);

    fireEvent(component.getByTestId('HomeScreen.FlatList'), 'onEndReached');

    expect(component.getByText('Paul')).toBeDefined();
    expect(component.getByText('Peter')).toBeDefined();
    expect(component.getByText('Micheal')).toBeDefined();
  });
});
