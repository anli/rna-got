import {createSelector} from '@reduxjs/toolkit';
import {Character, CharacterState} from './get-slice';

const charactersSelector = createSelector<
  {character: CharacterState},
  Character[],
  Character[]
>(
  state => (state.character.data ? state.character.data : []),
  characters => characters,
);

export default class {
  static characters = charactersSelector;
}
