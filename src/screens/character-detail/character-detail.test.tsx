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
  afterAll(() => {
    cleanup();
  });

  it('Given any, When I am at "CharacterDetail Screen", And data is "Loading", Then I should see "Placeholder Detail"', async () => {
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

    spy.mockRestore();
  });

  it('Given any, When I am at "CharacterDetail Screen", Then I should see "Character Information"', async () => {
    const component = render(
      CharacterDetailScreen.Component,
      CharacterDetailScreen.Options,
    );
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Male')).toBeDefined();
  });
});
