import queryString from 'query-string';
import {API_CHARACTER_URL, API_IMAGE_URL} from 'react-native-dotenv';
import {ajax} from 'rxjs/ajax';
import {map} from 'rxjs/operators';

const THUMBNAIL_SIZE = 20;
const DETAIL_SIZE = 480;

const getUrlWithPage = (page: number) =>
  queryString.stringifyUrl({
    url: API_CHARACTER_URL,
    query: {pageSize: String(THUMBNAIL_SIZE), page: String(page)},
  });

const getImageUrl = (id: string, size: number) =>
  `${API_IMAGE_URL}id/${id}/${size}`;

const getIdWithPage = (index: number, page: number): string =>
  String((page - 1) * THUMBNAIL_SIZE + index + 1);

interface ApiData {
  name: string;
  url: string;
  gender: 'Male' | 'Female';
}

const getAll$ = (page: number) =>
  ajax.getJSON<ApiData[]>(getUrlWithPage(page)).pipe(
    map(data =>
      data.map(({name}, index) => {
        const id = getIdWithPage(index, page);
        const imageUrl = getImageUrl(id, 48);
        return {name, imageUrl, id};
      }),
    ),
  );

const getUrlWithId = (id: string) => `${API_CHARACTER_URL}/${id}`;

const getOne$ = (id: string) =>
  ajax.getJSON<ApiData>(getUrlWithId(id)).pipe(
    map(data => ({
      id,
      name: data.name,
      imageUrl: getImageUrl(id, DETAIL_SIZE),
      gender: data.gender,
    })),
  );

export default class CharacterProvider {
  static getUrlWithPage = getUrlWithPage;
  static getAll$ = getAll$;
  static getUrlWithId = getUrlWithId;
  static getOne$ = getOne$;
}
