import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
    name: 'bookfilter',
    pure: false
})

export class BookFilter implements PipeTransform {
    transform(books: Book[], filter: string): Book[] {
        if (!books || !filter || filter === 'all') {
            return books;
        }
        return books.filter(book => book.tag === filter);
    }
}
