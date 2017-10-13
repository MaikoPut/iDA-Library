import { Pipe } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'sortalphabetically'
})

export class AlphabeticalFilter {
  transform(array: Book[]): Book[] {
    array.sort((a: Book, b: Book) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
