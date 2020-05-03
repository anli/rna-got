import {CharacterDetailScreen} from '@screens';
import {render} from '@test';
import {cleanup} from 'react-native-testing-library';
import * as redux from 'react-redux';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(() => ({params: {id: 1}})),
  };
});

describe('CharacterDetail Screen', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {
    cleanup();
  });

  it(`
    Scenario: Data from API has yet to be loaded
      Given data is "Loading"
      When I am at "CharacterDetail Screen"
      Then I should see "Placeholder Detail"
  `, async () => {
    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue({
      character: {
        detail: undefined,
        isLoadingDetail: true,
      },
    });

    const component = render(
      CharacterDetailScreen.Component,
      CharacterDetailScreen.Options,
    );

    expect(
      component.getByTestId('CharacterDetailScreen.PlaceholderDetail'),
    ).toBeDefined();
  });

  it(`
    Scenario: Data from API is loaded
      Given data is "Loaded"
      When I am at "CharacterDetail Screen"
      Then I should see "Name Data"
      And I should see "Gender Data"
      And I should see "Aliases Data"
  `, async () => {
    const component = render(
      CharacterDetailScreen.Component,
      CharacterDetailScreen.Options,
    );
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Male')).toBeDefined();
    expect(component.getByText('johnny, joe')).toBeDefined();
  });
});
