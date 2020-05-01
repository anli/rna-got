import {CharacterDetailScreen} from '@screens';
import {render} from '@test';
import {cleanup} from 'react-native-testing-library';

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

  it('Given any, When I am at "CharacterDetail Screen", Then I should see "Character Information"', async () => {
    const component = render(
      CharacterDetailScreen.Component,
      CharacterDetailScreen.Options,
    );
    expect(component.getByText('John')).toBeDefined();
    expect(component.getByText('Male')).toBeDefined();
  });
});
