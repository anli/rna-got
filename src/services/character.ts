import queryString from 'query-string';
import {API_CHARACTER_URL, API_IMAGE_URL} from 'react-native-dotenv';
import {ajax} from 'rxjs/ajax';
import {map} from 'rxjs/operators';

const SIZE = 20;

const getUrl = (page: number) =>
  queryString.stringifyUrl({
    url: API_CHARACTER_URL,
    query: {pageSize: String(SIZE), page: String(page)},
  });

const getImageUrl = (id: string, size: number) =>
  `${API_IMAGE_URL}id/${id}/${size}`;

const getId = (index: number, page: number): string =>
  String((page - 1) * SIZE + index + 1);

interface ApiData {
  name: string;
  url: string;
}

const mapData = (data: ApiData[], page: number) => {
  return data.map(({name}, index) => {
    const id = getId(index, page);
    const imageUrl = getImageUrl(id, 48);
    return {name, imageUrl, id};
  });
};

const getAll$ = (page: number) =>
  ajax.getJSON<ApiData[]>(getUrl(page)).pipe(map(data => mapData(data, page)));

export default class CharacterProvider {
  static getUrl = getUrl;
  static getAll$ = getAll$;
}
