import {createSlice} from '@reduxjs/toolkit';
import {CharacterState} from './type';

const getCharacterSlice = (initialState = {data: [], page: 1}) =>
  createSlice({
    name: 'Character',
    initialState,
    reducers: {
      load: (state: CharacterState) => {
        state.page = 1;
        state.isLoading = true;
      },
      loadSuccess: (state: CharacterState, action: any) => {
        state.data = action.payload;
        state.isLoading = false;
      },
      loadMore: (state: CharacterState, action: any) => {
        state.page = action.payload;
        state.isLoadingMore = true;
      },
      loadMoreSuccess: (state: CharacterState, action: any) => {
        state.data = [...state.data, ...action.payload];
        state.isLoadingMore = false;
      },
      loadDetail: (state: CharacterState, action: any) => {
        state.isLoadingDetail = true;
        state.detailId = action.payload;
      },
      loadDetailSuccess: (state: CharacterState, action: any) => {
        state.detail = action.payload;
        state.isLoadingDetail = false;
      },
      clearDetail: (state: CharacterState) => {
        state.detail = undefined;
        state.isLoadingDetail = false;
      },
    },
  });

export default getCharacterSlice;
