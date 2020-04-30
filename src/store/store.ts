import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {characterEpics, characterSlice} from './character';

const epicMiddleware = createEpicMiddleware();
const epics: any[] = [...characterEpics];

const rootEpic = (action$: any) => combineEpics(...epics)(action$).pipe();

const getStore = () => {
  const store = configureStore({
    reducer: {character: characterSlice.reducer},
    middleware: [...getDefaultMiddleware(), epicMiddleware],
  });

  epicMiddleware.run(rootEpic);
  return store;
};

const store = getStore();

export default store;
