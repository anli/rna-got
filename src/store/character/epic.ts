import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {filter, map, switchMap} from 'rxjs/operators';
import characterSlice from './slice';

const URL = 'https://www.anapioficeandfire.com/api/characters?pageSize=20';

const getData$ = (page: number) =>
  ajax.getJSON(`${URL}&page=${page}`).pipe(map(response => response));

const loadEpic = (action$: Observable<any>) =>
  action$.pipe(
    filter(action => action.type === characterSlice.actions.load().type),
    switchMap(() => getData$(1)),
    map(data => mapData(data)),
    map(data => characterSlice.actions.loadSuccess(data)),
  );

const characterEpics = [loadEpic];

const getId = (url: string) => url.substring(url.lastIndexOf('/') + 1);

const IMAGE_URL = 'https://picsum.photos/';
const getImageUrl = (id: string, size: number) =>
  `${IMAGE_URL}id/${id}/${size}`;

const mapData = (data: {name: string; url: string}[]) => {
  return data.map(({name, url}) => {
    const id = getId(url);
    const imageUrl = getImageUrl(id, 48);
    return {name, id, imageUrl};
  });
};

export default characterEpics;
