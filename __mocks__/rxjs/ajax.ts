import {CharacterService} from '@services';
import {of} from 'rxjs';

const ajax = {
  getJSON: (url: string) => {
    switch (url) {
      case CharacterService.getUrlWithPage(1):
        return of(MOCK_DATA.page1);

      case CharacterService.getUrlWithPage(2):
        return of(MOCK_DATA.page2);

      case CharacterService.getUrlWithId('1'):
        return of(MOCK_DATA.page1[0]);

      default:
        return of(undefined);
    }
  },
};

export {ajax};

const MOCK_DATA = {
  page1: [
    {
      url: 'https://www.anapioficeandfire.com/api/characters/11',
      name: 'John',
      gender: 'Male',
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/12',
      name: 'Mary',
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/13',
      name: 'Jane',
    },
  ],
  page2: [
    {
      url: 'https://www.anapioficeandfire.com/api/characters/21',
      name: 'Paul',
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/22',
      name: 'Peter',
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/23',
      name: 'Micheal',
    },
  ],
};
