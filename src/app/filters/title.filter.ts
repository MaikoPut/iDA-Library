import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'titlefilter',
  pure: false
})

export class TitleFilter implements PipeTransform {
  transform(books: Book[], filter: string): Book[] {
    if (!books || !filter || filter === '') {
      return books;
    }
    return books.filter(book => book.title.toLocaleUpperCase().includes(filter.toUpperCase()));
  }
}
