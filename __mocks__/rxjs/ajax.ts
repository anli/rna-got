import {CharacterService} from '@services';
import {of} from 'rxjs';

const ajax = {
  getJSON: (url: string) => {
    switch (url) {
      case CharacterService.getUrl(1):
        return of(MOCK_DATA.page1);

      case CharacterService.getUrl(2):
        return of(MOCK_DATA.page2);

      default:
        return of([]);
    }
  },
};

export {ajax};

const MOCK_DATA = {
  page1: [
    {
      url: 'https://www.anapioficeandfire.com/api/characters/11',
      name: 'John',
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
