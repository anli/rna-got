import {createSlice} from '@reduxjs/toolkit';

export interface Character {
  name: string;
}

export interface CharacterState {
  data?: Character[];
}

const getCharacterSlice = (initialState = {}) =>
  createSlice({
    name: 'Character',
    initialState,
    reducers: {
      load: (state: CharacterState) => ({...state}),
      loadSuccess: (state: CharacterState, action: any) => ({
        ...state,
        data: action.payload,
      }),
    },
  });

export default getCharacterSlice;
