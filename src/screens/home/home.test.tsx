import {HomeScreen} from '@screens';
import {render} from '@test';
import {cleanup, fireEvent} from 'react-native-testing-library';
import * as redux from 'react-redux';

const mockNavigate = jest.fn(() => {});
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({navigate: mockNavigate})),
  };
});

describe('Display a list of Game of Thrones characters in the list', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    cleanup();
  });

  it(`
    Scenario: Data from API has yet to be loaded
      Given data is "Loading"
      When I am at "Home Screen"
      Then I should see "Placeholder List"
  `, async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue({
      character: {
        data: [],
        page: 1,
        isLoadingMore: false,
        isLoading: true,
      },
    });

    const component = render(HomeScreen.Component, HomeScreen.Options);

    expect(component.getByTestId('HomeScreen.PlaceholderList')).toBeDefined();
  });

  it(`
    Scenario: User request load more data from API while loading more
      Given data is "Loading More"
      When I am at "Home Screen"
      And I scroll to "bottom"
      Then I should not "Load More"
  `, async () => {
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

    const component = render(HomeScreen.Component, HomeScreen.Options);

    expect(mockDispatch).toBeCalledTimes(1);

    fireEvent(component.getByTestId('HomeScreen.FlatList'), 'onEndReached');

    expect(mockDispatch).toBeCalledTimes(1);
  });

  it(`
    Scenario: Data from API first page is loaded
      Given data is "Loaded"
      When I am at "Home Screen"
      Then I should see "List of first page of characters names"
  `, async () => {
    const component = render(HomeScreen.Component, HomeScreen.Options);
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Mary')).toBeDefined();
    expect(component.getByText('Jane')).toBeDefined();
  });

  it(`
    Scenario: Data from API second page is loaded
      Given data is "Loaded More"
      When I am at "Home Screen"
      Then I should see "List of second page of characters names"
  `, async () => {
    const component = render(HomeScreen.Component, HomeScreen.Options);

    fireEvent(component.getByTestId('HomeScreen.FlatList'), 'onEndReached');

    expect(component.getByText('Paul')).toBeDefined();
    expect(component.getByText('Peter')).toBeDefined();
    expect(component.getByText('Micheal')).toBeDefined();
  });

  it(`
    Scenario: Item is pressed
      Given data is "Loaded"
      When I am at "Home Screen"
      And I press "First Item in List"
      Then I should see "CharacterDetailScreen"
  `, async () => {
    const component = render(HomeScreen.Component, HomeScreen.Options);

    fireEvent(component.getByText('John'), 'press');

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('CharacterDetailScreen', {id: '1'});
  });
});
