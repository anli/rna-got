import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {filter, map, switchMap} from 'rxjs/operators';
import characterSlice from './slice';

const URL = 'https://www.anapioficeandfire.com/api/characters';
const SIZE = 20;

interface ApiData {
  name: string;
  url: string;
}

const getData$ = (page: number) =>
  ajax
    .getJSON<ApiData[]>(`${URL}?pageSize=${SIZE}&page=${page}`)
    .pipe(map(response => response));

const loadEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(action => action.type === characterSlice.actions.load.type),
    switchMap(() => getData$(1)),
    map(data => mapData(data, 1)),
    map(data => characterSlice.actions.loadSuccess(data)),
  );

const loadMoreEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(action => action.type === characterSlice.actions.loadMore.type),
    switchMap(action =>
      getData$(action.payload).pipe(map(data => mapData(data, action.payload))),
    ),
    map(data => characterSlice.actions.loadMoreSuccess(data)),
  );

const characterEpics = [loadEpic, loadMoreEpic];

const IMAGE_URL = 'https://picsum.photos/';
const getImageUrl = (id: string, size: number) =>
  `${IMAGE_URL}id/${id}/${size}`;

const getId = (index: number, page: number): string =>
  String((page - 1) * SIZE + index + 1);

const mapData = (data: ApiData[], page: number) => {
  return data.map(({name}, index) => {
    const id = getId(index, page);
    const imageUrl = getImageUrl(id, 48);
    return {name, imageUrl, id};
  });
};

export default characterEpics;
