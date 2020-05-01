import {of} from 'rxjs';

const ajax = {
  getJSON: (url: string) => {
    if (
      url ===
      'https://www.anapioficeandfire.com/api/characters?pageSize=20&page=1'
    ) {
      return of([
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
      ]);
    }

    if (
      url ===
      'https://www.anapioficeandfire.com/api/characters?pageSize=20&page=2'
    ) {
      return of([
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
      ]);
    }

    return {};
  },
};

export {ajax};
