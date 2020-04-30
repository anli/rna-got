import {of} from 'rxjs';

const ajax = {
  getJSON: () => {
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
  },
};

export {ajax};
