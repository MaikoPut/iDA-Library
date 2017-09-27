import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
    name: "availablefilter",
    pure: false
})

export class AvailableFilter implements PipeTransform{
    transform(books: Book[], filter: boolean): Book[] {
        if(!books || filter==null){
            return books;
        }
        if(filter == true){
            return books.filter(book => book.loanedOut == false);
        }
        if(filter == false){
            return books.filter(book => book.loanedOut == true);
        }       
    }
}