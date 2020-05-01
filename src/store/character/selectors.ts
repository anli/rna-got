import {CharacterState} from './get-slice';

type State = {character: CharacterState};

const dataSelector = (state: State) => state.character.data;

const pageSelector = (state: State) => state.character.page;

const isLoadingMoreSelector = (state: State) =>
  state.character.isLoadingMore || false;

const isLoadingSelector = (state: State) => state.character.isLoading || false;

export default class {
  static data = dataSelector;
  static page = pageSelector;
  static isLoadingMore = isLoadingMoreSelector;
  static isLoading = isLoadingSelector;
}
