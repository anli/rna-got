import {CharacterState} from './type';

type State = {character: CharacterState};

const dataSelector = (state: State) => state.character.data;

const pageSelector = (state: State) => state.character.page;

const isLoadingMoreSelector = (state: State) =>
  state.character.isLoadingMore || false;

const isLoadingSelector = (state: State) => state.character.isLoading || false;

const detailSelector = (state: State) => state.character.detail;

const isLoadingDetailSelector = (state: State) =>
  state.character.isLoadingDetail || false;

export default class {
  static data = dataSelector;
  static page = pageSelector;
  static isLoadingMore = isLoadingMoreSelector;
  static isLoading = isLoadingSelector;
  static detail = detailSelector;
  static isLoadingDetail = isLoadingDetailSelector;
}
