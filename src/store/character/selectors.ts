import {createSelector} from '@reduxjs/toolkit';
import {Character, CharacterState} from './get-slice';

const charactersSelector = createSelector<
  {character: CharacterState},
  Character[],
  Character[]
>(
  state => state.character.data,
  res => res,
);

const pageSelector = createSelector<
  {character: CharacterState},
  number,
  number
>(
  state => state.character.page,
  res => res,
);

const isLoadingMoreSelector = createSelector<
  {character: CharacterState},
  boolean,
  boolean
>(
  state => state.character.isLoadingMore || false,
  res => res,
);

const isLoadingSelector = createSelector<
  {character: CharacterState},
  boolean,
  boolean
>(
  state => state.character.isLoading || false,
  res => res,
);

export default class {
  static characters = charactersSelector;
  static page = pageSelector;
  static isLoadingMore = isLoadingMoreSelector;
  static isLoading = isLoadingSelector;
}
