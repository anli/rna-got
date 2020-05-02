import {CharacterService} from '@services';
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import characterSlice from './slice';

const loadEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(action => action.type === characterSlice.actions.load.type),
    switchMap(() => CharacterService.getAll$(1)),
    map(data => characterSlice.actions.loadSuccess(data)),
  );

const loadMoreEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(action => action.type === characterSlice.actions.loadMore.type),
    switchMap(action => CharacterService.getAll$(action.payload)),
    map(data => characterSlice.actions.loadMoreSuccess(data)),
  );

const loadDetailEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(action => action.type === characterSlice.actions.loadDetail.type),
    switchMap(action => CharacterService.getOne$(action.payload)),
    map(data => characterSlice.actions.loadDetailSuccess(data)),
  );

const characterEpics = [loadEpic, loadMoreEpic, loadDetailEpic];

export default characterEpics;
