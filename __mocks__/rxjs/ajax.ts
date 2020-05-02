import {CharacterService} from '@character';
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
      aliases: ['johnny', 'joe'],
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/12',
      name: 'Mary',
      aliases: ['may'],
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/13',
      name: 'Jane',
      aliases: ['joey'],
    },
  ],
  page2: [
    {
      url: 'https://www.anapioficeandfire.com/api/characters/21',
      name: 'Paul',
      aliases: [],
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/22',
      name: 'Peter',
      aliases: [],
    },
    {
      url: 'https://www.anapioficeandfire.com/api/characters/23',
      name: 'Micheal',
      aliases: [],
    },
  ],
};
